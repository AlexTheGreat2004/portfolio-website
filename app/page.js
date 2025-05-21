'use client';

import NavBar from "./components/NavBar";
import Image from 'next/image'

import { assets } from '@/assets/assets'
import { shareTech, play, roboto } from '@/app/layout'

export default function Home() {
  return (
    <>
      <NavBar />

      <div id="HomPage" className="w-full px-[13%]">
        <div className="flex w-full h-full flex-col md:flex-row items-center md:items-start rounded-3xl my-15 gap-8">
          <div className="w-full md:w-1/3">
            <Image
              src={assets.temp_photo}
              alt="user"
              className="w-full"
            />
          </div>
          <div className="flex-1">
            <h1 className={`${shareTech.className} text-4xl md:text-5xl font-bold mb-4 text-green-500`}>
                Hey there!
            </h1>
            <p className={`${play.className} text-lg`}>
                And check out my cute little site.
            </p>
            <p className={`${play.className} text-lg mt-4`}>
                As you've probably guessed by looking at the top of this page, I'm Alex and I'm a game developer and graphics programmer. 
                Though, graphics programming is my main focus — I see it as an extension of my general love for making things pretty — I have general knowledge in game programming and software engineering.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}