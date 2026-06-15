"use client";

import { motion } from "framer-motion";
import { Sparkles, Mail, Flame, Calendar, BarChart3, Smartphone, Github, Users } from "lucide-react";

export function Stashlog() {
  const features = [
    {
      icon: <Sparkles className="text-accent-primary" size={20} />,
      title: "🤖 Gemini AI Summaries",
      description: "Auto-formats daily logs into professional What I Did / Blockers / Plan outlines."
    },
    {
      icon: <Mail className="text-accent-primary" size={20} />,
      title: "📧 Morning Email Delivery",
      description: "Polished standup summaries arrive in your inbox at 8 AM, Monday–Friday."
    },
    {
      icon: <Flame className="text-accent-primary" size={20} />,
      title: "🔥 Streak Tracker",
      description: "Tracks consecutive logged weekdays. Weekends are automatically skipped to protect rest."
    },
    {
      icon: <Calendar className="text-accent-primary" size={20} />,
      title: "📅 Visual Calendar History",
      description: "Color-coded tag dots and sparkle indicators for past AI-summarized work logs."
    },
    {
      icon: <BarChart3 className="text-accent-primary" size={20} />,
      title: "📊 Weekly Recap Digests",
      description: "Receive a Friday summary and Saturday digest email summarizing weekly highlights and active streaks."
    },
    {
      icon: <Smartphone className="text-accent-primary" size={20} />,
      title: "📱 Mobile-first UI",
      description: "Fully responsive, including custom slide-up sheet drawers on viewports under 768px."
    }
  ];

  const techStack = [
    "React 19", "TypeScript", "Go 1.25", "PostgreSQL", 
    "Gemini 1.5 Flash", "Brevo Email API", "Docker", 
    "GitHub Actions", "Vercel", "Render"
  ];

  return (
    <section className="py-24 bg-transparent relative z-10">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-12">
          <p className="font-mono text-[12px] font-bold text-accent-primary uppercase tracking-[0.25em] mb-3">
            Open Source SaaS
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-text-primary">
            Featured Side Project
          </h2>
        </div>

        {/* Showcase Container - Styled as frosted liquid glass */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden glass border-l-4 border-accent-primary border-t border-r border-b border-border-subtle rounded-[12px] p-6 sm:p-10 hover:border-accent-primary/20 shadow-md transition-all duration-300"
        >
          {/* Subtle light glow layer */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent-primary/5 rounded-full blur-[80px] pointer-events-none" />

          {/* Heading block */}
          <div className="space-y-4 mb-10 max-w-[800px] relative z-10">
            <div>
              <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded bg-accent-primary/10 border border-accent-primary/20 text-accent-primary font-mono text-[9px] uppercase font-bold tracking-wider">
                Full Stack Product
              </span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold text-text-primary tracking-tight leading-tight">
              Stashlog — Your daily work. Remembered. Standup-ready.
            </h3>
            <p className="text-[14px] sm:text-[15px] leading-relaxed text-text-secondary">
              A full-stack SaaS application built with a collaborator. Logs daily developer work,
              uses Gemini AI to format entries into professional standup summaries, and delivers
              them to your inbox every morning. Built and shipped end-to-end.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 relative z-10">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white/40 border border-border-subtle/50 rounded-[8px] p-5 space-y-3 hover:border-accent-primary/30 transition-colors shadow-sm"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-accent-primary/5 border border-accent-primary/15 rounded-[6px] shadow-sm">
                    {feature.icon}
                  </div>
                  <h4 className="text-[14px] font-bold text-text-primary font-sans leading-none">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-[12px] leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Tech stack badge strip */}
          <div className="border-t border-border-subtle/50 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            {/* Tech tag list */}
            <div className="space-y-2">
              <span className="block font-mono text-[10px] text-text-tertiary uppercase tracking-wider">
                Technologies Used
              </span>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-white/60 border border-border-subtle/70 text-text-secondary text-[10px] font-mono rounded-[4px] shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2 md:pt-0">
              <a
                href="https://github.com/epavan162/stashlog"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 px-4 bg-accent-primary hover:bg-accent-primary/90 text-white rounded-[6px] text-[13px] font-semibold flex items-center space-x-2 transition-all shadow-sm hover:shadow cursor-pointer"
              >
                <Github size={14} />
                <span>View on GitHub</span>
              </a>
              
              <a
                href="https://github.com/epavan162"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 px-4 border border-border-bright text-text-secondary hover:text-accent-primary hover:bg-white/60 rounded-[6px] text-[13px] font-semibold flex items-center space-x-1.5 transition-all glass"
              >
                <Users size={14} />
                <span>Collaborator: @epavan162</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default Stashlog;
