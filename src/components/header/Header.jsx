import React, { useEffect, useRef, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { SlOptionsVertical } from "react-icons/sl";
import { Link, useLocation } from "react-router-dom";

const genres = [
  "Adventure",
  "Most Popular",
  "Comedy",
  "Romance",
  "Action",
  "Movies",
  "Latest Shows",
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const dropdownRef = useRef(null);

  const closeDropdown = () => {
    setIsOpen(false);
  };

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const location = useLocation();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment);
  return (
    <div className="flex h-[60px] w-[100%] items-center justify-between bg-[#101010] px-6 text-white shadow shadow-[#bbbbbb21] sm:px-10">
      <div className="flex items-center justify-between gap-20">
        <div className="font-poppins text-4xl">
          {/* Breadcrumb */}
          <nav className="text-base text-gray-400 sm:text-lg">
            <Link to="/dashboard" className="hover:text-gray-600">
              Pages
            </Link>
            {pathSegments.map((segment, index) => {
              const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
              return (
                <span key={path} className="text-gray-600">
                  {" /"}
                  {index === pathSegments.length - 1 ? (
                    <span>
                      {segment.charAt(0).toUpperCase() + segment.slice(1)}
                    </span> // Capitalize
                  ) : (
                    <Link to={path} className="hover:text-gray-600">
                      {segment.charAt(0).toUpperCase() + segment.slice(1)}
                    </Link>
                  )}
                </span>
              );
            })}
          </nav>
        </div>
      </div>

      <div
        className="flex items-center justify-center gap-3 sm:gap-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <img
            className="h-7 w-7 rounded-full sm:h-10 sm:w-10"
            src="https://imgcdn.stablediffusionweb.com/2024/10/6/fdb52901-3177-4f88-aa73-606a53b41e37.jpg"
            alt="profile"
            width={40}
          />
        </div>
        <div className="">
          <h4 className="font-k2d text-base sm:text-lg">Shahbaz Ansari</h4>
        </div>
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-5 top-[48px] z-10 mt-2 w-[200px] rounded-md bg-[#303030] py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-300 sm:w-[250px]"
        >
          <div className="flex items-center justify-center gap-3 px-3 py-3">
            <div>
              <img
                className="h-8 w-8 rounded-full sm:h-10 sm:w-10"
                src="https://imgcdn.stablediffusionweb.com/2024/10/6/fdb52901-3177-4f88-aa73-606a53b41e37.jpg"
                alt="profile"
                width={40}
              />
            </div>
            <div className="">
              <h4 className="font-k2d text-base sm:text-lg">Shahbaz Ansari</h4>
              <div className="mt-[-2px] flex items-center gap-1">
                <div className="h-[6px] w-[6px] rounded-full bg-green-400 sm:h-[10px] sm:w-[10px]"></div>
                <h6 className="text-[11px] sm:text-[13px]">Administrator</h6>
              </div>
            </div>
          </div>
          <div className="mx-auto w-[95%]">
            <hr className="opacity-20" />
          </div>
          <ul className="py-1 text-[13px] font-medium sm:text-[15px]">
            {genres.map((genre) => (
              <li
                key={genre}
                className="mt-1 flex cursor-pointer items-center gap-2 px-6 py-2 hover:bg-[#383838]"
                onClick={closeDropdown}
              >
                <div>
                  <img
                    src="/icons/notes.svg"
                    className="w-[18px] sm:w-[23px]"
                    alt="icon"
                  />
                </div>
                <span className="-mb-1">{genre}</span>
              </li>
            ))}
          </ul>
          <div className="mx-auto w-[95%]">
            <hr className="opacity-20" />
          </div>
          <div className="px-2 py-2">
            <button
              // onClick={onLogout}
              className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-[#4fd1c5] transition-colors bg-[#4fd1c5]/10 focus:outline-none focus:ring-2 focus:ring-[#4fd1c5]/20 active:bg-[#4fd1c5]/20"
            >
              <FiLogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
