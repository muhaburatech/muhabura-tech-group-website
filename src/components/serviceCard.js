import React from "react";
import { useLocation } from "@reach/router";

import { SecondaryButton } from "./buttons";

const ServiceCard = ({ service }) => {
  const { name, iconPath, link, description, longDescription } = service;
  let location = useLocation();

  return (
    <div className="max-w-sm py-4 px-8 bg-white shadow-md rounded-lg mb-3 my-20 m-2 md:m-10 hover:shadow-xl">
      <div className="flex justify-center -mt-16">
        <img
          className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
          src={iconPath}
          alt="service icon"
        />
      </div>
      <div className="flex flex-col flex-no-wrap items-center">
        <h2 className="text-gray-800 text-2xl md:text-2xl font-semibold">
          {name}
        </h2>

        {location.pathname === "/services" ? (
          <p className="mt-2 text-center text-gray-600 text-lg leading-relaxed">
            {longDescription}
          </p>
        ) : (
          <>
            <p className="mt-2 text-center text-gray-600 text-lg leading-relaxed">
              {description}
            </p>
            <div className="mt-10 mb-3">
              <SecondaryButton text="Learn more" to={link} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
