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
    <div className="bg-[#4A6A55] text-white py-24 px-6 rounded-lg relative">
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

      {/* Additional Content to Enhance Length */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-center">
          Why Choose CareVerse?
        </h2>
        <p className="mt-4 text-center max-w-2xl mx-auto">
          CareVerse is designed to make healthcare management seamless and
          efficient. From booking appointments to tracking your health, our
          platform offers a comprehensive solution for both patients and
          healthcare providers.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white text-green-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">For Patients</h3>
            <ul className="mt-4 list-disc list-inside">
              <li>Easy appointment booking</li>
              <li>Medication reminders</li>
              <li>Virtual consultations</li>
              <li>Health tracking</li>
            </ul>
          </div>
          <div className="bg-white text-green-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">For Providers</h3>
            <ul className="mt-4 list-disc list-inside">
              <li>Seamless patient record management</li>
              <li>Efficient appointment scheduling</li>
              <li>Secure communication</li>
              <li>Comprehensive health analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
