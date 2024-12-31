import React from 'react';

export default function ReviewSection() {
  const reviews = [
    {
      text: "I got my brush about an hour ago! Works perfectly so far! The brush really is sturdy, so far no hair coming out of the brush. The tank holds a lot of solution! I love the fact that it's a 2 in 1 brush! I'm very happy with my purchase!",
      author: "Mike, New York",
      stars: "★★★★★",
    },
    {
      text: "Can't wait to try getting up all that hair from my cats!",
      author: "Sharon, New Orleans",
      stars: "★★★★★",
    },
    {
      text: "If you're having doubts about which I had, I'm here to assure! THE PRODUCT IS 100% as FAST EFFICIENT! I just received mine today and I'm already in love with it! I have 2 cats and 1 dog and my vacuum was not picking up all the hair! This product is a game changer! I'm going to order another one for my car!",
      author: "Jenny, New York",
      stars: "★★★★★",
    },
    {
      text: "A game-changing product! My house feels cleaner, and I love how easy it is to use!",
      author: "Sophia, California",
      stars: "★★★★★",
    },
    {
      text: "The brush works as described. I wish it came in more colors, though.",
      author: "Liam, Texas",
      stars: "★★★★☆",
    },
  ];

  return (
    <section className="w-screen bg-gray-50 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Customer Reviews
      </h2>
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`w-full text-center max-w-5xl mx-auto px-6 py-4 shadow-md rounded-lg ${
              index % 2 === 0 ? 'bg-orange-100' : 'bg-white'
            }`}
          >
            <div className="text-yellow-500 text-lg mb-2">{review.stars}</div>
            <p className="text-gray-700 mb-2">{review.text}</p>
            <p className="text-gray-500 text-sm">- {review.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
