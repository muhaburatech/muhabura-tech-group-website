import React from "react";

const EmployeeCard = ({
  name = "",
  position = "",
  description = "",
  image = "",
}) => {
  return (
    <div className="max-w-md py-4 px-8 bg-white shadow-md rounded-lg mb-3 my-20 m-2 md:m-10 hover:shadow-xl">
      <div className="flex justify-center -mt-16">
        <img
          className="w-32 h-32 object-cover rounded-full border-2 border-indigo-500"
          src={image}
          alt="team member"
        />
      </div>
      <div className="flex flex-col flex-no-wrap items-center">
        <h4 className="mt-5 text-gray-800 text-lg font-semibold">{name}</h4>
        <h2 className="mt-5 text-gray-800 text-2xl md:text-3xl font-bold">
          {position}
        </h2>
        <p className="mt-2 text-center text-gray-600 text-lg md:text-xl leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EmployeeCard;
