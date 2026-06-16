# Yaswanth Babu — Portfolio Website
## Complete Build Specification for Vibe Coding / AI Agents

---

## 0. Project Overview

Build a single-page personal portfolio website for **Yaswanth Babu Ankipalli**, a Python/AI Engineer based in Bangalore with 1.5+ years building production RAG pipelines, voice AI systems, and LLM fine-tuning workflows at CoRover.ai.

**Goal:** Land senior AI/ML engineering roles, attract freelance clients, and establish a personal brand in the RAG/LLM space.

**Audience:** Hiring managers at AI-first startups, technical recruiters, and potential freelance clients.

**Tone:** Confident, technical, proof-driven. No fluff. Every sentence earns its place.

---

## 1. Tech Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | **Next.js 14 (App Router)** | SEO, fast static export, easy Vercel deploy |
| Styling | **Tailwind CSS v3** | Rapid utility styling, no CSS bloat |
| Animations | **Framer Motion** | Scroll reveals, stagger effects |
| Icons | **Lucide React** | Clean, consistent icon set |
| Fonts | **Inter** (body) + **JetBrains Mono** (code/metrics) | JetBrains Mono for all numbers and tags gives a "built by an engineer" feel |
| Deployment | **Vercel** (free tier) | Zero-config, instant |
| Domain | `yaswanthbabu.dev` or `yaswanth.dev` | Register on Namecheap |

---

## 2. Visual Design System

### 2.1 Color Palette

```
Background (primary):   #0A0A0F   /* near-black, not pure black */
Background (surface):   #111118   /* card backgrounds */
Background (elevated):  #1A1A24   /* hover states, tags */
Border:                 #2A2A38   /* subtle card borders */
Border (bright):        #3A3A50   /* hover borders */

Accent (primary):       #6C63FF   /* electric violet — AI/tech feel */
Accent (glow):          #6C63FF22 /* for glow effects behind metric numbers */
Accent (secondary):     #00D9FF   /* cyan — used sparingly for highlights */

Text (primary):         #F0F0F8   /* near-white body text */
Text (secondary):       #8B8BA8   /* muted labels, subtitles */
Text (tertiary):        #5A5A72   /* timestamps, hints */

Tag (AI/ML):            #6C63FF1A border #6C63FF60  text #9D97FF
Tag (Backend):          #00D9FF1A border #00D9FF60  text #5DE8FF
Tag (DevOps):           #00FF9D1A border #00FF9D60  text #4DFFB8
Tag (Database):         #FF6B6B1A border #FF6B6B60  text #FF9D9D
```

### 2.2 Typography Scale

```
Font family (body):     'Inter', system-ui, sans-serif
Font family (mono):     'JetBrains Mono', monospace   ← ALL metrics, code, tags

Display (hero name):    72px / weight 800 / tracking -2px / Inter
Hero subtitle:          20px / weight 400 / color text-secondary / Inter
Section heading:        36px / weight 700 / tracking -1px / Inter
Card title:             20px / weight 600 / Inter
Card body:              15px / weight 400 / line-height 1.7 / Inter
Metric number:          48px / weight 700 / JetBrains Mono / color accent-primary
Metric label:           12px / weight 500 / uppercase / tracking 2px / text-secondary
Tag text:               11px / weight 600 / uppercase / tracking 1px / JetBrains Mono
Nav links:              13px / weight 500 / text-secondary
```

### 2.3 Spacing & Layout

```
Max content width:      1100px (centered)
Section padding:        120px top/bottom (desktop), 64px (mobile)
Card padding:           28px
Card border-radius:     12px
Card border:            1px solid #2A2A38
Card hover border:      1px solid #3A3A50
Card hover bg:          #111118 → slight lift (no shadow, just border change)
Grid gap:               24px
```

### 2.4 Signature Design Element

**Glowing metric numbers.** Every key metric (200ms, 40%, 30%) renders in JetBrains Mono with a soft violet radial glow behind the number. On scroll-in, the number counts up from 0 using a JS counter animation. This is the one "wow" moment — everything else is restrained.

