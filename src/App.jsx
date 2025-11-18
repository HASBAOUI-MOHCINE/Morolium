import React, { useEffect, useState, useCallback } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom';
import Overview from './components/Overview.jsx';
import Courses from './components/Courses.jsx';
import Tracks from './components/Tracks.jsx';
import Exercises from './components/Exercises.jsx';
import Resources from './components/Resources.jsx';
import Profile from './components/Profile.jsx';
import { TranslationProvider } from './i18n/TranslationProvider'
import ThemeProvider from './ui/ThemeProvider'
import ComingSoon from './components/ComingSoon.jsx';
function App() {
  // Theme and language are now provided by context providers

  return (
    <ThemeProvider>
      <TranslationProvider>
        <div className="min-h-screen app-root transition-colors duration-300">
          <Navbar />

          <main className="px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/courses/*" element={<Courses />} />
            <Route path="/tracks" element={<Tracks />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
          </Routes>
        </main>
        </div>
      </TranslationProvider>
    </ThemeProvider>
  );
}

export default App;
