import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div>Home</div>
      <NavLink to={'/products'} >
        <button className='ml-[720px] mt-[200px] bg-black text-white p-2 rounded-sm ' >shop now </button>
      </NavLink>
    
    </>
  )
}

export default Home