---

## 3. Site Structure

Single scrollable page with smooth anchor navigation. No page routing needed (except `/` only).

```
/
├── <Navbar>             sticky top, transparent → blur on scroll
├── <Hero>               name + one-liner + CTA buttons + animated tag cloud
├── <MetricsStrip>       5 animated counter cards
├── <Projects>           4 project deep-dive cards
├── <Skills>             visual tech stack grouped by category
├── <Experience>         CoRover.ai timeline with IRCTC callout
├── <Stashlog>           full-width feature card for the SaaS project
├── <Writing>            1-2 blog post links (placeholder if not written yet)
├── <Contact>            email + links + resume download
└── <Footer>             minimal
```

---

## 4. Section-by-Section Specification

---

### 4.1 Navbar

**Behavior:**
- Fixed to top, `position: sticky`
- On load: fully transparent background
- On scroll > 50px: `backdrop-filter: blur(12px)` + `background: #0A0A0F99` + `border-bottom: 1px solid #2A2A38`
- Transition: `all 0.3s ease`

**Left:** `YB` monogram in JetBrains Mono, weight 700, accent color `#6C63FF`

**Right nav links:** `Work` · `Skills` · `Experience` · `Contact`

**Right CTA:** `Resume ↓` button — outlined style, accent border, downloads `Yaswanth Babu A.pdf`

**Mobile:** hamburger icon → full-screen slide-down menu with same links

---

### 4.2 Hero Section

**Layout:** Centered, full viewport height (`100vh`), flex column, justify-center

**Content (top to bottom):**

```
[availability badge]
Yaswanth Babu Ankipalli
Python · AI · RAG Engineer
[one-liner]
[CTA row]
[tech tag cloud]
```

**Availability badge:**
```
● Available for opportunities
```
Small pill, top of hero. Green dot (`#00FF9D`), pulsing CSS animation. Text: `"Open to full-time & freelance"`. Background `#00FF9D1A`, border `#00FF9D40`, rounded-full, 12px text.

**Name:**
```
Yaswanth Babu
```
72px, weight 800, Inter, color `#F0F0F8`. Line below it:
```
Python · AI Engineer
```
Same size but `color: #6C63FF` (accent), JetBrains Mono weight 600.

**One-liner (below name):**
```
I build production RAG pipelines, voice AI systems, and LLM workflows
that ship to real users — including 10M+ IRCTC passengers.
```
20px, Inter, `color: #8B8BA8`, max-width 560px, centered.

**CTA row:**
```
[View My Work ↓]    [Resume ↓]    [GitHub ↗]    [LinkedIn ↗]
```
- `View My Work` — filled button, bg `#6C63FF`, text white, border-radius 8px, 44px height
- `Resume ↓` — outlined button, border `#6C63FF`, text `#6C63FF`, same height
- `GitHub ↗` and `LinkedIn ↗` — ghost/icon buttons, text-secondary, hover text-primary

**Animated tag cloud (below CTAs):**
A horizontal scrolling ticker (infinite loop, CSS animation, no JS) showing your tech tags:
```
RAG Pipelines  ·  FAISS  ·  pgvector  ·  Redis  ·  OpenAI API  ·  Gemini API
·  Whisper ASR  ·  LoRA/QLoRA  ·  FastAPI  ·  Go  ·  PostgreSQL  ·  Docker
·  Jenkins CI/CD  ·  ElevenLabs TTS  ·  Vector Search  ·  LLM Fine-tuning  ·
```
Two rows, opposite scroll directions. Tags styled as `tag-AI/ML` color from palette. Subtle, not loud.

**Background:**
No image. Pure `#0A0A0F`. Optional: very subtle radial gradient centered behind the name — `radial-gradient(ellipse 800px 400px at 50% 40%, #6C63FF08, transparent)`. Nothing more.

---

### 4.3 Metrics Strip

