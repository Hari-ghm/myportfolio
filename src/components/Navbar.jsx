import React from "react";
import { useState, useEffect } from "react";

const Navbar = () => {
  return (

    <nav className="text-white">
      <div className="relative bg-neutral-900 h-16 w-full flex items-center justify-between px-6 shadow-md">
        <div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-40 blur-[100px]" />

        <div className="relative z-10 flex items-center">
          <span className="text-white font-bold text-3xl pl-10 tracking-widest">GHM</span>
        </div>

        <div className="relative flex gap-8 pr-32 text-white text-lg items-center">
          <a href="#" className="text-white hover:text-multicolor">
            Home
          </a>
          <a href="#" className="text-white hover:text-multicolor">
            About
          </a>
          <a href="#" className="text-white hover:text-multicolor">
            Projects
          </a>
          <a href="#" className="text-white hover:text-multicolor">
            Connect
          </a>
        </div>
      </div>
    </nav>
  ); 
};

export default Navbar;
