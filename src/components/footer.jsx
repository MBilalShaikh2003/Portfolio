'use client';
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-gray-300 py-6 mt-0">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
        {/* Left: Name or Copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Muhammad Bilal Sheikh</p>

        {/* Right: Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://github.com/MBilalShaikh2003"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Github size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-bilal-shaikh-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
