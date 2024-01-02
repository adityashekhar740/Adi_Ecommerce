import React, { useEffect, useState } from "react";
import Styles from "./Cart.module.css";
import { useAll } from "../contexts/All";
import { GrLinkNext } from "react-icons/gr";

const Cart = () => {
  const { datacart, setdatacart, addcart, qtys, changeqty, removeitem } =
    useAll();
  const [total, settotal] = useState(0);

  const calculateTotal = () => {
    let e = 0;
    for (let i = 0; i < datacart.length; i++) {
      e += datacart[i].price * qtys[i];
    }
    return e;
  };

  useEffect(() => {
    const totals = () => {
      let e = 0;
      for (let i = 0; i < datacart.length; i++) {
        e += datacart[i].price * qtys[i];
      }
      return e;
    };
    settotal(totals());
  }, [datacart, qtys]);

  const handleqty = (qty, index) => {
    changeqty(parseInt(qty), index);
    settotal(calculateTotal());
  };

  const handleremove = (i, index) => {
    console.log(i);
    console.log(qtys.length);
    removeitem(i, index);
  };

  return (
    <div className="flex gap-10 w-[1200px] mx-auto ">
      <div className="w-[740px] min-h-[800px] flex flex-col gap-[21px] pl-5 ">
        <h1 className={Styles.head}>YOUR BAG</h1>
        <span>
          TOTAL [{datacart.length} items]{" "}
          {total ? <span className="font-bold">₹ {total * 84}</span> : null}{" "}
        </span>
        <p>
          Items in your bag are not reserved — check out now to make them yours.
        </p>
        <div className="w-[720px] h-[130px] bg-[#eceff1] flex flex-col gap-1 pl-8 pt-4 ">
          <h1 className="font-bold">Extra 20% off sale! </h1>
          <h1>Get extra 20% on purchase of Rs.4499 & above </h1>
          <p className="mt-3 text-[13px]">
            Discount will be automatically applied on checkout.
          </p>
        </div>

        <div className="w-[720px] flex flex-col gap-10 mt-4">
          {datacart
            ? datacart.map((i, index) => (
                <div className={Styles.card} key={index}>
                  <div>
                    <img
                      className="h-[100%]"
                      src={i.thumbnail}
                      width={230}
                      alt=""
                    />
                  </div>
                  <div className="pl-8 pt-4 pb-4">
                    <h1 className=" text-[25px]">{i.title}</h1>
                    <h1 className="text-[14px] mt-2 "> ◾ {i.category}</h1>
                    <select
                      className="mt-[70px] w-[90px] border-gray-500 p-2 border-solid border-[1px] h-[50px] "
                      onChange={(e) => {
                        handleqty(e.target.value, index);
                      }}
                      name="quantity"
                      id=""
                    >
                      <option value={qtys[index]} selected>
                        {qtys[index]}
                      </option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                    <h1 className="absolute left-[610px] top-[14px] text-[17px] font-semibold ">
                      {" "}
                      ₹{(i.price * 84).toFixed(2)}
                    </h1>
                    <div
                      onClick={() => {
                        handleremove(i, index);
                      }}
                      className=" cursor-pointer absolute left-[685px] top-[1px] text-[32px] "
                    >
                      &times;
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
      {
        datacart.length?<div className="w-[420px] h-[600px]  flex flex-col items-center gap-[55px] p-[31px] ">
        <div className={Styles.maindiv}>
          <button className="z-[0] text-white bg-black w-[359px] h-[50px] text-start p-3 font-semibold tracking-wider hover:bg-[#141010] ">
            CHECKOUT{" "}
            <GrLinkNext className="absolute left-[87%] top-[0.9rem] font-semibold text-[23px] " />
          </button>
          <div className={Styles.backdiv}></div>
        </div>
        <div className="  w-[100%] h-[500px] flex flex-col gap-1 ">
          <h1 className="font-bold text-[19px] text-start mb-3 ">
            ORDER SUMMARY
          </h1>
          <div className="flex justify-between">
            <span>Original price</span>
            <span>{total ? "₹" + (total * 87).toFixed(2) : ""}</span>
          </div>
          <div className="flex justify-between">
            <span>delivery</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between">
            <span>On sale discount</span>
            <span>
              ₹
              <span className="text-red-300" >
              {total ?  (total * 87 - total * 84).toFixed(2) : ""}
            </span>
            </span>
          </div>
          <div className="flex justify-between">
            <span>Discounted price</span>
            <span>{total ? "₹" + (total * 84).toFixed(2) : ""}</span>
          </div>
          <div className="flex justify-between">
            <div className=" mt-4 flex flex-col">
              <h1 className="text-[1.1rem] font-semibold ">Total</h1>
              <p className="text-gray-500" >[Inclusive of all taxes]</p>
            </div>
            <span className="mt-5">
              ₹
              <span className="text-[red] font-semibold ">
                {total ? (total * 84).toFixed(2) : ""}
              </span>
            </span>
          </div>
        </div>
      </div>:null
      }
    </div>
  );
};

export default Cart;
