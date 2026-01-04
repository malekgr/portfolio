"use client";

import { motion } from "framer-motion";
import { personalInfo, education } from "@/data/resume";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
              Get to know me
            </h3>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>{personalInfo.summary}</p>
              <p>
                I am passionate about technology and constantly strive to improve
                my skills. I enjoy working on challenging projects that push me
                to learn new things and grow as a developer.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <p className="text-slate-400 text-sm mb-1">Location</p>
                <p className="font-medium">{personalInfo.location}</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <p className="text-slate-400 text-sm mb-1">Email</p>
                <p className="font-medium text-sm break-all">{personalInfo.email}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-blue-500/30"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900" />
                  
                  <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 card-hover">
                    <span className="text-sm text-blue-400">{edu.period}</span>
                    <h4 className="text-lg font-semibold mt-1">{edu.degree}</h4>
                    <p className="text-slate-400">{edu.school}</p>
                    <p className="text-slate-500 text-sm mt-2">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default About;
