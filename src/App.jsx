import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import SingleProduct from "./Components/SingleProduct";
import Cart from "./Components/Cart";
import ErrorPage from "./Components/ErrorPage";
import Header from "./Components/Header";
import Products from "./Components/Products";

function App() {
  
  return (
    <>
    <div className="bg-yellow-50 font-mainFont">
    <BrowserRouter>
    <Header />
    <Routes>
      
      <Route path = "/" element = {<Home />}/>
      <Route path = "/about" element = {<About />}/>
      <Route path = "/products" element = {<Products />}/>
      <Route path = "/contact" element = {<Contact />}/>
      <Route path = "/singleproduct" element = {<SingleProduct />}/>
      <Route path = "/cart" element = {<Cart />}/>
      <Route path = "/error" element = {<ErrorPage />}/>
      
    </Routes>
    
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
