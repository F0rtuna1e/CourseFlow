import React from 'react';
import { Zap, Users, Shield } from 'lucide-react';

export function Overview() {
  return (
    <div id="overview" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            CourseFlow Overview
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Empowering students with AI-powered tools for academic success
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white mb-4">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Smart Learning</h3>
            <p className="text-gray-500">
              AI-powered study recommendations and personalized learning paths tailored to your needs.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Collaborative Platform</h3>
            <p className="text-gray-500">
              Connect with instructors and peers while keeping all your coursework organized in one place.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white mb-4">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Reliable Support</h3>
            <p className="text-gray-500">
              24/7 AI assistance and dedicated support to help you achieve your academic goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}