**Layout:** Full-width section, 5 cards in a row (2-col on mobile)

**Heading (above cards):**
```
Impact in production
```
Small eyebrow label in JetBrains Mono uppercase, `color: #6C63FF`, 12px, tracking 3px.

**5 Metric Cards:**

| Number | Label | Context |
|--------|-------|---------|
| `<200ms` | Semantic search latency | Hybrid RAG pipeline |
| `~40%` | Fewer LLM API calls | Redis semantic caching |
| `~30%` | Accuracy above baseline | Multi-stage reranking |
| `~25%` | Lower inference latency | LoRA/QLoRA fine-tuning |
| `~70%` | Less manual deployment | Jenkins CI/CD pipelines |

**Each card:**
```
[big number — JetBrains Mono 48px accent color with glow]
[label — 12px uppercase tracking mono secondary]
[context — 11px tertiary color]
```

**Animation:** On scroll-into-view (Intersection Observer), numbers count up from 0 to their value over 1.2 seconds with an ease-out curve. The `<200ms` card should go `400ms → 350ms → 280ms → 200ms` (descending).

**Card style:** `background: #111118`, border `1px solid #2A2A38`, border-radius 12px, padding 28px 24px.

---

### 4.4 Projects Section

**Section heading:**
```
What I've built
```
36px, Inter weight 700. No numbering.

**Sub-label:** `"4 projects — 2 production deployments, 1 live SaaS, 1 demo"` in 13px text-secondary.

---

#### Project 1 — AI Resume Screening & Interview Automation
*(Feature card — largest, first, because it has a demo video)*

**Layout:** Full-width card (not in grid). 2-column inside: left = content, right = video embed or thumbnail.

**Badge:** `DEMO AVAILABLE` in green tag style

**Title:** `AI Resume Screening & Interview Automation`

**Problem statement (italic, muted):**
*"Recruiters spend 3+ hours screening a single candidate. Manual interviews lose nuance. HR documentation takes another hour per person."*

**What was built:**
A real-time hiring automation tool built in Python using:
- **Gemini API** — resume parsing, question generation, candidate evaluation
- **Whisper Live ASR** — live speech-to-text transcription during interviews
- **Structured output** — skill scores, transcripts, and per-candidate summaries saved to DB
- **Auto-generated HR reports** — post-interview docs generated automatically

**Metrics (inline, highlighted):**
```
3 hours → 20 minutes   screening time per candidate
60% less               post-interview documentation time
```
Render these as two small stat rows inside the card, with `→` and numbers in accent color.

**Tech tags:** `Python` · `Gemini API` · `Whisper Live ASR` · `FastAPI` · `PostgreSQL`

**Demo video:**
- Embed as `<iframe>` if YouTube link available
- Fallback: large thumbnail with play button overlay linking to LinkedIn post
- LinkedIn URL: `https://www.linkedin.com/posts/yaswanth-babu-ankipalli-73041b171_genai-rag-llm-activity-7432868571346653184-UdNZ`

**CTA buttons:** `[Watch Demo ▶]` · `[View on LinkedIn ↗]`

---

#### Project 2 — Hybrid RAG Pipeline (CoRover.ai)
*(Technical flagship — 2-column grid card)*

**Badge:** `PRODUCTION · ENTERPRISE`

**Title:** `Hybrid RAG Pipeline with Semantic Caching`

**Problem statement (italic):**
*"Single-stage vector retrieval on enterprise knowledge bases was slow, expensive, and inaccurate."*

**What was built:**
- FAISS + pgvector hybrid retrieval (dense + sparse)
- Redis semantic caching — reuses similar query results instead of hitting LLM again
- Multi-stage pipeline: reranking → metadata filtering → contextual chunking
- Shipped to enterprise clients at CoRover.ai

**Metrics:**
```
<200ms      semantic search latency
~40%        reduction in redundant LLM API calls
~30%        accuracy improvement over single-stage baseline
```

