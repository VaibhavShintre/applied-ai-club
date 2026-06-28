import { Link } from 'react-router-dom'

const pillars = [
  {
    title: 'Industry AI Skills',
    description:
      'Dive deep into the tools and workflows used by professional AI engineers. Topics include agent-driven development with Claude, MCP design, RAG, testing connectors for end-to-end development, and modern token management.',
  },
  {
    title: 'Agentic AI Development',
    description:
      'Design and build autonomous AI agents that plan, use tools, and execute multi-step tasks. We cover frameworks like LangChain and the OpenAI Agents SDK.',
  },
  {
    title: 'Expert Speaker Series',
    description:
      'Hear from industry engineers, ML practitioners, and faculty at NC State working in applied AI. Speakers share real-world project experience, career paths, and what the field actually looks like on the job.',
  },
  {
    title: 'Agent Deployment Workshops',
    description:
      'Go from prototype to production. Learn how to containerize, host, and monitor AI agents using modern cloud and API infrastructure.',
  },
]

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-16">

      {/* Hero */}
      <div className="mb-16">
        <p className="text-[#CC0000] text-xs font-semibold tracking-widest uppercase mb-4">Student Club at NC State</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 leading-tight tracking-tight mb-5">
          Applied AI Club
        </h1>
        <p className="text-neutral-600 text-lg max-w-2xl leading-relaxed mb-8">
          A student organization for developers who want to build and code with real AI systems.
          We focus on the skills that actually matter in industry: deploying models, building agents,
          and shipping AI-powered applications.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://discord.gg/placeholder"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-[#CC0000] hover:bg-[#aa0000] text-white text-sm font-medium rounded transition-colors"
          >
            Join Discord
          </a>
          <Link
            to="/join"
            className="px-4 py-2 border border-neutral-300 hover:border-neutral-500 text-neutral-700 hover:text-neutral-900 text-sm font-medium rounded transition-colors"
          >
            Get involved
          </Link>
        </div>
      </div>

      {/* What We Do */}
      <div className="mb-16">
        <h2 className="text-lg font-semibold text-neutral-900 mb-6">What We Do</h2>
        <p className="text-neutral-600 leading-relaxed mb-8">
          We meet once a week with a structured mix of technical workshops, speaker sessions, and project work.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {pillars.map((p) => (
            <div key={p.title} className="border border-neutral-200 rounded-lg p-5 hover:border-neutral-400 transition-colors">
              <h3 className="text-sm font-semibold text-neutral-900 mb-2">{p.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Who Should Join */}
      <div className="mb-16 border-t border-neutral-100 pt-12">
        <h2 className="text-lg font-semibold text-neutral-900 mb-4">Who Should Join</h2>
        <p className="text-neutral-600 leading-relaxed max-w-2xl">
          This club is built for students who already know how to code and want to apply that foundation to AI.
          You should be comfortable in Python and familiar with basic programming concepts. Whether you're a CS major,
          an engineer, or a self-taught developer from any discipline — if you can write code and want to build with
          AI, this is your club.
        </p>
      </div>

      {/* Why Join */}
      <div className="mb-16 border-t border-neutral-100 pt-12">
        <h2 className="text-lg font-semibold text-neutral-900 mb-4">Why Join</h2>
        <p className="text-neutral-600 leading-relaxed max-w-2xl">
          AI engineering is one of the fastest-growing and highest-demand skill sets in tech. Most courses teach you
          the concepts. We teach you how to build and ship. Members leave with hands-on project experience, a network
          of peers and industry contacts, and the practical skills to stand out in internship and full-time recruiting.
        </p>
      </div>

      {/* Footer strip */}
      <div className="border-t border-neutral-100 pt-8 flex flex-wrap gap-6 text-sm text-neutral-400">
        <span>at NC State</span>
        <a href="mailto:appliedaiclub@ncsu.edu" className="hover:text-[#CC0000] transition-colors">
          appliedaiclub@ncsu.edu
        </a>
        <a
          href="https://discord.gg/placeholder"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#CC0000] transition-colors"
        >
          Discord
        </a>
      </div>
    </div>
  )
}
