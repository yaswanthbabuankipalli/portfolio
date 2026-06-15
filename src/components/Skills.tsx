"use client";

import { motion } from "framer-motion";
import { skillGroups, currentlyLearning, SkillGroup } from "@/data/skills";

// Helper to match colors to CSS classes
const getColorClass = (color: string) => {
  switch (color) {
    case "violet":
      return "tag-ai";
    case "cyan":
      return "tag-backend";
    case "red":
      return "tag-database";
    case "green":
      return "tag-devops";
    default:
      return "";
  }
};

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="skills" className="py-24 bg-transparent relative z-10">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14 text-left">
          <p className="font-mono text-[12px] font-bold text-accent-primary uppercase tracking-[0.25em] mb-3">
            Tech I work with
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-text-primary">
            Expertise & Technical Stack
          </h2>
        </div>

        {/* Skills Category Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillGroups.map((group: SkillGroup) => (
            <motion.div
              key={group.category}
              variants={cardVariants}
              className="glass transition-all duration-300 rounded-[12px] p-6 sm:p-8 space-y-6 hover:border-accent-primary/20 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              {/* Category Header */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-text-primary font-sans leading-none">
                  {group.category}
                </h3>
                <div className="h-0.5 w-full bg-border-subtle/40 relative overflow-hidden">
                  <div
                    className="h-full absolute left-0 top-0 w-16"
                    style={{
                      backgroundColor:
                        group.color === "violet"
                          ? "#5243EF"
                          : group.color === "cyan"
                          ? "#009CB8"
                          : group.color === "red"
                          ? "#FF6B6B"
                          : "#10B981"
                    }}
                  />
                </div>
              </div>

              {/* Skills Tag List */}
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-[6px] text-xs font-mono font-bold uppercase tracking-wider ${getColorClass(group.color)} shadow-sm`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Growth Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 pt-4 border-t border-border-subtle/30 text-left"
        >
          <p className="text-[13px] text-text-tertiary leading-relaxed italic">
            Currently exploring:{" "}
            <span className="font-mono text-text-secondary font-bold not-italic">
              {currentlyLearning.join(" · ")}
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
export default Skills;
