import React, { useState } from "react";
import doctor from "../assets/doctor.jpg";
function SignupDoctor() {
  const [formData, setFormData] = useState({
    name: "",
    qualification: "",
    email: "",
    graduationYear: "",
    specialty: "",
    licenseNumber: "",
    hospital: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name == "john") {
      localStorage.set("loggedIn", true);
    }
    console.log("Doctor Signup Data:", formData);
  };

  return (
    <div className="flex min-h-screen bg-[#F7F9FC]">
      {/* Left Side - Static Section */}
      <div className="hidden md:flex w-1/2 flex-col items-center justify-center bg-[#4A6A55] text-white px-8 py-12 sticky top-0 h-screen">
        {/* Header Text */}
        <h2 className="text-3xl font-semibold mb-4 text-center">
          Join Our Medical Network
        </h2>

        {/* Short Description */}
        <p className="text-lg text-center opacity-90 mb-6">
          Connect with patients, expand your practice, and manage your
          appointments easily.
        </p>

        {/* Key Benefits */}
        <ul className="space-y-3 text-sm opacity-80">
          <li className="flex items-center">✅ Verified Doctor Profiles</li>
          <li className="flex items-center">
            ✅ Real-Time Appointment Scheduling
          </li>
          <li className="flex items-center">✅ Secure and HIPAA-Compliant</li>
          <li className="flex items-center">
            ✅ Increase Your Online Presence
          </li>
        </ul>

        {/* Doctor Image */}
        <img
          src={doctor} // Replace with a medical illustration
          alt="Doctor Graphic"
          className="w-[250px] max-w-md rounded-lg shadow-lg mt-8"
        />

        {/* Redirect to Login */}
        <p className="mt-8 text-center">
          Already have an account?{" "}
          <a
            href="/login-doctor"
            className="underline text-white font-semibold"
          >
            Login here
          </a>
        </p>
      </div>

      {/* Right Side - Scrollable Form */}
      <div className="w-full md:w-1/2 flex justify-center items-start p-6 overflow-y-auto h-screen">
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-full max-w-lg">
          <h2 className="text-2xl font-semibold text-center text-[#4A6A55] mb-4">
            Doctor Signup
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
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
                placeholder="Dr. John Doe"
              />
            </div>

            {/* Qualification */}
            <div>
              <label className="block text-gray-700 font-medium">
                Qualification
              </label>
              <input
                type="text"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-[#4A6A55] focus:border-[#4A6A55]"
                placeholder="MBBS, MD, etc."
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
                placeholder="doctor@example.com"
              />
            </div>

            {/* Year of Graduation */}
            <div>
              <label className="block text-gray-700 font-medium">
                Year of Graduation
              </label>
              <input
                type="number"
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-[#4A6A55] focus:border-[#4A6A55]"
                placeholder="YYYY"
                min="1950"
                max="2025"
              />
            </div>

            {/* Specialty */}
            <div>
              <label className="block text-gray-700 font-medium">
                Specialty
              </label>
              <select
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-[#4A6A55] focus:border-[#4A6A55]"
              >
                <option value="">Select Specialty</option>
                <option value="General Physician">General Physician</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Orthopedic">Orthopedic</option>
                <option value="Pediatrician">Pediatrician</option>
                <option value="Psychiatrist">Psychiatrist</option>
              </select>
            </div>

            {/* License Number */}
            <div>
              <label className="block text-gray-700 font-medium">
                Medical License Number
              </label>
              <input
                type="text"
                name="licenseNumber"
                value={formData.licenseNumber}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-[#4A6A55] focus:border-[#4A6A55]"
                placeholder="e.g., MED123456"
              />
            </div>

            {/* Hospital Affiliation */}
            <div>
              <label className="block text-gray-700 font-medium">
                Hospital Affiliation
              </label>
              <input
                type="text"
                name="hospital"
                value={formData.hospital}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-[#4A6A55] focus:border-[#4A6A55]"
                placeholder="Hospital Name (Optional)"
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
        </div>
      </div>
    </div>
  );
}

export default SignupDoctor;
