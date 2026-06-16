"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Copy, Check, ExternalLink, MapPin, Calendar, FileText } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "yaswanthb.ankipalli@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28 bg-transparent relative overflow-hidden z-10">
      {/* Background glow overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-accent-primary/4 blur-[100px]" />
      </div>

      <div className="max-w-[1100px] mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        {/* Header */}
        <div className="mb-10 text-center max-w-[500px]">
          <p className="font-mono text-[12px] font-bold text-accent-primary uppercase tracking-[0.25em] mb-4">
            Let's build something
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-text-primary mb-4">
            Get in touch
          </h2>
          <p className="text-[16px] text-text-secondary leading-relaxed">
            Open to full-time roles, freelance projects, and collaborations in AI/ML engineering.
          </p>
        </div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[520px] glass rounded-[12px] p-6 sm:p-8 space-y-6 shadow-lg hover:border-accent-primary/15 transition-all duration-300"
        >
          {/* Metadata: Location / Terms */}
          <div className="flex items-center justify-center space-x-2 text-xs font-mono text-text-secondary pb-3 border-b border-border-subtle/50">
            <MapPin size={13} className="text-accent-secondary" />
            <span className="font-semibold">Bangalore, India · Open to remote</span>
          </div>

          {/* Contact Details List */}
          <div className="space-y-4">
            {/* Email item */}
            <div className="flex items-center justify-between gap-3 p-3 bg-white/40 border border-border-subtle/50 rounded-[8px] shadow-sm">
              <div className="flex items-center space-x-3 text-left min-w-0">
                <Mail size={16} className="text-accent-primary shrink-0" />
                <span className="text-[13px] font-mono text-text-secondary select-all truncate">{email}</span>
              </div>
              <div className="flex items-center space-x-2 shrink-0">
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 hover:bg-white/70 border border-border-subtle hover:border-border-bright rounded-[4px] text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                  title="Copy to clipboard"
                >
                  {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                </button>
                <a
                  href={`mailto:${email}?subject=Collaboration%20Inquiry`}
                  className="p-1.5 hover:bg-white/70 border border-border-subtle/80 hover:border-border-bright rounded-[4px] text-text-secondary hover:text-text-primary transition-colors"
                  title="Open mail app"
                >
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* LinkedIn item */}
            <div className="flex items-center justify-between gap-3 p-3 bg-white/40 border border-border-subtle/50 rounded-[8px] shadow-sm">
              <div className="flex items-center space-x-3 text-left min-w-0">
                <Linkedin size={16} className="text-accent-primary shrink-0" />
                <span className="text-[13px] font-mono text-text-secondary truncate">linkedin.com/in/yaswanth-babu</span>
              </div>
              <a
                href="https://www.linkedin.com/in/yaswanth-babu-ankipalli-73041b171/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 hover:bg-white/70 border border-border-subtle/80 hover:border-border-bright rounded-[4px] text-text-secondary hover:text-text-primary transition-colors shrink-0"
              >
                <ExternalLink size={14} />
              </a>
            </div>

            {/* GitHub item */}
            <div className="flex items-center justify-between gap-3 p-3 bg-white/40 border border-border-subtle/50 rounded-[8px] shadow-sm">
              <div className="flex items-center space-x-3 text-left min-w-0">
                <Github size={16} className="text-accent-primary shrink-0" />
                <span className="text-[13px] font-mono text-text-secondary truncate">github.com/yaswanthbabuankipalli</span>
              </div>
              <a
                href="https://github.com/yaswanthbabuankipalli"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 hover:bg-white/70 border border-border-subtle/80 hover:border-border-bright rounded-[4px] text-text-secondary hover:text-text-primary transition-colors shrink-0"
              >
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Download Resume Button */}
          <a
            href="/Yaswanth Babu A.pdf"
            download="Yaswanth Babu A.pdf"
            className="w-full h-12 bg-accent-primary hover:bg-accent-primary/95 text-white font-mono text-[13px] font-bold uppercase tracking-wider rounded-[8px] flex items-center justify-center space-x-2 transition-all active:scale-[0.98] shadow-md cursor-pointer"
          >
            <FileText size={16} />
            <span>Download Resume</span>
          </a>

          {/* Book Call Secondary */}
          <div className="pt-2">
            <a
              href={`mailto:${email}?subject=Request%2015-Min%20Intro%20Call`}
              className="inline-flex items-center space-x-1.5 text-xs text-text-secondary hover:text-accent-primary transition-colors font-mono font-bold"
            >
              <Calendar size={13} />
              <span>Or book a 15-min intro call via email →</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default Contact;
