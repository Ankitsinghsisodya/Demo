import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

function Contact() {
  return (
    <div className="bg-[#000818] w-full">
      <div className="bg-[url('/src/assets/image3-1.png')] bg-cover bg-center bg-no-repeat  w-full h-36 flex justify-center items-center">
        <div className="text-center font-bold text-6xl text-white  ">
          Contact Us
        </div>
      </div>
      <div className="flex w-full p-9 md:p-32 gap-x-2 md:gap-x-16">
        <div className=" md:ml-6 p-6 min-w-[60%] max-h-96 h-120 bg-gradient-to-r from-[#0059ff] to-[#02112c] rounded-md border-[#79caf0]/10 backdrop-blur-[170px] ">
          <div className="flex items-center gap-x-2">
            <FaMessage className="text-4xl text-[#5a88ff]" />
            <h1 className="text-sm md:text-4xl text-[#5a88ff]">Send us a message</h1>
          </div>
          <div>
            <form action="" className="flex flex-col gap-y-2">
              <label className="text-white">Name</label>
              <input
                type="text"
                className=" bg-[#d9d9d9]/5 rounded-lg border border-white/20"
              />
              <label className="text-white">Email</label>
              <input
                type="text"
                className="bg-[#d9d9d9]/5 rounded-lg border border-white/20"
              />
              <label className="text-white">Message</label>
              <textarea
                type="text"
                className="bg-[#d9d9d9]/5 rounded-lg border border-white/20"
              />
              <button className="bg-[#25b0fb] text-white rounded-3xl p-3 font-bold text-xl">
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="w-1 h-auto my-4 bg-gray-300/20"></div>
        <div className="flex flex-col justify-center ml-1 md:ml-10 gap-y-3">
          <div className="font-extrabold text-3xl text-[#5a88ff]">Contact</div>
          <div>
            <div className="text-white">Phone Number</div>
            <div className="text-white">mail@bitmesra.ac.in</div>
            <div className="text-white">Address, BIT Mesra</div>
            <div className="text-white">Ranchi, Jharkhand</div>
          </div>
          <div className="font-extrabold text-3xl text-[#5a88ff]">Connect</div>
          <div className="flex gap-x-2">
            <FaInstagram className="h-6 w-6 text-[#AAAAAA]" />
            <FaTwitter className="h-6 w-6 text-[#AAAAAA]" />
            <FaFacebook className="h-6 w-6 text-[#AAAAAA]" />
            <FaLinkedin className="h-6 w-6 text-[#AAAAAA]" />
          </div>
        </div>
      </div>
      <div className="bg-[#0c0f3d] p-6 text-3xl flex justify-center items-center text-[#616182]">
        2025 IEEE, BIT Mesra. All rights reserved.
      </div>
    </div>
  );
}

export default Contact;
