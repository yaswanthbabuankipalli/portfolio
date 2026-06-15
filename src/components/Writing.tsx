"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, Rss } from "lucide-react";

export function Writing() {
  const posts = [
    {
      badge: "Draft · Coming Soon",
      title: "How I cut semantic search latency to under 200ms using FAISS, pgvector, and Redis",
      description: "A production case study on building hybrid retrieval with dense/sparse indexing and semantic caching.",
      readTime: "6 min read",
      date: "Q3 2026"
    },
    {
      badge: "Draft · Coming Soon",
      title: "Whisper ASR + Vector Search: Building a Video-RAG platform from scratch",
      description: "How we made video content searchable down to the exact timestamp using Whisper live transcription segments.",
      readTime: "8 min read",
      date: "Q3 2026"
    }
  ];

  return (
    <section className="py-24 bg-transparent relative z-10">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left">
            <p className="font-mono text-[12px] font-bold text-accent-primary uppercase tracking-[0.25em] mb-3">
              Writing
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-text-primary mb-2">
              Technical Case Studies
            </h2>
            <p className="text-[13px] text-text-secondary">
              I write about what I build — RAG systems, LLMs, and production AI.
            </p>
          </div>

          <a
            href="https://hashnode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2 border border-border-bright text-text-secondary hover:text-accent-primary bg-white/40 hover:bg-white/80 rounded-[6px] text-[13px] font-semibold transition-all shrink-0 self-start md:self-end glass"
          >
            <Rss size={14} />
            <span>Follow on Hashnode</span>
          </a>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group glass rounded-[12px] p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-accent-primary/20"
            >
              {/* Coming soon badge */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="px-2.5 py-0.5 rounded bg-accent-primary/10 border border-accent-primary/20 text-accent-primary font-mono text-[9px] uppercase font-bold tracking-wider">
                    {post.badge}
                  </span>
                  
                  <div className="flex items-center space-x-2 text-[10px] text-text-tertiary font-mono">
                    <span className="flex items-center space-x-1">
                      <Calendar size={11} />
                      <span>{post.date}</span>
                    </span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-text-primary group-hover:text-accent-primary transition-colors tracking-tight leading-snug">
                  {post.title}
                </h3>

                <p className="text-[13px] leading-relaxed text-text-secondary">
                  {post.description}
                </p>
              </div>

              {/* Fake CTA */}
              <div className="pt-2 border-t border-border-subtle/30 flex items-center justify-between text-text-tertiary group-hover:text-accent-primary transition-colors font-mono text-[11px] font-bold uppercase tracking-wider">
                <span>Read Draft</span>
                <ArrowRight size={13} className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Writing;
