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
        <button className=" bg-[#e9eef4] rounded-3xl border p-3 mt-4 ">
          {" "}
          <div className="text-center text-white text-xl font-bold font-['Arial'] ">
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
              <div className="text-gray-400">{member.name}</div>
              <div className="text-[#4f6dff]">{member.position}</div>
              <div className="flex gap-x-2">
                <span>
                  <FaLinkedin className="text-white" />{" "}
                </span>
                <span>
                  <FaEnvelope className="text-white"  />
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
