import React from "react";

import Layout from "../components/layout";
import services from "../data/services";
import ServiceCard from "../components/serviceCard";
import SectionContainer from "../components/sectionContainer";
import { PrimaryButton, SecondaryButton } from "../components/buttons";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Service />
      <About />
      <ProcessSection />
    </Layout>
  );
}

function Hero() {
  return (
    <div className="flex bg-white h-72 lg:h-96">
      <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 md:text-6xl">
            Build Your Company’s
            <span className="text-indigo-600"> Future</span>
          </h2>
          <p className="mt-8 font-light text-sm text-gray-600 md:text-2xl">
            Develop custom software that will move your business forward.
          </p>
          <div className="flex justify-center lg:justify-start mt-12">
            <PrimaryButton text="Get in touch" to="/contact" />
            <SecondaryButton text="Learn more" to="/about" />
          </div>
        </div>
      </div>
      <div
        className="hidden lg:block lg:w-1/2"
        style={{ clipPath: `polygon(10% 0, 100% 0%, 100% 100%, 0 100%)` }}
      >
        <div
          className="h-full object-cover"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80)",
          }}
        >
          <div className="h-full bg-black opacity-25"></div>
        </div>
      </div>
    </div>
  );
}

function Service() {
  return (
    <SectionContainer title="Services">
      <div className="flex flex-row flex-wrap justify-center items-center">
        {services.map(service => {
          return <ServiceCard key={service.id} service={service} />;
        })}
      </div>
      <PrimaryButton text="View all services" to="/services" />
    </SectionContainer>
  );
}

function About() {
  return (
    <SectionContainer title="About">
      <div className="max-w-xl text-gray-600 text-center leading-8 text-lg">
        <p className="px-4">
          Grow your business online is the driving force behind Muhabura Tech
          Group. We’re passionate, hard-working, and most of all, we love
          helping our clients do great things on the web.
        </p>
      </div>
      <div className="mt-6">
        <PrimaryButton text="Learn more" to="/about" />
      </div>
    </SectionContainer>
  );
}

function ProcessSection() {
  return (
    <SectionContainer title="Our Process">
      <p className="text-center max-w-3xl pb-5">
        The digital world is changing fast, and your business should be ready to
        embrace what's next. Ready to work together on a great website that gets
        results?
      </p>
      <div className="flex flex-row flex-wrap items-center justify-center">
        <div className="max-w-md py-4 px-8 bg-white shadow-md rounded-lg mb-3 my-20 m-2 md:m-10 hover:shadow-xl">
          <div className="flex justify-center -mt-16">
            <img
              className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
              src="https://img.icons8.com/bubbles/100/000000/phone.png"
              alt="service icon"
            />
          </div>
          <div className="flex flex-col flex-no-wrap items-center">
            <h2 className="text-gray-800 text-2xl md:text-3xl font-semibold">
              Schedule a call
            </h2>
            <p className="mt-2 text-center text-gray-600 text-lg md:text-xl leading-relaxed">
              We’re here to help you grow your business. Talk to us to see how
              we can help.
            </p>
          </div>
        </div>
        <div className="max-w-md py-4 px-8 bg-white shadow-md rounded-lg mb-3 my-20 m-2 md:m-10 hover:shadow-xl">
          <div className="flex justify-center -mt-16">
            <img
              className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
              src="https://img.icons8.com/bubbles/100/000000/planner.png"
              alt="service icon"
            />
          </div>
          <div className="flex flex-col flex-no-wrap items-center">
            <h2 className="text-gray-800 text-2xl md:text-3xl font-semibold">
              Plan it
            </h2>
            <p className="mt-2 text-center text-gray-600 text-lg md:text-xl leading-relaxed">
              We’ll outline your goals together and create a plan to help you
              get the most of your website.
            </p>
          </div>
        </div>
        <div className="max-w-md py-4 px-8 bg-white shadow-md rounded-lg mb-3 my-20 m-2 md:m-10 hover:shadow-xl">
          <div className="flex justify-center -mt-16">
            <img
              className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
              src="https://img.icons8.com/bubbles/100/000000/phone.png"
              alt="service icon"
            />
          </div>
          <div className="flex flex-col flex-no-wrap items-center">
            <h2 className="text-gray-800 text-2xl md:text-3xl font-semibold">
              Grow online
            </h2>
            <p className="mt-2 text-center text-gray-600 text-lg md:text-xl leading-relaxed">
              We’ll execute on our strategy and continue to refine and evolve to
              get more ROI from your website.
            </p>
          </div>
        </div>
      </div>
      <PrimaryButton to="/contact" text="Schedule a call today" />
    </SectionContainer>
  );
}
