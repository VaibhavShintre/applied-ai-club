const meetings = [
  {
    date: 'November 13, 2024',
    topic: 'Building a RAG Pipeline from Scratch',
    description:
      'Full RAG system end-to-end: document ingestion with chunking strategies, OpenAI embeddings, Chroma as the vector store, and a retrieval-augmented chat interface. Covered cosine similarity, reranking, and when RAG beats fine-tuning.',
    slides: '#',
    notebook: '#',
  },
  {
    date: 'November 6, 2024',
    topic: 'Agentic Workflows with LangGraph',
    description:
      'Building a multi-step research agent using LangGraph: stateful graphs, tool nodes, conditional edges, and human-in-the-loop checkpoints. Compared against vanilla function-calling loops.',
    slides: '#',
    notebook: '#',
  },
  {
    date: 'October 30, 2024',
    topic: 'Kickoff: LLM APIs & Prompt Engineering',
    description:
      'Club kickoff. Calling LLM APIs, token counting, context windows, and prompt engineering techniques that work: few-shot, chain-of-thought, and structured output with JSON mode.',
    slides: '#',
    notebook: null,
  },
]

export default function Meetings() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-neutral-900 tracking-tight mb-3">Meetings</h1>
        <p className="text-neutral-500">What we've covered, week by week.</p>
      </div>

      <div className="flex flex-col divide-y divide-neutral-100">
        {meetings.map((m) => (
          <div key={m.date} className="py-7 first:pt-0">
            <p className="text-xs font-semibold text-[#CC0000] uppercase tracking-wider mb-1">{m.date}</p>
            <h2 className="text-base font-semibold text-neutral-900 mb-2">{m.topic}</h2>
            <p className="text-sm text-neutral-500 leading-relaxed mb-4 max-w-2xl">{m.description}</p>
            <div className="flex gap-3">
              {m.slides && (
                <a href={m.slides} className="text-sm text-neutral-400 hover:text-neutral-700 border border-neutral-200 hover:border-neutral-400 px-3 py-1 rounded transition-colors">
                  Slides
                </a>
              )}
              {m.notebook && (
                <a href={m.notebook} className="text-sm text-neutral-400 hover:text-neutral-700 border border-neutral-200 hover:border-neutral-400 px-3 py-1 rounded transition-colors">
                  Notebook
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
