import React from 'react';

const Reel = () => {
  return (
    <div id="reel" className="relative w-full h-screen bg-gray-100 flex items-center justify-center pt-4">
      <iframe
        src="https://player.vimeo.com/video/920569234?h=9febf8db0d&autoplay=1&loop=1&title=0&byline=0&portrait=0"
        className="w-5/6 h-5/6 outline-none rounded-lg shadow-lg bg-gray-900"
        allow="fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Reel;
