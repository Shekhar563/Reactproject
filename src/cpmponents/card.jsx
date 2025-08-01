import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';


const trainingData = [
    {
      "id": 1,
      "category": "HR",
      "title": "HR 101: 15-Day Crash Course",
      "description": "A foundational HR course designed to help you understand the recruitment lifecycle, HR policies, and performance evaluation.",
      "location": "Kings College, Kathmandu",
      "duration": "15 Day",
      "price": "NRS 11,999",
      "imageUrl": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": 2,
      "category": "Leadership",
      "title": "Advanced Leadership Development Workshop",
      "description": "Strengthen your leadership skills through real-world simulations and group challenges.",
      "location": "Hotel Yak & Yeti, Kathmandu",
      "duration": "20 Day",
      "price": "NRS 14,500",
      "imageUrl": "https://images.unsplash.com/photo-1581091012184-5c1d7b9c3f85?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": 3,
      "category": "Marketing",
      "title": "Digital Marketing Bootcamp",
      "description": "Learn SEO, PPC, Email Marketing, and Analytics in this fast-paced, hands-on program.",
      "location": "Softwarica College, Kathmandu",
      "duration": "12 Day",
      "price": "NRS 10,000",
      "imageUrl": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": 4,
      "category": "Recruitment",
      "title": "Talent Acquisition & ATS Training",
      "description": "Master applicant tracking systems and sourcing strategies in real-time sessions.",
      "location": "Kantipur City College, Kathmandu",
      "duration": "10 Day",
      "price": "NRS 9,999",
      "imageUrl": "https://images.unsplash.com/photo-1532619187608-e5375cab36f1?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": 5,
      "category": "HR",
      "title": "Employee Engagement & Culture Building",
      "description": "Learn techniques to foster a positive and productive workplace environment.",
      "location": "Ace Institute of Management, Kathmandu",
      "duration": "7 Day",
      "price": "NRS 7,999",
      "imageUrl": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": 6,
      "category": "Analytics",
      "title": "Marketing Analytics with Excel & Power BI",
      "description": "Hands-on workshop to analyze and visualize marketing KPIs using Excel & Power BI.",
      "location": "British College, Kathmandu",
      "duration": "5 Day",
      "price": "NRS 8,500",
      "imageUrl": "https://images.unsplash.com/photo-1581093588401-08f55b0c27f3?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": 7,
      "category": "Communication",
      "title": "Effective Business Communication Skills",
      "description": "Polish your presentation, email, and interpersonal communication for business success.",
      "location": "Kathmandu University, Dhulikhel",
      "duration": "6 Day",
      "price": "NRS 6,500",
      "imageUrl": "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": 8,
      "category": "Design",
      "title": "UX/UI Design for Beginners",
      "description": "Build intuitive digital experiences with Figma and Adobe XD from scratch.",
      "location": "Islington College, Kathmandu",
      "duration": "10 Day",
      "price": "NRS 12,000",
      "imageUrl": "https://images.unsplash.com/photo-1587614382346-4ecdf00537f7?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": 9,
      "category": "Finance",
      "title": "Finance for Non-Finance Managers",
      "description": "Understand budgeting, forecasting, and financial reports without needing a finance degree.",
      "location": "Kathford College, Kathmandu",
      "duration": "8 Day",
      "price": "NRS 10,499",
      "imageUrl": "https://images.unsplash.com/photo-1573164713742-03790aa4e2f5?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": 10,
      "category": "Data Science",
      "title": "Data Science Crash Course with Python",
      "description": "Learn data wrangling, visualization, and ML basics with practical labs.",
      "location": "Softwarica College, Kathmandu",
      "duration": "15 Day",
      "price": "NRS 15,999",
      "imageUrl": "https://images.unsplash.com/photo-1573166365409-1d1f0c6e81ee?auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  

const Card = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingData.map((training) => (
            <div key={training.id} className="bg-white rounded-lg shadow-lg overflow-hidden ">
             
              <div className="relative">
                <img src={training.imageUrl} alt={training.title} className="w-full h-40 object-cover" />
                <span className="absolute top-3 left-3 bg-gray-300 text-white text-[12px] font-semibold px-2 py-1 rounded-full">
                  Booking Open
                </span>
              </div>
              
          
              <div className="p-5 flex flex-col ">
                
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <span className="font-semibold">{training.category}</span>
                  <span>|</span>
                  <span className="font-semibold">Recruiter</span>
                </div>
                
               
                <h3 className="text-xl font-bold text-gray-800">{training.title}</h3>
                
               
                <p className="text-sm text-gray-600 line-clamp-2">{training.description}</p>
                
                <div className="flex flex-col space-y-2 text-sm text-gray-700">
                  <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="text-indigo-500" />
                    <span>{training.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaCalendarAlt className="text-indigo-500" />
                    <span>{training.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaGraduationCap className="text-indigo-500" />
                    <span>Physical Classes</span>
                  </div>
                </div>
                
              
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                  <span className="text-lg font-bold text-gray-800">{training.price}</span>
                  <button className="bg-indigo-600 text-white px-5 py-2 rounded-md font-semibold text-sm hover:bg-indigo-700 transition-colors shadow-md">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        
        <div className="flex justify-center items-center space-x-2 mt-12 text-gray-600">
          <button className="p-2 rounded-lg hover:bg-gray-200 transition-colors">
            &lt; Previous
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`p-2 rounded-lg w-8 h-8 flex items-center justify-center font-bold transition-colors ${
                page === 1 ? 'bg-indigo-600 text-white' : 'hover:bg-gray-200'
              }`}
            >
              {page}
            </button>
          ))}
          <button className="p-2 rounded-lg hover:bg-gray-200 transition-colors">
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

