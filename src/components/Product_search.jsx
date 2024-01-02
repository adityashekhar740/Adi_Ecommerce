import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Features from './Features';
import Function from './Function';
import { NavLink, useParams } from 'react-router-dom';
import No_result from './No_result';
import Styles from './Product_search.module.css'


const Products = ({search,setcustom,setget,get }) => {
    const [result,setresult]=useState([]);
    const [fasp,setfasp]=useState(false);
    const {pname}=useParams();
    const url=`https://dummyjson.com/products/search?q=${pname}`
    
       
             useEffect(()=>{
              const cards = async ()=>{
        const raw= await axios.get(url);
        const res=  raw.data.products;
        setresult(res);
        console.log(res);
              }
              cards();
          },[pname])
        // res?setresult(res):null;
    
    // if(get){
    //     cards();
    //     setget(false);
    //     console.log(result);
    // }
       
  return (
    <>
    {fasp ? <Function setfasp={setfasp} /> : null}
    {(result.length)?<Features pname={pname} result={result}  />:<No_result pname={pname} />}
    
    {result?<div className='flex justify-center'>
        <div className='w-[1200px]'>
            <div className=" h-[50px] flex justify-end w-[1230px] ml-[130px] mb-2  ">
        {
          result.length?<div
          onClick={() => {
            setfasp(true);
          }}
          className="h-[45px] w-[157px] mr-[161px] border flex items-center cursor-pointer  "
        >
          <h1 className="font-medium ml-3 mr-3">Filter & sort</h1>
          <HiOutlineAdjustmentsHorizontal className="text-[25px]" />
        </div>:null
        }
      </div>

            <div className='mt-3 flex gap-9 flex-wrap justify-center    w-[1240px] m-auto'>
            {
                (result)?result.map((i)=>(
                    
                <NavLink to={`/search/${pname}/${i.id}`} >
                  <div key={i.id}>
                    <div className=' border-2 relative w-[375px] h-[365px]'>
                        
                       
                        <img className={Styles.searchimg} src={i.thumbnail }   alt='gg' />
                    </div>
                    <div className='bg-[#d3d7da] flex justify-between p-1'>
                    <h2>{i.title}</h2>
                    <h2> $ <b>{i.price}</b></h2>
                    </div>
                    
                </div>
                </NavLink>
                )):null
            }
            
            </div>
        </div>
    </div> :
     null }
    </>
  )
}

export default Products