import React from "react";
import { ReactTyped, Typed } from "react-typed";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Hero = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-4 container md:px-20 mt-16 mb-10 md:mb-20 ">
        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/2 mt-12 md:mt-12 px-2 space-y-2 order-2 md:order-1">
            <span className="text-sm ">Welcome to My Feed</span>
            <div className="flex text-xl md:text-2xl">
              <span>Hello , I'm a&nbsp;</span>
              {/* <span className='font-bold text-red-600'> Developer</span> */}
              <ReactTyped
                className="font-bold text-red-700"
                strings={["Developer", "", "Programmer", "", "Coder", ""]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>

            <br />
            <p className="text-sm md:text-md text-justify">
              I am a Web Developer with a passion for creating user-friendly
              websites and applications. I have experience of 3 months in web
              Development . I am Looking for opportunities to grow and make a
              positive impact in the tech world. Let’s connect!
            </p>
            <br />
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className=" gap-2 flex flex-col items-center">
                <h1 className="text-xl text-gray-600 font-bold">
                  Available on
                </h1>
                <div>
                  <ul className="flex gap-4 text-xl">
                    <a
                      href="https://www.linkedin.com/in/chetan-mittal-278053272/?originalSubdomain=in"
                      target="_blank"
                      className="md:text-3xl cursor-pointer text-blue-700 hover:scale-110 duration-200 "
                    >
                      {" "}
                      <FaLinkedin />{" "}
                    </a>
                    <a
                      href="https://github.com/chetanmittal9999"
                      target="_blank"
                      className="md:text-3xl cursor-pointer hover:scale-110 duration-200 "
                    >
                      {" "}
                      <FaGithub />{" "}
                    </a>
                    <a
                      href="https://www.instagram.com/me_chetan001/?next=%2F&hl=en"
                      target="_blank"
                      className="md:text-3xl  cursor-pointer text-pink-700 hover:scale-110"
                    >
                      {" "}
                      <FaInstagramSquare />{" "}
                    </a>
                    <a
                      href="https://www.youtube.com/@creativemittal9999"
                      target="_blank"
                      className="md:text-4xl cursor-pointer text-red-700 hover:scale-110 duration-200 "
                    >
                      {" "}
                      <FaYoutube />{" "}
                    </a>
                  </ul>
                </div>
              </div>
              <div className=" gap-2 flex flex-col items-center">
                <h1 className="text-xl text-gray-600 font-bold">
                  Currently Working on
                </h1>
                <div>
                  <ul className="flex gap-4 text-xl">
                    <li className="text-xl  hover:scale-110 duration-200 rounded-full border-[2px] p-1 text-green-700">
                      {" "}
                      <SiMongodb />{" "}
                    </li>
                    <li className="text-xl  hover:scale-110 duration-200 rounded-full border-[2px] p-1 font-bold">
                      {" "}
                      <SiExpress />{" "}
                    </li>
                    <li className="text-xl  hover:scale-110 duration-200 rounded-full border-[2px] p-1 text-blue-700">
                      {" "}
                      <FaReact />{" "}
                    </li>
                    <li className="text-xl  hover:scale-110 duration-200 rounded-full border-[2px] p-1 text-green-800">
                      {" "}
                      <FaNodeJs />{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-5 border-2 p-2 text-white text-center rounded-full border-black shadow-lg hover:scale-105 duration-500">
              <a href="/Resume.pdf" download>
                <button className="font-semibold text-black text-xl cursor-pointer">
                  Download My Resume <i className="fa-solid fa-download"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="md:w-1/2  md:ml-12 lg:ml-40 mt-8 px-16 md:px-0 order-1 ">
            <img
              className="md:w-[400px] md:h-[400px] rounded-full border-[#1d3557] border  hover:scale-85 duration-500"
              src="/cm.jpg"
              alt=""
            />
            <div className="h-48 w-48 md:h-96 md:w-96 rounded-full border border-black mt-[-190px] md:mt-[-390px] shadow-lg shadow-black  hover:scale-125 duration-500"></div>
            <div className="h-10 w-10 md:h-10 md:w-96 rounded-full  mt-[-70px] md:mt-[-390px] shadow-lg shadow-black "></div>
          </div> 
        </div>
      </div>
      <div className="text-[#457b9d] h-2 shadow-lg shadow-black" />
      <div id="about"></div>
    </>
  );
};

export default Hero;
