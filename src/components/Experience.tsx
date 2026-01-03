"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/resume";

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative bg-slate-900/30">
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
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-500/0" />
              )}

              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 bg-slate-800/50 rounded-xl border border-slate-700 card-hover">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {exp.title}
                      </h3>
                      <p className="text-blue-400">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                        {exp.period}
                      </span>
                      <p className="text-slate-500 text-sm mt-1">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Experience;
