import React, { useState } from "react";
import signupImage from "../assets/doctor.jpg"; // Replace with an appropriate image

function SignupUser() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("User Signup Data:", formData);
    localStorage.setItem("loggedIn", true);
    alert("Signup Successful!");
    window.location.href = "/dashboard"; // Redirect after signup
  };

  return (
    <div className="flex min-h-screen bg-[#F7F9FC]">
      {/* Left Side - Static Section */}
      <div className="hidden md:flex w-1/2 flex-col items-center justify-center bg-[#4A6A55] text-white px-8 py-12 sticky top-0 h-screen">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          Join Us Today!
        </h2>
        <p className="text-lg text-center opacity-90 mb-6">
          Create an account to book appointments, manage health records, and
          connect with doctors.
        </p>

        <ul className="space-y-3 text-sm opacity-80">
          <li className="flex items-center">✅ Easy Appointment Booking</li>
          <li className="flex items-center">✅ Secure Medical Records</li>
          <li className="flex items-center">✅ 24/7 Doctor Consultation</li>
          <li className="flex items-center">✅ Health Tips & Advice</li>
        </ul>

        {/* Signup Image */}
        <img
          src={signupImage}
          alt="Signup Graphic"
          className="w-[250px] max-w-md rounded-lg shadow-lg mt-8"
        />

        {/* Redirect to Login */}
        <p className="mt-8 text-center">
          Already have an account?{" "}
          <a href="/login-user" className="underline text-white font-semibold">
            Login here
          </a>
        </p>
      </div>

      {/* Right Side - Scrollable Signup Form */}
      <div className="w-full md:w-1/2 flex justify-center items-start p-6 overflow-y-auto h-screen">
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-full max-w-lg">
          <h2 className="text-2xl font-semibold text-center text-[#4A6A55] mb-4">
            User Signup
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-[#4A6A55] focus:border-[#4A6A55]"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-[#4A6A55] focus:border-[#4A6A55]"
                placeholder="user@example.com"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-[#4A6A55] focus:border-[#4A6A55]"
                placeholder="+1234567890"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-[#4A6A55] focus:border-[#4A6A55]"
                placeholder="Enter a secure password"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-700 font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-[#4A6A55] focus:border-[#4A6A55]"
                placeholder="Confirm password"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-all duration-300 
                         bg-gradient-to-r from-[#4A6A55] to-[#3F5B46] hover:from-[#5E8B6A] hover:to-[#4A6A55] 
                         hover:shadow-lg hover:scale-105"
            >
              Signup
            </button>
          </form>

          {/* Separator */}
          <div className="flex items-center justify-center my-4">
            <hr className="w-full border-gray-300" />
            <span className="px-2 text-gray-500 text-sm">OR</span>
            <hr className="w-full border-gray-300" />
          </div>

          {/* Social Signup */}
          <button className="w-full px-6 py-3 text-gray-700 font-medium rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition duration-300 flex items-center justify-center">
            <img
              src="https://img.icons8.com/color/24/000000/google-logo.png"
              alt="Google"
              className="mr-2"
            />
            Signup with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignupUser;
