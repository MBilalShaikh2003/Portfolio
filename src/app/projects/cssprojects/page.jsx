'use client';
import React from 'react';
import Header from '../../../components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <div className="bg-[#1C1C1C] text-white min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 px-8 py-12 flex justify-center">
        {/* Container for both cards */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* OLX Clone Project */}
          <div className="bg-[#2A2A2A] border border-[#8B16FB] rounded-lg p-6 w-80 shadow-lg">
            <div className="relative h-48 w-full mb-4 rounded overflow-hidden">
              <Image
                src="/assets/olxclone.png"
                alt="OLX Clone"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-[#8B16FB] mb-2">OLX Clone</h2>
            <p className="text-sm mb-4">
              I built the UI frontend of this OLX clone from scratch using only HTML and CSS as a practice project. It mimics the look and feel of OLX.
            </p>
            <Link href="https://mbilalshaikh2003.github.io/olx-clone/">
              <button className="bg-[#8B16FB] text-white px-4 py-2 rounded hover:bg-[#7A25C9] transition w-full cursor-pointer">
                Click Me
              </button>
            </Link>
          </div>

          {/* Pepsi Clone Project */}
          <div className="bg-[#2A2A2A] border border-[#8B16FB] rounded-lg p-6 w-80 shadow-lg">
            <div className="relative h-48 w-full mb-4 rounded overflow-hidden">
              <Image
                src="/assets/pepsilogo.png"
                alt="Pepsi Clone"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-[#8B16FB] mb-2">Pepsi Clone</h2>
            <p className="text-sm mb-4">
              Pepsi is a creative landing page design I developed using pure CSS. It helped me polish layout structure, font management, and responsive styling.
            </p>
            <Link href="https://mbilalshaikh2003.github.io/clone-pepsi/">
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
