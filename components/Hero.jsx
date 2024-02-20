import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-mobileHero lg:bg-hero bg-cover bg-center"
    >
      <Navbar />
      <div className="bg-black/50 w-full h-[90%] flex pt-5 lg:items-center lg:justify-center">
        <div className="flex flex-col text-center lg:-mt-60 p-5">
          <h1 className="text-4xl font-bold">Bievenidos A nuestro Sitio</h1>
          <p className="text-2xl font-light mt-6">
            Somos pintores basado en salta pintando todo lque te imagines.
            Neccesitas pinta algo llamao ahora para cotizar tu proximo proyecto!
          </p>
          <button className="pt-4">
            <Link className="bg-white p-1  rounded-lg text-xl " href="/">
              Cotiza tu Proyecto
            </Link>
          </button>
          <button className="pt-4">
            <Link
              className="bg-black text-white  p-1 rounded-lg text-xl "
              href="/"
            >
              Ver Nuestro Trabajos
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
