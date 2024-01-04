import React, { useEffect, useState } from "react";
import axios from "axios";
import Features from "./Features";
import Function from "./Function";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { Link, NavLink } from 'react-router-dom';
import Styles from './Mainproduct.module.css'

const Mainproduct = () => {
  const [all, setall] = useState(null);
  const [fas, setfas] = useState(false);
  useEffect(() => {
    const allproducts = async () => {
      const raw = await axios.get("https://dummyjson.com/products");
      await console.log(raw.data.products);
      setall(raw.data.products);
      console.log(all);
    };
    allproducts();
  }, []);
  return (
    <div className="">
      {fas ? <Function setfas={setfas} fas={fas} /> : null}
      <Features mpdt={all} />
      <div className=" h-[50px] flex justify-end w-[1225px] ml-[130px] mb-2  ">
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
      <div className=" flex  flex-wrap justify-center w-[1240px] m-auto ">
        {all
          ? all.map((i) => (
              <NavLink to={`/products/product/${i.id}`} >
                <div className="mx-4" key={i.id}>
                <div className=" border-2 h-[365px] relative w-[375px] ">
                  <img className={Styles.imgg} src={i.thumbnail} width={365}  alt="gg" />
                </div>
                <div className="bg-[#d3d7da] flex justify-between p-1">
                  <h2>{i.title}</h2>
                  <h2>
                    {" "}
                    $ <b>{i.price}</b>
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
