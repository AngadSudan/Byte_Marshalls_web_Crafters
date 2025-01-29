import React, { useState, useEffect } from "react";

const reviews = [
  {
    text: "CareVerse has made managing my appointments so easy! I can book, reschedule, and consult with my doctor all in one place.",
    name: "Dr. Emily Carter",
    role: "Family Physician",
    image: "https://source.unsplash.com/50x50/?woman,doctor",
  },
  {
    text: "Thanks to CareVerse, I never miss my medication reminders. The platform truly keeps my health on track!",
    name: "James Robinson",
    role: "Patient",
    image: "https://source.unsplash.com/50x50/?man,portrait",
  },
  {
    text: "As a healthcare provider, CareVerse has helped me manage patient records seamlessly. Highly recommended!",
    name: "Dr. Sarah Lee",
    role: "General Practitioner",
    image: "https://source.unsplash.com/50x50/?woman,smile",
  },
  {
    text: "I love how CareVerse allows me to consult with my doctor from home. Virtual care has never been this easy.",
    name: "Olivia Martinez",
    role: "Patient",
    image: "https://source.unsplash.com/50x50/?woman,glasses",
  },
  {
    text: "Efficient, secure, and easy to use—CareVerse has transformed how I interact with my patients.",
    name: "Dr. Kevin Adams",
    role: "Cardiologist",
    image: "https://source.unsplash.com/50x50/?doctor,man",
  },
  {
    text: "CareVerse's health tracking features have been a game changer for my wellness journey. I feel more in control than ever!",
    name: "Sophia Brown",
    role: "Patient",
    image: "https://source.unsplash.com/50x50/?woman,happy",
  },
];

const Reviews = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-green-900 text-white py-12 px-6 rounded-lg relative">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-2xl md:text-3xl font-semibold italic">
          “{reviews[index].text}”
        </p>
        <div className="flex items-center justify-center mt-6">
          <img
            src={reviews[index].image}
            alt={reviews[index].name}
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <div className="ml-3">
            <p className="text-sm uppercase font-semibold">Review by</p>
            <p className="text-lg font-medium">{reviews[index].name}</p>
            <p className="text-sm text-gray-300">{reviews[index].role}</p>
          </div>
        </div>

        {/* Dots for Navigation */}
        <div className="flex justify-center mt-4">
          {reviews.map((_, i) => (
            <span
              key={i}
              className={`h-3 w-3 mx-1 rounded-full ${
                i === index ? "bg-green-400" : "bg-gray-500"
              } transition-all`}
            />
          ))}
        </div>

        <button className="mt-6 px-6 py-2 text-lg font-medium bg-white text-green-900 rounded-full hover:bg-gray-200 transition">
          More Success Stories
        </button>
      </div>

      {/* Right-Side Illustration (Placeholder) */}
      <div className="absolute bottom-0 right-5 hidden md:block">
        <img
          src="https://source.unsplash.com/150x150/?meditation,relax"
          alt="Illustration"
          className="opacity-70"
        />
      </div>
    </div>
  );
};

export default Reviews;
