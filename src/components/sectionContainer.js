import React from "react";

const SectionContainer = ({ title, children, mode }) => {
  return (
    <section
      className={`${
        mode === "light" ? "bg-gray-100 bg-opacity-75" : ""
      } flex flex-wrap flex-col items-center mt-10 pb-8`}
    >
      <h1 className="text-gray-800 text-5xl font-semibold">{title}</h1>
      {children}
    </section>
  );
};

export default SectionContainer;
