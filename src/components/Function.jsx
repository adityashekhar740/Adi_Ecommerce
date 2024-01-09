import React, { useEffect, useState } from "react";
import Styles from "./Function.module.css";
import { useFaspc } from "../contexts/Faspc";
import { NavLink } from "react-router-dom";


const Function = ({ setfas, setfasp, setfascr, fascr, fas, fasp }) => {
  // const navigate=useNavigate();
  // const goback=()=>{
  //   navigate(-1);
  //   navigate.preventdefault();
    
  // }
  const {
    AppliedFilters,
    setAppliedFilters,
    addPname,
    addSort,
    updateSearch,
    setresult,
    result,
    handlesort,
    
  } = useFaspc();



  return (
    <div className={Styles.modal}>
      <div
        onClick={() => {
          fas ? setfas(false) : null;
          fasp ? setfasp(false) : null;
          fascr ? setfascr(false) : null;
        }}
        className={Styles.overlay}
      ></div>
      <div className={Styles.modal_content}>
        <div className=" flex justify-between items-center border ">
          <div className="ml-6">
            <h1 className="font-bold">Filter & Sort</h1>
          </div>
       
            <div
            onClick={() => {
              fas ? setfas(false) : null;
              fasp?setfasp(false):null;
              fascr ? setfascr(false) : null;
            }}
            className=" cursor-pointer mt-[2] pl-3 text-[37px] w-[50px]"
          >
            &times;
          </div>
   
        </div>
        <div>
          Applied :{AppliedFilters && AppliedFilters.pname}
          {AppliedFilters.sort && AppliedFilters.sort}
        </div>
        <div className="flex flex-col ">
          <h1>SORT BY</h1>
          <div className="border p-3 " >
            <button
              onClick={() => {
                handlesort("LOW-HIGH");
              }}
            >
              PRICE:[LOW-HIGH]
            </button>
          </div>
          <div className="border p-3 " >
            <button
              onClick={() => {
                handlesort("HIGH-LOW");
              }}
            >
              PRICE:[HIGH-LOW]
            </button>
          </div>
          <div className="border p-3 " >
            <button
              onClick={() => {
                handlesort("RATING");
              }}
            >
              RATING
            </button>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Function;
