import React, { useEffect, useState } from "react";
import axios from "axios";
import Features from "./Features";
import Function_main from "./Function_main";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { Link, NavLink } from 'react-router-dom';
import Styles from './Mainproduct.module.css'
import { useFasc } from "../contexts/Fasc";

const Mainproduct = () => {
  const {result,setresult,setresultCopy,defsort,setdefsort,setrescopy}=useFasc();
  
  const [fas, setfas] = useState(false);
  useEffect(() => {
    const allproducts = async () => {
      const raw = await axios.get("https://dummyjson.com/products");
     if(!defsort){
       setresult(raw.data.products);      
    setresultCopy(raw.data.products);
    setdefsort(true);
    setrescopy(raw.data.products);
     }

    };
    allproducts();
  },[]);



  return (
    <div className="">
      {fas ? <Function_main setfas={setfas} fas={fas} /> : null}
      <Features mpdt={result} />
      <div className=" h-[50px] flex justify-end max-w-[1225px] mx-auto mb-2  ">
        <div
          onClick={() => {
            setfas(true);
          }}
          className="h-[45px] w-[157px] border flex items-center cursor-pointer  "
        >
          <h1 className="font-medium ml-3 mr-3">Filter & sort</h1>
          <HiOutlineAdjustmentsHorizontal className="text-[25px]" />
        </div>
      </div>
      <div className=" flex gap-y-8 gap-4 flex-wrap  justify-center w-[90%] m-auto ">
        {result
          ? result.map((i) => (
              <NavLink to={`/products/product/${i.id}`} >
                <div className={Styles.card} key={i.id}>
                <div className=" border-2 h-[365px] relative w-[375px]  ">
                  <img className={Styles.imgg} src={i.thumbnail} width={365}  alt="gg" />
                </div>
                <div className="bg-[#d3d7da] flex justify-between p-1">
                  <h2>{i.title}</h2>
                  <h2>
                    {" "}
                    ₹ <b>{i.price*84}</b>
                  </h2>
                </div>
              </div>
              </NavLink>
            ))
          : null}
      </div>
    </div>
  );
};

export default Mainproduct;
