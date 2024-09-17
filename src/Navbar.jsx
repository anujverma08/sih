import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/logo.png';
import Emission from './Emission';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 pb-0">
          
          {/* Clickable Image and Logo on the Left */}
          <div className="flex items-center space-x-2">
            {/* Clickable Image */}
            <a href="/">
              <img 
                src= {logo} // Replace with your image URL
                alt="Logo"
                className="h-10 w-10" // Adjust the height and width as needed
              />
            </a>
            {/* Logo */}
            <a href="/" className="text-2xl font-bold">MyLogo</a>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-4">
           <NavLink to ="/" className="hover:bg-green-400 px-3 py-2 rounded-md"> <a href="#home" >Home</a> </NavLink>
           <NavLink to ="/Emission" className="hover:bg-green-400 px-3 py-2 rounded-md"><a href="#about" className="hover:bg-green-400 px-3 py-2 rounded-md">Emission</a></NavLink>
            <a href="#services" className="hover:bg-green-400 px-3 py-2 rounded-md">Services</a>
            <a href="#contact" className="hover:bg-green-400 px-3 py-2 rounded-md">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-green-400 hover:text-white hover:bg-green-700"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <a href="#home" className="block px-4 py-2 text-sm hover:bg-green-400">Home</a>
          <a href="#about" className="block px-4 py-2 text-sm hover:bg-green-400">About</a>
          <a href="#services" className="block px-4 py-2 text-sm hover:bg-green-400">Services</a>
          <a href="#contact" className="block px-4 py-2 text-sm hover:bg-green-400">Contact</a>
        </div>
      )}
    </nav>
  );
}
