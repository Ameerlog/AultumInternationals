import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy-loaded pages/components
const Home = lazy(() => import("./pages/Home"));
const ExecutionSection = lazy(() => import("./components/ExecutionSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));
const Careers = lazy(() => import("./components/Careers"));
const Geographics = lazy(() => import("./components/Geographics"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const AboutAultum = lazy(() => import("./components/AboutAultum"));
const WhatWeThink = lazy(() => import("./components/WhatWeThink"));
const BlogDetail = lazy(() => import("./components/BlogDetail"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Policy = lazy(() => import("./pages/Policy"));

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Suspense
            fallback={<div className="text-center py-10">Loading...</div>}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Home />
                    <ExecutionSection />
                    <ContactSection />
                  </>
                }
              />
              <Route path="/careers" element={<Careers />} />
              <Route path="/geographics" element={<Geographics />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/about" element={<AboutAultum />} />
              <Route path="/what-we-think" element={<WhatWeThink />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/policy" element={<Policy />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
