import React from "react";
import Layout from "../components/layout";
import Intro from "../components/intro";
import ProjectCard from "../components/projectCard";
import projects from "../data/projects";

const Portfolio = () => {
  return (
    <Layout page="portfolio">
      <Intro
        imageUrl="/intro/portfolio.jpg"
        heading="We have passion for web, We are problem solvers."
        description="We are a team of technology experts that have honed their skills over years."
      />
      <h1 className="mx-auto max-w-2xl mt-11 text-center">Our work</h1>
      <div className="flex flex-col flex-no-wrap justify-center items-center">
        {projects.map(project => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </Layout>
  );
};

export default Portfolio;
