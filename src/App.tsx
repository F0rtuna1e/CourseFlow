import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { ExploreFeatures } from './pages/ExploreFeatures';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { CookiePolicy } from './pages/CookiePolicy';
import { TermsOfService } from './pages/TermsOfService';
import { ContactUs } from './pages/ContactUs';
import { FAQ } from './pages/FAQ';
import { Auth } from './pages/Auth';
import { Dashboard } from './pages/Dashboard';
import { AIAssistants } from './pages/AIAssistants';
import { Calendar } from './pages/Calendar';
import { Grades } from './pages/Grades';
import { Notes } from './pages/Notes';
import { Settings } from './pages/Settings';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <Routes>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="ai-assistants" element={<AIAssistants />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="grades" element={<Grades />} />
              <Route path="notes" element={<Notes />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route
              path="*"
              element={
                <>
                  <Navigation />
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/features" element={<ExploreFeatures />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/cookie-policy" element={<CookiePolicy />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/auth" element={<Auth />} />
                  </Routes>
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;