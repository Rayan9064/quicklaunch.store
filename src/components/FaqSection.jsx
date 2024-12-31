import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "How to use this product?",
    answer: "Simply apply the cleaner and brush gently on your shoes."
  },
  {
    question: "When will I receive my order?",
    answer: "Orders typically ship within 1-2 business days."
  },
  {
    question: "What's the return policy?",
    answer: "We offer a 30-day money-back guarantee on all products."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              className="w-full flex justify-between items-center py-4"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-left font-medium">{faq.question}</span>
              <ChevronDownIcon
                className={`w-5 h-5 transform transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;