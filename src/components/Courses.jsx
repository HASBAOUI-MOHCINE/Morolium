import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { coursesData, categories } from '../data/coursesData';
import HTMLFundamentals from '../courses/HTMLFundamentals.jsx';
import CSSMastery from '../courses/CSSMastery.jsx';
import JavaScriptEssentials from '../courses/JavaScriptEssentials.jsx';
import AdvancedJavaScript from '../courses/AdvancedJavaScript.jsx';
import BoxModelAndLayout from '../courses/BoxModelAndLayout.jsx';
import FlexboxMastery from '../courses/FlexboxMastery.jsx';
import CSSGridLayout from '../courses/CSSGridLayout.jsx';
import AnimationsAndTransitions from '../courses/AnimationsAndTransitions.jsx';
import ResponsiveDesign from '../courses/ResponsiveDesign.jsx';
import ReactFundamentals from '../courses/ReactFundamentals.jsx';
import TypeScriptForFrontEnd from '../courses/TypeScriptForFrontEnd.jsx';
import TailwindCSS from '../courses/TailwindCSS.jsx';
import ResponsiveWebDesign from '../courses/ResponsiveWebDesign.jsx';
import GitAndVersionControl from '../courses/GitAndVersionControl.jsx';
import WebPerformanceOptimization from '../courses/WebPerformanceOptimization.jsx';
import WebAccessibility from '../courses/WebAccessibility.jsx';
import VueEssentials from '../courses/VueEssentials.jsx';

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredCourses = selectedCategory === 'All' 
    ? coursesData 
    : coursesData.filter(course => course.category === selectedCategory);

  return (
    <div className="flex-1 p-6 bg-gray-50 min-h-screen">

      {/* Routes for individual courses */}
      <Routes>
        <Route index element={
          <>
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-2">Front-End Development Courses</h1>
              <p className="text-gray-600">Master the essential skills for modern web development</p>
            </header>

            {/* Category Filter */}
            <div className="mb-6 flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map(course => (
                <article
                  key={course.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className={`${course.color} h-2`}></div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold">{course.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        course.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                        course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {course.level}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                      <span>📅 {course.duration}</span>
                      <span className="bg-gray-100 px-2 py-1 rounded">{course.category}</span>
                    </div>
                    <Link
                      to={`/courses/${course.title.replace(/\s+/g, '').replace(/[()]/g, '').replace(/\./g, '').replace(/&/g, '-').replace(/a11y/g, '-a11y')}`}
                      className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No courses found in this category.</p>
              </div>
            )}
          </>
        } />
        <Route path="HTMLFundamentals" element={<HTMLFundamentals />} />
        <Route path="CSSMastery" element={<CSSMastery />} />
        <Route path="JavaScriptEssentials" element={<JavaScriptEssentials />} />
        <Route path="AdvancedJavaScript" element={<AdvancedJavaScript />} />
        <Route path="BoxModelAndLayout" element={<BoxModelAndLayout />} />
        <Route path="FlexboxMastery" element={<FlexboxMastery />} />
        <Route path="CSSGridLayout" element={<CSSGridLayout />} />
        <Route path="AnimationsAndTransitions" element={<AnimationsAndTransitions />} />
        <Route path="ResponsiveDesign" element={<ResponsiveDesign />} />
        <Route path="ReactFundamentals" element={<ReactFundamentals />} />
        <Route path="TypeScriptforFront-End" element={<TypeScriptForFrontEnd />} />
        <Route path="TailwindCSS" element={<TailwindCSS />} />
        <Route path="ResponsiveWebDesign" element={<ResponsiveWebDesign />} />
        <Route path="Git-VersionControl" element={<GitAndVersionControl />} />
        <Route path="WebPerformanceOptimization" element={<WebPerformanceOptimization />} />
        <Route path="WebAccessibility-a11y" element={<WebAccessibility />} />
        <Route path="VuejsEssentials" element={<VueEssentials />} />
      </Routes>
    </div>
  );
}