import React from 'react';
import { Link } from 'react-router-dom';
import { FeatureSection } from '../components/features/FeatureSection';
import { 
  mainFeatures, 
  academicTools, 
  studyTools, 
  aiFeatures, 
  additionalFeatures 
} from '../data/features';

export function ExploreFeatures() {
  return (
    <div className="pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4">
            <li>
              <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            </li>
            <li className="flex items-center">
              <svg className="flex-shrink-0 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <span className="ml-4 text-gray-700">Explore Features</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Discover CourseFlow's Features
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our comprehensive suite of tools designed to enhance your academic journey
        </p>
      </div>

      {/* Feature Sections */}
      <FeatureSection {...mainFeatures} />
      <FeatureSection {...academicTools} />
      <FeatureSection {...studyTools} />
      <FeatureSection {...aiFeatures} />
      <FeatureSection {...additionalFeatures} />

      {/* CTA Section */}
      <div className="bg-indigo-600 py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Ready to enhance your academic journey?
          </h2>
          <p className="mt-4 text-xl text-indigo-100">
            Join CourseFlow today and experience the difference.
          </p>
          <div className="mt-8">
            <Link
              to="/auth"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}