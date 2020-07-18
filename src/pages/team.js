import React from "react";
import Layout from "../components/layout";
import Intro from "../components/intro";
import EmployeeCard from "../components/employerCard";
import { managementTeam, technicalTeam } from "../data/team";

const Team = () => {
  return (
    <Layout page="team">
      <Intro
        imageUrl="/intro/teamPic.jpg"
        heading="We have passion for web, We are problem solvers."
        description="We are a team of technology experts that have honed their skills over years."
      />
      <div className="">
        <h1 className="mt-11 text-center font-medium">Our management team</h1>
        <div className="flex flex-row flex-wrap items-center justify-center">
          {managementTeam.map(
            ({ id, name, position, description, image, cvLink }) => {
              return (
                <EmployeeCard
                  key={id}
                  name={name}
                  position={position}
                  description={description}
                  image={image}
                  cvLink={cvLink}
                />
              );
            }
          )}
        </div>
      </div>
      <div className="">
        <h1 className="mt-11 text-center font-medium">Our technical team</h1>
        <div className="flex flex-row flex-wrap items-center justify-center">
          {technicalTeam.map(
            ({ id, name, position, description, image, cvLink }) => {
              return (
                <EmployeeCard
                  key={id}
                  name={name}
                  position={position}
                  description={description}
                  image={image}
                  cvLink={cvLink}
                />
              );
            }
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Team;
