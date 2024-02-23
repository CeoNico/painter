import { reviews } from "@/const/data";
import Image from "next/image";
import React from "react";

export const ClientCard = ({ customerName, imgSrc, subtext }) => {
  return (
    <div className="h-full p-4">
      <div className="p-2 text-center">
        <h1 className="text-2xl font-semibold">{customerName}</h1>
        <div className="flex items-center justify-center">
          <Image className="rounded-full p-5" src={imgSrc} width={200} height={200} />
        </div>
        <p className="font-light text-xl">{subtext}</p>
      </div>
    </div>
  );
};

export default ClientCard;
