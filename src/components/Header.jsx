import React, { useState } from "react";
import logo from "../assets/logo.jpg";
function Header() {
  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Advice", href: "/advice" },
    { name: "FAQ", href: "/faq" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ];
  const [isLoggedin, setLoggedin] = useState(
    localStorage.getItem("loggedIn") || false
  );

  return (
    <div>
      <header className="navbar-bg w-full p-4 bg-[#4A6A55] flex justify-between items-center fixed top-0 left-0 z-50 shadow-md">
        <div className="flex items-center space-x-10">
          <img src={logo} className="w-[175px] " />
          <nav className="hidden md:flex space-x-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-[#F1F1F1] font-medium hover:text-[#A3C9A8]"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="space-x-4 flex items-center">
          {isLoggedin ? (
            <div className="flex items-center space-x-4">
              <span className="text-[#F1F1F1] font-medium">John Doe</span>
              <a
                href="/profile"
                className="px-6 py-3 text-[#4A6A55] font-semibold rounded-lg shadow-md transition-all duration-300 
                   bg-[#F1E7D0] hover:bg-[#D4A373] hover:shadow-lg hover:scale-105"
              >
                Profile
              </a>
            </div>
          ) : (
            <>
              <a
                href="/login"
                className="px-6 py-3 text-[#4A6A55] font-semibold rounded-lg shadow-md transition-all duration-300 
                   bg-[#F1E7D0] hover:bg-[#D4A373] hover:shadow-lg hover:scale-105"
              >
                Login
              </a>
              <a
                href="/signup"
                className="px-6 py-3 text-[#4A6A55] font-semibold rounded-lg shadow-md transition-all duration-300 
                   bg-[#F1E7D0] hover:bg-[#D4A373] hover:shadow-lg hover:scale-105"
              >
                Get Started
              </a>
            </>
          )}
        </div>
      </header>
      <div className="h-16"></div>{" "}
      {/* Spacer to prevent content from being hidden behind the navbar */}
    </div>
  );
}

export default Header;
