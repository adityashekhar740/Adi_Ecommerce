import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { SlBag } from "react-icons/sl";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import Dropdown from "./Dropdown";
import { Link,NavLink } from "react-router-dom";
import { useFaspc } from "../contexts/Faspc";
import Styles from './Nav.module.css';
import { IoMdMenu } from "react-icons/io";


const Nav = ({
  setsearch,
  setcustom,
  setget,
  setcategorysearch,
  setcategory,
  setmulticategory,
  search,
}) => {
  const { defsort,setdefsort} = useFaspc();
  const [drop, setdrop] = useState(false);
  const [drop1, setdrop1] = useState(false);
  const [drop2, setdrop2] = useState(false);
  const [drop3, setdrop3] = useState(false);
  const [drop4, setdrop4] = useState(false);
  const [drop5, setdrop5] = useState(false);
  const [loadmenu,setloadmenu]=useState(false);
  const men = ["mens-shirt", "mens-shoes", "mens-watches"];
  const women = [
    "womens-dresses",
    "womens-shoes",
    "womens-jewellery",
    "womens-watches",
    "womens-bags",
  ];
  const fashion = ["fragrances", "sunglasses", "skincare", "tops"];
  const decor = ["home-decoration", "furniture", "lighting"];
  const gadgets = ["laptops", "smartphones", "mens-watches", "womens-watches"];
  const exclusive = ["skincare", "groceries", "motorcycle", "automotive"];
  return (
  
    <div className= {Styles.container}>
      {
        loadmenu?<div className={Styles.mobilemenu}>
          <div onClick={()=>{setloadmenu(false)}} className="ml-[90%] text-[40px] " >&times;</div>
          <ul>

          </ul>
        </div>:null
      }
      <div className="bg-black h-[30px]"></div>
      <div onClick={()=>{
        setloadmenu(true)
      }} className={Styles.hamburger} ><IoMdMenu />
</div>
      <div className={Styles.logo}>
        <img
          height={80}
          width={70}
          src="https://cdn-icons-png.flaticon.com/512/731/731962.png"
        />
        
        <div className="flex w-[1045px] mb-3 justify-between">
          <div className={Styles.menu}>
            <div
              className="cursor-pointer relative"
              onClick={() => {
                setdrop((prev) => !prev);
                drop1 && setdrop1((prev) => !prev);
              }}
            >
              <h1 className="font-semibold">MEN</h1>
              {drop && (
                <Dropdown
                  x={men}
                  setcategorysearch={setcategorysearch}
                  setcategory={setcategory}
                  setmulticategory={setmulticategory}
                  setcustom={setcustom}
                />
              )}
            </div>
            <div
              className="cursor-pointer relative"
              onClick={() => {
                setdrop1((prev) => !prev);
                drop && setdrop((prev) => !prev);
                drop4 && setdrop4((prev) => !prev);
                drop5 && setdrop5((prev) => !prev);
                drop3 && setdrop3((prev) => !prev);
                drop2 && setdrop2((prev) => !prev);
              }}
            >
              <h1 className="font-semibold">WOMEN</h1>
              {drop1 && (
                <Dropdown
                  x={women}
                  setcategorysearch={setcategorysearch}
                  setcategory={setcategory}
                  setmulticategory={setmulticategory}
                  setcustom={setcustom}
                />
              )}
            </div>
            <div
              onClick={() => {
                setdrop2((prev) => !prev);
                drop && setdrop((prev) => !prev);
                drop1 && setdrop1((prev) => !prev);
                drop4 && setdrop4((prev) => !prev);
                drop5 && setdrop5((prev) => !prev);
                drop3 && setdrop3((prev) => !prev);
              }}
              className="cursor-pointer relative"
            >
              FASHION
              {drop2 && (
                <Dropdown
                  x={fashion}
                  setcategorysearch={setcategorysearch}
                  setcategory={setcategory}
                  setmulticategory={setmulticategory}
                  setcustom={setcustom}
                />
              )}
            </div>
            <div
              onClick={() => {
                setdrop3((prev) => !prev);
                drop && setdrop((prev) => !prev);
                drop1 && setdrop1((prev) => !prev);
                drop2 && setdrop2((prev) => !prev);
                drop4 && setdrop4((prev) => !prev);
                drop5 && setdrop5((prev) => !prev);
              }}
              className="cursor-pointer relative"
            >
              DECOR
              {drop3 && (
                <Dropdown
                  x={decor}
                  setcategorysearch={setcategorysearch}
                  setcategory={setcategory}
                  setmulticategory={setmulticategory}
                  setcustom={setcustom}
                />
              )}
            </div>

            <div
              onClick={() => {
                setdrop4((prev) => !prev);
                drop && setdrop((prev) => !prev);
                drop1 && setdrop1((prev) => !prev);
                drop2 && setdrop2((prev) => !prev);
                drop3 && setdrop3((prev) => !prev);
                drop5 && setdrop5((prev) => !prev);
              }}
              className="cursor-pointer relative "
            >
              GADGETS
              {drop4 && (
                <Dropdown
                  x={gadgets}
                  setcategorysearch={setcategorysearch}
                  setcategory={setcategory}
                  setmulticategory={setmulticategory}
                  setcustom={setcustom}
                />
              )}
            </div>

            <div
              onClick={() => {
                setdrop5((prev) => !prev);
                drop && setdrop((prev) => !prev);
                drop1 && setdrop1((prev) => !prev);
                drop2 && setdrop2((prev) => !prev);
                drop3 && setdrop3((prev) => !prev);
                drop4 && setdrop4((prev) => !prev);
              }}
              className="cursor-pointer relative text-[red]"
            >
              <h1 className="font-semibold">EXCLUSIVE</h1>
              {drop5 && (
                <Dropdown
                  x={exclusive}
                  setcategorysearch={setcategorysearch}
                  setcategory={setcategory}
                  setmulticategory={setmulticategory}
                  setcustom={setcustom}
                />
              )}
            </div>
          </div>
          <div className={Styles.navbtncon}>
            <div className={Styles.search}>
              <PiMagnifyingGlassLight className="absolute left-[62%] top-[7px] text-[20px] " />
              <input
                onChange={(e) => {
                  setsearch(e.target.value);
                  // setcustom(true);
                  // setget(true);
                }}
                placeholder="  search"
                className="  p-1 text-black w-[190px] bg-[#d3d7da] "
                type="text"
              />
              <Link to={`/search/${search}`}>
                <button
                  onClick={() => {
                    setdefsort(false);
                  }}
                  className="ml-3 bg-black text-white px-3 py-1 pb-[5px] rounded-sm"
                >
                  search
                </button>
              </Link>
            </div>

            <div className={Styles.navbtn} >
              <CiUser className="text-[30px]" />
            <CiHeart className="text-[30px]" />
            <NavLink to={'/cart'} >
              <SlBag className="text-[24px] mt-[1px] cursor-pointer " />
            </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
