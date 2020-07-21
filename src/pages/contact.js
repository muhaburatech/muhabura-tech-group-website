import React from "react";
import Layout from "../components/layout";
import ContactForm from "../components/contactForm";
import Intro from "../components/intro";

const Contact = () => {
  return (
    <Layout pageTitle="Contact" page="contact">
      <Intro
        imageUrl="/intro/contact.jpg"
        heading="We have passion for web, We are problem solvers."
        description="We are a team of technology experts that have honed their skills over years."
      />
      <div className="flex flex-row pl-10 md:pl-0 flex-wrap justify-between mx-auto max-w-5xl pt-8 pb-3=6">
        <div className="flex flex-row flex-wrap justify-between items-center">
          <img
            className="mb-0"
            src="https://img.icons8.com/bubbles/100/000000/phone.png"
            alt="phone Icon"
          />
          <p>+250 789 504 025</p>
        </div>
        <div className="flex flex-row flex-wrap justify-between items-center">
          <img
            className="mb-0"
            src="https://img.icons8.com/clouds/100/000000/email.png"
            alt="mail icon"
          />
          <p>info@muhaburatechgroup.com</p>
        </div>
        <div className="flex flex-row flex-wrap justify-between items-center">
          <img
            className="mb-0"
            src="https://img.icons8.com/bubbles/100/000000/worldwide-location.png"
            alt="location icon"
          />
          <p>Rubangura House 2nd Floor No 212</p>
        </div>
      </div>
      <ContactForm />
    </Layout>
  );
};

export default Contact;
