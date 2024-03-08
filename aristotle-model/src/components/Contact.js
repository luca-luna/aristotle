import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="bg-storm-gray-600 py-20">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-6">
            <label htmlFor="name" className="block text-white text-sm font-medium mb-2">Your Name</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded bg-storm-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter your name" required />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-white text-sm font-medium mb-2">Your Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded bg-storm-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter your email" required />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-white text-sm font-medium mb-2">Your Message</label>
            <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 rounded bg-storm-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter your message" required></textarea>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-storm-gray-400 hover:bg-storm-gray-900 text-white font-semibold px-6 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
