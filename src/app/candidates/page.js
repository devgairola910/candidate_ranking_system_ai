'use client';

import { useMemo, useState } from 'react';

const candidates = [
  { name: 'Ava Patel', title: 'Senior Frontend Engineer', location: 'Mumbai', score: 96, fit: 'Top Match', skills: ['React', 'Next.js', 'UI/UX'] },
  { name: 'Marcus Lee', title: 'Product Designer', location: 'Singapore', score: 91, fit: 'Strong Fit', skills: ['Figma', 'Design Systems', 'Research'] },
  { name: 'Nora Kim', title: 'Data Analyst', location: 'Seoul', score: 88, fit: 'Recommended', skills: ['SQL', 'Tableau', 'Python'] },
  { name: 'Daniel Cruz', title: 'Full Stack Developer', location: 'Mexico City', score: 84, fit: 'Promising', skills: ['Node.js', 'React', 'MongoDB'] },
];

export default function CandidatesPage() {
  const [query, setQuery] = useState('');
  const [selectedFit, setSelectedFit] = useState('All');

  const filteredCandidates = useMemo(() => {
    return candidates.filter((candidate) => {
      const matchesQuery = `${candidate.name} ${candidate.title} ${candidate.skills.join(' ')}`.toLowerCase().includes(query.toLowerCase());
      const matchesFit = selectedFit === 'All' || candidate.fit === selectedFit;
      return matchesQuery && matchesFit;
    });
  }, [query, selectedFit]);

  return (
    <section className="space-y-6">
      <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Candidates</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Explore ranked talent profiles</h1>
        <p className="mt-3 max-w-2xl text-slate-400">Filter candidates by role fit and search by skill, title, or name.</p>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search candidates or skills"
            className="w-full rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-300 outline-none md:max-w-md"
          />
          <select
            value={selectedFit}
            onChange={(event) => setSelectedFit(event.target.value)}
            className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-300 outline-none"
          >
            <option>All</option>
            <option>Top Match</option>
            <option>Strong Fit</option>
            <option>Recommended</option>
            <option>Promising</option>
          </select>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {filteredCandidates.map((candidate) => (
            <div key={candidate.name} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-white">{candidate.name}</p>
                  <p className="text-sm text-slate-400">{candidate.title}</p>
                </div>
                <div className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">{candidate.fit}</div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {candidate.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between text-sm text-slate-400">
                <span>{candidate.location}</span>
                <span className="text-lg font-semibold text-white">{candidate.score}% fit</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
