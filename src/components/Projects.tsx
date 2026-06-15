"use client";

import { motion } from "framer-motion";
import { Play, ExternalLink, Mail, Code, Database, Server, Cpu } from "lucide-react";
import { projects, Project } from "@/data/projects";

// Badge styling helper
const getBadgeStyles = (color: string) => {
  switch (color) {
    case "green":
      return "tag-devops";
    case "violet":
      return "tag-ai";
    case "cyan":
      return "tag-backend";
    default:
      return "tag-database";
  }
};

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="work" className="py-28 bg-transparent relative z-10">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <p className="font-mono text-[12px] font-bold text-accent-primary uppercase tracking-[0.25em] mb-3">
            What I've built
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-text-primary mb-2">
            Flagship Deployments & AI Systems
          </h2>
          <p className="text-[13px] text-text-secondary">
            4 projects — 2 production deployments, 1 live SaaS, 1 demo
          </p>
        </div>

        {/* Projects List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {projects.map((project: Project) => {
            if (project.featured) {
              return (
                <FeaturedProjectCard
                  key={project.id}
                  project={project}
                  variants={cardVariants}
                />
              );
            }
            return (
              <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-12">
                  <NormalProjectCard project={project} variants={cardVariants} />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// 1. Featured Full-Width Project Card (frosted glass)
function FeaturedProjectCard({ project, variants }: { project: Project; variants: any }) {
  return (
    <motion.div
      variants={variants}
      className="glass transition-all duration-300 rounded-[12px] overflow-hidden p-6 sm:p-8 hover:border-accent-primary/20 shadow-sm hover:shadow-md"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Content (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Badge */}
            <div>
              <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase ${getBadgeStyles(project.badgeColor)}`}>
                {project.badge}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
              {project.title}
            </h3>

            {/* Problem Statement */}
            <p className="text-[14px] italic text-text-secondary border-l-2 border-accent-primary/60 pl-4 py-1">
              "{project.problem}"
            </p>

            {/* Description */}
            <p className="text-[14px] leading-relaxed text-text-secondary">
              {project.description}
            </p>
          </div>

          {/* Metrics & Custom Highlight Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/40 border border-border-subtle/50 rounded-[8px] p-4 font-mono shadow-sm">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col space-y-0.5">
                {metric.from && metric.to ? (
                  <span className="text-[16px] sm:text-[18px] font-extrabold text-accent-primary">
                    {metric.from} <span className="text-text-tertiary">→</span> {metric.to}
                  </span>
                ) : (
                  <span className="text-[16px] sm:text-[18px] font-extrabold text-accent-primary">
                    {metric.value}
                  </span>
                )}
                <span className="text-[11px] text-text-secondary font-sans leading-tight">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-white/50 border border-border-subtle text-text-secondary text-[11px] font-mono rounded-[6px] shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-4 bg-accent-primary hover:bg-accent-primary/90 text-white rounded-[6px] text-[13px] font-semibold flex items-center space-x-2 transition-all shadow-sm hover:shadow cursor-pointer"
            >
              <Play size={14} fill="currentColor" />
              <span>Watch Demo</span>
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-4 border border-border-bright text-text-secondary hover:text-accent-primary hover:bg-white/60 rounded-[6px] text-[13px] font-semibold flex items-center space-x-1.5 transition-all glass"
            >
              <span>View on LinkedIn</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Right: Dashboard Demo Animation Simulation (5 cols) */}
        <div className="lg:col-span-5 flex items-stretch">
          <div className="relative w-full min-h-[260px] lg:min-h-full rounded-lg border border-border-bright/20 bg-white/35 p-4 font-mono text-xs flex flex-col justify-between overflow-hidden shadow-inner select-none group">
            {/* Tech grid mesh overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
            
            <div className="relative z-10 flex items-center justify-between border-b border-border-subtle/50 pb-2 mb-3">
              <span className="text-accent-primary flex items-center space-x-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] uppercase tracking-wider">Whisper Live ASR</span>
              </span>
              <span className="text-[10px] text-text-tertiary">STT FEED</span>
            </div>

            <div className="relative z-10 flex-1 space-y-3 flex flex-col justify-start">
              {/* Fake speech waveform */}
              <div className="h-12 border border-border-subtle/50 bg-white/60 rounded flex items-center justify-center space-x-1 px-3 shadow-inner">
                {[1, 2, 3, 4, 3, 2, 4, 6, 8, 4, 2, 1, 3, 5, 3, 1, 2, 4, 6, 7, 5, 2, 1, 3, 2, 4, 2, 1].map((h, i) => (
                  <div
                    key={i}
                    className="w-[3px] bg-accent-primary/60 rounded-full"
                    style={{
                      height: `${h * 10}%`,
                      animation: `pulse 1.2s infinite alternate`,
                      animationDelay: `${i * 0.05}s`
                    }}
                  />
                ))}
              </div>

              {/* Fake Live transcription content */}
              <div className="text-[11px] text-text-primary bg-white/50 p-2.5 rounded border border-border-subtle/30 space-y-1 shadow-sm">
                <p className="text-accent-secondary font-bold text-[9px] uppercase">Candidate Response:</p>
                <p className="italic leading-normal">
                  "For search latency, we deployed dense vectors with FAISS index, then mapped pgvector identifiers to bypass redundant LLM inference calls..."
                </p>
              </div>

              {/* Fake candidate screening score output */}
              <div className="flex gap-2">
                <div className="flex-1 bg-accent-primary/5 border border-accent-primary/20 rounded p-2 text-center">
                  <span className="block text-[9px] text-text-tertiary uppercase">Technical Fit</span>
                  <span className="text-sm font-bold text-accent-primary">9.4 / 10</span>
                </div>
                <div className="flex-1 bg-accent-secondary/5 border border-accent-secondary/20 rounded p-2 text-center">
                  <span className="block text-[9px] text-text-tertiary uppercase">RAG Relevance</span>
                  <span className="text-sm font-bold text-accent-secondary">92% Match</span>
                </div>
              </div>
            </div>

            {/* Simulated Overlay CTA */}
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-20 bg-white/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300"
            >
              <div className="bg-white border border-accent-primary px-4 py-2.5 rounded-[8px] flex items-center space-x-2 text-text-primary text-[12px] font-bold tracking-wide shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <Play size={12} fill="currentColor" className="text-accent-primary" />
                <span>Launch Video Demo</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// 2. Normal Grid Project Cards (frosted glass)
function NormalProjectCard({ project, variants }: { project: Project; variants: any }) {
  return (
    <motion.div
      variants={variants}
      className="glass transition-all duration-300 rounded-[12px] p-6 sm:p-8 space-y-6 hover:border-accent-primary/20 shadow-sm hover:shadow-md hover:-translate-y-0.5"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border-subtle/50 pb-5">
        <div className="space-y-2">
          {/* Badge */}
          <div>
            <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase ${getBadgeStyles(project.badgeColor)}`}>
              {project.badge}
            </span>
          </div>
          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
            {project.title}
          </h3>
        </div>

        {/* Project specific stats summary */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-4 font-mono border-l-0 md:border-l border-border-subtle/50 md:pl-6">
            {project.metrics.slice(0, 2).map((m, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-accent-primary font-bold text-sm sm:text-base">
                  {m.value}
                </span>
                <span className="text-[9px] text-text-tertiary uppercase tracking-wider font-sans leading-none mt-0.5">
                  {m.label.split(" ").slice(0, 2).join(" ")}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Description Column (7 cols on desktop) */}
        <div className="lg:col-span-7 space-y-5">
          <div className="space-y-3">
            <p className="text-[13px] italic text-text-secondary leading-normal border-l-2 border-accent-secondary/50 pl-3">
              "{project.problem}"
            </p>
            <p className="text-[14px] leading-relaxed text-text-secondary">
              {project.description}
            </p>
          </div>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-white/50 border border-border-subtle text-text-secondary text-[10px] font-mono rounded-[6px] shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Actions */}
          {project.id === "video-rag" && (
            <div className="pt-2">
              <a
                href="mailto:yaswanthb.ankipalli@gmail.com?subject=Video-RAG Project Enquiry"
                className="inline-flex items-center space-x-1.5 px-4 py-2 border border-border-bright text-text-secondary hover:text-accent-primary bg-white/40 hover:bg-white/80 rounded-[6px] text-[13px] transition-all glass shadow-sm"
              >
                <Mail size={13} />
                <span>Ask about this project</span>
              </a>
            </div>
          )}
        </div>

        {/* Diagram Column (5 cols on desktop) */}
        <div className="lg:col-span-5 w-full">
          {project.id === "hybrid-rag" && <RAGArchitectureDiagram />}
          {project.id === "video-rag" && <VideoRAGFlowDiagram />}
          {project.id === "collegiumbot" && <CampusBotMetricsBlock />}
        </div>
      </div>
    </motion.div>
  );
}

