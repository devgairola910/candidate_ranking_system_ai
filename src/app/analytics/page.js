const insights = [
  { title: 'Most requested skill', value: 'React', detail: 'Appears in 74% of shortlisted profiles' },
  { title: 'Hiring velocity', value: '3.1x faster', detail: 'Compared to manual screening workflows' },
  { title: 'Diversity signal', value: 'Balanced', detail: 'No strong skew across candidate groups' },
];

export default function AnalyticsPage() {
  return (
    <section className="space-y-6">
      <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Analytics</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">See how your shortlist quality evolves</h1>
        <p className="mt-3 max-w-2xl text-slate-400">The analytics layer makes your hiring process understandable, measurable, and easy to present to stakeholders.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {insights.map((item) => (
          <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5 shadow-[0_10px_35px_rgba(0,0,0,0.2)] backdrop-blur-lg">
            <p className="text-sm text-slate-400">{item.title}</p>
            <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
            <p className="mt-2 text-sm text-cyan-300">{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl">
        <h2 className="text-xl font-semibold text-white">Why this matters</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-cyan-300">Transparent scoring</p>
            <p className="mt-2 text-sm leading-7 text-slate-400">Recruiters can understand the main signals behind every recommendation instead of relying on a black box.</p>
          </div>
          <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-cyan-300">Faster decision-making</p>
            <p className="mt-2 text-sm leading-7 text-slate-400">The interface surfaces top candidates immediately so teams can spend less time screening and more time interviewing.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
