import React from 'react';

const LandingPage = () => {
  return (
    <section id="landing-page">
    <div className="min-h-screen bg-cover bg-center overflow-hidden flex items-center justify-start" style={{backgroundImage: "url(/images/Aristotle3.jpg)"}}>
      <div className="text-inconsolata text-storm-gray-900 text-left ml-64"> {/* Change the text color here */}
        <h1 className="text-4xl font-bold mb-4">Aristotle Luna</h1>
      </div>
    </div>
    </section>
  );
};

export default LandingPage;
