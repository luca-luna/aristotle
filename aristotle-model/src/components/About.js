import React from 'react';
import Aristotle1 from '../images/Aristotle1.jpg';

const About = () => {
  return (
    <div id="about" className="bg-gray-100 py-20">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-inconsolata">About Aristotle Luna</h2>
            <p className="text-gray-600 leading-relaxed">
              Aristotle Luna is a talented dancer and model with a passion for performance art. With years of experience in the industry, Aristotle has captivated audiences with his mesmerizing dance moves and striking presence on the runway. His unique style and charisma set him apart, making him a sought-after talent in the world of entertainment.
            </p>
          </div>
          <img src={Aristotle1} alt="Aristotle1" className="md:w-2/5 rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default About;
