import React from "react";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa6";
import { RiPlantFill } from "react-icons/ri";
import { AiOutlineTeam } from "react-icons/ai";


const WhatYoGet = () => {
  return (
    <div className="w-full h-128 bg-wygBackgroundColor">
      <div className="text-gray-50 pt-80 flex flex-col items-center justify-center gap-9">
      <h1 className="text-3xl font-bold">One less thing to worry about</h1>
      <p className="text-xl">Your Wave account gets you access to all this and more:</p>
      <div className="descriptions grid grid-cols-2 gap-4">
        <div className="flex w-96"><FaHeartCircleCheck className="text-4xl"/><span className="px-4">A user-friendly dashboard built for you, not your accountant.</span></div>
        <div className="flex w-96"><FaFolderOpen className="text-4xl"/><span className="px-4">Peace of mind that you are always organized ahead of tax season.</span></div>
        <div className="flex w-96"><RiPlantFill className="text-4xl"/><span className="px-4">A complete picture of your business health, wherever you are.</span></div>
        <div className="flex w-96"><AiOutlineTeam className="text-4xl"/><span className="px-4">Our in-house team of bookkeeping, accounting, and payroll coaches.</span></div>
      </div>
      </div>

    </div>
  );
};

export default WhatYoGet;
