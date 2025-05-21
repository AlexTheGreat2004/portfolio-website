import React from 'react';
import NavBar from '../components/NavBar';
import Link from 'next/link';
import Image from 'next/image';

import { projects } from './projectsData';
import { shareTech, play, roboto } from '@/app/layout';

export default function Projects() {
  return (
    <>
      <NavBar />

      <div id="ProjectsPage" className="w-full px-[18%] my-15">
        <h1 className={`${shareTech.className} text-4xl md:text-5xl font-bold mb-12 text-green-500 text-left`}>
          My Projects
        </h1>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
            >
              {/* Image Section */}
              <Link href={project.link} className="w-full md:w-1/3">
                <Image
                  src={project.previewImage}
                  alt={project.title}
                  width={400}
                  height={400}
                  className="w-full shadow-lg cursor-pointer hover:opacity-90 transition"
                  />
              </Link>

              {/* Text Section */}
              <div className="w-full md:w-1/2">
                <Link href={project.link}>
                  <h2 className={`${play.className} text-3xl font-bold text-green-500 mb-4 hover:text-green-700 cursor-pointer`}>
                    {project.title}
                  </h2>
                </Link>
                <div className={`${play.className} text-sm text-gray-700`}>{project.description}</div>
              </div>
            </div>
            ))}
        </div>
      </div>
    </>
  );
}