**Architecture diagram (ASCII, for agent to render as SVG or image):**
```
Query → [FAISS + pgvector] → Top-K Results
                                    ↓
                          [Reranker + Metadata Filter]
                                    ↓
                          [Redis Cache Check] → HIT → Return cached answer
                                    ↓ MISS
                          [Contextual Chunking → LLM] → Answer → Cache → Return
```

**Tech tags:** `Python` · `FAISS` · `pgvector` · `Redis` · `PostgreSQL` · `FastAPI` · `OpenAI API`

**CTA:** `[View Architecture ↗]` (links to a modal or expanded diagram)

---

#### Project 3 — Video-RAG Platform (CoRover.ai)
*(2-column grid card)*

**Badge:** `PRODUCTION`

**Title:** `Video-RAG: Search Inside Any Video`

**Problem statement (italic):**
*"Video content is completely unsearchable. You can't ask questions to a YouTube video."*

**What was built:**
- Ingests YouTube URLs or uploaded video files
- Runs Whisper ASR with timestamp segmentation
- Returns exact source video clips + AI-generated answers

**Flow (render as a simple inline diagram):**
```
YouTube URL / File Upload
        ↓
  Whisper ASR Transcription
        ↓
  Timestamp Segmentation
        ↓
  Vector Index (FAISS)
        ↓
  User Query → Semantic Search → Exact Clip + AI Answer
```

**Tech tags:** `Python` · `Whisper ASR` · `FAISS` · `OpenAI API` · `FastAPI` · `Docker`

**CTA:** `[Ask about this project ↗]` — `mailto:yaswanthb.ankipalli@gmail.com?subject=Video-RAG Project`

---

#### Project 4 — CollegiumBot (Campus AI Companion)
*(2-column grid card)*

**Badge:** `DEPLOYED · STUDENT-FACING`

**Title:** `CollegiumBot — AI Campus Companion`

**Problem statement (italic):**
*"Students flooded admin staff with repetitive questions about schedules, deadlines, and campus info."*

**What was built:**
- Semantic RAG backend for campus FAQ answering
- Real-time retrieval with 85%+ response relevance after prompt engineering
- Auth, knowledge module ingestion, retrieval integrations — all built solo
- Deployed to the entire student body

**Metrics:**
```
85%+        response relevance on campus FAQs
100%        student body coverage at launch
```

**Tech tags:** `Python` · `RAG` · `Semantic Search` · `FastAPI` · `PostgreSQL`

---

### 4.5 Stashlog — Full-Width Feature Card

Give Stashlog its own distinct full-width section (not in the projects grid) because it's a complete shipped SaaS product, not just a work project.

**Section eyebrow:** `OPEN SOURCE PROJECT`

**Layout:** Full-width card with a slightly different background `#0F0F1A` and a left accent border `4px solid #6C63FF`.

**Title:** `Stashlog — Your daily work. Remembered. Standup-ready.`

**Description:**
A full-stack SaaS application built with a collaborator. Logs daily developer work, uses Gemini AI to format entries into professional standup summaries, and delivers them to your inbox every morning. Built and shipped end-to-end.

**Feature highlights (3-column grid inside the card):**
```
[🤖 Gemini AI Summaries]          [📧 Morning Email Delivery]       [🔥 Streak Tracker]
Auto-formats daily logs into       Standup lands in your inbox        Tracks consecutive logged
What I Did / Blockers / Plan       at 8 AM, Monday–Friday             weekdays, weekends auto-skipped

[📅 Visual Calendar History]       [📊 Weekly Recap Digests]         [📱 Mobile-first UI]
Color-coded tag dots + sparkle     Friday recap + Saturday            Full-screen slide sheets
icons for AI summary dates         digest email with streaks          on viewports under 768px
```

**Tech stack badges:**
`React 19` · `TypeScript` · `Go 1.25` · `PostgreSQL` · `Gemini 1.5 Flash` · `Brevo Email API` · `Docker` · `GitHub Actions` · `Vercel` · `Render`

