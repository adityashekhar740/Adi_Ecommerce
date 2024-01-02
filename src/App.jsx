import Nav from "./components/Nav";
import React, { useState } from "react";
import {BrowserRouter as Switch, Route, Router } from "react-router-dom";

const page = () => {
  const [search, setsearch] = useState(" ");
  const [custom, setcustom] = useState(false);
  const [get, setget] = useState(false);
  const [category, setcategory] = useState("");
  const [categorysearch, setcategorysearch] = useState(false);
  const [multicategory, setmulticategory] = useState(false);
  // console.log(search);
  // category && console.log(category);
  return (
    
       <>
        <Nav
        setsearch={setsearch}
        setcustom={setcustom}
        setget={setget}
        setcategorysearch={setcategorysearch}
        setcategory={setcategory}
        setmulticategory={setmulticategory}
      />
      
      

     
       </>
      
  );
};

export default page;
