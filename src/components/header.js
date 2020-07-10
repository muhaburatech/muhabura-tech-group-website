import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";

const Header = () => {
  const [navBackground, setNavBackground] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 670;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${navBackground ? `bg-purple-900` : ``} shadow-md py-1`}
    >
      <div className="py-2 px-2 lg:mx-4 xl:mx-12">
        <div className="">
          <nav
            className="flex items-center justify-between flex-wrap  "
            style={{ transition: "1s ease" }}
          >
            <div className="flex items-center w-12 h-12 flex-no-shrink text-white mr-6 ">
              <img
                className="mb-0"
                src="/logo.png"
                alt="muhabura tech group logo"
              />
              <Link
                to="/"
                className="block py-2 lg:inline-block text-md font-bold text-black  sm:hover:text-purple-700  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
              >
                MUHABURA<span className="text-purple-600">TECH</span>GROUP
              </Link>
            </div>
            <div className="block lg:hidden">
              <button
                onClick={() => setOpenModal(!openModal)}
                className="navbar-burger flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
              >
                <svg
                  className="fill-current h-6 w-6 text-gray-700"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div
              id="main-nav"
              className={`w-full flex-grow lg:flex items-center lg:w-auto ${
                openModal ? "" : "hidden"
              }`}
            >
              <div className="text-sm lg:flex justify-center lg:justify-end lg:flex-grow mt-2 animated jackinthebox xl:mx-8">
                <Link
                  to="/"
                  className="block py-2 lg:inline-block text-md font-bold  text-purple-700  sm:hover:text-purple-700  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  HOME
                </Link>
                <Link
                  to="/services"
                  className="block py-2 lg:inline-block text-md font-bold  text-gray-900  sm:hover:text-purple-700  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  SERVICES
                </Link>
                <Link
                  to="/portfolio"
                  className="block py-2 lg:inline-block text-md font-bold  text-gray-900  sm:hover:text-purple-700  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  PORTFOLIO
                </Link>
                <Link
                  to="/team"
                  className="block py-2 lg:inline-block text-md font-bold  text-gray-900  sm:hover:text-purple-700  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  OUR TEAM
                </Link>
                <Link
                  to="/about"
                  className="block py-2 lg:inline-block text-md font-bold  text-gray-900  sm:hover:text-purple-700  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  ABOUT US
                </Link>
                <Link
                  to="/contact"
                  className="block py-2 lg:inline-block text-md font-bold  text-gray-900  sm:hover:text-purple-700  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  CONTACT US
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
