import React from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom';
import Overview from './components/Overview.jsx';
import Courses from './components/Courses.jsx';
import Tracks from './components/Tracks.jsx';
import Exercises from './components/Exercises.jsx';
import Resources from './components/Resources.jsx';
import Profile from './components/Profile.jsx';


function App() {
  return (
   
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/courses/*" element={<Courses />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
  );
}

export default App;
