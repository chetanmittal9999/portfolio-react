import React from "react";

const About = () => {
  return (
    <>
      <div></div>
      <div className="max-w-screen-2xl mx-auto px-4 container md:px-20 mt-10 lg:mt-20 text-justify mb-5">
        <h1 className="text-2xl md:text-5xl text-center font-semibold mb-3">
          All<span className="text-red-700"> About</span> Me And My{" "}
          <span className="text-red-700"> Experience</span>
        </h1>
        {/* about content  */}
        <p className="">
          As a BCA graduate and Web Developer, I am passionate about building
          innovative web and mobile solutions that prioritize user experience.
          My enthusiasm for technology drives me to continuously learn, explore
          new challenges, and contribute to meaningful projects in the digital
          landscape.
        </p>
        <br />
        {/* professional experience  */}
        <div className="">
          <h1 className="text-xl text-green-700 mb-1 font-semibold ">
            Professional Experience
          </h1>
          <div className="bg-white shadow-md rounded-lg  mb-4 border p-3 hover:scale-105 duration-500 hover:shadow-lg hover:shadow-[#1d3557] ">
            <h3 className="font-semibold text-[#373995]">
              App Developer Intern , On-site{" "}
            </h3>
            <p className="text-gray-500">Duration : June 2025 - Present</p>
            <p className="text-gray-500">Magnifying India Mohali</p>
            <p className="mt-2">
              As an App Development Intern, I am currently working on mobile
              applications using React Native, focusing on UI responsiveness,
              component reusability, and clean architecture. I collaborate with
              the team to build efficient and scalable app solutions.
            </p>
            <hr className="mt-2 mb-2 text-gray-300" />
            <h3 className="font-semibold text-[#373995]">
              Full Stack Web Developer Intern , On-site{" "}
            </h3>
            <p className="text-gray-500">
              Duration : July 2024 - October 2024 (3 months)
            </p>
            <p className="text-gray-500">Phenom IT Hisar</p>
            <p className="mt-2">
              As a Full Stack Web Developer Intern at Phenom IT, I gained
              hands-on experience in developing dynamic applications using
              React.js for the front end and Node.js with Express.js for the
              back end. I utilized MongoDB for database management and
              JavaScript to enhance functionality, collaborating with a team to
              create user-friendly web solutions.
            </p>
          </div>
        </div>
        {/* Education  */}
        <div className="">
          <h1 className="text-xl text-green-700 mb-1 font-semibold mt-3">
            Education
          </h1>
          <div className="flex justify-between flex-col md:flex-row gap-4 md:gap-0 border p-3 rounded-lg hover:scale-105 duration-500 hover:shadow-lg hover:shadow-[#1d3557]">
            <div>
              <h3 className="text-[#373995] font-semibold">
                Dayanand College, Hisar ( Affiliated GJU )
              </h3>
              <p>Bachelor of Computer Applications (CS), </p>
              <p className="text-gray-600">August 2022 - July 2025</p>
              <p>Grade : 7.6</p>
            </div>
            <div>
              <h3 className="text-[#373995] font-semibold">
                GSSS Bhattu Kalan, Fatehabad, Haryana
              </h3>
              <p>Class 12th</p>
              <p className="text-gray-600">April 2021 - March 2022</p>
              <p>Percentage : 93.67%</p>
            </div>
          </div>
        </div>
        {/* skills and Expertise  */}
        <div>
          <h2 className="text-xl text-green-700 mb-1 font-semibold mt-3">
            Skills & Expertise
          </h2>
          <p className="border p-3 rounded-lg hover:scale-105 duration-500 hover:shadow-lg hover:shadow-[#6c84a5]">
            I specialize in Web and App development with expertise in{" "}
            <span className="text-red-700">JavaScript</span> ,{" "}
            <span className="text-red-700">React </span>,{" "}
            <span className="text-red-700">React Native </span>,{" "}
            <span className="text-red-700">Tailwind CSS</span> ,{" "}
            <span className="text-red-700">HTML</span> and
            <span className="text-red-700"> CSS</span> for front-end design,
            along with <span className="text-red-700">Node.js</span> ,{" "}
            <span className="text-red-700">Express</span> , and{" "}
            <span className="text-red-700">MongoDB</span> for back-end
            solutions. I also have strong skills in and{" "}
            <span className="text-red-700">
              Data Structures and Algorithms (DSA)
            </span>{" "}
            .
          </p>
        </div>
        {/* Achievements / Certifications */}
        <div>
          <h1 className="text-xl text-green-700 mb-1 mt-3 font-semibold">
            Achievements and Certifications
          </h1>
          <div className="border p-3 mt-3 rounded-lg hover:scale-105 duration-500 hover:shadow-lg hover:shadow-[#1d3557]">
            <div>
              <h3 className=" text-[#373995] mb-1 font-semibold">
                Achievements :
              </h3>
              <p>
                Graduated with 1st position in Class 12th, achieving a grade of
                93.67%. 🥇🏆
              </p>
            </div>
            <div>
              <h3 className=" text-[#373995] mt-3 font-semibold">
                Certifications :
              </h3>
              <div>
                <div className="flex justify-between md:flex-row flex-col">
                  <h3 className="font-semibold">
                    1. Data Structures and Algorithms :{" "}
                  </h3>
                  <h3 className="font-semibold text-gray-600">
                    (By APNA COLLEGE)
                  </h3>
                </div>
                <p>
                  Completed a course in Data Structures and Algorithms (DSA)
                  with Java from Alpha by Apna College, enhancing my ability to
                  solve complex problems efficiently.
                </p>
              </div>
              <div className="mt-3">
                <div className="flex justify-between md:flex-row flex-col">
                  <h3 className="font-semibold">
                    2. Full Stack Web Development Certification :
                  </h3>
                  <h3 className="font-semibold text-gray-600">
                    (By APNA COLLEGE)
                  </h3>
                </div>
                <p>
                  Completed a comprehensive Full Stack Web Development
                  certification, covering front-end technologies such as HTML,
                  CSS, and JavaScript, as well as back-end technologies
                  including Node.js, Express.js, and MongoDB, equipping me with
                  the skills to build dynamic and responsive web applications.
                </p>
              </div>
              <div>
                <div className="flex justify-between md:flex-row flex-col mt-3">
                  <h3 className="font-semibold">
                    3. Course On Computer Concept{" "}
                  </h3>
                  <h3 className="font-semibold text-gray-600">
                    NATIONAL INSTITUTE OF ELECTRONICS AND INFORMATION TECHNOLOGY
                    ( NIELET )
                  </h3>
                </div>
                <p>
                  Completed a course in Data Structures and Algorithms (DSA)
                  with Java from Alpha by Apna College, enhancing my ability to
                  solve complex problems efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 mb-3" id="projects"></div>
      {/* <hr className='text-green-600 mt-10 mb-5 border-2 h-2 shadow-lg shadow-green-700'/> */}
      {/* <hr className='text-[#1d3557] mt-16 mb-10 border h-2 shadow-lg shadow-[#1d3557]'/> */}
    </>
  );
};

export default About;
