'use client';

import NavBar from '../components/NavBar';

import React, { useState } from 'react';
import { shareTech, play } from '@/app/layout';

export default function Contact() {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);

      formData.append("access_key", "0ab66a5d-faff-46a2-acfd-e234a0831e53");

      const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
      });

      const data = await response.json();

      if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      } else {
      console.log("Error", data);
      setResult(data.message);
      }
  };

  return (
    <>
      <NavBar />
    <div id="ContactPage" className="w-full px-[13%] my-15">
      <h1 className={`${shareTech.className} text-4xl md:text-5xl font-bold mb-8 text-green-500 text-center`}>
        Contact Me
      </h1>
      <p className={`${play.className} text-lg text-center mb-12`}>
        Have a question or want to work together? Fill out the form below, and I'll get back to you as soon as possible!
      </p>

      <form
        onSubmit={onSubmit}
        className="max-w-3xl mx-auto space-y-8"
      >
        {/* Name Field */}
        <div>
          <label htmlFor="name" className={`${play.className} block text-lg font-medium text-gray-700 mb-2`}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="w-full text-lg p-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className={`${play.className} block text-lg font-medium text-gray-700 mb-2`}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="w-full text-lg p-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className={`${play.className} block text-lg font-medium text-gray-700 mb-2`}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full text-lg p-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className={`${play.className} bg-green-500 text-white text-lg font-bold py-3 px-8 hover:bg-green-600 transition duration-300`}
          >
            Send message
          </button>

          <p className='mt-4'> {result} </p>
        </div>
      </form>
    </div>
    </>
  );
}
