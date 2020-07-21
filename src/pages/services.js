import React from "react";
import Layout from "../components/layout";
import Intro from "../components/intro";
import services from "../data/services";
import ServiceCard from "../components/serviceCard";
import SectionContainer from "../components/sectionContainer";

const Services = () => {
  return (
    <Layout pageTitle="Services" page="services">
      <Intro
        imageUrl="/intro/services.jpeg"
        heading="We have passion for web, We are problem solvers."
        description="We are a team of technology experts that have honed their skills over years."
      />
      <Service />
    </Layout>
  );
};

export default Services;

function Service() {
  return (
    <SectionContainer title="Services">
      <p className=" max-w-xl pb-5 leading-loose">
        We are a diverse team with backgrounds in web design, web development,
        digital marketing, and more. We apply our digital knowledge to your
        business’s goals and budget to create a scope of work that will help you
        grow your business. Whether you’re looking to start a website from
        scratch or want to market your existing website (or both!), we can help.
      </p>
      <div className="flex flex-row flex-wrap justify-center items-center">
        {services.map(service => {
          return <ServiceCard key={service.id} service={service} />;
        })}
      </div>
    </SectionContainer>
  );
}
