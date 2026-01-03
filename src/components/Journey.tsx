"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface JourneyStep {
  id: number;
  period: string;
  title: string;
  location: string;
  description: string;
  highlight?: boolean;
}

const journeySteps: JourneyStep[] = [
  {
    id: 1,
    period: "Early Years",
    title: "The Dreamer from Djerba",
    location: "Djerba, Tunisia",
    description:
      "I grew up on Djerba, a small island in the south of Tunisia. It's a quiet place, surrounded by the sea, and that's where everything started for me. As a kid, I was always curious about how things worked. I would take apart old radios, ask too many questions, and spend hours just thinking about the world outside our island. I didn't know where life would take me, but I knew I wanted to see more and do more.",
  },
  {
    id: 2,
    period: "Teenage Years",
    title: "Building Character",
    location: "Djerba, Tunisia",
    description:
      "When I was a teenager, I started working different jobs. Not because I had to, but because I wanted to learn what it felt like to earn something on my own. I worked in shops, helped out wherever I could, and learned a lot about people and hard work. Those years taught me that nothing comes easy, and that's okay. Every small job gave me something—patience, discipline, and a sense of responsibility that stayed with me.",
  },
  {
    id: 3,
    period: "High School",
    title: "Academic Excellence",
    location: "Djerba, Tunisia",
    description:
      "High school was a turning point. I put in the work, stayed focused, and it paid off. I graduated with my Baccalauréat in engineering, and honestly, it felt like the first big win of my life. It wasn't just about the grades—it was about proving to myself that I could do it. That diploma opened doors I didn't even know existed, and it gave me the confidence to aim higher.",
    highlight: true,
  },
  {
    id: 4,
    period: "2020 - 2022",
    title: "IPEIN - Preparatory Classes",
    location: "Nabeul, Tunisia",
    description:
      "Moving to Nabeul for preparatory classes was my first time living away from home. It was tough—the classes were intense, the competition was real, and there were days I doubted myself. But I kept going. In my first year, I ranked 1st in my class, which I still can't believe. Then came the national exam, and I finished 27th out of 830 students. That moment meant everything. It showed me that hard work really does pay off.",
    highlight: true,
  },
  {
    id: 5,
    period: "2022 - 2025",
    title: "SUP'COM - Engineering School",
    location: "Tunis, Tunisia",
    description:
      "Getting into SUP'COM was a big deal. It's one of the best engineering schools in Tunisia, and being there felt like a privilege. I studied telecommunications, learned from great professors, and met some of the smartest people I know. We studied together, struggled together, and became friends for life. Those three years shaped me in ways I'm still discovering. It wasn't just about the degree—it was about growing up.",
  },
  {
    id: 6,
    period: "Summer 2024",
    title: "First Journey to America",
    location: "United States",
    description:
      "Going to America was something I used to dream about when I was a kid watching movies. I never thought it would actually happen. But in the summer of 2024, I got an internship opportunity in the US, and suddenly the dream became real. I landed in Michigan and couldn't believe I was there. During my time off, I visited Chicago and Detroit—cities I had only seen in pictures. Walking through downtown Chicago, seeing the skyline, standing by Lake Michigan... it was unreal. Detroit had its own vibe too, full of history and energy. Every moment felt like a gift. That summer changed how I see the world.",
    highlight: true,
  },
  {
    id: 7,
    period: "2025",
    title: "Graduation & Certifications",
    location: "Tunis, Tunisia",
    description:
      "After my time in America, I went back to Tunisia to finish what I started. I completed my studies at SUP'COM, got my TOEIC English certification, and finally graduated as a Telecommunications Engineer. It was a proud moment—for me and for my family. All those years of studying, all the late nights and early mornings, they all led to this. But I knew it wasn't the end. It was just the beginning of something bigger.",
  },
  {
    id: 8,
    period: "2025 - 2026",
    title: "Master's in Computer Science",
    location: "Grand Rapids, Michigan, USA",
    description:
      "And here I am now, in Grand Rapids, Michigan, pursuing my Master's in Computer Science at Grand Valley State University. Sometimes I still can't believe it. From a small island in Tunisia to the heart of America—it's been quite a ride. Every challenge, every setback, every small victory brought me here. I don't know exactly where this path will lead, but I'm excited to find out. This isn't the end of my story. It's just a new chapter.",
    highlight: true,
  },
];

const Journey = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % journeySteps.length);
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + journeySteps.length) % journeySteps.length);
  };

  return (
    <section id="journey" className="py-20 relative overflow-hidden">
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
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Cards Display */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="relative h-[500px] md:h-[420px] perspective-1000">
            {journeySteps.map((step, index) => {
              const isActive = index === activeIndex;
              const isPrev = index === (activeIndex - 1 + journeySteps.length) % journeySteps.length;
              const isNext = index === (activeIndex + 1) % journeySteps.length;
              
              if (!isActive && !isPrev && !isNext) return null;
              
              return (
                <motion.div
                  key={step.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? "-85%" : "85%",
                    scale: isActive ? 1 : 0.85,
                    opacity: isActive ? 1 : 0.4,
                    zIndex: isActive ? 10 : 5,
                    rotateY: isActive ? 0 : isPrev ? 15 : -15,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  className="absolute inset-0 cursor-pointer"
                  onClick={() => {
                    if (isPrev) prevCard();
                    if (isNext) nextCard();
                  }}
                >
                  <div
                    className={`h-full p-8 md:p-10 rounded-3xl border backdrop-blur-sm transition-all duration-300 ${
                      step.highlight
                        ? "bg-gradient-to-br from-blue-900/50 to-slate-800/70 border-blue-500/40 shadow-2xl shadow-blue-500/20"
                        : "bg-slate-800/60 border-slate-700/50 shadow-xl"
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <span
                        className={`w-12 h-12 flex items-center justify-center rounded-full font-bold text-xl ${
                          step.highlight
                            ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                            : "bg-slate-700 text-slate-300"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                      {step.description}
                    </p>

                    {/* Highlight indicator */}
                    {step.highlight && (
                      <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevCard}
              className="p-4 rounded-full bg-slate-800/80 border border-slate-700 hover:bg-slate-700 hover:border-blue-500 transition-all duration-300 group"
              aria-label="Previous"
            >
              <svg
                className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextCard}
              className="p-4 rounded-full bg-slate-800/80 border border-slate-700 hover:bg-slate-700 hover:border-blue-500 transition-all duration-300 group"
              aria-label="Next"
            >
              <svg
                className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {journeySteps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-blue-500 w-8"
                    : "bg-slate-600 hover:bg-slate-500"
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <blockquote className="text-xl md:text-2xl text-slate-300 italic max-w-3xl mx-auto">
            &quot;From the shores of a small Tunisian island to the United States |
            each challenge wasn&apos;t a roadblock, but a stepping stone that shaped my story.&quot;
          </blockquote>
          <div className="mt-4 flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-blue-500/50" />
            <span className="text-blue-400 font-medium">Malek Garrach</span>
            <div className="w-12 h-[1px] bg-blue-500/50" />
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Journey;
