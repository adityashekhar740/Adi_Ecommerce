import React from "react";
import Styles from "./Features.module.css";

const Features = ({ pname, result,i,catdata,mpdt }) => {
  if(pname){
   var temp=pname.toUpperCase();
  }
  console.log(mpdt);
  return (
    <div className="">
      {(pname)?<div className="h-[190px] flex justify-center">
      <div className="w-[1200px] ">
        <div>
          <h1 className={Styles.hh1} >
            {" "}
            <i>
              SHOWING RESULT FOR <b className="text-[red]">{pname.toUpperCase()}</b>
            </i>{" "}
          </h1>
        </div>
        <div className="mt-[5px]">
             <h1 className={Styles.dhh1} >{result.length} products</h1>
        </div>
      </div>
    </div>:

    <div className="h-[200px] flex justify-center">
      <div className="w-[1200px] ">
        <div>
          <h1 className={Styles.shh1}>
            {" "}
            <i>
              SHOWING RESULT FOR <b className="text-[red]">{i?i.toUpperCase():"ALL" }</b>
              
            </i>{" "}
          </h1>
        </div>
        <div className={Styles.catpro}>
             {i? <h1 className=" hh1" >{catdata.length} products</h1>:null}
        </div>
      </div>
    </div>

  }
    </div>
  );
};

export default Features;
