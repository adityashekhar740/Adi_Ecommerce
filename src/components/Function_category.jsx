import React, { memo, useEffect, useState } from "react";
import Styles from "./Function.module.css";
import ReactSlider from "react-slider";
import { useFascrc } from "../contexts/Fascrc";
const Function = memo(({ i , setfas, setfasp, setfascr, fascr, fas, fasp }) => {
  // const navigate=useNavigate();
  // const goback=()=>{
  //   navigate(-1);
  //   // navigate.preventdefault();

  // }
  useEffect(()=>{

  },[i])

  const [ispressed, setispressed] = useState(false);

  const {
    AppliedFilters,
    setAppliedFilters,
    addPname,
    addSort,
    updateSearch,
    setresult,
    result,
    handlesort,
    addDis,
    updateDisSearch,
    minmax,
    setminmax,
    updatePriceSearch,
    rescopy
  } = useFascrc();

  const handlecheck = (e) => {
    addDis(e.target.value);
    updateDisSearch(e.target.value);
  };


  useEffect(() => {
    const temp = [...result];
    if (temp.length > 0) {
      temp.sort((a, b) => a.price - b.price);
      const temp2 = [];

      temp2.push(temp[0].price);
      temp2.push(temp[temp.length - 1].price);

      setminmax(temp2);
    }
  }, [result]);



  function handleprice(value) {
    updatePriceSearch(value);
  }

  const handleclear=()=>{
    setAppliedFilters({});
    setresult(rescopy);
  }

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
        <div className=" flex justify-between items-center border gap-[30px] ">
          <div className="ml-5">
            <h1 className="font-bold">Filter & Sort</h1>
          </div>

          <div className="flex gap-2 "  >
             <div onClick={()=>{
              handleclear();
            }} className="color-[black] underline pt-4 cursor-pointer " >
              Clear All
            </div>
            <div
            onClick={() => {
              fas ? setfas(false) : null;
              fasp ? setfasp(false) : null;
              // goback();
              fascr ? setfascr(false) : null;
            }}
            className=" cursor-pointer mt-[2] pl-3 text-[37px] w-[50px]"
          >
            &times;
          </div>
          </div>
        </div>
        <div className="h-[140px] max-w-[400px]  ">
          <h1 className="font-bold pl-5  ">Applied Filters</h1>
          <div className="flex  gap-3 p-5 flex-wrap ">
            
            <div className="bg-[#d3d7da] w-[36%] h-[34px] py-1 px-4 text-center ">
              {AppliedFilters.sort && AppliedFilters.sort}
            </div>
            <div className="bg-[#d3d7da] w-[15%] h-[34px] py-1  text-center">
              {AppliedFilters.discount && AppliedFilters.discount}
            </div>
            <div className="bg-[#d3d7da] w-[65%] h-[34px] py-1 px-4 text-center">
              {AppliedFilters.price &&  AppliedFilters.price}
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          <h1 className="font-bold pl-5">SORT BY</h1>
          <div className="border p-3 pl-5">
            <button
              onClick={() => {
                handlesort("LOW-HIGH");
              }}
            >
              PRICE [LOW-HIGH]
            </button>
          </div>
          <div className="border p-3 pl-5 ">
            <button
              onClick={() => {
                handlesort("HIGH-LOW");
              }}
            >
              PRICE [HIGH-LOW]
            </button>
          </div>
          <div className="border p-3 pl-5 ">
            <button
              onClick={() => {
                handlesort("RATING");
              }}
            >
              RATING
            </button>
          </div>
        </div>

        <div>
          <legend className="pl-5 font-bold ">DISCOUNT</legend>
          <div className="flex flex-col gap-3">
            <div className="ml-5 text-[18px] mt-3 " >
              {" "}
              <input
                onChange={(e) => {
                  handlecheck(e);
                }}
                type="radio"
                id="10%"
                value="10%"
                name="discount"
              />
              <label htmlFor="10%">10%</label>
            </div>
            <div className="ml-5 text-[18px]" >
              {" "}
              <input
                onChange={(e) => {
                  handlecheck(e);
                }}
                type="radio"
                id="15%"
                value="15%"
                name="discount"
              />
              <label htmlFor="15%">15%</label>
            </div>
            <div className="ml-5 text-[18px]" >
              {" "}
              <input
                onChange={(e) => {
                  handlecheck(e);
                }}
                type="radio"
                id="20%"
                value="20%"
                name="discount"
              />
              <label htmlFor="20%">20%</label>
            </div>
            <div className="ml-5 text-[18px]" >
              <input
                onChange={(e) => {
                  console.log(e.target.value);
                  handlecheck(e);
                }}
                type="radio"
                id="25%"
                value="25%"
                name="discount"
              />
              <label htmlFor="25%">25%</label>
            </div>
          </div>
        </div>
        <div>
          <label className="font-bold pl-5" htmlFor="">PRICE</label>
          <br />
          <h1 className="ml-[35%]" >₹{ minmax[0]*84} - ₹{ minmax[1]*84}</h1>

          {minmax[0] && minmax[1] && (
            <ReactSlider
              className={Styles.horizontalslider}
              thumbClassName={Styles.thumb}
              trackClassName="example-track"
              defaultValue={[minmax[0] * 84, minmax[1] * 84]}
              onChange={(value, index) => handleprice(value)}
              min={minmax[0] * 84}
              max={minmax[1] * 84}
              ariaLabel={["Leftmost thumb", "Rightmost thumb"]}
              renderThumb={(props, state) => (
                <div {...props}  ></div>
              )}
              pearling
              minDistance={50}
            />
          )}

          <br />
        </div>
      </div>
    </div>
  );
});

export default Function;
