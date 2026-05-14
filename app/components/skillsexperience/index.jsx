"use client";
// Font Awesome icons
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";

// Simple Icons (brand icons)
import { SiFlutter, SiMongodb, SiTailwindcss } from "react-icons/si";

import SkillCard from "./SkillCard";

import { experiences } from "../../data/experiences";
import ExperienceItem from "./ExperienceItem";

export default function SkillsExperience() {
  // Add or remove skills here — icon is JSX, name is display text
  // Colors applied directly to icon components via className
  const skills = [
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "Flutter", icon: <SiFlutter className="text-blue-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
  ];

  return (
    <section className="min-h-screen scroll-mt-24 px-4 text-center bg-white dark:bg-gray-900 py-20">
      {/* Section main title */}
      <h2 className="text-lg text-gray-600 dark:text-gray-400">
        Skills and Experience
      </h2>

      {/* Section subtitle — large, bold, blue */}
      <h3 className="text-4xl font-bold text-blue-500 mb-16">
        What I Do & Where I've Been
      </h3>

      {/* Two-column grid — stacks on mobile, side by side on medium+ screens */}
      {/* gap-12 gives breathing room between the two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* ── LEFT COLUMN — Skills ── */}
        <div>
          {/* Placeholder heading — SkillCard components go here later */}
          <h4 className="text-xl font-semibold mb-6">Skills</h4>
          {/* 3-column grid of skill cards */}
          {/* gap-6 gives spacing between each card */}
          <div className="grid grid-cols-3 gap-6">
            {skills.map((skill) => (
              // key uses name — safe since skill names are unique
              <SkillCard key={skill.name} icon={skill.icon} name={skill.name} />
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN — Experience ── */}
        <div>
          {/* Placeholder heading — ExperienceItem components go here later */}
          <h4 className="text-xl font-semibold mb-6">Experience</h4>
          {/* border-l-2 creates the vertical blue line — the timeline backbone */}
          {/* pl-6 pushes content away from the line */}
          {/* space-y-8 adds consistent spacing between each entry */}
          <div className="border-l-2 border-blue-500 pl-6 space-y-8">
            {experiences.map((exp) => (
              // key uses title+company combined — safer than title alone
              // in case someone held same title at different companies
              <ExperienceItem
                key={exp.title + exp.company}
                title={exp.title}
                company={exp.company}
                years={exp.years}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
