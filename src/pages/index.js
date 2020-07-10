import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

export default function Home() {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
}

function Hero() {
  return (
    <div className="flex bg-white h-72 lg:h-96">
      <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 md:text-6xl">
            Build Your Company’s
            <span className="text-indigo-600"> Future</span>
          </h2>
          <p className="mt-8 text-sm text-gray-700 md:text-2xl">
            Develop custom software that will move your business forward.
          </p>
          <div className="flex justify-center lg:justify-start mt-12">
            <Link
              className="px-4 py-3 bg-gray-900 text-gray-200 text-md font-medium  rounded hover:bg-gray-800"
              to="/contact"
            >
              Get Started
            </Link>
            <Link
              className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-md font-medium  rounded hover:bg-gray-400"
              to="/about"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div
        className="hidden lg:block lg:w-1/2"
        style={{ clipPath: `polygon(10% 0, 100% 0%, 100% 100%, 0 100%)` }}
      >
        <div
          className="h-full object-cover"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80)",
          }}
        >
          <div className="h-full bg-black opacity-25"></div>
        </div>
      </div>
    </div>
  );
}

// function Service() {

// }
