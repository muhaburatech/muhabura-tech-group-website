import React, { useState } from "react";
import { Link } from "gatsby";

const Header = ({ page }) => {
  const [openNav, setOpenNav] = useState(false);

  const handleOpenNav = () => {
    return setOpenNav(!openNav);
  };

  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="lg:w-0 lg:flex-1">
            <Link to="/" className="flex">
              <img
                className="h-14 mb-0 w-auto sm:h-10 px-4"
                src="/logo.png"
                alt="Logo"
              />
            </Link>
          </div>
          <div className={`${openNav && "hidden"} -mr-2 -my-2 md:hidden px-5`}>
            <button
              type="button"
              onClick={handleOpenNav}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <div className="relative">
              <Link
                to="/"
                className={`${
                  page === undefined ? "text-indigo-500" : ""
                } text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150`}
              >
                Home
              </Link>
            </div>
            <Link
              to="/services"
              className={`${
                page === "services" ? "text-indigo-500" : ""
              } text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150`}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className={`${
                page === "portfolio" ? "text-indigo-500" : ""
              } text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150`}
            >
              Portfolio
            </Link>

            <Link
              to="/team"
              className={`${
                page === "team" ? "text-indigo-500" : ""
              } text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150`}
            >
              Team
            </Link>
            <Link
              to="/about"
              className={`${
                page === "about" ? "text-indigo-500" : ""
              } text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`${
                page === "contact" ? "text-indigo-500" : ""
              } text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
      <div
        className={`${
          !openNav && "hidden"
        } absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}
      >
        <div className="rounded-lg shadow-lg">
          <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-14 mb-0 w-auto"
                    src="/logo.png"
                    alt="Logo"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    onClick={handleOpenNav}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 row-gap-4 col-gap-8">
                <Link
                  to="/services"
                  className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                >
                  Services
                </Link>
                <Link
                  to="/portfolio"
                  className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                >
                  Portfolio
                </Link>
                <Link
                  to="/team"
                  className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                >
                  Team
                </Link>
                <Link
                  to="/about"
                  className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
