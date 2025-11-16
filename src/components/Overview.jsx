import React from 'react';
import { Link } from 'react-router-dom';

export default function Overview() {
  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* Dual Gradient Overlay Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
            radial-gradient(circle 500px at 20% 80%, rgba(139,92,246,0.3), transparent),
            radial-gradient(circle 500px at 80% 20%, rgba(59,130,246,0.3), transparent)
          `,
          backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="pt-20 pb-16 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            NoorToLearn
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto">
            Master Front-End Development with Interactive Courses
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            From HTML basics to advanced React - learn at your own pace with hands-on projects and real-world examples
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/courses" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Browse Courses
            </Link>
            <Link 
              to="/tracks" 
              className="bg-white text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-300 hover:border-purple-600 hover:shadow-lg transition-all duration-300"
            >
              View Learning Tracks
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 text-center shadow-lg border border-gray-200">
            <div className="text-5xl font-bold text-purple-600 mb-2">12+</div>
            <div className="text-gray-700 font-semibold text-lg">Courses</div>
            <div className="text-gray-600 text-sm mt-2">Comprehensive curriculum</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 text-center shadow-lg border border-gray-200">
            <div className="text-5xl font-bold text-blue-600 mb-2">200+</div>
            <div className="text-gray-700 font-semibold text-lg">Lessons</div>
            <div className="text-gray-600 text-sm mt-2">Hands-on learning</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 text-center shadow-lg border border-gray-200">
            <div className="text-5xl font-bold text-indigo-600 mb-2">∞</div>
            <div className="text-gray-700 font-semibold text-lg">Practice</div>
            <div className="text-gray-600 text-sm mt-2">Real-world projects</div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose NoorToLearn?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Structured Learning</h3>
              <p className="text-gray-600">
                Follow carefully designed learning paths from beginner to advanced levels
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Hands-On Projects</h3>
              <p className="text-gray-600">
                Build real-world applications and add them to your portfolio
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Modern Stack</h3>
              <p className="text-gray-600">
                Learn the latest technologies used by top companies
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Responsive Design</h3>
              <p className="text-gray-600">
                Master mobile-first development and cross-browser compatibility
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Performance Focus</h3>
              <p className="text-gray-600">
                Learn optimization techniques for lightning-fast applications
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">♿</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Accessibility</h3>
              <p className="text-gray-600">
                Build inclusive web apps that work for everyone
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of developers learning to build amazing web applications
            </p>
            <Link 
              to="/courses" 
              className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 inline-block"
            >
              Start Learning Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}