import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <div className=" relative flex gap-y-2 flex-col items-center justify-center bg-[url('/src/assets/image3-1.png')] bg-cover bg-center bg-no-repeat  min-w-screen min-h-[5%] md:min-h-[25%] p-4 md:p-10 bg-[#000818] ">
      <nav class="min-w-[99%] flex items-center justify-between rounded-r-4xl rounded-l-4xl border   h-16 bg-gradient-to-r from-[#3759e2] to-[#c0bfbf] rounded-lg  border-white/10 backdrop-blur-[11.50px] text-white p-3 mb-28 w-full">
        <div className="flex justify-center items-center pt-2">
          <img
            src="src/assets/IEEE.png"
            alt=""
            className="w-32 h-12 object-contain"
          />
        </div>
        <div className="hidden md:flex gap-x-6 mr-6">
          <div className="font-bold text-white">Events</div>
          <div>Alumni</div>
          <div>Workshops</div>
          <div>About us</div>
          <div>Our Team</div>
          <div>Contact Us</div>
          <div>Join us</div>
        </div>
        <div className="md:hidden cursor-pointer pr-6 z-40">
        {open ? (
          <FaTimes
            onClick={() => setOpen(false)}
            className="text-2xl text-white hover:text-gray-600 transition-all"
          />
        ) : (
          <FaBars
            onClick={() => setOpen(true)}
            className="text-2xl text-white hover:text-gray-600 transition-all"
          />
        )}
        </div>
        {open && (
          <div className="md:hidden flex flex-col  absolute right-9 top-5">
            <div className="font-bold text-white cursor-pointer">Events</div>
            <div className="font-bold text-white cursor-pointer">Alumni</div>
            <div className="font-bold text-white cursor-pointer">Workshops</div>
            <div className="font-bold text-white cursor-pointer">About us</div>
            <div className="font-bold text-white cursor-pointer">Our Team</div>
            <div className="font-bold text-white cursor-pointer">
              Contact Us
            </div>
            <div className="font-bold text-white cursor-pointer">Join us</div>
          </div>
        )}
      </nav>
      <div className="text-white mt-4 ">
        <div className="text-center text-white text-5xl font-semibold font-['Montserrat'] leading-none max-w-[92rem] max-h-[15rem]  bg-gradient-to-r from-[#2528ff] to-neutral-500">
          Meet Our Team
        </div>
        <div className="text-center">Home/Our Teams</div>
      </div>
    </div>
  );
}

export default Nav;
