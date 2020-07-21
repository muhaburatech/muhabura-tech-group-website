import React from "react";
import Layout from "../components/layout";
import Intro from "../components/intro";

export default function About() {
  return (
    <Layout pageTitle="About" page="about">
      <Intro
        imageUrl="/intro/about.jpeg"
        heading="Who we are, What we are"
        description="Develop custom software that will move your business forward."
      />
      <h1 className="mx-auto max-w-2xl mt-11">Muhabura Tech Group</h1>
      <p className="mx-auto max-w-2xl leading-loose text-gray-700">
        Muhabura Tech Group is a full-service digital agency that is dedicated
        to growing your business online through website design and development,
        digital marketing, and more. Our services are based around helping you
        grow and increase revenue with real results. We’re located in Rwanda
        Kigali, Rubangura building (Room No 212). We’re a full team and each of
        us specializes in various areas of the web, ranging from server
        maintenance to web design, development, and digital marketing.
      </p>
      <h1 className="mx-auto max-w-2xl mt-11">Client first focus</h1>
      <p className="mx-auto max-w-2xl leading-loose text-gray-700">
        The specific objectives that your business is seeking to accomplish are
        our core mission and how we put your firm first. With all efforts we
        encourage and embrace independent thinking and the pursuit of knowledge
        to benefit our clients.
      </p>
      <h1 className="mx-auto max-w-2xl mt-11">Principles and Values</h1>
      <p className="mx-auto max-w-2xl leading-loose text-gray-700">
        Driven by the desire to improve life, achieve technological excellence,
        operate with the highest standards of integrity and employ a diverse
        workforce that values collaboration.
      </p>
    </Layout>
  );
}
