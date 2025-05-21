import React from 'react';
import NavBar from '../components/NavBar';
import Image from 'next/image';

import { assets } from '@/assets/assets';
import { play, shareTech } from '@/app/layout';

export default function About() {
  return (
    <>
      <NavBar />

      <div id="AboutPage" className="w-full px-[13%] my-15">
        {/* Text Section */}
        <div className="relative">
          <h1 className={`${shareTech.className} text-4xl md:text-5xl font-bold mb-4 text-green-500`}>
            About Me
          </h1>

          {/* Picture Section */}
          <div className="w-full md:w-1/4 md:float-right md:ml-6 mb-4">
            <Image
              src={assets.temp_photo}
              alt="About Me"
              className="w-full shadow-lg"
            />
          </div>

          <p className={`${play.className} text-lg`}>
            Hi, I&apos;m Alex! I&apos;m a Computer Science Games major at the University of Southern California (Fight On, Trojans! ✌️). 
            It took me multiple existential crises to land on my major, but I&apos;m very happy with that decision.
          </p>
          <p className={`${play.className} text-lg mt-4`}>
            I&apos;m primarily interested in writing code to create or facilitate visual effects and animation, but I also love general gameplay and algorithmic programming.
            I picked graphics as my focus because I love animation and wanted to be involved in the game/animation industry in some capacity.
          </p>
          <p className={`${play.className} text-lg mt-4`}>
            More info:
          </p>

          <h3 className={`${play.className} text-xl font-bold mb-4 underline underline-offset-8 decoration-green-500 mt-10`}>
            Skills
          </h3>
          <ul className={`${play.className} text-lg mt-4 list-disc list-inside`}>
            <li className={play.className}>C++, C#, Java, Python, JavaScript, HTML/CSS</li>
            <li className={play.className}>Unity, OpenGL, DirectX, Git</li>
            <li className={play.className}>2D art and 3D modelling/animation (mostly supplementary)</li>
            <li className={play.className}>User experience research and testing</li>
            <li className={play.className}>Mentorship, communication (was an undergraduate TA)</li>
          </ul>

          <h3 className={`${play.className} text-xl font-bold mb-4 underline underline-offset-8 decoration-green-500 mt-10`}>
            Tidbits
          </h3>
          <ul className={`${play.className} text-lg mt-4 list-disc list-inside`}>
            <li className={play.className}>Born in the US, grew up in Nigeria, and later moved to the US. Based in LA, but family lives in Canada now.</li>
            <li className={play.className}>Favorite animated film is Big Hero 6, and favorite animated series is Gravity Falls.</li>
            <li className={play.className}>Favorite games are Celeste and Brawl Stars.</li>
            <li className={play.className}>Classical singer in training, relearning piano, and learning guitar.</li>
          </ul>
        </div>
      </div>
    </>
  );
}