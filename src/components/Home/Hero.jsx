import React from "react";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { useState } from "react";
import HeroImg from "../../assets/Hero-image.png"

const Hero = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const handleChange=(e)=>{
    setName(e.target.value);
    setEmail(e.target.value)
  }
  return (
    <div className="h-[48rem] w-full bg-heroBackgroundColor relative top-24 flex align-top gap-40">
      <div className="text-black">
        <div className="ratings flex items-center gap-4 ml-8 pt-10">
          <div className="flex">
            <IoIosStar className="text-yellow-500 text-2xl"/>
            <IoIosStar className="text-yellow-500 text-2xl"/>
            <IoIosStar className="text-yellow-500 text-2xl"/>
            <IoIosStar className="text-yellow-500 text-2xl"/>
            <IoIosStarHalf className="text-yellow-500 text-2xl"/>
          </div>
          <div className="w-px h-7 bg-black"></div>
          <span className="font-semibold text-2xl">Excellent</span>
        </div>
        <span className="ml-8 pt-8 text-lg">
          <strong>4.9</strong> out of 5 Stars
        </span>

        <div className="description">
          <h1 className="text-blue-900 text-5xl min-h-0 flex flex-col p-8">
            <span className="w-72">Manage Your</span>{" "}
            <span className="">Money Like a boss.</span>
          </h1>
          <p className="min-h-0 text-xl pl-8 w-[32rem]">
            Create beautiful invoices, accept online payments, and make
            accounting easy—all in one place—with Tuli suite of money management
            tools.
          </p>
        </div>
        <form className="flex flex-col w-[30rem] ml-8 pt-8">
          <input value ={name} onChange={handleChange} className="mb-2 rounded-xl h-14 border border-blue-300 p-2" placeholder="Enter your name"></input>
          <input value ={email} onChange={handleChange} className="mt-2 rounded-xl h-14 border border-blue-300 p-2" placeholder="Enter your email"></input>
        </form>
      </div>
      <img className="h-[34rem]" alt="harmony image" src= {HeroImg}/>
    </div>
  );
};

export default Hero;