**CTA buttons:**
`[View Live App ↗]` · `[GitHub ↗](https://github.com/epavan162/stashlog)` · `[Built with a collaborator — @epavan162]`

---

### 4.6 Skills Section

**Section heading:** `Tech I work with`

**Layout:** Grouped category cards, 2-column on desktop, 1-column mobile

**Groups:**

```
AI / ML  (violet tags)
─────────────────────────────────────
RAG Pipelines          Vector Databases
Semantic Search        LLM Fine-tuning (LoRA/QLoRA)
Whisper ASR            OpenAI API
Gemini API             ElevenLabs TTS
Unsloth                Conversational AI
AI Agents              NL-to-SQL

Backend  (cyan tags)
─────────────────────────────────────
Python                 Go (Gin)
FastAPI                Flask
REST APIs              JWT Auth
Cron Jobs              Streaming APIs

Databases  (red tags)
─────────────────────────────────────
PostgreSQL             pgvector
FAISS                  Redis
MongoDB                Supabase

DevOps  (green tags)
─────────────────────────────────────
Docker                 Jenkins CI/CD
GitHub Actions         Render
Vercel                 API Deployment
```

**Bottom note (small, muted):**
```
Currently exploring: LangGraph · LlamaIndex · Multimodal RAG
```
Rendered as a small italic line in text-tertiary. Shows growth trajectory.

---

### 4.7 Experience Section

**Section heading:** `Where I've worked`

**Single entry (timeline style):**

```
[CoRover.ai logo placeholder / "CA" monogram]

CoRover.ai                                    Oct 2024 – Present
Python Developer                              Bangalore, India

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
★  IRCTC AskDisha 2.0
   [callout card — slightly highlighted background]
   Quality audits and escalation tracking that reduced bot
   escalation rate by ~15% on India's largest railway booking
   platform — serving 10M+ daily passengers.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Key contributions:
• Hybrid RAG pipeline — <200ms latency, 40% fewer LLM calls
• Multi-stage reranking workflow — 30% accuracy improvement
• Video-RAG platform — YouTube/file ingestion + Whisper ASR
• Voice AI system — OpenAI Realtime + Gemini + ElevenLabs TTS
• NL-to-SQL — hours of analyst work → under 2 minutes
• 5+ Jenkins CI/CD pipelines — 70% less manual deployment effort
• LoRA/QLoRA fine-tuning — 25% lower inference latency
```

**Education (below experience, smaller):**
```
B.Tech — Computer Science & Information Technology   2021–2024
Siddharth Institute of Engineering & Technology, Puttur · CGPA: 7.55
```

**Certifications (inline badges):**
`NPTEL — Internet of Things` · `APSCHE — 21st Century Employability Skills`

**Achievements (inline):**
`Best Coordinator 2022` · `Best Coordinator 2023` · `President, CSIT Association 2024`

---

### 4.8 Writing / Blog Section

**Section heading:** `Writing`

**Sub-label:** `"I write about what I build — RAG systems, LLMs, and production AI."`

**Show 1–2 blog post cards (placeholder if not written yet):**

```
Card 1:
[Draft / Coming Soon tag]
"How I cut semantic search latency to under 200ms using FAISS, pgvector, and Redis"
A production case study on building hybrid retrieval with semantic caching.
→ Publish on Hashnode
```

```
Card 2 (optional):
[Draft / Coming Soon tag]
"Whisper ASR + Vector Search: Building a Video-RAG platform from scratch"
How we made video content queryable with timestamped source clips.
```

**If no posts exist yet:** Show the card shells with a "Coming soon" badge. Don't omit the section — it signals intent and fills the layout gap.

**CTA:** `[Follow on Hashnode ↗]` or `[Subscribe for updates]`

---

### 4.9 Contact Section

**Section heading:** `Let's build something`

**One-liner:**
```
Open to full-time roles, freelance projects, and collaborations in AI/ML engineering.
```
20px, text-secondary, max-width 480px, centered.

