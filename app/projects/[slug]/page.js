"use client";

import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NavBar from "../../components/NavBar";
import { projects } from "../projectsData";
import { shareTech } from "@/app/layout";

export default function ProjectPage({ params }) {
  const router = useRouter();
  const { slug } = React.use(params); // Unwrap the params Promise
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <>
      <NavBar activePage="projects" />
      <div className="w-full px-[18%] my-15">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => router.back()}
            className="text-green-500 text-2xl hover:text-green-700"
            aria-label="Back"
            type="button"
          >
            ←
          </button>
          <h1 className={`${shareTech.className} text-4xl md:text-5xl font-bold text-green-500`}>
            {project.title}
          </h1>
        </div>
        <div className="text-lg text-gray-700 mb-4">{project.description}</div>
        <div className="border-b-2 border-gray-300 mb-8"></div>
        <div>
          {project.details}
        </div>
      </div>
    </>
  );
}