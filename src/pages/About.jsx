import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-green-700">
            Welcome to CareVerse
          </h1>
          <p className="text-gray-600 mt-4">
            CareVerse is a modern healthcare management platform designed to
            connect patients with healthcare professionals seamlessly. We aim to
            simplify the way you access medical services, ensuring convenience
            and efficiency.
          </p>
          <button className="mt-4 bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src="https://source.unsplash.com/500x300/?healthcare,doctor"
            alt="Healthcare"
            className="rounded-lg w-full"
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-green-700">Our Mission</h2>
        <p className="text-gray-600 mt-3">
          At CareVerse, we believe that healthcare should be accessible,
          efficient, and patient-centered. Our mission is to empower individuals
          with technology-driven solutions that simplify appointment booking,
          patient management, and doctor interactions.
        </p>
      </div>

      {/* Key Features Section */}
      <div className="max-w-7xl mx-auto mt-10">
        <h2 className="text-2xl font-bold text-green-700">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {[
            {
              title: "Easy Appointment Booking",
              desc: "Schedule appointments effortlessly with top healthcare professionals.",
              img: "https://source.unsplash.com/200x200/?calendar,appointment",
            },
            {
              title: "Seamless Doctor-Patient Communication",
              desc: "Connect with doctors via chat, video calls, or in-person visits.",
              img: "https://source.unsplash.com/200x200/?doctor,consultation",
            },
            {
              title: "Secure Medical Records",
              desc: "Access and manage your medical history securely from anywhere.",
              img: "https://source.unsplash.com/200x200/?medical,records",
            },
          ].map((feature, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <img src={feature.img} alt={feature.title} className="rounded-lg w-full" />
              <h3 className="text-lg font-semibold mt-3">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto bg-green-100 p-6 rounded-lg mt-12 flex flex-col items-center">
        <h2 className="text-xl font-bold text-green-700">
          Ready to Experience Smarter Healthcare?
        </h2>
        <p className="text-gray-600 mt-2 text-center max-w-lg">
          Join CareVerse today and take control of your healthcare journey with
          ease and efficiency.
        </p>
        <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default About;
