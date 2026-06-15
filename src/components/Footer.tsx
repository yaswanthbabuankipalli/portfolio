export function Footer() {
  const currentYear = new Date().getFullYear(); // Resolves to 2026 dynamically
  return (
    <footer className="border-t border-border-subtle bg-bg-primary py-8">
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        <p className="text-[13px] text-text-tertiary tracking-wide">
          Built by Yaswanth Babu Ankipalli · <span className="font-mono text-accent-primary">yaswanth.dev</span> · {currentYear}
        </p>
      </div>
    </footer>
  );
}
export default Footer;
