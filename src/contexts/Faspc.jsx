import { createContext, useContext, useState } from "react";


const Faspc=createContext();

function FaspcProvider({children}){

    const [result,setresult]=useState([]);
    const [defsort,setdefsort]=useState(null);
const [AppliedFilters, setAppliedFilters] = useState({
    pname:"",
    sort:"",
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
   
    <Faspc.Provider value={{ AppliedFilters, setAppliedFilters,addPname,addSort,result,setresult,updateSearch,handlesort,defsort,setdefsort }}>
      {children}
    </Faspc.Provider>
)


}

function useFaspc(){
    const context=useContext(Faspc);
    // if(!context){
    //     throw new Error("Use the providerrrrrr")
    //     }
    //     else{
    //         return context;
    //     }
    return context;
    }

    export  {useFaspc,FaspcProvider }