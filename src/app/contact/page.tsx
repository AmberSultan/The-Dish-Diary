// pages/contact.tsx

import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="py-12 px-6  min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Contact Us</h1>
        <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
          {/* Contact Form */}
          <div className="w-full md:w-1/2  p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <form
              action="https://formspree.io/f/your-form-id" // Replace with your Formspree endpoint or handle form submission as needed
              method="POST"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block ">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block ">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block ">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-gray-600 text-white font-semibold rounded-md shadow-sm hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Contact Information */}
          <div className="w-full  md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-2xl font-semibold mt-4 mb-4">Our Contact Information</h2>
            <p className="text-sm md:text-sm mt-10  mb-4">
              If you have any questions or feedback, feel free to reach out to us using the contact form or via the details below:
            </p>
            <p className="text-sm md:text-sm  mb-2">
              <span className="font-semibold">Email:</span> support@recipehaven.com
            </p>
            <p className="text-base md:text-sm  mb-2">
              <span className="font-semibold">Phone:</span> +1 (123) 456-7890
            </p>
            <p className="text-base md:text-sm ">
              <span className="font-semibold">Address:</span> 123 Recipe St, Foodville, FL 12345
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
