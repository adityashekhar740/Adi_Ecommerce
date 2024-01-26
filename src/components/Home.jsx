import React from 'react'
import { NavLink } from 'react-router-dom'
import homepic from '../assets/home.jpg';
import Styles from './Home.module.css'
import { GrLinkNext } from "react-icons/gr";


const Home = () => {
  return (
    <>
    
      <div className={Styles.homepc} >
        <img  width="100%"    src={homepic} alt="" />
      </div>
      <NavLink to={'/products'} >
        <button className='absolute top-[70%] left-[15%] w-[190px]  flex gap-7   bg-[#000000ea] text-[white] px-4 py-2 rounded text-[19px] ' >SHOP NOW<GrLinkNext className="mt-1 " /></button>
      </NavLink>

      
      
    
    </>
  )
}

export default Home