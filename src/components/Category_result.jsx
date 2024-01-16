import axios from "axios";
import React, { useEffect, useState } from "react";
import Features from "./Features";
import Function_category from "./Function_category";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { NavLink, useParams } from "react-router-dom";
import Style from './Category_result.module.css';
import { useFascrc } from "../contexts/Fascrc";

const Category_result = ({
  category,
  categorysearch,
  setcategorysearch,
  multicategory,
  setmulticategory,
  setcustom,
}) => {
  const [fascr,setfascr]=useState(false);
  const {i}=useParams();
  const {result, setresult,setresultCopy,AppliedFilters,defsort,setAppliedFilters,setrescopy}=useFascrc();

  // console.log(AppliedFilters);
  useEffect(()=>{
    const category_data = async () => {
    const raw = await axios.get(`https://dummyjson.com/products/category/${i}`);
    console.log(defsort);
    console.log(AppliedFilters)
      if(!defsort){
        setAppliedFilters({});
          console.log("updated");
           setresult(raw.data.products);
     setresultCopy(raw.data.products);
     setrescopy(raw.data.products);
        }
        else{
          console.log(AppliedFilters);
        }
  };
  category_data();
  },[i])

  // if (multicategory) {
  //   category_data();
  //   setmulticategory(false);
  // }

  return (
    <div>
      {fascr ? <Function_category i={i} fascr={fascr} setfascr={setfascr} /> : null}
      <Features i={i} result={result} />

      <div className="flex justify-center">
        <div className="w-[1200px]">
          <div className=" h-[50px] flex justify-end w-[1220px] ml-[130px] mb-2  ">
        <div
          onClick={() => {
            setfascr(true);
          }}
          className="h-[45px] w-[157px] border flex items-center cursor-pointer mr-[161px] "
        >
          <h1 className="font-medium ml-3 mr-3">Filter & sort</h1>
          <HiOutlineAdjustmentsHorizontal className="text-[25px]" />
        </div>
      </div>

          <div className="mt-3 flex gap-10  flex-wrap justify-center">
            {result
              ? result.map((j) => (
                  <NavLink to={`/category/${i}/${j.id}`} >
                    <div key={j.id}>
                    <div className=" border-2 w-[365px] h-[375px]  ">
                      <img className={Style.catimg} src={j.thumbnail}  alt="gg" />
                    </div>
                    <div className="bg-[#d3d7da] flex justify-between p-1">
                      <h2>{j.title}</h2>
                      <h2>
                        {" "}
                        ₹ <b>{j.price*84}</b>
                      </h2>
                    </div>
                  </div>
                  </NavLink>
                ))
              : null}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Category_result;
