export interface ProjectMetric {
  from?: string;
  to?: string;
  value?: string;
  label: string;
}

export interface Project {
  id: string;
  badge: string;
  badgeColor: 'green' | 'violet' | 'cyan' | 'red';
  title: string;
  problem: string;
  description: string;
  tech: string[];
  metrics: ProjectMetric[];
  demoUrl?: string;
  demoType?: 'video' | 'link';
  featured: boolean;
}

export const projects: Project[] = [
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
      { value: "~30%", label: "accuracy improvement over single-stage baseline" },
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
