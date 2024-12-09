import React from 'react';
import { LucideIcon } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

interface FeatureSectionProps {
  title: string;
  description: string;
  features: {
    title: string;
    description: string;
    icon: LucideIcon;
    benefits?: string[];
  }[];
}

export function FeatureSection({ title, description, features }: FeatureSectionProps) {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <p className="mt-4 text-xl text-gray-600">{description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}