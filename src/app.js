import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

// Lazy-load the micro frontends
const HomepageApp = lazy(() => import("homepageApp/HomePage"));
const AboutApp = lazy(() => import("homepageApp/AboutPage"));
const ContactApp = lazy(() => import("contactApp/ContactPage"));
const PrivacyApp = lazy(() => import("privacyApp/PrivacyPage"));
const PolicyApp = lazy(() => import("privacyApp/PolicyPage"));

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy</Link>
            </li>
            <li>
              <Link to="/policy">Policy</Link>
            </li>
          </ul>
        </nav>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomepageApp />} />
            <Route path="/about" element={<AboutApp />} />
            <Route path="/contact" element={<ContactApp />} />
            <Route path="/privacy" element={<PrivacyApp />} />
            <Route path="/policy" element={<PolicyApp />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
