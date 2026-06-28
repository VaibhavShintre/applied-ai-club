export default function Join() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-neutral-900 tracking-tight mb-3">Join</h1>
        <p className="text-neutral-500">Coding experience recommended.</p>
      </div>

      <div className="max-w-2xl">
        <p className="text-neutral-600 leading-relaxed mb-5">
          The Applied AI Club equips CS and engineering students with industry-ready AI and agentic AI skills
          through weekly meetings, hands-on coding projects, expert speaker talks, and agent deployment workshops.
        </p>
        <p className="text-neutral-600 leading-relaxed mb-10">
          This club is for students who already know how to code. You should be comfortable in Python. Whether
          you're a CS major, an engineer, or a self-taught developer — if you can write code and want to build
          with AI, this is your club.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <a
            href="https://discord.gg/placeholder"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-[#CC0000] hover:bg-[#aa0000] text-white text-sm font-medium rounded transition-colors"
          >
            Join Discord
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border border-neutral-300 hover:border-neutral-500 text-neutral-700 hover:text-neutral-900 text-sm font-medium rounded transition-colors"
          >
            GetInvolved at NC State
          </a>
        </div>

        <div className="border-t border-neutral-100 pt-8">
          <p className="text-sm text-neutral-400">
            Questions?{' '}
            <a href="mailto:appliedaiclub@ncsu.edu" className="text-[#CC0000] hover:underline">
              appliedaiclub@ncsu.edu
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
