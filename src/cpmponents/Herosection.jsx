import React from 'react';
import { FaSearch, FaMapPin, FaAlignLeft, FaChevronDown } from 'react-icons/fa';

const Herosection = () => {
  return (
    <div className="bg-[#4157d3] p-8 md:p-16 rounded-3xl max-w-5xl mx-auto my-12 shadow-2xl relative  m-auto text-white">
     
      <div className="flex flex-col items-start space-y-4 md:space-y-6">
        <h1 className="text-3xl md:text-5xl font-extrabold ">
          Find Training That Launch Careers
        </h1>
        <p className="text-sm md:text-base font-light max-w-xl">
          Explore verified, beginner-friendly internships that match your skills, interests, and goals — all in one place.
        </p>
        <p className="text-lg md:text-xl font-semibold mt-4">
          12+ Training Available
        </p>
      </div>

      {/* The main search bar component, with a white background and rounded corners */}
      <div className= "bg-white p-3 rounded-xl shadow-lg mt-8  absolute   flex flex-col md:flex-row  space-y-3  ">
        
        {/* Input field for job title/keywords with a search icon */}
        <div className="flex-1 flex items-center space-x-2 p-2 rounded-lg border border-gray-200 focus-within:ring-2 focus-within:ring-indigo-500 transition-shadow">
          <FaSearch className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Job title, keywords, or company"
            className="flex-1 outline-none text-gray-800 placeholder-gray-400 text-sm bg-transparent"
          />
        </div>

        {/* Input field for city location with a map pin icon */}
        <div className="flex-1 flex items-center space-x-2 p-2 rounded-lg border border-gray-200 focus-within:ring-2 focus-within:ring-indigo-500 transition-shadow">
          <FaMapPin className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="City Location"
            className="flex-1 outline-none text-gray-800 placeholder-gray-400 text-sm bg-transparent"
          />
        </div>

        {/* Category dropdown with an icon and a chevron */}
        <div className="flex-1 flex items-center justify-between space-x-2 p-2 rounded-lg border border-gray-200 focus-within:ring-2 focus-within:ring-indigo-500 transition-shadow cursor-pointer">
          <div className="flex items-center space-x-2">
            <FaAlignLeft className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400 text-sm">Category</span>
          </div>
          <FaChevronDown className="w-5 h-5 text-gray-400" />
        </div>

        {/* The main search button */}
        <button className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors shadow-md">
          Find me internship
        </button>
      </div>
    </div>
  );
};

export default Herosection;