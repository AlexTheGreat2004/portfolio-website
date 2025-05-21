import React from 'react';
import NavBar from '../components/NavBar';
import Image from 'next/image';

import { shareTech, play, roboto } from '@/app/layout';

export default function Resume() {
  return (
    <>
      <NavBar />

      <div id="ResumePage" className="w-full px-[20%] my-15">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* PDF Preview */}
          <div className="w-full md:w-1/3">
            <a
              href="/Alexander Aseme - Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Image
                src="/Alexander Aseme - Resume.png"
                alt="Resume Preview"
                width={400} // Replace with the actual width of your image
                height={600} // Replace with the actual height of your image
                className="w-full shadow-lg cursor-pointer"
              />
            </a>
          </div>

          {/* Text Section */}
          <div className="flex-1">
            <h1 className={`${shareTech.className} text-4xl md:text-5xl font-bold mb-4 text-green-500`}>
              My Resume
            </h1>
            <p className={`${play.className} text-lg`}>
              Here is a preview of my resume. Click on the image to view the full
              document. My resume highlights my experience in game development,
              graphics programming, and software engineering.
            </p>
            <p className={`${play.className} text-lg mt-4`}>
              Feel free to download it or reach out to me if you&apos;d like to learn
              more about my work or discuss potential opportunities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}