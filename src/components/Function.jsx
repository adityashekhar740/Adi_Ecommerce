import React from "react";
import Styles from "./Function.module.css"
import { useFaspc } from "../contexts/Faspc";

const Function = ({ setfas,setfasp,setfascr,fascr,fas,fasp }) => {
  const { AppliedFilters, setAppliedFilters,addPname,addSort } = useFaspc();

  return (
    <div className={Styles.modal}>
      <div
        onClick={() => {
          fas?setfas(false):null;
          fasp?setfasp(false):null;
          fascr?setfascr(false):null;
          
        }}
        className={Styles.overlay}
      ></div>
      <div className={Styles.modal_content}>
        <div className=" flex justify-between items-center border ">
          <div className="ml-6"><h1 className="font-bold">Filter & Sort</h1></div>
          <div onClick={()=>{
          fas?setfas(false):null;
          fasp?setfasp(false):null;
          fascr?setfascr(false):null;
          }} className=" cursor-pointer mt-[2] pl-3 text-[37px] w-[50px]">&times;</div>
        </div>
        <div>
          Applied : 
          {AppliedFilters && AppliedFilters.pname }
        </div>
        <div>{AppliedFilters && AppliedFilters.sort }</div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Function;
