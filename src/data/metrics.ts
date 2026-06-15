export interface MetricItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  context: string;
}

export const metrics: MetricItem[] = [
  { value: 200, prefix: "<", suffix: "ms", label: "Semantic search latency", context: "Hybrid RAG pipeline" },
  { value: 40,  prefix: "~", suffix: "%",  label: "Fewer LLM API calls",     context: "Redis semantic caching" },
  { value: 30,  prefix: "~", suffix: "%",  label: "Accuracy above baseline",  context: "Multi-stage reranking" },
  { value: 25,  prefix: "~", suffix: "%",  label: "Lower inference latency",  context: "LoRA/QLoRA fine-tuning" },
  { value: 70,  prefix: "~", suffix: "%",  label: "Less manual deployment",   context: "Jenkins CI/CD pipelines" },
];
