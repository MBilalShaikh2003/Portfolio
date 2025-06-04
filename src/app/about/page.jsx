'use client';
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="bg-[#1C1C1C] text-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 px-6 py-12 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-[#8B16FB] mb-6">Who is M Bilal?</h1>

        <div className="max-w-3xl text-center text-lg leading-relaxed mb-12">
          <p className="mb-4">
            Hello! I'm <span className="text-[#8B16FB] font-semibold">M Bilal</span>, a passionate and aspiring Software Engineer. I began my academic journey at Bahria College Karsaz, where I completed both school and college. During my intermediate studies, I achieved an impressive <span className="font-semibold text-[#8B16FB]">91%</span> score.
          </p>

          <p className="mb-4">
            Currently, I'm pursuing my Bachelor's degree in Software Engineering at <span className="text-[#8B16FB] font-semibold">Karachi University</span>. As an undergraduate, I'm exploring a wide range of technologies and continuously building hands-on projects to sharpen my development skills.
          </p>

          <p>
            My interests lie in front-end development, UI/UX design, and full-stack web applications. I enjoy turning ideas into reality using clean, efficient, and scalable code.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-12">
          <Link href="https://www.linkedin.com/in/muhammad-bilal-shaikh-dev/" target="_blank">
            <Image
              src="/assets/linkedinlogo.png" // ✅ Must be placed in public/assets
              alt="LinkedIn"
              width={80}
              height={80}
              className="hover:scale-110 transition-transform duration-300"
            />
          </Link>
          <Link href="https://github.com/mbilalshaikh2003" target="_blank">
            <Image
              src="/assets/githublogo.png" // ✅ Must be placed in public/assets
              alt="GitHub"
              width={80}
              height={80}
              className="hover:scale-110 transition-transform duration-300"
            />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
