import React, { useState } from "react";
import { Link } from "gatsby";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const handleOpenNav = () => {
    return setOpenNav(!openNav);
  };
  return (
    <nav className="bg-white shadow mb-2">
      <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
        <div className="flex justify-between items-center">
          <div className="sm:text-3xl mt-1 font-bold text-gray-800 md:text-3xl">
            <Link to="/">
              MUHABURA<span className="text-indigo-600">-TECH</span>-GROUP
            </Link>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              onClick={handleOpenNav}
              className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  className={` ${!openNav && `hidden`}`}
                  d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
                />
                <path
                  className={` ${openNav && `hidden`}`}
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`flex items-center mt-6 md:mt-0 flex-col md:flex-row md:block -mx-2 ${
            !openNav && `hidden`
          }`}
        >
          <Link
            to="/"
            className="bg-gray-900 text-gray-100  rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
          >
            Portfolio
          </Link>
          <Link
            to="/team"
            className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
          >
            Our team
          </Link>
          <Link
            to="/about"
            className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
