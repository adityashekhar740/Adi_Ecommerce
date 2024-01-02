import React from "react";
import Styles from "./Function.module.css"

const Function = ({ setfas,setfasp,setfasc }) => {
  return (
    <div className={Styles.modal}>
      <div
        onClick={() => {
          setfas(false);
          setfasp(false);
          setfasc(false);
        }}
        className={Styles.overlay}
      ></div>
      <div className={Styles.modal_content}>
        <div className=" flex justify-between items-center border ">
          <div className="ml-6"><h1 className="font-bold">Filter & Sort</h1></div>
          <div onClick={()=>{
            setfas(false);
          }} className=" cursor-pointer mt-[2] pl-3 text-[37px] w-[50px]">&times;</div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Function;
