import React, { useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const { name, email, phone, message } = formData;

    // Name validation
    if (name.length < 3) {
      newErrors.name = "Name must be at least 3 characters long.";
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Phone number validation
    if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    // Message validation
    if (message.length < 5) {
      newErrors.message = "Message must be at least 5 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Send email using EmailJS
      emailjs.send('service_7quy6bl', 'template_8ab5yjg', formData, 'rl55MwwHwUPHstaVI','template_jmy7ads')
        .then((response) => {
          console.log('Email sent successfully!', response.status, response.text);
          toast.success("Form submitted successfully!", {
            position: "top-right",
          });
          // Reset form
          setFormData({ name: "", email: "", phone: "", message: "" });
          setErrors({});
        })
        .catch((error) => {
          console.error('Failed to send email:', error);
          toast.error("Failed to send email. Please try again later.", {
            position: "top-right",
          });
        });
    } else {
      toast.error("Please fix the errors in the form.", {
        position: "top-right",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div id="contact"></div>
      <div className="max-w-screen-2xl mx-auto px-4 container md:px-20 mt-10 mb-6">
        <h1 className="md:text-5xl text-3xl text-center font-semibold mb-3">
          <span className="text-red-700">Coffee <i className="fa-solid fa-mug-hot"></i></span> + Ideas{" "}
          <span className="text-yellow-500"><i className="fa-solid fa-lightbulb"></i></span> = <span className="text-red-700"> Let’s</span> Connect!
        </h1>
        <p className="text-2xl mt-5 border-2 p-2 rounded-lg text-center font-semibold font-mono">
          Let’s Create Web Magic Together — <span className="text-red-700 font-normal">Hire Me Today!</span>
        </p>

        <div className="mt-10 md:mt-8 flex gap-10 justify-evenly items-center flex-col md:flex-row">
          <img
            className="md:w-1/2 hover:scale-90 duration-300"
            src="/contact.png"
            alt="Contact Us"
          />
          <form 
            ref={form}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 md:w-1/2 bg-white p-6 rounded-lg shadow-lg  border-2 border-[#1d3557]"
          >
            <h2 className="text-4xl font-semibold text-center text-gray-800">
              <span className="text-red-700">Let’s</span> Connect!{" "}
              <span className="text-blue-700"><i className="fa-solid fa-handshake"></i></span>
            </h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-[#1d3557]"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-[#1d3557]"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Mobile Number"
              className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-[#1d3557]"
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-[#1d3557]"
              rows="4"
            ></textarea>
            {errors.message && <p className="text-red-500">{errors.message}</p>}
            <button
              type="submit"
              className="bg-[#1d3557] text-white py-2 rounded-lg hover:bg-[#1d3557] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;