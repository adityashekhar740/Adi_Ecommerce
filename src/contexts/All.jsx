import { createContext, useContext, useState } from "react";

const All = createContext();

function AllProvider({children}){
    const [datacart, setdatacart] = useState([]);
    const [qtys,setqtys]=useState([]);
    
    function addcart(item,qty){
        const is_already_in_cart=datacart.find((ele)=>ele===item)
        if(is_already_in_cart){
            // alert("item already in cart");
            let ind=datacart.indexOf(is_already_in_cart);
           for(let k=0;k<qtys.length;k++){
            if(ind==k){
                qtys[k]+=1;
           }
        }
            console.log(qtys);
            console.log(datacart);
            return;
        }
        else{
        datacart.push(item);
        qtys.push(qty);
        }
    }
    function changeqty(qty,index){
        qtys[index]=qty;
    }
    

    function removeitem(i,index){
        let ind=datacart.indexOf(i);
       
    const newdatacart=[...datacart.slice(0,ind),...datacart.slice(ind+1)];
    const newqtys=[...qtys.slice(0,ind),...qtys.slice(ind+1)];
    setdatacart(newdatacart);
    setqtys(newqtys);
    }
    

    return(
        <All.Provider value={{datacart,setdatacart,addcart,qtys,changeqty,removeitem}}>
            {children}
        </All.Provider>
    )
}

function useAll(){
    const context=useContext(All);
    if(!context) throw new Error("Use All in the correct provider");
    return context;
}

export {useAll,AllProvider}