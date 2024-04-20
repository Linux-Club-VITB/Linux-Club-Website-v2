"use client";
import { useState, useRef } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import logo from "../../public/logo.png";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className="text-white flex justify-between items-center p-2 w-full mx-aut0 z-20 sticky top-0"
      style={{
        background: "transparent",
        backdropFilter: "blur(5px)",
      }}
    >
      <motion.h1
        className=" w-full text-3xl font-bold text-[#] cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Image
          src={logo}
          alt="Linux logo imported from public directory"
          className="max-w-[200px]"
        />
      </motion.h1>
      <motion.ul
        className="hidden md:flex mx-auto justify-between"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <li className="p-4 cursor-pointer font-semibold">Home</li>
        <li className="p-4 cursor-pointer font-semibold">Events</li>
        <li className="p-4 cursor-pointer font-semibold">Team</li>
        <li className="p-4 cursor-pointer font-semibold">Contact</li>
      </motion.ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%] ease-in-out duration-500"
        }
      >
        <h1 className=" w-full text-3xl font-bold text-[#00df98] m-3">DAX</h1>
        <ul className=" uppercase ">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
