import React, { useState } from 'react'

const Checkbox = ({dis,checkboxstates,setcheckboxstates}) => {
     

     function handlecheck() {
         setcheckboxstates((prevStates)=>({
            ...prevStates,
            [dis]:!checkboxstates
         }));
         console.log(checkboxstates[{dis}]);
  }
  return (
    <div>
        
          <input
          onChange={(e)=>{
            console.log(e.target.value);
            handlecheck();
          }} type="checkbox" id={dis} value={dis} checked={checkboxstates[dis]} />
    </div>
  )
}

export default Checkbox