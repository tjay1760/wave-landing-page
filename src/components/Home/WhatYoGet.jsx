import React from "react";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa6";
import { RiPlantFill } from "react-icons/ri";
import { AiOutlineTeam } from "react-icons/ai";


const WhatYoGet = () => {
  return (
    <div className="w-full h-lvh bg-wygBackgroundColor">
      <h1 className="ml-[36rem] pt-80">One less thing to worry about</h1>
      <p>Your Wave account gets you access to all this and more:</p>
      <div className="descriptions">
        <div className="flex"><FaHeartCircleCheck/><span>A user-friendly dashboard built for you, not your accountant.</span></div>
        <div className="flex"><FaFolderOpen/><span>Peace of mind that you are always organized ahead of tax season.</span></div>
        <div className="flex"><RiPlantFill/><span>A complete picture of your business health, wherever you are.</span></div>
        <div className="flex"><AiOutlineTeam/><span>Our in-house team of bookkeeping, accounting, and payroll coaches.</span></div>
      </div>
    </div>
  );
};

export default WhatYoGet;
