const categories = [
  {
    title: 'Getting Started',
    links: [
      { label: 'Anthropic API Docs', href: 'https://docs.anthropic.com' },
      { label: 'OpenAI API Docs', href: 'https://platform.openai.com/docs' },
      { label: 'Fast.ai Practical Deep Learning', href: 'https://course.fast.ai' },
      { label: 'Karpathy — Neural Nets: Zero to Hero', href: 'https://karpathy.ai/zero-to-hero.html' },
    ],
  },
  {
    title: 'Frameworks',
    links: [
      { label: 'LangChain', href: 'https://python.langchain.com' },
      { label: 'LangGraph', href: 'https://langchain-ai.github.io/langgraph' },
      { label: 'CrewAI', href: 'https://docs.crewai.com' },
      { label: 'OpenAI Agents SDK', href: 'https://openai.github.io/openai-agents-python' },
    ],
  },
  {
    title: 'Deployment',
    links: [
      { label: 'Docker', href: 'https://docs.docker.com/get-started' },
      { label: 'Railway', href: 'https://docs.railway.app' },
      { label: 'Render', href: 'https://render.com/docs' },
      { label: 'Modal', href: 'https://modal.com/docs' },
    ],
  },
  {
    title: 'Communities',
    links: [
      { label: 'Latent Space Discord', href: 'https://discord.gg/latentspace' },
      { label: 'Hugging Face Forums', href: 'https://discuss.huggingface.co' },
      { label: 'r/MachineLearning', href: 'https://reddit.com/r/MachineLearning' },
      { label: 'AI Engineer Foundation', href: 'https://ai.engineer' },
    ],
  },
]

export default function Resources() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-neutral-900 tracking-tight mb-3">Resources</h1>
        <p className="text-neutral-500">Curated links we actually use.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-10">
        {categories.map((cat) => (
          <div key={cat.title}>
            <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-4 pb-2 border-b border-neutral-100">
              {cat.title}
            </h2>
            <ul className="space-y-3">
              {cat.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-neutral-700 hover:text-[#CC0000] transition-colors"
                  >
                    {link.label} →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
