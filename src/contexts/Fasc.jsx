import { createContext, useContext, useState } from "react";


const Fasc=createContext();

function FascProvider({children}){

    const [result,setresult]=useState([]);
    const [resultCopy,setresultCopy]=useState([]);
    const [defsort,setdefsort]=useState(false);
    const [minmax,setminmax]=useState([]);
        const [rescopy,setrescopy]=useState(null);
const [AppliedFilters, setAppliedFilters] = useState({
    pname:"",
    sort:"",
    discount:'', 
    price:'',
})

const handlesort=(type)=>{
            addSort(type);
            updateSearch(type);
          }

const addPname=(filter)=>{
    AppliedFilters.pname=filter;
}
const addSort=(filter)=>{
    AppliedFilters.sort=filter;
    setdefsort(filter);
    console.log(defsort);
                // console.log(AppliedFilters);

}



const addDis=(discount)=>{
    setAppliedFilters((prevFilters)=>({
        ...prevFilters,
        discount:discount,
    }))
    
}

const updateDisSearch=(discount)=>{
const newResult=[...resultCopy];
console.log(minmax);
const per=parseFloat(discount);
var temp=newResult.filter((i)=>{
    return i.discountPercentage < per;
})

if(AppliedFilters.price){
    const low=parseInt(minmax[0]);
    const high=parseInt(minmax[1]);
    const temp2=temp.filter((i)=>( i.price*84>=low && i.price*84<=high ));
    temp=[...temp2];
}

if(AppliedFilters.sort){
     if(AppliedFilters.sort==="LOW-HIGH"){
     temp.sort((a,b)=>{
        return a.price-b.price;
    })
}
    else if(AppliedFilters.sort==="HIGH-LOW"){
        temp.sort((a,b)=> b.price - a.price)
    }
    else if(AppliedFilters.sort==="RATING") {
        temp.sort((a,b)=>{
            return parseFloat(b.rating)-parseFloat(a.rating);
        })
    }
}
console.log(temp);
setresult(temp);
}

function addPrice(value){
    
        AppliedFilters.price=`Price: ₹ ${value[0]} - ₹ ${value[1]} `
}



const updatePriceSearch=(value)=>{
    const temp=[...result];
    const low=parseInt(value[0]);
    const high=parseInt(value[1]);
    const temp2=temp.filter((i)=>( i.price*84>=low && i.price*84<=high ));
    setTimeout(() => {
        setresult(temp2);
        addPrice(value);
    }, 2000);
}

const updateSearch=(type)=>{
    
    const temp=[...result];
   if(type==="LOW-HIGH"){
    console.log("hey");
     temp.sort((a,b)=>{
        return a.price-b.price;
    })
}
    else if(type==="HIGH-LOW"){
        temp.sort((a,b)=> b.price - a.price)
    }
    else if(type==="RATING") {
        temp.sort((a,b)=>{
            return parseFloat(b.rating)-parseFloat(a.rating);
        })
    }
    setresult(temp);
   
    
}
return(
   
    <Fasc.Provider value={{ AppliedFilters, setAppliedFilters,addPname,addSort,result,setresult,updateSearch,handlesort,defsort,setdefsort,addDis,updateDisSearch,setresultCopy,minmax,setminmax,updatePriceSearch,setrescopy,rescopy }}>
      {children}
    </Fasc.Provider>
)


}

function useFasc(){
    const context=useContext(Fasc);
    // if(!context){
    //     throw new Error("Use the providerrrrrr")
    //     }
    //     else{
    //         return context;
    //     }
    return context;
    }

    export  {useFasc,FascProvider }