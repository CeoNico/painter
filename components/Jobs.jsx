"use client";
import { examples } from "@/const/data";
import  { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Jobs = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="h-screen p-2">
      <div className="">
        {examples.map((item) => (
          <div className="flex items-center flex-col text-center">
            <h1>{item.label}</h1>
            <p>{item.subtext}</p>
            <div className="">
              {isActive ? item.imgDespues : item.imgAntes}
              <div className="flex gap-2 items-center justify-center">
                <button onClick={() => setIsActive(false)}><FaArrowLeft className="text-black" size={30} /></button>
                <button onClick={() => setIsActive(true)}><FaArrowRight className="text-black" size={30} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
