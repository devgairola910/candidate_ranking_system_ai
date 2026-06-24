'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home', icon: '🏠' },
  { href: '/dashboard', label: 'Dashboard', icon: '📊' },
  { href: '/upload', label: 'Upload', icon: '📤' },
  { href: '/candidates', label: 'Candidates', icon: '👥' },
  { href: '/analytics', label: 'Analytics', icon: '📈' },
];

export default function AppShell({ children }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_25%),linear-gradient(135deg,_#020617_0%,_#0f172a_35%,_#020617_100%)] text-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <nav className="mb-6 flex items-center justify-between rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/15 text-lg">🤖</div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">HirePilot AI</p>
              <p className="text-xs text-slate-400">Candidate Ranking Platform</p>
            </div>
          </Link>

          <div className="hidden items-center gap-5 text-sm text-slate-300 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3 py-2 transition ${isActive ? 'bg-cyan-400/15 text-cyan-200' : 'hover:bg-white/10 hover:text-white'}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="grid gap-6 lg:grid-cols-[250px_minmax(0,1fr)]">
          <aside className="hidden rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-5 shadow-[0_16px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl lg:block">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Workspace</p>
              <h2 className="mt-2 text-xl font-semibold text-white">Recruiting Command Center</h2>
            </div>
            <div className="space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-2xl px-3 py-3 text-sm transition ${isActive ? 'bg-cyan-400/15 text-cyan-200' : 'text-slate-300 hover:bg-white/10 hover:text-white'}`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
              <p className="text-sm font-semibold text-cyan-200">This week</p>
              <p className="mt-2 text-2xl font-semibold text-white">24 applicants reviewed</p>
              <p className="mt-2 text-sm text-slate-400">AI ranking confidence is at 92%</p>
            </div>
          </aside>

          <div className="min-w-0">{children}</div>
        </div>
      </div>

      <footer className="mx-auto mt-10 w-full max-w-7xl px-4 pb-8 text-sm text-slate-500 sm:px-6 lg:px-8">
        <div className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-3 text-center backdrop-blur-xl">
          Designed for hackathons, demo days, and recruiter-first product storytelling.
        </div>
      </footer>
    </div>
  );
}
