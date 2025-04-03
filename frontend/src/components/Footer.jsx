import React from 'react';
import { FaArrowAltCircleUp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };
  const openMailClient = () => {
    const email = 'mittalchetan90@gmail.com'; // Recipient's email
    const subject = 'Subject Here'; // Customize the subject if needed
    const body = 'Hello, this is a message body.'; // Customize the body if needed
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
 
  return (
    <>
      <div className='bg-[#1d3557] p-1'>
        <p className='text-white text-center mt-2 font-mono'>
          © 2025 Chetan Mittal. All rights reserved | Designed by Chetan Mittal 
        </p>
      </div>

      {/* Scroll to Top Button */}
      <div
        className="fixed right-2 bottom-16 h-12 w-12 rounded-full bg-[#1d3557] flex items-center justify-center cursor-pointer shadow-lg hover:bg-red-600 transition hover:scale-105 duration-500"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaArrowAltCircleUp className='text-3xl text-white hover:scale-125 duration-500' />
      </div>
      <div
      className="fixed right-2 bottom-32 h-12 w-12 rounded-full bg-white-600 flex items-center justify-center cursor-pointer border-2 border-red-700 hover:border-[#1d3557] shadow-lg transition hover:scale-105 duration-500 "
      onClick={openMailClient}
      aria-label="Send Email"
    >
      <BiLogoGmail className='text-3xl text-red-700 hover:text-[#1d3557] hover:scale-125 duration-500' />
    </div>
    </>
  );
};

export default Footer;