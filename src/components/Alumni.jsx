import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

function Alumni() {
  const team = [
    {
      name: "Ankit Sisodya",
      position: "Member",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, provident.",
      email: "ankitsingh24012005@gmail.com",
      linkedin: "www.linkedin.com",
      img: "assets/Ankit_lecture.jpeg",
    },
    {
      name: "Ankit Sisodya",
      position: "Member",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, provident.",
      email: "ankitsingh24012005@gmail.com",
      linkedin: "www.linkedin.com",
      img: "assets/Ankit_lecture.jpeg",
    },
    {
      name: "Ankit Sisodya",
      position: "Member",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, provident.",
      email: "ankitsingh24012005@gmail.com",
      linkedin: "www.linkedin.com",
      img: "assets/Ankit_lecture.jpeg",
    },
    {
      name: "Ankit Sisodya",
      position: "Member",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, provident.",
      email: "ankitsingh24012005@gmail.com",
      linkedin: "www.linkedin.com",
      img: "assets/Ankit_lecture.jpeg",
    },
    {
      name: "Ankit Sisodya",
      position: "Member",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, provident.",
      email: "ankitsingh24012005@gmail.com",
      linkedin: "www.linkedin.com",
      img: "assets/Ankit_lecture.jpeg",
    },
    {
      name: "Ankit Sisodya",
      position: "Member",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, provident.",
      email: "ankitsingh24012005@gmail.com",
      linkedin: "www.linkedin.com",
      img: "assets/Ankit_lecture.jpeg",
    },
    {
      name: "Ankit Sisodya",
      position: "Member",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, provident.",
      email: "ankitsingh24012005@gmail.com",
      linkedin: "www.linkedin.com",
      img: "assets/Ankit_lecture.jpeg",
    },
    {
      name: "Ankit Sisodya",
      position: "Member",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, provident.",
      email: "ankitsingh24012005@gmail.com",
      linkedin: "www.linkedin.com",
      img: "assets/Ankit_lecture.jpeg",
    },
  ];
  return (
    <div className="bg-[#000818]  w-full">
      <div className="bg-[url('/assets/image3-1.png')] bg-cover bg-center bg-no-repeat  w-full h-36 flex justify-center items-center">
        <div className="text-center font-extrabold text-6xl text-white ">
          Alumni
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 mt-6 gap-x-6 gap-y-6 mx-6 p-3">
        {team.map((alumni, index) => (
          <div key={index}>
            <div className="relative">
              <img
                src={alumni.img}
                alt=""
                className="content-fit rounded-3xl"
              />
            </div>
            <div className="pl-2 mt-1">
              <div className=" text-white text-[32px] font-normal font-['Arial Rounded MT Bold'] leading-none">{alumni.name}</div>
              <div>{alumni.position}</div>
              <hr/>
                <div className="mt-2 text-[#636363]">
                {alumni.description}
                </div>
              <div className="flex gap-x-2">
                <span>
                  <FaLinkedin className="text-white" />{" "}
                </span>
                <span>
                  <FaEnvelope className="text-white" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Alumni;
