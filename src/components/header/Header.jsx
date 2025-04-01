import React, { useEffect, useRef, useState } from "react";
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
    <div className="flex h-[60px] w-[100%] items-center justify-between bg-[#101010] px-10 text-white shadow shadow-[#bbbbbb21]">
      <div className="d-flex items-center justify-center">
        <div className="font-poppins text-4xl">
          {/* Breadcrumb */}
          <nav className="text-lg text-gray-400">
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
        className="flex items-center justify-center gap-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <img
            className="h-10 w-10 rounded-full"
            src="https://imgcdn.stablediffusionweb.com/2024/10/6/fdb52901-3177-4f88-aa73-606a53b41e37.jpg"
            alt="profile"
            width={40}
          />
        </div>
        <div className="">
          <h4 className="font-k2d text-lg">Shahbaz Ansari</h4>
        </div>
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-5 top-[48px] z-10 mt-2 w-[250px] rounded-md bg-[#303030] py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-300"
        >
          <div className="flex justify-center gap-3 px-3 py-3">
            <div>
              <img
                className="h-10 w-10 rounded-full"
                src="https://imgcdn.stablediffusionweb.com/2024/10/6/fdb52901-3177-4f88-aa73-606a53b41e37.jpg"
                alt="profile"
                width={40}
              />
            </div>
            <div className="">
              <h4 className="font-k2d text-lg">Shahbaz Ansari</h4>
              <div className="mt-[-2px] flex items-center gap-1">
                <div className="h-[10px] w-[10px] rounded-full bg-green-400"></div>
                <h6 className="text-[13px]">Administrator</h6>
              </div>
            </div>
          </div>
          <div className="mx-auto w-[95%]">
            <hr className="opacity-20" />
          </div>
          <ul className="py-1 text-[15px] font-medium">
            {genres.map((genre) => (
              <li
                key={genre}
                className="mt-1 flex cursor-pointer items-center gap-2 px-6 py-2 hover:bg-[#383838]"
                onClick={closeDropdown}
              >
                <div>
                  <img src="/icons/notes.svg" className="w-[23px]" alt="icon" />
                </div>
                {genre}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
