import React from 'react';

const GuaranteeSection = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 bg-pink-50">
      <h2 className="text-2xl font-bold mb-4 text-center">30 DAY GUARANTEE</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        We stand by our products with a 30-day satisfaction guarantee. If you are unhappy for any reason, simply return your item to us for a full refund.
      </p>
      <div className="mt-8 text-center">
        <button className="bg-black text-white px-8 py-2 rounded-full hover:bg-gray-800">
          It's obvious, you need this ASAP
        </button>
      </div>
    </div>
  );
};

export default GuaranteeSection;