"use client";
import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import { NavLinks, socialLinks } from "@/const/data";


useState;

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleChange = () => {
    setOpenMenu(!openMenu);
  };

  const closeNav = () => {
    openMenu(!setOpenMenu)
  }

  return (
    <>
      <nav className="w-full h-24 flex items-center bg-white/50">
        <Link href="/">
          <h1 className="text-black font-bold text-xl lg:text-2xl ml-2 lg:pr-5 hover:text-gray-500 ease-in-out duration-300 transition">
            LOGO HERE
          </h1>
        </Link>
        <div className="hidden lg:flex w-full justify-evenly items-center">
          {NavLinks.map((link) => (
            <Link
              className="hover:text-orange-500 transition duration-300 text-black"
              key={link.id}
              href={link.href}
            >
              {link.title}
            </Link>
          ))}
          <button className="rounded-xl sticky p-2 ml-5 border text-white  hover:bg-white hover:text-black hover:shadow-white/50 hover:shadow-lg hover:-translate-y-1 transition duration-200 ">
            <Link href="/">Aprende Mas Aqui</Link>
          </button>
        </div>
        <button
          onClick={handleChange}
          className="ml-auto p-5 text-white md:hidden"
        >
          {openMenu ? (
            <HiOutlineX className="text-black" size={30} />
          ) : (
            <HiBars3 className="text-black" size={30} />
          )}
        </button>
      </nav>
      {/*Mobile Nav Menu Begin */}
      {openMenu && (
        <div className="bg-red-500 h-[683px] flex">
          {/*START  Sidebar With Social Links */}
          <div className="bg-black h-full w-8 py-5 flex gap-6 flex-col">
            {socialLinks.map((item) => (
              <Link key={item.id} href={item.href}>
                {item.image}
              </Link>
            ))}
            <p className="">Hello</p>
          </div>
          {/*END    Sidebar With Social Links */}
          <div className="w-full flex items-center justify-center flex-col gap-5">
            {NavLinks.map((link) => (
              <Link onClick={closeNav} className="text-black font-bold text-5xl hover:text-gray-800 transition duration-300" key={link.id} href={link.href}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
