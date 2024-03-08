import React from 'react';
import Aristotle2b from '../images/Aristotle2b.jpg';

const ThankYou = () => {
  return (
    <div id="thank-you" className="bg-gray-100 py-20">
        <div className="max-w-screen-lg mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
                <img src={Aristotle2b} alt="Aristotle3" className="md:w-1/2 rounded-lg shadow-lg" />
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-10 text-inconsolata">Thank You</h2>

                    <div className="mb-6 text-gray-600 leading-relaxed">
                        <p className='mb-2'><strong>Thank you to all of the teachers and mentors and fellow dancers and those who have inspired me to dance!</strong></p>
                        
                        <p>Anthony the Dancer</p>
                        <p>Anwyn, Hailey and Grace</p>
                        <p>Ariel Serrano and Wilmian Hernandez</p>
                        <p>Bianca</p>
                        <p>Charles</p>
                        <p>Diego Salterini</p>
                        <p>Dustin</p>
                        <p>Gail</p>
                        <p>Hannah Baumgarten</p>
                        <p>Homer Bryant</p>
                        <p>Jess</p>
                        <p>Leigh Schanfein</p>
                        <p>Maria Bullock</p>
                        <p>Maaz</p>
                        <p>Professor Baba</p>
                        <p>Rosario Suarez</p>
                        <p>Samantha</p>
                        <p>Sara Joy</p>
                        <p>Savion Glover</p>
                        <p>Shakti Mohan</p>
                        <p>Soli and Seffa</p>
                        <p>Stephanie</p>
                        <p>Tania Vergara</p>
                        <p>Tiffany</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ThankYou;
