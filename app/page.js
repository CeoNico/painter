import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import Jobs from "@/components/Jobs";
import VerTodos from "@/components/VerTodos";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="h-fit p-5 w-full">
        <Jobs />
      </section>
      <section className="h-16 bg-black text-white flex justify-between items-center ">
        <VerTodos />
      </section>
      <section className="h-screen w-full">
        <Clients />
      </section>
    </>
  );
}
