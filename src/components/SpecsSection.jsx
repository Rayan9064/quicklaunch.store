import React from 'react';

const SpecsSection = () => {
  return (
    <div className="w-screen py-16 bg-white">
      {/* Content container */}
      <div className="max-w-2xl mx-auto">
        {/* Center-aligned header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-left">
          Crafted with Passion
        </h2>
        {/* Content section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Image with controlled size */}
          <div className="flex-1">
            <img
              src="/specs.png"
              alt="Product Specifications"
              className="w-full max-w-[600px] mx-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecsSection;
