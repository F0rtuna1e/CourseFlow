import React from 'react';
import { Link } from 'react-router-dom';

export function TermsOfService() {
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
              <span className="ml-4 text-gray-700">Terms of Service</span>
            </li>
          </ol>
        </nav>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">CourseFlow Terms of Service</h1>
          <p className="text-sm text-gray-600 mb-8">Effective Date: 11/05/24</p>

          <div className="prose prose-indigo max-w-none">
            <p className="mb-6">
              Welcome to CourseFlow! These Terms of Service ("Terms") govern your use of our website, platform, 
              and related services (collectively, the "Services"). By accessing or using the Services, you agree 
              to these Terms. If you do not agree, please do not use the Services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">By creating an account or accessing the Services, you confirm that:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>You are at least 18 years old or have parental/guardian consent.</li>
              <li>You agree to comply with these Terms and any applicable laws or regulations.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Account Registration</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>You must create an account to access most features of CourseFlow.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials and all activities under your account.</li>
              <li>Notify us immediately of any unauthorized access or breach.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Use of Services</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">3.1. Permitted Use</h3>
            <p className="mb-6">
              CourseFlow grants you a personal, non-transferable, limited license to access and use the Services 
              for educational purposes only.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.2. Restrictions</h3>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Use the Services for any unlawful purpose.</li>
              <li>Reverse engineer, modify, or create derivative works of the Services.</li>
              <li>Share, sell, or exploit any part of the Services commercially without written permission.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Payment and Subscriptions</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">4.1. Payment</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Payments for subscriptions are processed securely via Stripe.</li>
              <li>By subscribing, you authorize us to charge your payment method for the selected plan.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.2. Refunds</h3>
            <p className="mb-4">Refunds are subject to our Refund Policy. Lifetime subscriptions are non-refundable.</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.3. Free Trial</h3>
            <p className="mb-6">The Monthly Plan includes a 7-day free trial. If you do not cancel before the trial ends, your payment method will be charged.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>All content on CourseFlow is owned by CourseFlow or its licensors and is protected by copyright and other laws.</li>
              <li>You may not use CourseFlow's intellectual property without prior written consent.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Privacy</h2>
            <p className="mb-6">
              Your use of the Services is subject to our Privacy Policy, which explains how we collect, use, 
              and protect your information.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>CourseFlow is provided "as is" without warranties of any kind, either express or implied.</li>
              <li>We are not liable for any indirect, incidental, or consequential damages arising from your use of the Services.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Termination</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>We reserve the right to terminate or suspend your access to the Services at any time for any reason.</li>
              <li>You may cancel your subscription at any time through your account settings.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Governing Law</h2>
            <p className="mb-6">
              These Terms are governed by the laws of the United States. Any disputes will be resolved in 
              the courts of California.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Changes to Terms</h2>
            <p className="mb-6">
              We may update these Terms from time to time. If significant changes are made, we will notify 
              you via email or through the Services. Continued use of the Services constitutes acceptance 
              of the revised Terms.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Us</h2>
            <p className="mb-6">
              For questions about these Terms, contact us at:<br />
              Email: CustomerSupport@CourseFlow.io
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}