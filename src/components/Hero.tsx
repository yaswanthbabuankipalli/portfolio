"use client";

import { ArrowRight, Github, Linkedin, FileText } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const row1Tags = [
    { text: "RAG Pipelines", type: "ai" },
    { text: "FAISS", type: "database" },
    { text: "pgvector", type: "database" },
    { text: "Redis", type: "database" },
    { text: "OpenAI API", type: "ai" },
    { text: "Gemini API", type: "ai" },
    { text: "Whisper ASR", type: "ai" },
    { text: "LoRA/QLoRA", type: "ai" },
    { text: "FastAPI", type: "backend" },
  ];

  const row2Tags = [
    { text: "Go (Gin)", type: "backend" },
    { text: "PostgreSQL", type: "database" },
    { text: "Docker", type: "devops" },
    { text: "Jenkins CI/CD", type: "devops" },
    { text: "ElevenLabs TTS", type: "ai" },
    { text: "Vector Search", type: "database" },
    { text: "LLM Fine-tuning", type: "ai" },
    { text: "AI Agents", type: "ai" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const tagClassMap = {
    ai: "tag-ai",
    backend: "tag-backend",
    devops: "tag-devops",
    database: "tag-database",
  };

  const handleScrollToWork = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector("#work");
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-start items-center pt-36 sm:pt-44 pb-16 overflow-hidden bg-transparent">
      <div className="max-w-[1100px] w-full mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Text Content (8 cols on desktop) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-8 flex flex-col items-start text-left space-y-6"
        >
          {/* Availability Pill - styled with Glassmorphism */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 glass rounded-full"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase tracking-wider">
              Open to full-time & freelance
            </span>
          </motion.div>

          {/* Name & Main Subtitle */}
          <div className="space-y-2">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-text-primary leading-[1.1]"
            >
              Yaswanth Babu Ankipalli
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl font-mono font-bold text-accent-primary tracking-wide"
            >
              Python · AI · RAG Engineer
            </motion.p>
          </div>

          {/* One-liner */}
          <motion.p
            variants={itemVariants}
            className="text-[16px] sm:text-lg text-text-secondary leading-relaxed max-w-[620px]"
          >
            I build production RAG pipelines, voice AI systems, and LLM workflows
            that ship to real users — including <span className="text-text-primary font-semibold">10M+ IRCTC passengers</span>.
          </motion.p>

          {/* CTA buttons row */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2 w-full">
            <button
              onClick={handleScrollToWork}
              className="h-11 px-5 bg-accent-primary hover:bg-accent-primary/90 text-white font-semibold rounded-[8px] flex items-center space-x-2 transition-all active:scale-[0.98] shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>View My Work</span>
              <ArrowRight size={16} />
            </button>
            
            <a
              href="/yaswanth_babu_resume.pdf"
              download="yaswanth_babu_resume.pdf"
              className="h-11 px-5 border border-accent-primary/75 text-accent-primary hover:bg-accent-primary/5 font-semibold rounded-[8px] flex items-center space-x-2 transition-all active:scale-[0.98] glass shadow-sm"
            >
              <FileText size={16} />
              <span>Resume</span>
            </a>

            <div className="flex items-center space-x-2 pl-2">
              <a
                href="https://github.com/yaswanthbabuankipalli"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-text-secondary hover:text-accent-primary hover:bg-white/50 border border-transparent hover:border-border-subtle rounded-[8px] transition-all glass shadow-sm"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/yaswanth-babu-ankipalli-73041b171/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-text-secondary hover:text-accent-primary hover:bg-white/50 border border-transparent hover:border-border-subtle rounded-[8px] transition-all glass shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Glassmorphic Profile Card (4 cols on desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="lg:col-span-4 flex justify-center"
        >
          <div className="relative group">
            {/* Soft backdrop glow behind image */}
            <div className="absolute inset-0 -m-2 rounded-2xl bg-gradient-to-tr from-accent-primary/20 to-accent-secondary/20 opacity-60 blur-xl transition-all duration-500 group-hover:opacity-85 group-hover:scale-105" />
            
            {/* The Image frame - Frosted glass card */}
            <div className="relative w-[280px] h-[340px] sm:w-[300px] sm:h-[365px] rounded-2xl glass p-3.5 overflow-hidden transition-all duration-300 hover:border-accent-primary/30 shadow-md">
              <div className="w-full h-full rounded-xl overflow-hidden bg-bg-primary/20 relative">
                <img
                  src="/profile.jpg"
                  alt="Yaswanth Babu Ankipalli"
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-550 scale-105 hover:scale-100"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Horizontal tag clouds below Hero grid */}
      <div className="w-full mt-20 relative z-10 select-none pointer-events-none">
        {/* Soft fade gradients on edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-bg-primary to-transparent z-20" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-bg-primary to-transparent z-20" />

        <div className="flex flex-col gap-4 overflow-hidden py-2">
          {/* Row 1: Scrolling Left */}
          <div className="flex w-max">
            <div className="animate-scroll-left flex items-center space-x-4 pr-4">
              {[...row1Tags, ...row1Tags].map((tag, idx) => (
                <span
                  key={`r1-${idx}`}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider ${tagClassMap[tag.type as keyof typeof tagClassMap]}`}
                >
                  {tag.text}
                </span>
              ))}
            </div>
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="flex w-max">
            <div className="animate-scroll-right flex items-center space-x-4 pr-4">
              {[...row2Tags, ...row2Tags].map((tag, idx) => (
                <span
                  key={`r2-${idx}`}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider ${tagClassMap[tag.type as keyof typeof tagClassMap]}`}
                >
                  {tag.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
