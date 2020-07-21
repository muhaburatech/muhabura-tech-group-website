import React from "react";

const ContactForm = () => {
  return (
    <form
      name="contact"
      className="w-full mx-auto max-w-3xl bg-white shadow p-8 text-gray-700"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <h2 className="w-full text-center text-3xl font-bold leading-tight my-5">
        Contact form
      </h2>
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="contact" value="contact" />
      <div className="flex flex-wrap mb-6">
        <div className="relative w-full appearance-none label-floating">
          <input
            className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
            id="name"
            name="name"
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
            id="phone"
            name="phone"
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
            name="company"
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
            name="message"
            rows="5"
            type="text"
            placeholder="Message..."
          ></textarea>
        </div>
      </div>

      <div className="text-center">
        <input
          type="submit"
          value="Send message"
          className="px-4 py-3 bg-gray-900 text-gray-200 text-md font-medium  rounded hover:bg-gray-800"
        />
      </div>
    </form>
  );
};

export default ContactForm;
