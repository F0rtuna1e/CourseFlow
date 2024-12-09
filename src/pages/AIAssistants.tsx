import React from 'react';
import { Brain, BookOpen, Lightbulb, ArrowRight } from 'lucide-react';

const aiTools = [
  {
    title: 'AI Study Assistant',
    description: 'Get personalized study recommendations based on your learning style and performance patterns. Our AI analyzes your habits to create the perfect study schedule.',
    icon: Brain,
    features: [
      'Personalized study schedules',
      'Learning style analysis',
      'Progress tracking',
      'Adaptive recommendations'
    ],
    bgColor: 'bg-violet-100',
    iconBg: 'bg-violet-600'
  },
  {
    title: 'AI Homework Helper',
    description: 'Receive step-by-step guidance for complex problems across all subjects. Get detailed explanations and learn concepts more effectively.',
    icon: BookOpen,
    features: [
      'Step-by-step solutions',
      'Multiple subject support',
      'Concept explanations',
      'Practice problems'
    ],
    bgColor: 'bg-indigo-100',
    iconBg: 'bg-indigo-600'
  },
  {
    title: 'AI Study Buddy',
    description: 'Your 24/7 study companion that helps you stay motivated and focused. Get instant answers to your questions and track your learning progress.',
    icon: Lightbulb,
    features: [
      'Real-time assistance',
      'Question answering',
      'Study motivation',
      'Progress insights'
    ],
    bgColor: 'bg-purple-100',
    iconBg: 'bg-purple-600'
  }
];

export function AIAssistants() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">AI Assistants</h1>
        <p className="mt-2 text-gray-600">
          Powerful AI tools to enhance your learning experience
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {aiTools.map((tool) => (
          <div
            key={tool.title}
            className={`${tool.bgColor} rounded-lg shadow-sm overflow-hidden`}
          >
            <div className="p-6">
              <div className="flex items-center">
                <div className={`${tool.iconBg} p-3 rounded-lg`}>
                  <tool.icon className="h-6 w-6 text-white" />
                </div>
                <h2 className="ml-4 text-xl font-semibold text-gray-900">
                  {tool.title}
                </h2>
              </div>

              <p className="mt-4 text-gray-600">
                {tool.description}
              </p>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Key Features:</h3>
                <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {tool.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <ArrowRight className="h-4 w-4 mr-2 text-gray-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Start Using {tool.title}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}