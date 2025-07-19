'use client';
import React from 'react';
import useTypewriter from './useTypewriter';
import { useRouter } from 'next/navigation';

const Body = () => {
  const word = useTypewriter(['Web Developer', 'Student', 'Learner'], 1500);
  const router = useRouter();

  const handleViewProjects = () => {
    router.push('/projects');
  };

  return (
    <div className="bg-[#242424] text-white px-10 py-12">
      {/* Top Section */}
      <div className="flex items-center justify-between flex-wrap gap-y-10 animate-fade-in-down duration-1000">
        {/* Intro Text */}
        <div className="text-xl leading-relaxed max-w-md ml-8 animate-slide-in-left duration-700">
          <p className="text-lg opacity-90">Hi there!</p>
          <p>
            I am a <span className="text-[#7A25C9] font-bold text-4xl animate-pulse drop-shadow-lg">"{word}|" </span>
          </p>
          <p className="text-2xl mt-2">Web Developer based in Karachi, Pakistan</p>

          <div className="flex gap-x-4 mt-6">
            <button
              onClick={handleViewProjects}
              className="bg-[#8F19FF] text-white px-4 py-2 rounded-md hover:bg-[#7A25C9] hover:scale-105 transition-transform duration-300 shadow-md"
            >
              View Projects
            </button>

            <a
              href="/BilalShaikhCV.pdf"
              download="Bilal-Sheikh-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#8F19FF] text-white px-4 py-2 rounded-md hover:bg-[#7A25C9] hover:scale-105 transition-transform duration-300 shadow-md"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="mr-20 animate-slide-in-right duration-1000">
          <img
            src="/assets/profile.jpg"
            alt="Bilal Sheikh"
            className="w-60 h-60 rounded-full object-cover border-4 border-[#7A25C9] shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* About Me Section */}
      <div className="mt-20 text-center px-4 max-w-4xl mx-auto animate-fade-in-up duration-1000">
        <h1 className="text-4xl text-[#7A25C9] font-bold mb-4 underline decoration-[#8F19FF] underline-offset-8">About Me</h1>
        <p className="text-lg text-gray-300 leading-loose">
          I am a passionate undergraduate student pursuing a degree in Software Engineering from the University of Karachi.
          With a strong enthusiasm for technology and problem-solving, I specialize in web development and continuously expand my skills through hands-on projects.
          Dedicated to learning and innovation, I strive to build efficient, user-friendly applications.
          My goal is to contribute to impactful solutions while growing as a versatile developer in the ever-evolving tech industry.
        </p>
      </div>
    </div>
  );
};

export default Body;
