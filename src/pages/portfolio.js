import React from "react";
import Layout from "../components/layout";
import Intro from "../components/intro";

const Portfolio = () => {
  return (
    <Layout page="portfolio">
      <Intro
        imageUrl="/intro/portfolio.jpg"
        heading="We have passion for web, We are problem solvers."
        description="We are a team of technology experts that have honed their skills over years."
      />
    </Layout>
  );
};

export default Portfolio;
