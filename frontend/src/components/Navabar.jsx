import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const Navabar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div  className="max-w-screen-2xl mx-auto px-4 container text-white md:px-20 shadow-md h-16 z-20 fixed top-0 left-0 right-0 bg-[#1d3557]">
        <div className="flex justify-between items-center mt-2">
          <div className="flex gap-2 items-center">
            <img
              className="h-12 w-12 rounded-full"
              src="/cm.jpg"
              alt=""
            />
            <div className="">
              <h1 className="text-xl">
                Cheta<span className="text-white">n</span> Mitta
                <span className="text-white">l</span>
              </h1>
              <h1 className="text-sm">Web Developer</h1>
            </div>
          </div>

          <div>
            <ul className="hidden gap-5  md:flex">
              <a href="#"  className="cursor-pointer hover:bg-white hover:text-red-700 px-2 py-1 rounded-lg transition duration-500 ease-in-out">
                Home
              </a>
              <a href="#about" if className="hover:bg-white hover:text-red-700 px-2 py-1 rounded-lg cursor-pointer transition duration-500 ease-in-out">
                About
              </a>
              <a href="#projects" className="hover:bg-white hover:text-red-700 px-2 py-1 rounded-lg cursor-pointer transition duration-500 ease-in-out">
                Projects
              </a>
              <a href="#skills" className="hover:bg-white hover:text-red-700 px-2 py-1 rounded-lg cursor-pointer transition duration-500 ease-in-out">
                Skills
              </a>
              <a href="#contact" className="hover:bg-white hover:text-red-700 px-2 py-1 rounded-lg cursor-pointer transition duration-500 ease-in-out">
                Contact
              </a>
            </ul>
            <div
              className="flex md:hidden text-3xl"
              onClick={() => setMenu(!menu)}
            >
              {menu ? <RxCross1 /> : <IoMdMenu />}
            </div>
          </div>
        </div>
        {/* mobile k liye navbar */}
        {menu && (
          <div>
            <ul className="flex gap-3 flex-col md:hidden h-screen justify-center text-3xl font-semibold text-red-700 bg-white mt-2 container-none">
              <a href='#' className="hover:scale-105 duration-200 cursor-pointer px-5 py-0 rounded-4xl">
                Home
              </a>
              <a href="#about" onClick={()=>{setMenu(!menu)}} className="hover:scale-105 duration-200 cursor-pointer px-5 py-2 rounded-4xl">
                About
              </a>
              <a href="#skills" onClick={()=>{setMenu(!menu)}} className="hover:scale-105 duration-200 cursor-pointer px-5 py-2 rounded-4xl">
                Skills
              </a>
              <a href="#projects" onClick={()=>{setMenu(!menu)}} className="hover:scale-105 duration-200 cursor-pointer px-5 py-2 rounded-4xl">
                Projects
              </a>
              <a href="#contact" onClick={()=>{setMenu(!menu)}} className="hover:scale-105 duration-200 cursor-pointer px-5 py-2 rounded-4xl">
                Contact
              </a>
            </ul>
          </div>
        )}
      </div>
      
    </>
  );
};

export default Navabar;
