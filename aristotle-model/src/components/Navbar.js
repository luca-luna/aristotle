import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faVimeo } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-storm-gray-600 bg-opacity-30 backdrop-blur-lg p-4 transition-transform duration-300 ${scrolled ? 'transform translate-y-0' : 'translate-y-8'}`}>
      <div className="flex justify-between items-center relative z-50">
        <div className="flex items-center">
          <div className="nav-toggle cursor-pointer md:hidden" onClick={() => scrollToSection('landing-page')}>
            <i className={`fas fa-bars text-white`} />
          </div>
        </div>
        <div className="flex w-full space-x-8 text-lato">
          <button className="pr-8 text-white text-xl font-bold focus:outline-none" onClick={() => scrollToSection('landing-page')}>
            ALM
          </button>
          <ul className="flex space-x-6 justify-center items-center">
            <li className="text-storm-gray-50 hover:text-storm-gray-950 hover:cursor-pointer transition duration-300" onClick={() => scrollToSection('training')}>
              Training
            </li>
            <li className="text-storm-gray-50 hover:text-storm-gray-950 hover:cursor-pointer transition duration-300" onClick={() => scrollToSection('reel')}>
              Reel
            </li>
            <li className="text-storm-gray-50 hover:text-storm-gray-950 hover:cursor-pointer transition duration-300" onClick={() => scrollToSection('about')}>
              About
            </li>
            <li className="text-storm-gray-50 hover:text-storm-gray-950 hover:cursor-pointer transition duration-300" onClick={() => scrollToSection('thank-you')}>
              Thank You
            </li>
            <li className="text-storm-gray-50 hover:text-storm-gray-950 hover:cursor-pointer transition duration-300" onClick={() => scrollToSection('photos')}>
              Photos
            </li>
            <li className="text-storm-gray-50 hover:text-storm-gray-950 hover:cursor-pointer transition duration-300" onClick={() => scrollToSection('contact')}>
              Contact
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-end">
          <a href="https://www.instagram.com/aristotle.dance?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-storm-gray-50 hover:text-storm-gray-950 mx-2">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://vimeo.com/user128604924" className="text-storm-gray-50 hover:text-storm-gray-950 mx-2">
            <FontAwesomeIcon icon={faVimeo} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
