import { createContext, useContext, useState } from "react";


const Faspc=createContext();

function FaspcProvider({children}){
const [AppliedFilters, setAppliedFilters] = useState({})

const addPname=(filter)=>{
    AppliedFilters.pname=filter;
}
const addSort=(filter)=>{
    AppliedFilters.sort=filter;
}
return(
   
    <Faspc.Provider value={{ AppliedFilters, setAppliedFilters,addPname,addSort }}>
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