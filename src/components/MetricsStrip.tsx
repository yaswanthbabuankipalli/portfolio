"use client";

import { useEffect, useRef, useState } from "react";
import { useCountUp } from "@/lib/useCountUp";
import { metrics } from "@/data/metrics";

export function MetricsStrip() {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-transparent border-t border-b border-border-subtle/50 overflow-hidden relative z-10">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Eyebrow header */}
        <div className="mb-10 text-left">
          <p className="font-mono text-[12px] font-bold text-accent-primary uppercase tracking-[0.25em]">
            Impact in production
          </p>
        </div>

        {/* 5 columns layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {metrics.map((metric, idx) => {
            const startVal = metric.value === 200 ? 400 : 0;
            const animatedVal = useCountUp(metric.value, startVal, 1200, isInView);

            return (
              <div
                key={idx}
                className="relative group glass rounded-[12px] p-5 sm:p-6 transition-all duration-355 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-accent-primary/20"
              >
                {/* Metric glow backdrop */}
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-accent-primary/5 blur-md pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                {/* Number Display */}
                <div className="relative z-10 mb-4 select-none">
                  <span className="font-mono text-3xl sm:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-extrabold text-accent-primary tracking-tight">
                    {metric.prefix}
                    {animatedVal}
                    {metric.suffix}
                  </span>
                </div>

                {/* Label and context */}
                <div className="relative z-10 flex flex-col space-y-1">
                  <span className="font-mono text-[11px] font-bold text-text-secondary uppercase tracking-[0.15em] leading-snug">
                    {metric.label}
                  </span>
                  <span className="text-[11px] text-text-tertiary">
                    {metric.context}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default MetricsStrip;
