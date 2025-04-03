import React from 'react';

const Project = () => {
  const projects = [
    {
        img: "/ss.PNG",
        title: 'Sentinel Sphere',
        description: 'At Sentinel Sphere, our mission is to empower communities to support one another during emergencies. Our platform connects individuals , enabling them to reach out for help and offer support when it matters most. We aim to create a safer environment where everyone can contribute to other’s .',
        link: 'https://sentinel-sphere.onrender.com/',
        about:'#'
    },
    {
        img: "/blood.PNG",
        title: 'Blood Donate',
        description: 'This project aims to raise awareness about blood donation and address the critical issue of timely information dissemination. Through our initiative, we provide a reliable platform that ensures users receive timely updates. We empower individuals to make a meaningful impact in their communities and save lives.',
        link: 'https://empoweringblooddonation.onrender.com/',
        about:'#'
    },
    {
      img:"/portfolio.PNG",
      title: 'Chetan Portfolio',
      description: 'Chetan Portfolio is a personal showcase of my skills and designed to highlight my journey, expertise, and passion for creating user-friendly web solutions. It serves as a platform to connect with potential collaborators and employers, demonstrating my commitment to continuous learning and growth in the tech industry.',
      link: '#',
      about:'#'
    },
    {
      title: 'Coming soon...',
      description: "Currently, I'm hard at work on my next project. Stay tuned—I'll be showcasing it here shortly!",
      link: '#',
      about:'#'
    },
    // {
    //     img:"",
    //   title: 'Currently Working...',
    //   description: 'This is a brief description of Project Five. It details the technologies used and the development process.',
    //   link: '#',
    //   about:'#'
    // },
  ];

  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-4 container md:px-20 md:mt-16 mt-8 mb-8">
        <h1 className="md:text-5xl text-3xl text-center font-semibold mb-3 mt-5"><span className="text-red-700">M</span>y 
           Fanta<span className="text-red-700">stic</span> Proje<span className="text-red-700">cts</span>
        </h1>
        <p className="mb-6 md:text-3xl mt-5 text-xl text-center  text-green-800">Get ready to be amazed—here's a sneak peek at my project magic!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {projects.map((project, index) => (
            <div key={index} className="border  rounded-lg p-4 shadow-md hover:shadow-lg   hover:scale-105 duration-300  hover:shadow-black">
              <img className='border  rounded-lg' src={project.img} alt="" />
              <h2 className="text-xl font-bold mb-2 mt-2 text-red-700">{project.title}</h2>
              <p className="text-gray-700 mb-4 text-justify">{project.description}</p>
              <div className='flex justify-between'>
                <a href={project.link} target='_blank' className="text-blue-600 hover:underline underline">See Project Live</a>
                <a href={project.about}  className="text-green-700 hover:underline underline">About Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id='skills' className=' mt-10   shadow-lg '/>
      {/* <hr className='text-[#1d3557] mt-10 mb-10 border h-2 shadow-lg shadow-[#1d3557]'/> */}
    </>
  );
}

export default Project;