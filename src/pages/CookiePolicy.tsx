import React from 'react';
import { Link } from 'react-router-dom';

export function CookiePolicy() {
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
              <span className="ml-4 text-gray-700">Cookie Policy</span>
            </li>
          </ol>
        </nav>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">CourseFlow Cookie Policy</h1>
          <p className="text-sm text-gray-600 mb-8">Effective Date: 11/05/24</p>

          <div className="prose prose-indigo max-w-none">
            <p className="mb-6">
              At CourseFlow, we use cookies and similar technologies to improve your experience, understand usage patterns, 
              and securely store your data. This Cookie Policy explains what cookies are, how we use them, and your options 
              regarding their use.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. What Are Cookies?</h2>
            <p className="mb-6">
              Cookies are small text files placed on your device by websites you visit. They are widely used to make 
              websites work efficiently, enhance the user experience, and provide information to site owners.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Types of Cookies We Use</h2>
            <p className="mb-4">We use the following categories of cookies:</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.1. Essential Cookies</h3>
            <p className="mb-4">Purpose: These cookies are necessary for the website to function and cannot be disabled in our systems.</p>
            <p className="mb-6">Example: Managing user sessions, logging in, and accessing secure areas of the site.</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.2. Performance Cookies</h3>
            <p className="mb-4">Purpose: These cookies collect information about how you use our site, such as which pages you visit most often.</p>
            <p className="mb-6">Example: Monitoring usage patterns to improve functionality.</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.3. Functional Cookies</h3>
            <p className="mb-4">Purpose: These cookies allow us to remember your preferences and personalize your experience.</p>
            <p className="mb-6">Example: Saving your language settings or remembering your login credentials.</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.4. Analytics Cookies</h3>
            <p className="mb-4">Purpose: These cookies help us understand how our website is performing and track aggregate metrics.</p>
            <p className="mb-6">Example: Using tools like Google Analytics to analyze user behavior.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. What We Don't Do</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>No Data Selling: We do not sell any of your data to third parties.</li>
              <li>Secure Storage: All collected data is securely stored and protected with encryption and industry-standard security measures.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Managing Cookies</h2>
            <p className="mb-4">You can manage your cookie preferences in the following ways:</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.1. Browser Settings</h3>
            <p className="mb-6">Most web browsers allow you to control cookies through their settings. You can block or delete cookies at any time.</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.2. Opt-Out Links</h3>
            <p className="mb-6">For analytics cookies, you can opt out by visiting the tools provided by analytics providers, such as Google Analytics Opt-Out.</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.3. Disabling Cookies</h3>
            <p className="mb-6">Please note that disabling cookies may affect the functionality of certain features on our website.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Updates to This Policy</h2>
            <p className="mb-6">
              We may update this Cookie Policy periodically to reflect changes in technology, legal requirements, or how we operate. 
              Any updates will be posted on this page with an updated effective date.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
            <p className="mb-6">
              If you have questions about our Cookie Policy, please contact us at:<br />
              Email: CustomerSupport@CourseFlow.io
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}