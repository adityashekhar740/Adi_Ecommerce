import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";


const Layout = () => {
    const [search, setsearch] = useState("");

  return (
    <>
      <Nav search={search} setsearch={setsearch} />
      <Outlet />
     
    </>
  );
}; 

export default Layout;
