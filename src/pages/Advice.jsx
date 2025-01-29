import React from "react";

const articles = [
  {
    title: "Managing Your Health: A Guide to Preventive Care",
    description: "Regular check-ups and screenings can help detect health issues early and improve long-term well-being.",
    image: "https://source.unsplash.com/300x200/?doctor,healthcare",
  },
  {
    title: "The Importance of Mental Wellness in Daily Life",
    description: "Taking care of your mental health is just as crucial as your physical health. Learn how to reduce stress and improve emotional resilience.",
    image: "https://source.unsplash.com/300x200/?mentalhealth,mindfulness",
  },
  {
    title: "How CareVerse Improves Healthcare Access",
    description: "Discover how digital healthcare solutions can enhance your access to quality medical support.",
    image: "https://source.unsplash.com/300x200/?telemedicine,doctor",
  },
];

const popularArticles = [
  {
    title: "Healthy Eating: A Simple Guide for Beginners",
    image: "https://source.unsplash.com/200x200/?healthyfood,nutrition",
  },
  {
    title: "5 Ways to Stay Active Without a Gym Membership",
    image: "https://source.unsplash.com/200x200/?exercise,fitness",
  },
  {
    title: "Understanding Sleep Hygiene: Tips for Better Rest",
    image: "https://source.unsplash.com/200x200/?sleep,relax",
  },
];

const HealthAdvice = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Search and CTA */}
      <div className="flex justify-between items-center max-w-7xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search"
          className="p-3 w-1/3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-green-300"
        />
        <div className="bg-green-100 p-4 rounded-lg flex flex-col items-center max-w-xs">
          <p className="text-green-700 font-semibold text-center">
            Need Medical Advice? CareVerse is here to help.
          </p>
          <button className="bg-green-500 text-white px-4 py-2 rounded mt-3 hover:bg-green-600">
            Get Started
          </button>
        </div>
      </div>

      {/* Main Articles Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Latest Health Advice</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <img src={article.image} alt={article.title} className="rounded-lg w-full" />
              <h3 className="text-lg font-semibold mt-3">{article.title}</h3>
              <p className="text-gray-600 mt-2">{article.description}</p>
              <button className="mt-3 text-green-600 font-semibold hover:underline">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Articles */}
      <div className="max-w-7xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="text-red-500 mr-2">❤️</span> Popular
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularArticles.map((article, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <img src={article.image} alt={article.title} className="rounded-lg w-full" />
              <h3 className="text-lg font-semibold mt-3">{article.title}</h3>
              <button className="mt-2 text-green-600 font-semibold hover:underline">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthAdvice;
