import React, { useState } from 'react';
import {
  FiSearch,
  FiBell,
  FiChevronDown,
  FiMenu,
  FiX,
} from 'react-icons/fi';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInternshipDropdownOpen, setIsInternshipDropdownOpen] = useState(false);
  

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleInternshipDropdown = () => {
    setIsInternshipDropdownOpen(!isInternshipDropdownOpen);
  };

;

  return (
    <nav className="bg-white shadow-sm  max-w-full">
      <div className="container  px-4 py-3  text-gray-700 flex  items-center  justify-between">
        
        <div className="flex items-center space-x-2">
          <div className="flex items-center h-10 w-10 ">
            <img  src='https://internepal.com.np/frontend/image/logo/inlogo.svg' alt='logo'/>
          </div>
        </div>

        <div className="flex-1 hidden md:flex justify-center items-center  px-8">
          <div className="bg-gray-200 rounded-lg p-1 flex gap-4 items-center ">
           
            <div className="bg-gray-300 rounded-3xl  m-0 relative">
              <button
                onClick={toggleInternshipDropdown}
                className="flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200"
              >
                <span>Internship</span>
                <FiChevronDown
                  className={`ml-2 transform transition-transform ${
                    isInternshipDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isInternshipDropdownOpen && (
                <div className="absolute top-full mt-2 w-48 bg-amber-50 border border-gray-200 rounded-lg shadow-lg z-10">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-300">Internship 1</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-300">Internship 2</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-300">Internship 3</a>
                </div>
              )}
            </div>

            <div  >
            <span>Internship</span>
    </div>
    <div  >
            <span>Location</span>
    </div>
   

            

            <button className="bg-indigo-600 text-white p-2 rounded-4xl flex items-center hover:bg-indigo-700">
              <FiSearch size={20} />
              <span className="ml-2 font-semibold hidden lg:inline">Search</span>
            </button>
          </div>
        </div>

     
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <a href="#" className="hover:text-indigo-600">Home</a>
            <a href="#" className="hover:text-indigo-600">Internships</a>
            <a href="#" className="hover:text-indigo-600">Trainings</a>
            <a href="#" className="hover:text-indigo-600">Blogs</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:bg-gray-100 rounded-full">
              <FiBell size={20} />
            </button>
            <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
              <img
                src="https://placehold.co/100x100/4257D3/FFFFFF?text=S"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-full"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

    
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 py-4 shadow-lg border-t border-gray-200">
          <div className="flex flex-col space-y-4">
            <div className="bg-gray-100 rounded-lg p-2 flex items-center space-x-2">
              <input
                type="text"
                placeholder="Search for internships..."
                className="w-full px-2 py-1 bg-transparent text-gray-700 placeholder-gray-500 outline-none"
              />
              <button className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700">
                <FiSearch size={16} />
              </button>
            </div>
            <a href="#" className="block px-3 py-2 hover:bg-gray-100 rounded-lg">Home</a>
            <a href="#" className="block px-3 py-2 hover:bg-gray-100 rounded-lg">Internships</a>
            <a href="#" className="block px-3 py-2 hover:bg-gray-100 rounded-lg">Trainings</a>
            <a href="#" className="block px-3 py-2 hover:bg-gray-100 rounded-lg">Blogs</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default App;
