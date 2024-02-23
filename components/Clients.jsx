import { reviews } from "@/const/data";
import React from "react";
import ClientCard from "./ClientCard";

const Clients = () => {
  return (
    <div className="p-2">
      <h1 className="text-5xl font-bold text-center">Nuestros Clientes</h1>
      <div>
        {reviews.map((review) => (
          <ClientCard imgSrc={review.imgURL} key={review.feedback} customerName={review.customerName} subtext={review.feedback} />
        ))}
      </div>
    </div>
  );
};

export default Clients;
