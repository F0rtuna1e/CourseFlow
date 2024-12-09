import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Monthly Plan',
    price: '$9.99',
    period: '/month',
    features: [
      '7-day free trial',
      'All AI features',
      'Unlimited assignments',
      'Priority support',
      'Cancel anytime'
    ]
  },
  {
    name: 'Yearly Plan',
    price: '$99',
    period: '/year',
    features: [
      'Save 20%',
      'All AI features',
      'Unlimited assignments',
      'Priority support',
      'Cancel anytime'
    ]
  },
  {
    name: 'Lifetime Plan',
    price: '$199',
    period: 'one-time',
    features: [
      'Best value',
      'All AI features',
      'Unlimited assignments',
      'Priority support',
      'Lifetime updates'
    ]
  }
];

export function Pricing() {
  return (
    <div id="pricing" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Pricing Plans
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your academic journey
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{plan.name}</h3>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-base font-medium text-gray-500">{plan.period}</span>
                </p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 h-6 w-6 text-green-500" />
                      <span className="ml-3 text-base text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}