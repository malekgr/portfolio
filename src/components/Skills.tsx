"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/resume";

const skillCategories = [
  { key: "languages", title: "Languages", icon: "💻" },
  { key: "frontend", title: "Frontend", icon: "🎨" },
  { key: "backend", title: "Backend", icon: "⚙️" },
  { key: "databases", title: "Databases", icon: "🗄️" },
  { key: "tools", title: "DevOps & Tools", icon: "🛠️" },
  { key: "other", title: "Other", icon: "📚" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
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
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Here are the technologies and tools I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-blue-400">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills[category.key as keyof typeof skills].map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 bg-blue-500/10 text-slate-300 rounded-lg text-sm border border-blue-500/20 hover:border-blue-500/50 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated skill bars (optional visual element) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700"
        >
          <h3 className="text-xl font-semibold text-center mb-8">
            Skill Proficiency
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Frontend Development", level: 90 },
              { name: "Backend Development", level: 85 },
              { name: "Database Management", level: 80 },
              { name: "DevOps & Cloud", level: 75 },
            ].map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">{skill.name}</span>
                  <span className="text-blue-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative element */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Skills;