// Custom Diagram Components (Light Mode glass containers)
function RAGArchitectureDiagram() {
  return (
    <div className="border border-border-bright/20 bg-white/35 rounded-lg p-5 font-mono text-[10px] text-text-secondary relative overflow-hidden select-none space-y-3 shadow-inner">
      {/* Title */}
      <div className="flex items-center justify-between border-b border-border-subtle/50 pb-1.5 text-[9px] uppercase tracking-wider font-bold text-accent-primary">
        <span>Hybrid Pipeline Architecture</span>
        <span className="text-text-tertiary">Multi-Stage</span>
      </div>

      <div className="space-y-2">
        {/* Step 1 */}
        <div className="flex items-center space-x-2">
          <div className="px-2 py-1 bg-white/60 border border-border-subtle rounded text-accent-secondary font-semibold">Query</div>
          <span className="text-text-tertiary">→</span>
          <div className="flex-1 px-2.5 py-1 bg-accent-primary/10 border border-accent-primary/25 rounded font-bold text-center text-accent-primary">
            [FAISS + pgvector] Dense/Sparse
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center pr-[140px] text-text-tertiary leading-none">↓</div>

        {/* Step 2 */}
        <div className="flex items-center space-x-2">
          <div className="w-[60px]" />
          <div className="flex-1 px-2.5 py-1 bg-white/60 border border-border-bright/60 rounded text-center">
            Reranking + Metadata Filter
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center pr-[140px] text-text-tertiary leading-none">↓</div>

        {/* Step 3 */}
        <div className="flex items-center justify-between gap-1 border border-border-subtle/40 bg-white/50 rounded p-2 relative">
          <div className="flex flex-col space-y-1">
            <span className="font-bold text-[9px] uppercase text-text-tertiary">Redis Cache</span>
            <span className="text-accent-secondary font-semibold">Similarity Check</span>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <span className="px-1.5 py-0.5 bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 rounded-[3px] text-[8px] font-bold">HIT: Return Cached</span>
            <span className="px-1.5 py-0.5 bg-rose-500/10 border border-rose-500/25 text-rose-700 rounded-[3px] text-[8px] font-bold">MISS: Call LLM</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoRAGFlowDiagram() {
  return (
    <div className="border border-border-bright/20 bg-white/35 rounded-lg p-5 font-mono text-[10px] text-text-secondary relative overflow-hidden select-none space-y-3 shadow-inner">
      {/* Title */}
      <div className="flex items-center justify-between border-b border-border-subtle/50 pb-1.5 text-[9px] uppercase tracking-wider font-bold text-accent-primary">
        <span>Video Ingestion Pipeline</span>
        <span className="text-text-tertiary">Whisper Segment</span>
      </div>

      <div className="grid grid-cols-12 gap-2 items-center">
        {/* Box 1 */}
        <div className="col-span-5 bg-white/60 border border-border-subtle rounded p-2 text-center space-y-0.5 shadow-sm">
          <span className="block text-[8px] text-text-tertiary">SOURCE</span>
          <span className="text-text-primary font-bold">YouTube URL</span>
        </div>
        
        {/* Connector */}
        <div className="col-span-2 text-center text-text-tertiary">→</div>

        {/* Box 2 */}
        <div className="col-span-5 bg-accent-primary/10 border border-accent-primary/25 rounded p-2 text-center space-y-0.5 shadow-sm">
          <span className="block text-[8px] text-accent-primary">ASR TRANSCRIPTION</span>
          <span className="text-text-primary font-bold">Whisper model</span>
        </div>
      </div>

      {/* Down Connector */}
      <div className="flex justify-around text-text-tertiary leading-none my-0.5">
        <div>↓</div>
        <div>↓</div>
      </div>

      <div className="grid grid-cols-12 gap-2 items-center">
        {/* Box 3 */}
        <div className="col-span-5 bg-white/60 border border-border-subtle rounded p-2 text-center space-y-0.5 shadow-sm">
          <span className="block text-[8px] text-text-tertiary">TIME DIVISION</span>
          <span className="text-text-primary font-bold">Segmentation</span>
        </div>

        {/* Connector */}
        <div className="col-span-2 text-center text-text-tertiary">→</div>

        {/* Box 4 */}
        <div className="col-span-5 bg-white/60 border border-border-subtle rounded p-2 text-center space-y-0.5 shadow-sm">
          <span className="block text-[8px] text-text-tertiary">INDEX</span>
          <span className="text-text-primary font-bold">FAISS Vectors</span>
        </div>
      </div>

      {/* Final Flow Result */}
      <div className="border border-accent-secondary/25 bg-accent-secondary/5 rounded p-2 text-center leading-relaxed">
        <span className="text-accent-secondary font-bold">Query:</span> Semantic Search matches exact video clip + timestamps.
      </div>
    </div>
  );
}

function CampusBotMetricsBlock() {
  return (
    <div className="border border-border-bright/20 bg-white/35 rounded-lg p-5 font-mono text-[10px] text-text-secondary relative overflow-hidden select-none space-y-4 shadow-inner">
      {/* Title */}
      <div className="flex items-center justify-between border-b border-border-subtle/50 pb-1.5 text-[9px] uppercase tracking-wider font-bold text-accent-primary">
        <span>Deployment Coverage</span>
        <span className="text-text-tertiary">CAMPUS WIDE</span>
      </div>

      <div className="space-y-3.5">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-text-secondary font-bold">Student Body Coverage</span>
            <span className="text-accent-secondary font-bold">100%</span>
          </div>
          <div className="w-full h-1.5 bg-white/60 rounded-full overflow-hidden border border-border-subtle/50 shadow-inner">
            <div className="h-full bg-accent-secondary rounded-full w-full animate-pulse" />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-text-secondary font-bold">Response Relevance Accuracy</span>
            <span className="text-emerald-600 font-bold">85%+</span>
          </div>
          <div className="w-full h-1.5 bg-white/60 rounded-full overflow-hidden border border-border-subtle/50 shadow-inner">
            <div className="h-full bg-emerald-500 rounded-full w-[85%]" />
          </div>
        </div>

        <div className="bg-white/40 p-2 rounded border border-border-subtle/40 text-[10px] leading-relaxed italic text-text-tertiary">
          Fully integrated module: Student FAQ Ingestion, Database Indexing, JWT Authorization and RAG pipeline context window mapping.
        </div>
      </div>
    </div>
  );
}
export default Projects;
