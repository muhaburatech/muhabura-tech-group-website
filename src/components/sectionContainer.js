import React from "react";

const SectionContainer = ({ title, children }) => {
  return (
    <section className="flex flex-wrap flex-col items-center mt-10">
      <h1 className="text-gray-800 text-5xl font-semibold">{title}</h1>
      {children}
    </section>
  );
};

export default SectionContainer;
