import React, { useState } from "react";
import doctor from "../assets/doctor.jpg"; // Replace with an appropriate image

function LoginUser() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Login Data:", formData);
    // Simulate authentication
    if (
      formData.email === "user@example.com" &&
      formData.password === "password"
    ) {
      localStorage.setItem("loggedIn", true);
      alert("Login Successful!");
      window.location.href = "/dashboard"; // Redirect after login
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F7F9FC]">
      {/* Left Side - Static Section */}
      <div className="hidden md:flex w-1/2 flex-col items-center justify-center bg-[#4A6A55] text-white px-8 py-12 sticky top-0 h-screen">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          Welcome Back!
        </h2>
        <p className="text-lg text-center opacity-90 mb-6">
          Login to access your account, manage appointments, and stay connected
          with your doctors.
        </p>

        <ul className="space-y-3 text-sm opacity-80">
          <li className="flex items-center">✅ Secure Login</li>
          <li className="flex items-center">✅ Access to Medical Records</li>
          <li className="flex items-center">✅ Appointment Management</li>
          <li className="flex items-center">✅ 24/7 Support</li>
        </ul>

        {/* Login Image */}
        <img
          src={doctor}
          alt="Login Graphic"
          className="w-[250px] max-w-md rounded-lg shadow-lg mt-8"
        />

        {/* Redirect to Signup */}
        <p className="mt-8 text-center">
          Don't have an account?{" "}
          <a href="/signup-user" className="underline text-white font-semibold">
            Sign up here
          </a>
        </p>
      </div>

      {/* Right Side - Scrollable Login Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6 overflow-y-auto h-screen">
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-full max-w-lg">
          <h2 className="text-2xl font-semibold text-center text-[#4A6A55] mb-4">
            User Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
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
                placeholder="Enter your password"
              />
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <a
                href="/forgot-password"
                className="text-sm text-[#4A6A55] font-medium hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-all duration-300 
                         bg-gradient-to-r from-[#4A6A55] to-[#3F5B46] hover:from-[#5E8B6A] hover:to-[#4A6A55] 
                         hover:shadow-lg hover:scale-105"
            >
              Login
            </button>
          </form>

          {/* Separator */}
          <div className="flex items-center justify-center my-4">
            <hr className="w-full border-gray-300" />
            <span className="px-2 text-gray-500 text-sm">OR</span>
            <hr className="w-full border-gray-300" />
          </div>

          {/* Social Login */}
          <button className="w-full px-6 py-3 text-gray-700 font-medium rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition duration-300 flex items-center justify-center">
            <img
              src="https://img.icons8.com/color/24/000000/google-logo.png"
              alt="Google"
              className="mr-2"
            />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginUser;
