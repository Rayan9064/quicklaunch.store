import React from 'react';

export default function ProductSection() {
  return (
    <div className="grid mt-8 grid-cols-1 md:grid-cols-2 mb-16">
      <div className="flex justify-end md:justify-center mt-2">
        <img
          src="product.png"
          alt="Double-Sided Steel Brush"
          className="w-full max-w-sm"
        />
      </div>
      <div className="p-8">
        <h1 className="text-2xl font-bold text-gray-900">Double Sided Steel Brush Sweeper</h1>
        <p className="text-gray-700">Cleaner Spray Built-in Detergent</p>
        <p className="text-gray-700">Tank Refillable Ideal For Shop</p>
        <div className="text-xl font-bold my-4">$149.99 USD</div>
        <button className="bg-red-500 text-white py-4 px-8 rounded-full text-lg cursor-pointer w-full max-w-xs">
          Buy Now
        </button>

        <div className="flex gap-8 my-8">
          <div className="text-center">
            <img src="https://placehold.co/40" alt="Fast Shipping" />
            <p className="text-gray-700 mt-2">
              Fast Free<br />Shipping
            </p>
          </div>
          <div className="text-center">
            <img src="https://placehold.co/40" alt="Premium Quality" />
            <p className="text-gray-700 mt-2">
              30 Day<br />Guarantee
            </p>
          </div>
          <div className="text-center">
            <img src="https://placehold.co/40" alt="Money Back" />
            <p className="text-gray-700 mt-2">
              Money Back<br />Guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
