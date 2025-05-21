'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname

import { assets } from '@/assets/assets';
import { shareTech } from '@/app/layout';

const NavBar = () => {
  const pathname = usePathname(); // Get the current path
  const sideMenuRef = useRef(null);

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  return (
    <>
      {/* Top Section with Logo and Social Buttons */}
      <div className="w-full border-b border-gray-300 py-2 flex items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <span className={`${shareTech.className} font-bold text-3xl text-black tracking-[0.1em]`}>
            Alexander Aseme
            <span className="ml-1 mb-1 inline-block w-2 h-6 align-middle bg-green-500 animate-blink"></span>
          </span>
        </div>

        {/* Right-Aligned GitHub and LinkedIn Buttons */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/AlexTheGreat2004/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-6 h-6 overflow-hidden rounded"
          >
            <Image src={assets.github_icon} alt="GitHub Icon" className="w-full h-full object-cover" />
          </a>
          <a
            href="https://www.linkedin.com/in/alexander-aseme/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-6 h-6 overflow-hidden rounded"
          >
            <Image src={assets.linkedin_icon} alt="LinkedIn Icon" className="w-full h-full object-cover" />
          </a>
        </div>
      </div>

      {/* Bottom Section with Navbar Links */}
      <nav id="navbar" className="w-full py-4 flex items-center justify-center">
        <ul className="flex items-center gap-6 lg:gap-8 text-gray-700">
          <li>
            <Link
              href="/"
              className={`${shareTech.className} whitespace-nowrap hover:text-gray-500 ${
                pathname === '/' ? 'underline underline-offset-4 decoration-green-500' : ''
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`${shareTech.className} whitespace-nowrap hover:text-gray-500 ${
                pathname === '/projects' ? 'underline underline-offset-4 decoration-green-500' : ''
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/resume"
              className={`${shareTech.className} whitespace-nowrap hover:text-gray-500 ${
                pathname === '/resume' ? 'underline underline-offset-4 decoration-green-500' : ''
              }`}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${shareTech.className} whitespace-nowrap hover:text-gray-500 ${
                pathname === '/about' ? 'underline underline-offset-4 decoration-green-500' : ''
              }`}
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${shareTech.className} whitespace-nowrap hover:text-gray-500 ${
                pathname === '/contact' ? 'underline underline-offset-4 decoration-green-500' : ''
              }`}
            >
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;