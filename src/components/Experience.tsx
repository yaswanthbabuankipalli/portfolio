"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function Experience() {
  const contributions = [
    "IRCTC AskDisha 2.0 — quality audits and escalation tracking that reduced bot escalation by ~15% (serving 10M+ daily passengers)",
    "Hybrid RAG pipeline — <200ms latency, 40% fewer LLM calls",
    "Multi-stage reranking workflow — 30% accuracy improvement",
    "Video-RAG platform — YouTube/file ingestion + Whisper ASR",
    "Voice AI system — OpenAI Realtime + Gemini + ElevenLabs TTS",
    "NL-to-SQL — hours of analyst work → under 2 minutes",
    "5+ Jenkins CI/CD pipelines — 70% less manual deployment effort",
    "LoRA/QLoRA fine-tuning — 25% lower inference latency"
  ];

  const certifications = [
    "NPTEL — Internet of Things",
    "APSCHE — 21st Century Employability Skills"
  ];

  const achievements = [
    "Best Coordinator 2022",
    "Best Coordinator 2023",
    "President, CSIT Association 2024"
  ];

  return (
    <section id="experience" className="py-24 bg-transparent relative z-10">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-[12px] font-bold text-accent-primary uppercase tracking-[0.25em] mb-3">
            Where I've worked
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-text-primary">
            Professional Experience
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-border-subtle/70 pl-6 md:pl-8 ml-4 md:ml-6 space-y-12">
          {/* Timeline Dot (CoRover.ai Logo / Monogram) */}
          <div className="absolute -left-[20px] md:-left-[24px] top-1.5 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white border border-border-bright text-accent-primary shadow-md font-mono font-bold text-sm select-none z-10 glass">
            <span className="bg-gradient-to-br from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              CR
            </span>
          </div>

          {/* Job Content Block */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
                  CoRover.ai
                </h3>
                <p className="text-sm font-mono text-accent-primary font-bold mt-1">
                  Python Developer
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-tertiary">
                <span className="flex items-center space-x-1">
                  <Calendar size={13} />
                  <span>Oct 2024 – Present</span>
                </span>
                <span className="flex items-center space-x-1">
                  <MapPin size={13} />
                  <span>Bangalore, India</span>
                </span>
              </div>
            </div>

            {/* Key Contributions */}
            <div className="space-y-4">
              <h4 className="font-mono text-[11px] font-bold text-text-secondary uppercase tracking-wider">
                Key Contributions & Tech Impact
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-1">
                {contributions.map((contribution, idx) => (
                  <li
                    key={idx}
                    className="flex items-start space-x-2 text-[13px] text-text-secondary leading-snug"
                  >
                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Education & Academic Milestone Section */}
        <div className="mt-20 pt-10 border-t border-border-subtle/30 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Education details */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center space-x-2.5 text-text-primary">
              <GraduationCap size={20} className="text-accent-primary" />
              <h3 className="text-lg font-bold font-sans tracking-tight">Education</h3>
            </div>

            <div className="glass rounded-[10px] p-5 space-y-3 shadow-sm hover:border-accent-primary/20 transition-all duration-300">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h4 className="text-[14px] font-bold text-text-primary font-sans leading-tight">
                    B.Tech in Computer Science & Information Technology
                  </h4>
                  <p className="text-[12px] text-text-secondary mt-1">
                    Siddharth Institute of Engineering & Technology, Puttur
                  </p>
                </div>
                <span className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider shrink-0 mt-0.5">
                  2021 – 2024
                </span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono border-t border-border-subtle/30 pt-3">
                <span className="text-text-tertiary">Cumulative CGPA</span>
                <span className="text-accent-primary font-extrabold text-sm">7.55 / 10.00</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Certifications & Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center space-x-2.5 text-text-primary">
              <Award size={20} className="text-accent-primary" />
              <h3 className="text-lg font-bold font-sans tracking-tight">
                Certifications & Achievements
              </h3>
            </div>

            <div className="space-y-5">
              {/* Certifications list */}
              <div className="space-y-2">
                <span className="block font-mono text-[10px] text-text-tertiary uppercase tracking-wider">
                  Certifications
                </span>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert) => (
                    <span
                      key={cert}
                      className="px-3 py-1 bg-white border border-border-subtle/80 text-text-secondary text-[11px] font-mono rounded-[6px] shadow-sm"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements list */}
              <div className="space-y-2">
                <span className="block font-mono text-[10px] text-text-tertiary uppercase tracking-wider">
                  Leadership & Recognition
                </span>
                <div className="flex flex-wrap gap-2">
                  {achievements.map((ach) => (
                    <span
                      key={ach}
                      className="px-3 py-1 bg-accent-primary/5 border border-accent-primary/20 text-accent-primary text-[11px] font-mono rounded-[6px] shadow-sm"
                    >
                      {ach}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default Experience;
