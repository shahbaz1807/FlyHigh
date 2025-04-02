import React, { useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaAngleRight, FaBitcoin } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi"; 
import { GiSwapBag } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const pageLinks = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: "/icons/home.svg",
    },
    {
      name: "Earning",
      link: "/earning",
      icon: "/icons/chart.svg",
    },
    {
      name: "Notes",
      link: "/notes",
      icon: "/icons/notes.svg",
    },
    {
      name: "Plans",
      link: "/plans",
      icon: "/icons/Rocket.svg",
    },
  ];

  return (
    <>
    <div
      className={` ${
        open ? "w-[330px]" : "w-24"
      } min-h-screen bg-[#101010] text-[#4FD1C5] shadow hidden md:block shadow-[#bbbbbb21] duration-300`}
    >
      <div className="relative h-[95vh] w-full p-5 pt-8">
        <FaAngleRight
          className={`border-dark-purple absolute -right-3 top-11 w-7 cursor-pointer rounded-full border-2 bg-slate-500 transition-all duration-300 ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />

        {/* Logo Section */}
        <Link to={'/'}>
        <div className="flex items-center gap-x-4">
          <img
            src="/logo.png"
            width={45}
            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
          />
          <h1
            className={`origin-left font-k2d text-2xl font-medium text-white duration-200 ${
              !open && "scale-0"
            }`}
          >
            FlyHigh
          </h1>
        </div>
        </Link>

        {/* Sidebar Menu */}
        <div className="mt-9">
          {pageLinks.map((item, i) => {
            return (
              <Link
                to={item.link}
                key={i}
                className={`mt-4 flex h-11 cursor-pointer items-center rounded-2xl py-8 transition-all duration-500 ${
                  open ? "justify-start px-4 hover:bg-[#303030]" : "px-1"
                }`}
              >
                {/* Icon Box - Fixed Width & Smooth Transition */}
                <div className="flex h-[40px] w-[40px] min-w-10 items-center justify-center rounded-2xl bg-zinc-600 transition-all duration-500">
                  <img src={item.icon} className="w-[23px]" alt="Home Icon" />
                </div>

                {/* Text - Smoothly Hide with Opacity */}
                <span
                  className={`ml-4 font-montserrat text-lg font-medium text-white transition-all duration-500 ${
                    open
                      ? "max-w-[200px] opacity-100"
                      : "max-w-0 overflow-hidden opacity-0"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Logout Button */}
        <div className="absolute bottom-5 left-0 w-full px-5">
          <button
            className={`col flex h-11 w-full cursor-pointer items-center rounded-md bg-zinc-600 transition-all duration-300 ${
              open ? "justify-start px-4" : "justify-center px-4"
            }`}
          >
            <FiLogOut size={22} />
            <span
              className={`ml-4 font-montserrat text-lg font-medium transition-all duration-300 ${
                !open && "hidden"
              }`}
            >
              Log Out
            </span>
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Sidebar;
