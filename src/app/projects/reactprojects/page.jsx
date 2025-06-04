'use client';
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <div className="bg-[#1C1C1C] text-white min-h-screen flex flex-col gap-3">
      <Header />

      {/* Side-by-side container */}
      <div className="flex-1 px-8 py-12 flex justify-center">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          
          {/* Shoes Store Project */}
          <div className="bg-[#2A2A2A] border border-[#8B16FB] rounded-lg p-6 w-80 shadow-lg">
            <div className="relative h-48 w-full mb-4 rounded overflow-hidden">
              <Image
                src="/assets/shoeslogo.jpeg"
                alt="Shoe Store"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-[#8B16FB] mb-2">Shoes Store</h2>
            <p className="text-sm mb-4">
              I made a shoe store using React and Vite. Learned the basics of React and Vite, and created an attractive frontend for practice.
            </p>
            <Link href="https://capable-lily-e21841.netlify.app/">
              <button className="bg-[#8B16FB] text-white px-4 py-2 rounded hover:bg-[#7A25C9] transition w-full cursor-pointer">
                Click Me
              </button>
            </Link>
          </div>

          {/* Recipe Store Project */}
          <div className="bg-[#2A2A2A] border border-[#8B16FB] rounded-lg p-6 w-80 shadow-lg">
            <div className="relative h-48 w-full mb-4 rounded overflow-hidden">
              <Image
                src="/assets/recipestore.png"
                alt="Recipe Store"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-[#8B16FB] mb-2">Recipe Store</h2>
            <p className="text-sm mb-4">
              I created a Recipe Store using React. Gained experience with Context API, props drilling, reusable components, and responsive frontend design.
            </p>
            <Link href="https://charming-syrniki-cb236f.netlify.app/">
              <button className="bg-[#8B16FB] text-white px-4 py-2 rounded hover:bg-[#7A25C9] transition w-full cursor-pointer">
                Click Me
              </button>
            </Link>
          </div>
          
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
