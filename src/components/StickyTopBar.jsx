import React from 'react';

export default function StickyTopBar() {
  return (
    <>
    <div>
    <div className="sticky top-0 z-50 bg-red-600 text-white flex justify-center items-center py-2">
      <span className="text-sm font-medium">
        FREE SHIPPING ON BUYING 2 OR MORE 🎉
      </span>
    </div>
      <img src="/logo-text.jpg" alt="brand logo" className='bg-white mx-auto py-4 max-w-[150px]' />
    </div>
    </>
  );
}