**Contact card (centered, max-width 520px):**
```
yaswanthb.ankipalli@gmail.com     [Copy] [Email ↗]
linkedin.com/in/yaswanth-babu-ankipalli    [LinkedIn ↗]
github.com/[username]              [GitHub ↗]
Bangalore, India · Open to remote
```

**Primary CTA:**
```
[Download Resume ↓]
```
Full-width button inside card, filled violet, 48px height, JetBrains Mono text.

**Secondary:**
```
[Or book a 15-min intro call →]
```
Link to Calendly (set one up free at calendly.com/yaswanth) or just email.

---

### 4.10 Footer

Minimal. Single line:

```
Built by Yaswanth Babu · yaswanth.dev · 2025
```

Text-tertiary, 13px, centered. No more.

---

## 5. Animations & Interactions

| Element | Animation | Trigger |
|---------|-----------|---------|
| Section headings | Fade up 20px, opacity 0→1, 0.5s ease-out | Scroll into view (Intersection Observer) |
| Project cards | Stagger fade-up, 100ms delay between cards | Scroll into view |
| Metric numbers | Count-up from 0, 1.2s ease-out | Scroll into view |
| Availability badge dot | CSS pulse/ping animation | Always on |
| Tag ticker (hero) | Infinite horizontal scroll, CSS only | Always on |
| Navbar | Transparent → blur/dark, 0.3s | Scroll > 50px |
| Card hover | Border lightens, subtle bg lift (no translate) | Hover |
| CTA buttons | Scale 0.98 on click, 0.1s | Click |

**Reduced motion:** All animations must respect `@media (prefers-reduced-motion: reduce)`. In reduced motion mode: no count-up (show final value immediately), no ticker scroll (show static), no stagger (show immediately).

---

## 6. Responsive Breakpoints

```
Mobile:   < 640px
Tablet:   640px – 1024px
Desktop:  > 1024px
```

| Section | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Hero name | 72px | 52px | 36px |
| Metrics | 5-col row | 3-col | 2-col |
| Projects | Full-width + 2-col grid | Full-width + 1-col | 1-col stack |
| Skills | 2-col | 2-col | 1-col |
| Navbar | Full links | Full links | Hamburger |

---

## 7. SEO & Meta

Add these to `<head>`:

```html
<title>Yaswanth Babu — Python & AI Engineer | RAG Pipelines · LLM Fine-tuning · Voice AI</title>

<meta name="description" content="Python Developer with 1.5+ years building production RAG pipelines, voice AI systems, and LLM fine-tuning workflows at CoRover.ai. Available for full-time and freelance roles." />

<meta property="og:title" content="Yaswanth Babu — Python & AI Engineer" />
<meta property="og:description" content="I build production RAG pipelines, voice AI systems, and LLM workflows that ship to real users — including 10M+ IRCTC passengers." />
<meta property="og:image" content="/og-image.png" />  <!-- Create a 1200×630 OG image -->
<meta property="og:url" content="https://yaswanth.dev" />

<meta name="twitter:card" content="summary_large_image" />
<link rel="canonical" href="https://yaswanth.dev" />
```

---

## 8. File / Folder Structure

```
portfolio/
├── public/
│   ├── Yaswanth Babu A.pdf       ← keep updated
│   ├── og-image.png                   ← 1200×630 social preview image
│   └── favicon.ico                    ← YB monogram
├── src/
│   ├── app/
│   │   ├── layout.tsx                 ← fonts, meta, analytics
│   │   └── page.tsx                   ← renders all sections in order
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── MetricsStrip.tsx
│   │   ├── Projects.tsx
│   │   │   ├── ProjectCard.tsx        ← reusable card component
│   │   │   └── FeaturedProject.tsx    ← full-width version
│   │   ├── Stashlog.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Writing.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   ├── projects.ts                ← all project data as typed objects
│   │   ├── skills.ts                  ← skill groups and tags
│   │   └── metrics.ts                 ← metric cards data
│   └── lib/
│       └── useCountUp.ts              ← counter animation hook
├── tailwind.config.ts                 ← extend with custom colors/fonts
├── next.config.ts
└── package.json
```

