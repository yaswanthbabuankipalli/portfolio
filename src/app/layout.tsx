import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yaswanth Babu Ankipalli — Python & AI Engineer | RAG Pipelines · LLM Fine-tuning · Voice AI",
  description: "Python Developer with 1.5+ years building production RAG pipelines, voice AI systems, and LLM fine-tuning workflows at CoRover.ai. Available for full-time and freelance roles.",
  metadataBase: new URL("https://yaswanth-babu-ankipalli-portfolio.netlify.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Yaswanth Babu Ankipalli — Python & AI Engineer",
    description: "I build production RAG pipelines, voice AI systems, and LLM workflows that ship to real users — including 10M+ IRCTC passengers.",
    url: "https://yaswanth-babu-ankipalli-portfolio.netlify.app",
    siteName: "Yaswanth Babu Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yaswanth Babu Ankipalli — Python & AI Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yaswanth Babu Ankipalli — Python & AI Engineer",
    description: "I build production RAG pipelines, voice AI systems, and LLM workflows that ship to real users — including 10M+ IRCTC passengers.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-bg-primary text-text-primary relative overflow-x-hidden flex flex-col">
        {/* Floating Ambient Pastel Orbs */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Orb 1: Violet/Indigo (Top Left) */}
          <div className="absolute top-[5%] left-[5%] w-[450px] h-[450px] rounded-full bg-[#5243EF]/6 blur-[90px] animate-float-1" />
          
          {/* Orb 2: Cyan/Mint (Middle Right) */}
          <div className="absolute top-[35%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#009CB8]/6 blur-[100px] animate-float-2" />
          
          {/* Orb 3: Warm Peach (Bottom Left) */}
          <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#FF9E79]/5 blur-[80px] animate-float-1" />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}
