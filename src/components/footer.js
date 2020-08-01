import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="flex justify-center px-4 text-gray-100 bg-gray-800">
      <div className="container py-6">
        <hr className="h-px mt-6 bg-gray-700 border-none" />

        <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
          <div>
            <Link to="/" className="text-xl font-bold">
              MUHABURA TECH GROUP
            </Link>
          </div>
          <div className="flex flex-row flex-wrap mt-4 md:m-0">
            <div className="-mx-4 flex flex-row flex-wrap justify-center ">
              <Link to="/services" className="px-4 py-3 text-sm">
                Services
              </Link>
              <Link to="/portfolio" className="px-4 py-3 text-sm">
                Portfolio
              </Link>
              <Link to="/team" className="px-4 py-3 text-sm">
                Team
              </Link>
              <Link to="/about" className="px-4 py-3 text-sm">
                About
              </Link>
              <a href="/contact" className="px-4 py-3 text-sm">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
