import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQ() {
  const [openSection, setOpenSection] = React.useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  const faqSections = [
    {
      id: 'general',
      title: '1. General Questions',
      questions: [
        {
          q: 'What is CourseFlow?',
          a: 'CourseFlow is an all-in-one academic assistant designed to help students manage their courses, track grades, sync with Canvas, and improve their study habits using AI-powered tools.'
        },
        {
          q: 'Who can use CourseFlow?',
          a: 'CourseFlow is perfect for students of all levels, from high school to university, who want to organize their academic life and boost performance.'
        }
      ]
    },
    {
      id: 'features',
      title: '2. Features',
      questions: [
        {
          q: 'What features does CourseFlow offer?',
          a: <>
            Our platform includes:
            <ul className="list-disc pl-6 mt-2">
              <li>AI Study Assistant: Personalized study help tailored to your needs.</li>
              <li>AI Homework Helper: Guidance on assignments and projects.</li>
              <li>GPA Tracker: Monitor your academic performance and predict outcomes.</li>
              <li>Canvas/Instructor Sync: Integrate seamlessly with your course materials.</li>
              <li>Custom Calendar: Sync with Google Calendar to stay on top of deadlines.</li>
            </ul>
            <p className="mt-2">Visit our <Link to="/features" className="text-indigo-600 hover:text-indigo-700">Explore Features</Link> page for a complete list.</p>
          </>
        },
        {
          q: 'How does the AI Study Assistant work?',
          a: 'The AI analyzes your study habits and provides tailored advice to maximize productivity and retention.'
        }
      ]
    },
    {
      id: 'pricing',
      title: '3. Subscriptions and Pricing',
      questions: [
        {
          q: 'What are the subscription options?',
          a: <>
            We offer three plans:
            <ul className="list-disc pl-6 mt-2">
              <li>Monthly: $9.99/month (7-day free trial).</li>
              <li>Yearly: $99/year (save 17%).</li>
              <li>Lifetime: $199 one-time payment.*</li>
            </ul>
          </>
        },
        {
          q: 'Is there a free trial?',
          a: 'Yes, the Monthly Plan includes a 7-day free trial.'
        },
        {
          q: 'Can I switch my subscription plan?',
          a: 'Absolutely! You can upgrade or downgrade your plan at any time through your account settings.'
        }
      ]
    },
    {
      id: 'support',
      title: '4. Technical Support',
      questions: [
        {
          q: 'How do I reset my password?',
          a: 'Go to the login page and click "Forgot Password." Follow the instructions sent to your email.'
        },
        {
          q: 'Why isn\'t my Canvas account syncing?',
          a: 'Ensure that you\'ve granted CourseFlow the necessary permissions. If issues persist, contact us at CustomerSupport@CourseFlow.io.'
        },
        {
          q: 'Is my data secure?',
          a: <>Your data is securely stored and never sold to third parties. Review our <Link to="/privacy-policy" className="text-indigo-600 hover:text-indigo-700">Privacy Policy</Link> for details.</>
        }
      ]
    },
    {
      id: 'account',
      title: '5. Account Management',
      questions: [
        {
          q: 'How do I cancel my subscription?',
          a: 'Log in to your account, navigate to "Subscriptions," and select "Cancel." You\'ll retain access until the end of the billing period.'
        },
        {
          q: 'Can I get a refund?',
          a: 'Refunds are available based on our Refund Policy. Note that Lifetime subscriptions are non-refundable.'
        }
      ]
    },
    {
      id: 'contact',
      title: '6. Contact Us',
      questions: [
        {
          q: 'How can I reach customer support?',
          a: <>You can email us at CustomerSupport@CourseFlow.io or fill out the <Link to="/contact" className="text-indigo-600 hover:text-indigo-700">Contact Us Form</Link>.</>
        },
        {
          q: 'Do you offer partnerships or promotions?',
          a: 'Yes, contact us on Instagram at @Course.Flow for collaboration opportunities.'
        }
      ]
    }
  ];

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
              <span className="ml-4 text-gray-700">FAQ</span>
            </li>
          </ol>
        </nav>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">Frequently Asked Questions</h1>
          <p className="mt-4 text-xl text-gray-600">
            Find answers to common questions about CourseFlow
          </p>
        </div>

        <div className="space-y-6">
          {faqSections.map((section) => (
            <div key={section.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => toggleSection(section.id)}
              >
                <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                {openSection === section.id ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {openSection === section.id && (
                <div className="px-6 py-4 space-y-6">
                  {section.questions.map((item, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">{item.q}</h3>
                      <div className="text-gray-600">{item.a}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need More Help?</h2>
          <p className="text-gray-600 mb-6">
            If your question wasn't answered here, please reach out to us via our{' '}
            <Link to="/contact" className="text-indigo-600 hover:text-indigo-700">
              Contact Us
            </Link>{' '}
            page or email at{' '}
            <a 
              href="mailto:CustomerSupport@CourseFlow.io"
              className="text-indigo-600 hover:text-indigo-700"
            >
              CustomerSupport@CourseFlow.io
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}