---

## 9. Data — Copy-Paste Content

### 9.1 Projects Data (`src/data/projects.ts`)

```typescript
export const projects = [
  {
    id: "resume-screening",
    badge: "DEMO AVAILABLE",
    badgeColor: "green",
    title: "AI Resume Screening & Interview Automation",
    problem: "Recruiters spend 3+ hours screening a single candidate. Manual interviews lose nuance. HR documentation takes another hour per person.",
    description: "A real-time hiring automation tool that screens resumes, generates contextual interview questions, transcribes candidate responses live, scores skills, and auto-generates HR reports.",
    tech: ["Python", "Gemini API", "Whisper Live ASR", "FastAPI", "PostgreSQL"],
    metrics: [
      { from: "3 hours", to: "20 minutes", label: "screening time per candidate" },
      { value: "~60%", label: "less post-interview documentation time" },
    ],
    demoUrl: "https://www.linkedin.com/posts/yaswanth-babu-ankipalli-73041b171_genai-rag-llm-activity-7432868571346653184-UdNZ",
    demoType: "video",
    featured: true,
  },
  {
    id: "hybrid-rag",
    badge: "PRODUCTION · ENTERPRISE",
    badgeColor: "violet",
    title: "Hybrid RAG Pipeline with Semantic Caching",
    problem: "Single-stage vector retrieval on enterprise knowledge bases was slow, expensive, and inaccurate.",
    description: "Engineered a multi-stage retrieval system combining FAISS and pgvector with Redis semantic caching. Rebuilt retrieval into a pipeline: reranking, metadata filtering, and contextual chunking.",
    tech: ["Python", "FAISS", "pgvector", "Redis", "PostgreSQL", "FastAPI", "OpenAI API"],
    metrics: [
      { value: "<200ms", label: "semantic search latency" },
      { value: "~40%", label: "fewer redundant LLM API calls" },
      { value: "~30%", label: "accuracy above single-stage baseline" },
    ],
    featured: false,
  },
  {
    id: "video-rag",
    badge: "PRODUCTION",
    badgeColor: "violet",
    title: "Video-RAG: Search Inside Any Video",
    problem: "Video content is completely unsearchable. You can't ask questions to a YouTube video.",
    description: "A platform that ingests YouTube links and uploaded files, runs Whisper ASR transcription with timestamp segmentation, and returns exact source video clips alongside AI-generated answers.",
    tech: ["Python", "Whisper ASR", "FAISS", "OpenAI API", "FastAPI", "Docker"],
    metrics: [],
    featured: false,
  },
  {
    id: "collegiumbot",
    badge: "DEPLOYED · STUDENT-FACING",
    badgeColor: "cyan",
    title: "CollegiumBot — AI Campus Companion",
    problem: "Students flooded admin staff with repetitive questions about schedules, deadlines, and campus info.",
    description: "Full backend for a student-facing chatbot using semantic RAG and real-time retrieval. Covered auth, knowledge module ingestion, and retrieval integrations end-to-end.",
    tech: ["Python", "RAG", "Semantic Search", "FastAPI", "PostgreSQL"],
    metrics: [
      { value: "85%+", label: "response relevance on campus FAQs" },
      { value: "100%", label: "student body coverage at launch" },
    ],
    featured: false,
  },
];
```

### 9.2 Metrics Data (`src/data/metrics.ts`)

```typescript
export const metrics = [
  { value: 200, prefix: "<", suffix: "ms", label: "Semantic search latency", context: "Hybrid RAG pipeline" },
  { value: 40,  prefix: "~", suffix: "%",  label: "Fewer LLM API calls",     context: "Redis semantic caching" },
  { value: 30,  prefix: "~", suffix: "%",  label: "Accuracy above baseline",  context: "Multi-stage reranking" },
  { value: 25,  prefix: "~", suffix: "%",  label: "Lower inference latency",  context: "LoRA/QLoRA fine-tuning" },
  { value: 70,  prefix: "~", suffix: "%",  label: "Less manual deployment",   context: "Jenkins CI/CD pipelines" },
];
```

