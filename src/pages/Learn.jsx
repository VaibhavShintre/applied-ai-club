const guides = [
  {
    title: 'LLM APIs 101',
    description: 'Get up and running with the Anthropic and OpenAI APIs. Tokens, context windows, and your first API call.',
  },
  {
    title: 'Prompt Engineering',
    description: 'Techniques that work: few-shot prompting, chain-of-thought, structured output, and system prompt design.',
  },
  {
    title: 'RAG Pipelines',
    description: 'Build retrieval-augmented generation from scratch. Chunking, embedding, similarity search, and reranking.',
  },
  {
    title: 'Vector Databases',
    description: 'Store and query embeddings at scale. Compare Pinecone, Weaviate, Chroma, and pgvector.',
  },
  {
    title: 'Agentic AI',
    description: 'Design multi-step agents that reason, use tools, and self-correct. Tool calling, planning loops, and memory.',
  },
  {
    title: 'Agent Deployment',
    description: 'Ship your agent to production: API wrappers, background queues, observability, and cost control.',
  },
]

export default function Learn() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-neutral-900 tracking-tight mb-3">Guides</h1>
        <p className="text-neutral-500">Practical walkthroughs for building with AI.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {guides.map((guide) => (
          <div
            key={guide.title}
            className="border border-neutral-200 rounded-lg p-5 flex flex-col gap-3 hover:border-neutral-400 transition-colors"
          >
            <h2 className="text-sm font-semibold text-neutral-900">{guide.title}</h2>
            <p className="text-sm text-neutral-500 leading-relaxed flex-1">{guide.description}</p>
            <a href="#" className="text-[#CC0000] text-sm font-medium hover:underline self-start">
              View Guide →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
