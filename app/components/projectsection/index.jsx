"use client";

import { useState } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  // Build unique types array — 'All' first, then one entry per unique type
  // Set removes duplicates automatically, spread converts it back to array
  const uniqueTypes = ["All", ...new Set(projects.map((p) => p.type))];

  // Track which filter button is active — starts showing all projects
  const [selectedType, setSelectedType] = useState("All");

  // If 'All' is selected show everything, otherwise filter by matching type
  const filteredProjects =
    selectedType === "All"
      ? projects
      : projects.filter((p) => p.type === selectedType);

  return (
    <section className="min-h-screen scroll-mt-24 px-4 text-center bg-white dark:bg-gray-900 py-20">
      {/* Section headings */}
      <h2 className="text-lg text-gray-600 dark:text-gray-400">
        Browse My Recent
      </h2>

      {/* Main subheading — large, bold, colored */}
      <h3 className="text-3xl font-bold text-blue-500 mb-8">Projects</h3>

      {/* Responsive grid — 1 column on mobile, 2 on medium, 3 on large screens */}

      {/* Filter buttons — one per unique project type plus All */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {uniqueTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            // Template literal lets us add active styling conditionally
            // Active button gets blue background, inactive gets outline only
            className={`px-4 py-2 rounded-full border text-sm font-medium transition
                ${
                  selectedType === type
                    ? "bg-blue-500 text-white border-blue-500"
                    : "border-gray-400 text-gray-600 dark:text-gray-300 hover:border-blue-500"
                }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
  
        {filteredProjects.map((project) => (
          // key uses title since we don't have IDs yet
          // replace with project.id once you have real data
          /* Pass the full project object as a prop to ProjectCard */
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
