import React from 'react';
import { Link } from 'react-router-dom';

export function PrivacyPolicy() {
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
              <span className="ml-4 text-gray-700">Privacy Policy</span>
            </li>
          </ol>
        </nav>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">CourseFlow Privacy Policy</h1>
          <p className="text-sm text-gray-600 mb-8">Effective Date: [11/05/24]</p>

          <div className="prose prose-indigo max-w-none">
            <p className="mb-6">
              CourseFlow ("we," "our," or "us") values your privacy and is committed to protecting your personal data. 
              This Privacy Policy explains how we collect, use, and share information about you when you use our services, 
              including our website, platform, and mobile applications (collectively, the "Services").
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect the following types of information:</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">1.1. Personal Information You Provide</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Account Information: Name, email address, username, and password.</li>
              <li>Billing Information: Payment details such as credit card numbers and billing addresses (processed securely via Stripe).</li>
              <li>Profile Information: Details like your academic goals, GPA, and preferences.</li>
              <li>Support Requests: Information you provide when contacting customer support.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">1.2. Information Collected Automatically</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Usage Data: Details about how you use the Services.</li>
              <li>Device Information: IP address, browser type, operating system, and device identifiers.</li>
              <li>Cookies and Tracking: Information collected through cookies, pixels, and similar technologies.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">1.3. Information From Third Parties</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Canvas and Google Integration: Data synced from your Canvas account and Google Calendar.</li>
              <li>Third-Party Tools: Information from analytics providers and payment processors.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Provide, improve, and personalize the Services.</li>
              <li>Facilitate subscription management and process payments.</li>
              <li>Offer features like the AI Study Assistant and Assignment Insights.</li>
              <li>Respond to support inquiries and resolve issues.</li>
              <li>Analyze usage trends to improve functionality.</li>
              <li>Comply with legal obligations.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Sharing Your Information</h2>
            <p className="mb-4">We do not sell your personal information. However, we may share data:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>With Service Providers: Third-party vendors who help us provide the Services.</li>
              <li>With Integrations: Canvas and Google Calendar, if authorized by you.</li>
              <li>For Legal Reasons: To comply with legal obligations or protect our rights.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Your Rights and Choices</h2>
            <p className="mb-4">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Access and Correction: Request access to your personal information and correct inaccuracies.</li>
              <li>Data Deletion: Request deletion of your data.</li>
              <li>Opt-Out: Manage cookies and opt-out of targeted advertising.</li>
              <li>Withdraw Consent: Revoke permissions, such as third-party integrations.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
            <p className="mb-6">
              We use encryption, secure servers, and regular monitoring to protect your data. However, 
              no system is completely secure. We encourage you to use strong passwords and take measures 
              to protect your account.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Retention</h2>
            <p className="mb-6">
              We retain personal information for as long as necessary to provide the Services or comply 
              with legal obligations.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. International Users</h2>
            <p className="mb-6">
              If you are accessing the Services from outside the United States, note that your data may 
              be processed in the U.S., which may have different data protection laws.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to This Policy</h2>
            <p className="mb-6">
              We may update this Privacy Policy from time to time. Any changes will be posted on this 
              page with an updated effective date.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
            <p className="mb-6">
              For questions about this Privacy Policy, please contact us at:<br />
              Email: CustomerSupport@CourseFlow.io
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}