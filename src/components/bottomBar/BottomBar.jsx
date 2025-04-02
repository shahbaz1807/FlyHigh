import React from 'react'
import { NavLink } from "react-router-dom";

const BottomBar = () => {
    const navItems = [
      { name: "Dashboard", link: "/dashboard", icon: "/icons/home.svg" },
      { name: "Earning", link: "/earning", icon: "/icons/chart.svg" },
      { name: "Notes", link: "/notes", icon: "/icons/notes.svg" },
      { name: "Plans", link: "/plans", icon: "/icons/Rocket.svg" },
      { name: "Profile", link: "/profile", icon: "/icons/user.svg" },
    ];
  return (
    <div className="pt-20">
    <div className="fixed z-[100] md:hidden flex bottom-0 left-0 w-full items-center justify-around  bg-[#101010] p-2 text-black shadow shadow-[#bbbbbb]">
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.link}
          className="flex flex-col items-center text-xs text-gray-700 transition hover:text-black"
          activeClassName="text-black font-bold"
        >
          <div className="flex h-[40px] w-[40px] min-w-10 items-center justify-center rounded-2xl bg-zinc-600 transition-all duration-500">
            <img src={item.icon} alt={item.name} className="h-6 w-6" />
          </div>
        </NavLink>
      ))}
    </div>
    </div>
  );
}

export default BottomBar