import "./App.css";
import "./index.css";
import React from "react";
import { Route, Routes } from "react-router";
import Homepage from "./components/Home/Homepage";
import Navbar from "./components/Navigation/Navbar";
import Blog from "./components/blog/Blog";
import Pricing from "./components/pricing/Pricing.jsx";
import {Accounting,Advisors,Estimates,Invoicing,MobileReceipts,Payments,Payroll} from "./components/features/index.js"
import {AboutUs,Affiliate,Careers,HowSupportWorks} from "./components/resources/index.js"
import Contact from "./components/contact/Contact.jsx";
function App() {
  return (
    <>
      <div className="w-full">
        <Navbar />
      </div>
      <Routes>
        <Route path ="/" element = {<Homepage/>}/>
        <Route path = "/" element = {<Contact/>}/>
        <Route path ="/pricing" element = {<Pricing/>}/>
        <Route path ="/blog" element = {<Blog/>}/>
        <Route path ="/accounting" element = {<Accounting/>}/>
        <Route path ="/advisors" element = {<Advisors/>}/>
        <Route path ="/estimates" element = {<Estimates/>}/>
        <Route path ="/invoicing" element = {<Invoicing/>}/>
        <Route path ="/mobilereceipts" element = {<MobileReceipts/>}/>
        <Route path ="/payments" element = {<Payments/>}/>
        <Route path ="/payroll" element = {<Payroll/>}/>
        <Route path ="/aboutus" element = {<AboutUs/>}/>
        <Route path ="/affiliate" element = {<Affiliate/>}/>
        <Route path ="/careers" element = {<Careers/>}/>
        <Route path ="/howsupportworks" element = {<HowSupportWorks/>}/>
      </Routes>
    </>
  );
}

export default App;
