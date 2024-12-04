import "./App.css";
import "./index.css";
import React from "react";
import { Route, Routes } from "react-router";
import Homepage from "./components/Home/Homepage";
import Navbar from "./components/Navigation/Navbar";
import Blog from "./components/blog/Blog";
import Pricing from "./components/pricing/Pricing.jsx";

function App() {
  return (
    <>
      <div className="w-full">
        <Navbar />
      </div>
      <Routes>
        <Route path ="/" element = {<Homepage/>}/>
        <Route path ="/pricing" element = {<Pricing/>}/>
        <Route path ="/blog" element = {<Blog/>}/>
      </Routes>
    </>
  );
}

export default App;
