import React from "react";
import Layout from "../components/layout";
import Intro from "../components/intro";
import EmployeeCard from "../components/employerCard";

const Team = () => {
  return (
    <Layout page="team">
      <Intro
        imageUrl="/teamPic.jpg"
        heading="We have passion for web, We are problem solvers."
        description="We are a team of technology experts that have honed their skills over years."
      />
      <div className="mx-auto max-w-2xl">
        <h1 className="mt-11">Our team</h1>
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
      </div>
    </Layout>
  );
};

export default Team;
