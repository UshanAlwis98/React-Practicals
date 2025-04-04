import React from "react";
import logo from "../assets/images/logo.png";

const NavBar = () => {
  return (
    <>
      <div className="bg-indigo-500 flex items-center justify-between px-8 py-4">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
        </div>

        <div className="text-center font-mono text-4xl text-slate-950 uppercase font-extrabold  tracking-widest">
          <h1>Talent Gateway Recruiters</h1>
        </div>

        <div className="flex justify-end gap-8 items-center font-mono text-2xl ">
          <a href="#">Home</a>
          <a href="#">Jobs</a>
          <a href="#" className="inline-block w-54">
            Contact Me
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
