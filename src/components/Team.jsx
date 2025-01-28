import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

function Team() {
  const team = [
    {
      name: "Ankit Sisodya",
      position: "Member",
      email: "ankitsingh24012005@gmail.com",
      linkedin: "www.linkedin.com",
      img: "assets/Ankit_lecture.jpeg",
    },
    {
      name: "Ankit Sisodya",
      position: "Member",
      email: "ankitsingh24012005@gmail.com",
      linkedin: "www.linkedin.com",
      img: "assets/Ankit_lecture.jpeg",
    },
    {
      name: "Ankit Sisodya",
      position: "Member",
      email: "ankitsingh24012005@gmail.com",
      linkedin: "www.linkedin.com",
      img: "assets/Ankit_lecture.jpeg",
    },
    {
      name: "Ankit Sisodya",
      position: "Member",
      email: "ankitsingh24012005@gmail.com",
      linkedin: "www.linkedin.com",
      img: "assets/Ankit_lecture.jpeg",
    },
    {
      name: "Ankit Sisodya",
      position: "Member",
      email: "ankitsingh24012005@gmail.com",
      linkedin: "www.linkedin.com",
      img: "assets/Ankit_lecture.jpeg",
    },
    {
      name: "Ankit Sisodya",
      position: "Member",
      email: "ankitsingh24012005@gmail.com",
      linkedin: "www.linkedin.com",
      img: "assets/Ankit_lecture.jpeg",
    },
    {
      name: "Ankit Sisodya",
      position: "Member",
      email: "ankitsingh24012005@gmail.com",
      linkedin: "www.linkedin.com",
      img: "assets/Ankit_lecture.jpeg",
    },
    {
      name: "Ankit Sisodya",
      position: "Member",
      email: "ankitsingh24012005@gmail.com",
      linkedin: "www.linkedin.com",
      img: "assets/Ankit_lecture.jpeg",
    },
  ];
  return (
    <div className="bg-[#000818] 0 w-full  p-6">
      <div className="text-center text-[#AFAFAF]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere beatae,
        a quod deserunt quibusdam eos quaerat inventore blanditiis est commodi.
      </div>
      <div className="flex justify-center">
        {" "}
        <button className=" bg-[#E9EEF5] opacity-[13%] rounded-3xl border p-3 mt-4 ">
          {" "}
          <div className="text-center text-[#333333]  text-xl font-bold font-['Arial'] ">
            Join the Team
          </div>
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 mt-6 gap-x-6 gap-y-6">
        {team.map((member, index) => (
          <div key={index}>
            <div className="relative">
              <img
                src={member.img}
                alt=""
                className="content-fit rounded-3xl"
              />
            </div>
            <div className="pl-2">
              <h1 className="text-[#FFFFFF] font-['Arial Rounded MT Bold'] text-2xl">{member.name}</h1>
              <div className="text-[#4f6dff] font-['Montserrat'] text-lg">{member.position}</div>
              <div className="flex gap-x-2">
                <span>
                  <FaLinkedin className="text-gray-400 bg-black" />{" "}
                </span>
                <span>
                  <FaEnvelope className="text-gray-400 bg-black"  />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
