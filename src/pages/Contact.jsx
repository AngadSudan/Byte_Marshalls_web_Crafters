import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      toast.success("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("Please fill in all fields.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#4A6A55] p-8 text-white">
      {/* Contact Info Section */}
      <div className="bg-white text-green-700 rounded-xl shadow-md p-8 max-w-lg w-full md:w-1/2 md:mr-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
          Contact Us
        </h1>
        <p className="text-lg mb-6 text-center md:text-left">
          Have any questions or need support? Reach out to us using the contact
          details below.
        </p>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6" />
            <p className="text-lg">Email: support@healthcare.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6" />
            <p className="text-lg">Phone: +1 234 567 890</p>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="w-6 h-6" />
            <p className="text-lg">Address: 123 Healthcare St, Wellness City</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white text-green-700 rounded-xl shadow-md p-8 max-w-lg w-full md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">
          Send Us a Message
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </div>
  );
};

export default Contact;
