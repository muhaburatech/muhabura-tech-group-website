import React from "react";

import { SecondaryButton } from "./buttons";

const ServiceCard = ({ service }) => {
  const { name, iconPath, link, description } = service;
  return (
    <div className="max-w-md py-4 px-8 bg-white shadow-md rounded-lg mb-3 my-20 m-2 md:m-10 hover:shadow-xl">
      <div className="flex justify-center -mt-16">
        <img
          className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
          src={iconPath}
          alt="service icon"
        />
      </div>
      <div className="flex flex-col flex-no-wrap items-center">
        <h2 className="text-gray-800 text-2xl md:text-3xl font-semibold">
          {name}
        </h2>
        <p className="mt-2 text-center text-gray-600 text-lg md:text-xl leading-relaxed">
          {description}
        </p>

        <div className="mt-10 mb-3">
          <SecondaryButton text="Learn more" to={link} />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
