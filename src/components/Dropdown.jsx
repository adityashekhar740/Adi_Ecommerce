import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useFascrc } from "../contexts/Fascrc";

const Dropdown = ({
  x,
  setcategorysearch,
  setcategory,
  setmulticategory,
  setcustom,
}) => {
  const [isclicked, setisclicked] = useState(false);
  const {setdefsort}=useFascrc();
  return (
    <div
      onClick={() => {
        setisclicked(true);
        
      }}
      className="  text-[black] border  rounded w-[200px] min-h-[100px] mt-5 left-[-100%] absolute bg-white flex flex-col justify-evenly "
    >
      {x.map((i, key) => (
        <NavLink to={`category/${i}`}>
          <h1
            onClick={() => {
              setdefsort(false);
              // setcategorysearch(true);
              // setmulticategory(true);
              // setcategory(i);
              setcustom(false);

            }}
            className="p-3"
            key={key}
          >
            {i}
          </h1>
        </NavLink>
      ))}
    </div>
  );
};

export default Dropdown;
