"use client"
import React from 'react';
import { RiHome3Line, RiFolderUserLine } from 'react-icons/ri';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { MdOutlineContactPhone } from 'react-icons/md';
import { IoMdExit } from 'react-icons/io';
import { GiPlagueDoctorProfile } from "react-icons/gi";
import Link from 'next/link';
import scroll from '../functions/scroll';
import exit from '../functions/exit';
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 h-screen flex flex-col justify-between w-20 ml-10 py-10">
      {/* logo */}
      <Link className="text-4xl" href={"/"}><GiPlagueDoctorProfile/></Link>

      {/* navbar */}
      <ul className="text-3xl flex flex-col gap-5">
        <li className="tooltip relative">
          <button onClick={() => scroll("home")}>
            <RiHome3Line />
          </button>
          <span className="tooltiptext">Home</span>
        </li>
        <li className="tooltip relative">
          <button  onClick={() => scroll("about")}>
            <RiFolderUserLine />
          </button>
          <span className="tooltiptext">About</span>
        </li>
        <li className="tooltip relative">
          <button  onClick={() => scroll("portfolio")}>
            <IoBriefcaseOutline />
          </button>
          <span className="tooltiptext">Portfolio</span>
        </li>
        <li className="tooltip relative">
          <button  onClick={() => scroll("contacts")}>
            <MdOutlineContactPhone />
          </button>
          <span className="tooltiptext">Contacts</span>
        </li>
      </ul>

      {/* exit */}
      <button  className="tooltip relative text-3xl" onClick={exit}>
        <IoMdExit />
        <span className="tooltiptext">Exit</span>
      </button>
    </nav>
  );
};

export default Navbar;
