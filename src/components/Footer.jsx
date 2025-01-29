import React from "react";
import logo from "../assets/logo.jpg";
const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
    resources: [
      { name: "Advice", href: "/advice" },
      { name: "FAQ", href: "/faq" },
      { name: "Reviews", href: "/reviews" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#4A6A55] text-[#F1F1F1] pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <img
              src={logo}
              alt="Logo"
              className="w-[175px] mb-4"
              onClick={() => {
                window.location.href = "/";
              }}
            />
            <p className="text-[#A3C9A8] text-sm">
              Providing valuable services and solutions to meet your needs.
            </p>
          </div>

          {/* Links Sections */}
          <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Links */}
            <div>
              <h3 className="text-[#F1E7D0] font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-[#A3C9A8] transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-[#F1E7D0] font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-[#A3C9A8] transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-[#F1E7D0] font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-[#A3C9A8] transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#A3C9A8] pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#F1F1F1]">
              © {currentYear} Your Company Name. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://twitter.com"
                className="text-[#F1F1F1] hover:text-[#A3C9A8]"
              >
                Twitter
              </a>
              <a
                href="https://facebook.com"
                className="text-[#F1F1F1] hover:text-[#A3C9A8]"
              >
                Facebook
              </a>
              <a
                href="https://linkedin.com"
                className="text-[#F1F1F1] hover:text-[#A3C9A8]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