### 9.3 Skills Data (`src/data/skills.ts`)

```typescript
export const skillGroups = [
  {
    category: "AI / ML",
    color: "violet",
    skills: ["RAG Pipelines", "Semantic Search", "Vector Databases", "LLM Fine-tuning (LoRA/QLoRA)", "Whisper ASR", "OpenAI API", "Gemini API", "ElevenLabs TTS", "Unsloth", "Conversational AI", "AI Agents", "NL-to-SQL"],
  },
  {
    category: "Backend",
    color: "cyan",
    skills: ["Python", "Go (Gin)", "FastAPI", "Flask", "REST APIs", "JWT Auth", "Cron Jobs", "Streaming APIs"],
  },
  {
    category: "Databases",
    color: "red",
    skills: ["PostgreSQL", "pgvector", "FAISS", "Redis", "MongoDB", "Supabase"],
  },
  {
    category: "DevOps",
    color: "green",
    skills: ["Docker", "Jenkins CI/CD", "GitHub Actions", "Render", "Vercel", "API Deployment"],
  },
];

export const currentlyLearning = ["LangGraph", "LlamaIndex", "Multimodal RAG"];
```

---

## 10. Personal Info (for agent to use)

```
Name:         Yaswanth Babu Ankipalli
Location:     Bangalore, India
Email:        yaswanthb.ankipalli@gmail.com
LinkedIn:     https://linkedin.com/in/yaswanth-babu-ankipalli-73041b171
GitHub:       [add your GitHub username]
Role:         Python Developer @ CoRover.ai (Oct 2024 – Present)
Education:    B.Tech CSIT, Siddharth Institute of Engineering & Technology, 2021–2024, CGPA 7.55
Resume file:  Yaswanth Babu A.pdf
```

---

## 11. Things Agent Must NOT Do

1. Do NOT use a white or cream background — this is a dark-mode-first portfolio
2. Do NOT use Bootstrap or any CSS framework other than Tailwind
3. Do NOT use progress bars for skills (they look fake and meaningless)
4. Do NOT write "Passionate about AI" or similar generic phrases anywhere
5. Do NOT add unnecessary animations — only the ones specified above
6. Do NOT use a template layout — the hero must have the exact structure specified
7. Do NOT use placeholder project screenshots — use diagrams or the demo video embed instead
8. Do NOT make all cards the same size — the featured project (Resume Screening) must be full-width

---

## 12. Deployment Instructions (for agent)

```bash
# 1. Create Next.js project
npx create-next-app@latest portfolio --typescript --tailwind --app --src-dir

# 2. Install dependencies
npm install framer-motion lucide-react

# 3. Configure tailwind.config.ts
# Add custom colors, fonts from Section 2

# 4. Add Google Fonts to layout.tsx
# Inter + JetBrains Mono via next/font/google

# 5. Deploy to Vercel
npm install -g vercel
vercel

# 6. Add custom domain in Vercel dashboard
# Point nameservers from Namecheap → Vercel
```

---

## 13. Quality Checklist (agent should verify before done)

- [ ] Lighthouse score > 90 on Performance, Accessibility, SEO
- [ ] All 4 projects render correctly on mobile (375px width)
- [ ] Metric counter animations fire on scroll
- [ ] Resume PDF downloads correctly
- [ ] Demo video link opens for Resume Screening project
- [ ] Stashlog GitHub link opens correctly
- [ ] Navbar blur effect works on scroll
- [ ] All tag colors match the design system (no default blue/gray tags)
- [ ] `@media (prefers-reduced-motion)` disables animations
- [ ] No console errors in production build
- [ ] OG image renders correctly when shared on LinkedIn/Twitter

---

*Spec version 1.0 — built for Yaswanth Babu Ankipalli — June 2025*
