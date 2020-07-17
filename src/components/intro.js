import React from "react";

const Intro = ({ heading, description, imageUrl }) => {
  const [part1, part2] = String(heading).split(",");

  return (
    <div className="flex bg-white h-72 lg:h-48">
      <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 md:text-3xl">
            {part1},<span className="text-indigo-600">{part2}</span>
          </h2>
          <p className="mt-8 font-light text-sm text-gray-600 md:text-xl">
            {description}
          </p>
        </div>
      </div>
      <div
        className="hidden lg:block lg:w-1/2"
        style={{ clipPath: `polygon(10% 0, 100% 0%, 100% 100%, 0 100%)` }}
      >
        <div
          className="h-full object-cover"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        >
          <div className="h-full bg-black opacity-25"></div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
