import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import BottomBanner from './components/BottomBanner';
import UpperFooterBanner from './components/UpperFooterBanner';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import WhyChooseUsPage from './pages/WhyChooseUsPage';

function App() {

  return (
    <>
      <div className="">
        <div className="fixed w-full top-0 z-20 opacity-100 ">
          <Header />
        </div>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<WhyChooseUsPage />} />
        </Routes>
      </Router>
      <UpperFooterBanner />
      <Footer />
      <BottomBanner />
    </>
  )
}

export default App
