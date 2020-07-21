import React from "react";
import { PrimaryButton } from "../components/buttons";

const ContactForm = () => {
  return (
    <form
      id="contact-me"
      className="w-full mx-auto max-w-3xl bg-white shadow p-8 text-gray-700 "
      data-netlify="true"
    >
      <h2 className="w-full text-center text-3xl font-bold leading-tight my-5">
        Contact form
      </h2>
      <div className="flex flex-wrap mb-6">
        <div className="relative w-full appearance-none label-floating">
          <input
            className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
            id="name"
            type="text"
            placeholder="Your name"
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-6">
        <div className="relative w-full appearance-none label-floating">
          <input
            className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
            id="name"
            type="text"
            placeholder="Your Phone"
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-6">
        <div className="relative w-full appearance-none label-floating">
          <input
            className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
            id="name"
            type="text"
            placeholder="Your Company"
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-6">
        <div className="relative w-full appearance-none label-floating">
          <input
            className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
            id="name"
            name="email"
            type="text"
            placeholder="Your email"
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-6">
        <div className="relative w-full appearance-none label-floating">
          <textarea
            className="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
            id="message"
            rows="5"
            type="text"
            placeholder="Message..."
          ></textarea>
        </div>
      </div>

      <div className="text-center">
        <PrimaryButton text="send message" to="/" />
      </div>
    </form>
  );
};

export default ContactForm;
