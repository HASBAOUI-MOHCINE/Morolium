import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger button for small screens */}
      <button
        className="md:hidden p-2 text-gray-100 bg-gray-800 fixed top-4 left-4 z-50 rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars size={20} />
      </button>

      {/* Sidebar navigation */}
      <aside
        className={`w-64 min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-gray-100 p-4 shadow-lg transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:block fixed md:static z-40`}
      >
        <div className="text-2xl font-bold mb-6 text-center border-b border-gray-700 pb-4">DevLearn</div>
        <nav>
          <ul className="space-y-4">
            <li className="py-2 px-3 rounded hover:bg-gray-700 transition-colors"><Link to="/">Overview</Link></li>
            <li className="py-2 px-3 rounded hover:bg-gray-700 transition-colors"><Link to="/courses">Courses</Link></li>
            <li className="py-2 px-3 rounded hover:bg-gray-700 transition-colors"><Link to="/tracks">Tracks</Link></li>
            <li className="py-2 px-3 rounded hover:bg-gray-700 transition-colors"><Link to="/exercises">Exercises</Link></li>
            <li className="py-2 px-3 rounded hover:bg-gray-700 transition-colors"><Link to="/resources">Resources</Link></li>
            <li className="py-2 px-3 rounded hover:bg-gray-700 transition-colors"><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
      </aside>
    </>
  )
}
