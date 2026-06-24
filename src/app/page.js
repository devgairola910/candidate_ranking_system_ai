const features = [
  {
    icon: "⚡",
    title: "Instant talent signals",
    description: "Score candidates in seconds using AI-driven resume and skill analysis.",
  },
  {
    icon: "🧠",
    title: "Explainable ranking",
    description: "Show recruiters exactly why a candidate is recommended and what matters most.",
  },
  {
    icon: "🛡️",
    title: "Fairer shortlisting",
    description: "Reduce manual bias with transparent evaluation signals and structured insights.",
  },
];

const workflow = [
  "Upload resumes and job requirements",
  "AI evaluates experience, skills, and fit",
  "Get ranked candidates with short explanations",
];

const candidates = [
  { name: "Ava Patel", role: "Frontend Engineer", score: "96%", tag: "Top Match" },
  { name: "Marcus Lee", role: "Product Designer", score: "91%", tag: "Strong Fit" },
  { name: "Nora Kim", role: "Data Analyst", score: "88%", tag: "Recommended" },
];

export default function Home() {
  return (
    <main className="text-slate-100">
      <section className="mx-auto flex max-w-7xl flex-col px-0 py-2">
        <div className="grid items-center gap-8 rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
              ✨ AI-powered hiring made simple
            </div>
            <div className="space-y-4">
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Rank the best-fit candidates faster with intelligent hiring insights.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-300">
                Our platform turns resumes, skills, and job requirements into a transparent shortlist so recruiters can make confident decisions in minutes.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#demo"
                className="rounded-full bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Try Live Demo
              </a>
              <a
                href="#features"
                className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/20"
              >
                Explore Features
              </a>
            </div>
            <div className="flex flex-wrap gap-4 pt-2 text-sm text-slate-400">
              <span>⚡ 3x faster screening</span>
              <span>📊 Explainable results</span>
              <span>🎯 Better shortlist quality</span>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-cyan-400/20 bg-slate-900/80 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Recruiting dashboard</p>
                  <h2 className="text-xl font-semibold text-white">Shortlist Overview</h2>
                </div>
                <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm text-emerald-300">
                  Live scoring
                </div>
              </div>

              <div className="space-y-3">
                {candidates.map((candidate) => (
                  <div key={candidate.name} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold text-white">{candidate.name}</p>
                        <p className="text-sm text-slate-400">{candidate.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold text-cyan-300">{candidate.score}</p>
                        <p className="text-xs text-slate-400">{candidate.tag}</p>
                      </div>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-slate-800">
                      <div className="h-2 w-[85%] rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Why it stands out</p>
          <h3 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Everything a recruiter needs in one elegant workflow.</h3>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-white/10 bg-white/8 p-6 shadow-[0_10px_35px_rgba(0,0,0,0.2)] backdrop-blur-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-2xl">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-white">{feature.title}</h4>
              <p className="mt-2 text-sm leading-7 text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="workflow" className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-[0_16px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">How it works</p>
            <h3 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">A smooth pipeline from resume intake to ranked shortlist.</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {workflow.map((step, index) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/15 text-sm font-semibold text-cyan-300">
                  0{index + 1}
                </div>
                <p className="text-base leading-7 text-slate-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 to-violet-500/10 p-8 text-center shadow-[0_16px_60px_rgba(0,0,0,0.2)]">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Ready to impress judges?</p>
          <h3 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Turn your idea into a product that feels real and polished.</h3>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Combine smart AI ranking with a beautiful UI, and your hackathon project will feel like a startup solution from day one.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#" className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-100">
              Launch Demo
            </a>
            <a href="#" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              View Prototype
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
