import React, { useState } from "react";
import doctor from "../assets/doctor.jpg";
import { useNavigate } from "react-router-dom";

function LoginDoctor() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulated authentication
    const doctorDatabase = {
      "doctor@example.com": { name: "John Doe", password: "password" },
      "jane.doe@example.com": { name: "Jane Doe", password: "password" },
    };

    const doctor = doctorDatabase[formData.email];

    if (doctor && formData.password === doctor.password) {
      localStorage.setItem("loggedIn", true);

      // Redirect based on doctor's name
      if (doctor.name === "John Doe") {
        navigate("/doctordashboard");
      } else {
        navigate("/dashboard");
      }
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F7F9FC]">
      {/* Left Side - Static Section */}
      <div className="hidden md:flex w-1/2 flex-col items-center justify-center bg-[#4A6A55] text-white px-8 py-12 sticky top-0 h-screen">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          Welcome Back, Doctor!
        </h2>
        <p className="text-lg text-center opacity-90 mb-6">
          Sign in to manage your appointments and connect with patients.
        </p>
        <ul className="space-y-3 text-sm opacity-80">
          <li className="flex items-center">✅ Manage Your Profile</li>
          <li className="flex items-center">✅ View and Accept Appointments</li>
          <li className="flex items-center">✅ Secure and HIPAA-Compliant</li>
          <li className="flex items-center">✅ Connect with More Patients</li>
        </ul>
        <img
          src={doctor}
          alt="Doctor Graphic"
          className="w-[250px] max-w-md rounded-lg shadow-lg mt-8"
        />
        <p className="mt-8 text-center">
          Don't have an account?{" "}
          <a
            href="/signup-doctor"
            className="underline text-white font-semibold"
          >
            Sign up here
          </a>
        </p>
      </div>

      {/* Right Side - Scrollable Login Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6 overflow-y-auto h-screen">
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-full max-w-lg">
          <h2 className="text-2xl font-semibold text-center text-[#4A6A55] mb-4">
            Doctor Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
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
                placeholder="doctor@example.com"
              />
            </div>
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
                placeholder="Enter your password"
              />
            </div>
            <p className="text-sm text-right text-[#4A6A55] hover:underline cursor-pointer">
              Forgot Password?
            </p>
            <button
              type="submit"
              className="w-full px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-all duration-300 
                     bg-gradient-to-r from-[#4A6A55] to-[#3F5B46] hover:from-[#5E8B6A] hover:to-[#4A6A55] 
                     hover:shadow-lg hover:scale-105"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginDoctor;
