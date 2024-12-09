import React from 'react';

const universities = [
  'Harvard University', 'Stanford University', 'MIT', 'UC Berkeley',
  'University of Oxford', 'University of Cambridge', 'Yale University',
  'Princeton University', 'University of Chicago', 'Columbia University',
  'UCLA', 'UCSD', 'University of Michigan', 'UCSF', 'University of Toronto',
  'University of Pennsylvania', 'University of London', 'University of Melbourne',
  'University of Edinburgh', 'University of Sydney'
];

export function Universities() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
          Trusted by Students from
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
          {universities.map((university) => (
            <div
              key={university}
              className="col-span-1 flex justify-center items-center py-4 px-6 bg-gray-50 rounded-lg"
            >
              <span className="text-sm text-gray-600 text-center font-medium">
                {university}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}