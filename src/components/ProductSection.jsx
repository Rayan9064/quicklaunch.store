import React from 'react';

export default function ProductSection() {
  return (
    <div className="grid mt-8 grid-cols-1 md:grid-cols-2 mb-16 max-w-5xl mx-auto">
      {/* Product Image Section */}
      <div className="flex justify-center items-center mt-2">
        <img
          src="product.png"
          alt="Double-Sided Steel Brush"
          className="w-full max-w-md object-contain"
        />
      </div>

      {/* Product Details Section */}
      <div className="p-8 my-auto">
        <h1 className="text-2xl font-bold text-gray-900">
          Double Sided Steel Brush Sweeper
        </h1>
        <p className="text-gray-700">Cleaner Spray Built-in Detergent</p>
        <p className="text-gray-700">Tank Refillable Ideal For Shop</p>
        <div className="text-xl font-bold my-4">$149.99 USD</div>
        
        {/* Buy Now Button */}
        <button className="bg-red-500 text-white py-2 px-4 rounded-full text-lg cursor-pointer w-full max-w-xs mx-auto">
          Buy Now
        </button>

        {/* Features Section */}
        <div className="flex justify-around my-8">
          <div className="flex flex-col items-center">
            <img src="https://placehold.co/40" alt="Fast Shipping" />
            <p className="text-gray-700 mt-2 text-center">
              Fast Free<br />Shipping
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://placehold.co/40" alt="Premium Quality" />
            <p className="text-gray-700 mt-2 text-center">
              30 Day<br />Guarantee
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://placehold.co/40" alt="Money Back" />
            <p className="text-gray-700 mt-2 text-center">
              Money Back<br />Guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
