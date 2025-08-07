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

      
      <div className= "bg-white p-3 rounded-xl shadow-lg mt-8  absolute   flex flex-col md:flex-row  space-y-3  ">
        
        
        <div className="flex-1 flex items-center space-x-2 p-2 rounded-lg border border-gray-200  transition-shadow">
          <FaSearch className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Job title, keywords, or company"
            className="flex-1 outline-none text-gray-800 placeholder-gray-400 text-sm bg-transparent"
          />
        </div>

        
        <div className="flex-1 flex items-center space-x-2 p-2 rounded-lg border border-gray-200  transition-shadow">
          <FaMapPin className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="City Location"
            className="flex-1 outline-none text-gray-800 placeholder-gray-400 text-sm bg-transparent"
          />
        </div>

        
        <div className="flex-1 flex items-center justify-between space-x-2 p-2 rounded-lg border border-gray-200  transition-shadow cursor-pointer">
          <div className="flex items-center space-x-2">
            <FaAlignLeft className="w-5 h-5 text-gray-400" />
            <select className="flex-1 border rounded-lg none px-3 py-2 text-base text-gray-600">
        <option>Category</option>
        <option>Web Development</option>
        <option>Data Science</option>
        <option>UI/UX Design</option>
      </select>
          </div>
        </div>

      
        <button className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors shadow-md">
          Find me internship
        </button>
      </div>
    </div>
  );
};

export default Herosection;