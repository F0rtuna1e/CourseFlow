import React from 'react';
import { Brain, BookOpen, Calculator, Calendar, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    name: 'AI Study Assistant',
    description: 'Get personalized study recommendations and instant answers to your questions.',
    icon: Brain
  },
  {
    name: 'AI Homework Helper',
    description: 'Step-by-step guidance for solving complex problems across all subjects.',
    icon: BookOpen
  },
  {
    name: 'GPA Tracker',
    description: 'Track your academic performance and get insights to improve your grades.',
    icon: Calculator
  },
  {
    name: 'Canvas/Instructor Sync',
    description: 'Seamlessly sync with your school\'s learning management system.',
    icon: Calendar
  },
  {
    name: 'Assignment Reminders',
    description: 'Never miss a deadline with smart notifications and insights.',
    icon: Bell
  }
];

export function Features() {
  return (
    <div id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Features
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            AI Study Assistant, AI Homework Helper, AI Grade Insights, plus many more!
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link 
              to="/features"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}