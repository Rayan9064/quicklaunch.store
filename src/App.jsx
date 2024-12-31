import React from 'react';
import ProductSection from './components/ProductSection';
import ReviewSection from './components/ReviewSection';
import SpecsSection from './components/SpecsSection';
import GuaranteeSection from './components/GuaranteeSection';
import FaqSection from './components/FaqSection';
import ContactForm from './components/ContactForm';
import StickyTopBar from './components/StickyTopBar';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <StickyTopBar />
      <ProductSection />
      <ReviewSection />
      <SpecsSection />
      <GuaranteeSection />
      <FaqSection />
      <ContactForm />
    </div>
  );
}

export default App;