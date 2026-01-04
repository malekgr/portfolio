"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/resume";

// ProjectCard component for click-to-expand
function ProjectCard({ project }: { project: any }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className={`relative bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden card-hover transition-all duration-500 ${expanded ? "z-20" : ""}`}
      onClick={() => setExpanded((prev: boolean) => !prev)}
      style={{ cursor: "pointer" }}
    >
      {/* Project Image as Full Background */}
      <div className="h-48 relative border-b border-slate-700 overflow-hidden">
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-blue-900/40" />
          </>
        ) : (
          <div className="h-full w-full flex items-center justify-center text-6xl opacity-50 transition-opacity">
            🚀
          </div>
        )}
        {project.ongoing && (
          <span className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">Ongoing</span>
        )}
      </div>
      {/* Main content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-white">
          {project.title}
        </h3>
        <p className="text-slate-400 text-base mb-4">
          {Array.isArray(project.description) ? project.description[0] : project.description}
        </p>
        {project.role && (
          <span className="inline-block bg-yellow-700/80 text-yellow-200 px-3 py-1 rounded-full text-xs font-semibold mb-2">
            <span className="mr-1">👤</span>{project.role}
          </span>
        )}
        <div className="flex flex-wrap gap-2 mb-4 mt-2">
          {project.technologies && project.technologies.slice(0, 3).map((tech: string) => (
            <span
              key={tech}
              className="px-2 py-1 bg-blue-500/10 text-blue-300 rounded text-xs border border-blue-500/20"
            >
              {tech}
            </span>
          ))}
          {project.technologies && project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-blue-500/10 text-blue-300 rounded text-xs border border-blue-500/20">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        {project.users && (
          <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
            <span className="text-base">👥</span>
            {project.users}
          </div>
        )}
        <div className="flex items-center justify-between text-slate-400 text-xs mt-4">
          <span>{project.period}</span>
          <span className="flex items-center gap-1"><span className="text-base">👁</span>Explore</span>
        </div>

        {/* Expanded details - appears below content on click */}
        <div
          className={`overflow-hidden transition-all duration-500 ${expanded ? "max-h-[800px] opacity-100 mt-4 pt-4 border-t border-slate-700" : "max-h-0 opacity-0"}`}
        >
          <h4 className="text-lg font-semibold mb-2 text-white">About This Project</h4>
          <p className="text-slate-300 text-sm mb-4">
            {Array.isArray(project.description) ? project.description.join(" ") : project.description}
          </p>
          {project.features && (
            <>
              <h4 className="text-lg font-semibold mb-2 text-white">Key Features</h4>
              <ul className="list-disc list-inside text-slate-200 text-sm mb-4">
                {project.features.map((feature: string, i: number) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </>
          )}

        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-20 relative bg-slate-900/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: any) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View more link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/malekgarrach"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-blue-500/50 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-all duration-300"
          >
            View All Projects on GitHub
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}

export default Projects;
