"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-350 ${
          scrolled
            ? "nav-glass py-3.5"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between">
          {/* Left: Monogram Logo */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "#")}
            className="font-mono text-[32px] md:text-[34px] font-black tracking-tight text-accent-primary hover:opacity-85 transition-opacity"
          >
            YB
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[16px] md:text-[17px] font-bold tracking-wide text-text-secondary hover:text-accent-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Resume Button */}
          <div className="hidden md:block">
            <a
              href="/yaswanth_babu_resume.pdf"
              download="yaswanth_babu_resume.pdf"
              className="inline-flex items-center space-x-1.5 px-4 py-2 border border-accent-primary/60 hover:border-accent-primary text-accent-primary hover:bg-accent-primary/5 rounded-[8px] text-[14px] font-mono font-bold transition-all duration-200"
            >
              <span>Resume</span>
              <ArrowDown size={14} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-accent-primary transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Slide Down Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[60px] z-40 bg-bg-primary/95 backdrop-blur-2xl border-t border-border-subtle md:hidden flex flex-col justify-start px-6 pt-12 pb-8 space-y-8"
          >
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xl font-medium text-text-secondary hover:text-accent-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-6 border-t border-border-subtle">
              <a
                href="/yaswanth_babu_resume.pdf"
                download="yaswanth_babu_resume.pdf"
                className="w-full flex items-center justify-center space-x-2 py-3 border border-accent-primary text-accent-primary hover:bg-accent-primary/5 rounded-[8px] font-mono text-[14px] font-semibold transition-all"
              >
                <span>Download Resume</span>
                <ArrowDown size={15} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
export default Navbar;
