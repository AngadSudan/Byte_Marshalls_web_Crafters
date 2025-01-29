import React from "react";
import { ArrowRight } from "lucide-react";
import doctor from "../assets/doctor.jpg";
const Signup = () => {
  const signupOptions = [
    {
      text: "Sign Up as Doctor",
      link: "/signup-doctor",
      img: doctor,
    },
    {
      text: "Sign Up as Patient",
      link: "/signup-user",
      img: doctor,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#4A6A55] p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
        Join Our Healthcare Portal
      </h1>
      <p className="text-lg text-white mb-8 text-center max-w-2xl">
        Create an account to access personalized healthcare services. Join us
        and be a part of a secure and seamless experience.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-xl">
        {signupOptions.map((option, index) => (
          <a
            key={index}
            href={option.link}
            className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-8 hover:bg-green-50 transition duration-300 transform hover:scale-105"
          >
            <img
              src={option.img}
              alt={option.text}
              className="w-20 h-20 mb-4"
            />
            <p className="text-xl font-semibold text-green-700 flex items-center">
              {option.text} <ArrowRight className="ml-2" />
            </p>
          </a>
        ))}
      </div>
      {/* <img
        src="/healthcare-illustration.png"
        alt="Healthcare"
        className="mt-12 w-60 opacity-80"
      /> */}
    </div>
  );
};

export default Signup;
