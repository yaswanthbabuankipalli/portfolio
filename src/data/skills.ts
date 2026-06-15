export interface SkillGroup {
  category: string;
  color: 'violet' | 'cyan' | 'red' | 'green';
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
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

export const currentlyLearning: string[] = ["LangGraph", "LlamaIndex", "Multimodal RAG"];
