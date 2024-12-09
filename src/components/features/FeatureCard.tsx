import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  benefits?: string[];
}

export function FeatureCard({ title, description, icon: Icon, benefits }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex-shrink-0">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <Icon className="h-6 w-6 text-indigo-600" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        {benefits && benefits.length > 0 && (
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></span>
                {benefit}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}