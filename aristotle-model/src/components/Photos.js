import React from 'react';
import Aristotle4 from '../images/Aristotle4.jpg';

const ThankYou = () => {
  return (
    <div id="photos" className="bg-gray-100 py-20">
        <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 mt-4 text-inconsolata text-center">Photo Gallery</h2>
            <div className="flex flex-col mb-8 md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
                <div className="md:w-4/5">
                    <img src={Aristotle4} alt="Aristotle4" className=" rounded-lg shadow-lg filter grayscale" />
                </div>
                <div className="md:w-4/5">
                    <img src={Aristotle4} alt="Aristotle4" className=" rounded-lg shadow-lg filter grayscale" />
                </div>
                <div className="md:w-4/5">
                    <img src={Aristotle4} alt="Aristotle4" className=" rounded-lg shadow-lg filter grayscale" />
                </div>
            </div>
            <div className="flex flex-col mb-8 md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
                <div className="md:w-4/5">
                    <img src={Aristotle4} alt="Aristotle4" className=" rounded-lg shadow-lg filter grayscale" />
                </div>
                <div className="md:w-4/5">
                    <img src={Aristotle4} alt="Aristotle4" className=" rounded-lg shadow-lg filter grayscale" />
                </div>
                <div className="md:w-4/5">
                    <img src={Aristotle4} alt="Aristotle4" className=" rounded-lg shadow-lg filter grayscale" />
                </div>
            </div>
            <div className="flex flex-col mb-8 md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
                <div className="md:w-4/5">
                    <img src={Aristotle4} alt="Aristotle4" className=" rounded-lg shadow-lg filter grayscale" />
                </div>
                <div className="md:w-4/5">
                    <img src={Aristotle4} alt="Aristotle4" className=" rounded-lg shadow-lg filter grayscale" />
                </div>
                <div className="md:w-4/5">
                    <img src={Aristotle4} alt="Aristotle4" className=" rounded-lg shadow-lg filter grayscale" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default ThankYou;
