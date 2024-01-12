import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import Mainproduct from "./components/Mainproduct.jsx";
import Layout from "./Layout.jsx";
import Product_search from "./components/Product_search.jsx";
import Product from "./components/Product.jsx";
import Category_result from "./components/Category_result.jsx";
import { AllProvider } from "./contexts/All.jsx";
import Cart from "./components/Cart.jsx";
import { FaspcProvider } from "./contexts/Faspc.jsx";
import Function from "./components/Function.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/products" element={<Mainproduct />} />
      <Route exact path="search/:pname" element={<Product_search />}>
        <Route path="search/:pname/filter" element={<Function/>} />
      </Route>
      <Route path="/products/product/:id" element={<Product />} />
      <Route path="/search/:pname/:id" element={<Product />} />
      <Route path="/category/:i/:id" element={<Product />} />
      <Route path="/category/:i" element={<Category_result />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/search/:pname/filters" element={<Function />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AllProvider>
      <FaspcProvider>
        <RouterProvider router={router} />
      </FaspcProvider>
    </AllProvider>
  </React.StrictMode>
);
