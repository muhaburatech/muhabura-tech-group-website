import React from "react";

const ProjectCard = ({
  project: { name = "", image = "", description = "", demoLink = "" },
}) => {
  return (
    <div className="m-4 hover:shadow-lg hover:cursor-pointer p-5 shadow-md rounded  my-5 flex flex-row flex-wrap md:flex-no-wrap items-start">
      <div>
        <img
          className="w-96 md:w-auto max-w-md"
          src={image}
          alt="project screenshot"
        />
      </div>
      <div className="max-w-2xl ml-4 flex flex-col flex-no-wrap">
        <h1>{name}</h1>
        <p className="max-w-lg">{description}</p>
        <a
          className="px-4 py-3 my-4 bg-gray-900 text-gray-200 text-md font-medium  rounded hover:bg-gray-800 max-w-max-content"
          href={demoLink}
          target="_blank"
          rel="noreferrer"
        >
          Visit work
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
