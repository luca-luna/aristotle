import React from 'react';
import Aristotle5 from '../images/Aristotle5.jpg';

const About1 = () => {
  return (
    <div id="training" className="bg-gray-100 py-20">
        <div className="max-w-screen-lg mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
                <img src={Aristotle5} alt="Aristotle3" className="md:w-1/2 rounded-lg shadow-lg" />
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 text-inconsolata">Training</h2>

                    <div className="mb-6 text-gray-600 leading-relaxed">
                    <p><strong>Dance</strong></p>
                    <p><a href="http://srqcubanballet.com" className="text-blue-500 break-all">Sarasota Cuban Ballet School</a>, Ariel Serrano and Wilmian Hernandez</p>
                    <p><a href="https://www.cmdcschool.org" className="text-blue-500 break-all">Chicago Multi-Cultural Dance Center</a>, Homer Bryant</p>
                    <p><a href="https://spectrumdance.org" className="text-blue-500 break-all">Spectrum</a>, Donald Byrd</p>
                    <p><a href="https://www.orcas.dance" className="text-blue-500 break-all">Island Inspiration All-Stars</a>, Anthony the Dancer</p>
                    <p><a href="https://www.nrityashakti.com" className="text-blue-500 break-all">Nritya Shakti Studio</a></p>
                    <p><a href="https://www.dancenowmiami.org" className="text-blue-500 break-all">Dance Now Miami!</a>, Hannah Baumgarten and Diego Salterini</p>
                    <p><a href="https://www.houstonballet.org" className="text-blue-500 break-all">Houston Ballet Summer Intensive</a></p>
                    <p><a href="https://www.interlochen.org" className="text-blue-500 break-all">Interlochen Dance Summer Intensive</a></p>
                    <p><a href="http://islandaerialacrobatics.com" className="text-blue-500 break-all">Island Aerial Acrobatics</a>, Maria Bullock</p>
                    <p>Orcas Island Capoeira, Dustin Fox</p>
                    </div>
                    <div className="mb-6">
                    <p><strong>Aerial Acrobatics</strong></p>
                    <p><a href="http://islandaerialacrobatics.com" className="text-blue-500 break-all">Island Aerial Acrobatics</a>, Maria Bullock</p>
                    </div>
                    <div className="mb-6">
                    <p><strong>Capoeira</strong></p>
                    <p>Orcas Island Capoeira, Dustin Fox</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
};

export default About1;
