import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-red-500 text-white py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Tell us what's on your mind!</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-2 rounded text-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded text-black"
            />
          </div>
          <input
            type="text"
            placeholder="Phone number"
            className="w-full p-2 rounded text-black"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-2 rounded text-black"
          ></textarea>
          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white px-8 py-2 rounded-full hover:bg-gray-800"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;