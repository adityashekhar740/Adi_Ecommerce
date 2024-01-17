import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GrNext } from "react-icons/gr";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Styles from "./Product.module.css";
import { GrLinkNext } from "react-icons/gr";
import { CiHeart } from "react-icons/ci";
import { useAll } from "../contexts/All";
import { useFaspc } from "../contexts/Faspc";
import Alternative_list from "./Alternative_list";

const Product = () => {
  const navigate =useNavigate();
  const { datacart,setdatacart,addcart }=useAll();
  const { id } = useParams();
  const [pdata, setpdata] = useState({});
  const [images, setimages] = useState([]);
  const [alter,setalter]=useState(false);
  // let raw= decodeURIComponent(pdt);
  // const decoded_string=raw.replace(/%20/g,' ');

  const {defsort,setdefsort}=useFaspc();

  const goback=()=>{
    navigate(-1, {state:{ defsort }} );
  }
  useEffect(() => {
    const pdtdata = async () => {
      const dat = await axios.get(`https://dummyjson.com/products/${id}`);
      setpdata(dat.data);
      setimages(dat.data.images);
    };
    pdtdata();
  }, [id]);

  useEffect(()=>{
    setalter(false);
  },[id])

if(!defsort){
  setdefsort(true);
}

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    console.log("next");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    console.log("prev");
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleadd=()=>{
    addcart(pdata,1);
    console.log(datacart);
  }

  const handlealternative=()=>{
    setalter(true);
  }

  return (
    <>
      {pdata ? (
        <div>
          <div className="flex gap-1">
          <div className="carousel-container relative p-1  ">
            <img
              className="w-[800px] h-[90vh]"
              src={images[currentIndex]}
              alt={`slide ${currentIndex}`}
            />
            <div className="carousel-buttons">
              <button
                className="absolute top-[50%] left-2 text-[#4191c7] text-[27px] border p-1 "
                onClick={goToPrev}
              >
                <MdOutlineArrowBackIosNew />
              </button>
              <button
                className=" cursor-pointer absolute top-[50%] right-[1%] text-[#4191c7] text-[27px] border p-1 "
                onClick={goToNext}
              >
                <GrNext />
              </button>
            </div>
          </div>
          
          <div className="flex flex-col w-[670px] pl-5 ">
    <div className="underline cursor-pointer text-[18px] ml-[-12px] mt-2  "   onClick={goback} > ◀️Back  </div>

            <div className={Styles.head}>
              <span className="text-end">
                <h1 className="font-semibold  ">rating:{pdata.rating}/5.0</h1>
                <span className="underline">{pdata.stock}</span>
              </span>
            </div>
            <h1 className={Styles.title}>{pdata.title}</h1>
            <span className="mb-5">◾{pdata.category}</span>
            <span className="text-[#363738]">MRP in Indian Currency</span>

            <span>
              <span className="text-[#363738] font-semibold relative text-[20px]">
                <div className="absolute h-[1px] w-[100%] bg-[#363738] top-4 "></div>
                ₹ {pdata.price * 87}{" "}
              </span>
              <span className="text-[red] font-semibold text-[20px]">
                {"   "}₹ {pdata.price * 84}
              </span>
            </span>
            <span className="text-[#363738] mb-7 ">
              [Inclusive of all Taxes]
            </span>
            <p>
              <span className="font-semibold">Description: </span>{" "}
              {pdata.description}{" "}
            </p>

            <div className={Styles.maindiv}>
              <button onClick={handleadd} className="z-[0] text-white bg-black w-[400px] h-[50px] text-start p-3 font-semibold hover:bg-[#141010] ">
                ADD TO BAG{" "}
                <GrLinkNext className="absolute left-[360px] top-3 font-semibold text-[23px] " />
              </button>
              <div className={Styles.backdiv}></div>
            </div>
            <div className="flex gap-6 mt-5">
              <button className={Styles.wishbtn}>
                <CiHeart className="ml-[9px] text-[30px]  text-[red]  " />
              </button>
              <button onClick={
                handlealternative
              } className={Styles.altbtn}>{alter?<h1>SCROLL DOWN</h1>:'FIND ALTERNATIVES'}<GrLinkNext className="absolute left-[87%] top-[31%] text-[23px] " /></button>
            </div>
          </div>
          
        </div>
        {
            (alter? <div className="w-[100%] h-[70vh]  mt-[70px] " >
                <h1 className="text-[2rem] font-semibold ml-[70px]  " >YOU MAY ALSO LIKE</h1>
                <Alternative_list category={pdata.category} />
            </div>:null )
          }
        </div>
      ) : null}

    </>
  );
};

export default Product;
