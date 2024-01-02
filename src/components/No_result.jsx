import React from 'react'

const No_result = ({pname}) => {
  return (
    <div className='text-start m-auto h-[200px] w-[1200px] pt-[70px]' >
        <h1 className=' font-semibold ml-10 text-[35px] mb-3' >
            OOPS-NO RESULTS FOR "<span className='text-[red] font-semibold' >{pname.toUpperCase()}</span>".
        </h1>
        <p className='ml-10' >Don't give up check your spelling or try something less Specific.</p>
        <div className='bg-[gray] w-[100%] h-[1px] mt-[70px]' ></div>
    </div>
  )
}

export default No_result