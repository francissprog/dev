"use client"
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { RiHome3Line, RiFolderUserLine } from 'react-icons/ri';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { MdOutlineContactPhone } from 'react-icons/md';
import { IoMdExit } from 'react-icons/io';
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { BsListNested } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import Link from 'next/link';

const Navbar = ({ scroll }) => {
  // function to get the browser info
  const getBrowserInfo = () => {
    const userAgent = navigator.userAgent;

    if (userAgent.indexOf("Brave") > -1) {
      return "Brave";
    } else if (userAgent.indexOf("Firefox") > -1) {
      return "Firefox";
    } else if (userAgent.indexOf("OPR") > -1 || userAgent.indexOf("Opera") > -1) {
      return "Opera";
    } else if (userAgent.indexOf("Trident") > -1) {
      return "Internet Explorer";
    } else if (userAgent.indexOf("Edge") > -1) {
      return "Edge";
    } else if (userAgent.indexOf("Chrome") > -1) {
      return "Chrome";
    } else if (userAgent.indexOf("Safari") > -1) {
      return "Safari";
    }

    return "Unknown";
  };

  const exit = () => {
    const browserInfo = getBrowserInfo();
    let redirectUrl;

    if (
      browserInfo === "Chrome" || browserInfo === "Brave" ||
      browserInfo === "Firefox" || browserInfo === "Edge" ||
      browserInfo === "Internet Explorer" || browserInfo === "Opera" ||
      browserInfo === "Safari"
    ) {
      redirectUrl = "https://www.google.com/";
    }

    Swal.fire({
      title: "Do you want to exit?",
      allowOutsideClick: false,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      showCancelButton: true,
      customClass: {
        confirmButton: "custom-confirm-btn",
        cancelButton: "custom-cancel-btn",
      }
    }).then(result => {
      if (result.isConfirmed) {
        window.location.href = redirectUrl;
      }
    });
  };

  // toggle state
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 h-full  flex-col justify-between w-20 py-10 ml-10 hidden lg:flex">
        {/* logo */}
        <Link className="text-4xl" href={"/"}><GiPlagueDoctorProfile /></Link>

        {/* navbar */}
        <ul className="text-3xl flex flex-col gap-5">
          <li className="tooltip relative">
            <button onClick={() => scroll("home")}>
              <RiHome3Line />
            </button>
            <span className="tooltiptext">Home</span>
          </li>
          <li className="tooltip relative">
            <button onClick={() => scroll("about")}>
              <RiFolderUserLine />
            </button>
            <span className="tooltiptext">About</span>
          </li>
          <li className="tooltip relative">
            <button onClick={() => scroll("portfolio")}>
              <IoBriefcaseOutline />
            </button>
            <span className="tooltiptext">Portfolio</span>
          </li>
          <li className="tooltip relative">
            <button onClick={() => scroll("contacts")}>
              <MdOutlineContactPhone />
            </button>
            <span className="tooltiptext">Contacts</span>
          </li>
        </ul>

        {/* exit */}
        <button className="tooltip relative text-3xl" onClick={exit}>
          <IoMdExit />
          <span className="tooltiptext">Exit</span>
        </button>
      </nav>



      {/* Toggle nav when in smaller screens */}
<button
  className={`lg:hidden absolute top-10 right-10 text-4xl`}
  onClick={() => setShowNav(!showNav)}
>
  <BsListNested />
</button>

<nav 
  className={`fixed top-0 right-0 h-full w-[200px] py-10 pl-5 bg-[#353839] dark:bg-[#F8F8FF] lg:hidden text-[#F8F8FF] dark:text-[#353839] ${showNav ? "block" : "hidden"} flex flex-col justify-between`}
>
      {/* Exit nav icon */}
      <button className='text-5xl' onClick={() => setShowNav(!showNav)}>
        <IoIosClose/>
      </button>
      {/*nav   */}
      <div className='flex flex-col gap-6'>
            <div> 
               <button onClick={() => scroll("home")} className='flex items-center text-xl gap-2'>
                   <RiHome3Line /> Home
               </button>
            </div> 
            <div> 
               <button onClick={() => scroll("about")} className='flex items-center text-xl gap-2'>
                   <RiFolderUserLine /> About
               </button>
            </div> <div> 
               <button onClick={() => scroll("portfolio")} className='flex items-center text-xl gap-2'>
                   <IoBriefcaseOutline /> Portfolio
               </button>
            </div> <div> 
               <button onClick={() => scroll("contacts")} className='flex items-center text-xl gap-2'>
                   <MdOutlineContactPhone /> Contacts
               </button>
            </div>
      </div>
      {/* button for exit */}
      <button className="text-3xl flex items-center" onClick={exit}>
               <IoMdExit />
               <span className='text-xl'>Exit</span>       
      </button>
</nav>

    </>
  );
};

export default Navbar;
