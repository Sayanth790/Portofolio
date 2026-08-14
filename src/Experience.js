import React from 'react';
import { useScrollReveal } from './useScrollReveal';

const experiences = [
  {
    id: 1,
    role: 'Web Developer (Freelance)',
    company: 'Self-Employed',
    period: '2024 — Present',
    type: 'Freelance',
    description: 'Building responsive web applications and landing pages for clients. Specializing in React-based frontends with clean UI/UX design and performance optimization.',
    highlights: ['React', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    current: true
  },
  {
    id: 2,
    role: 'MCA Student Developer',
    company: 'Chinmaya Institute of Technology',
    period: '2024 — Present',
    type: 'Academic',
    description: 'Developing full-stack applications as part of MCA coursework. Built an AI-Powered Expense Tracker as mini project, integrating automated categorization and financial dashboards.',
    highlights: ['Full-Stack', 'AI Integration', 'PostgreSQL', 'Express'],
    current: true
  },
  {
    id: 3,
    role: 'B.Sc. Computer Science',
    company: 'Kannur University',
    period: '2022 — 2025',
    type: 'Education',
    description: 'Graduated with a B.Sc. in Computer Science, building a strong foundation in algorithms, data structures, and software engineering principles.',
    highlights: ['Computer Science', 'Algorithms', 'Data Structures'],
    current: false
  }
];

function Experience() {
  const titleRef = useScrollReveal();

  return (
    <section
      id="experience"
      className="relative py-24 bg-[#050505] px-6 overflow-hidden"
    >
      {/* Top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-14">

        {/* ── SECTION HEADER ── */}
        <div ref={titleRef} className="reveal text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-widest">
            Journey &amp; Experience
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            My <span className="text-zinc-600">Timeline</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            My professional journey, academic milestones, and the projects that shaped my skills.
          </p>
        </div>

        {/* ── TIMELINE ── */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/30 via-white/5 to-transparent" />

          <div className="space-y-6 pl-12 sm:pl-20">
            {experiences.map((exp, i) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const cardRef = useScrollReveal();
              return (
                <div
                  key={exp.id}
                  ref={cardRef}
                  className={`reveal reveal-delay-${Math.min(i + 1, 4)} group relative`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute -left-12 sm:-left-20 top-6 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                    exp.current
                      ? 'bg-blue-600/20 border-blue-500/50 group-hover:bg-blue-600/40'
                      : 'bg-white/[0.03] border-white/10 group-hover:border-white/20'
                  }`}>
                    {exp.current ? (
                      <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-zinc-600" />
                    )}
                  </div>

                  {/* Card */}
                  <div className="relative p-6 rounded-3xl border border-white/[0.06] bg-white/[0.02] hover:border-blue-500/20 hover:bg-white/[0.04] transition-all duration-400 overflow-hidden">
                    {/* Hover glow */}
                    <div className="absolute -inset-20 bg-blue-600/[0.04] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div className="relative">
                      {/* Header row */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {exp.role}
                          </h3>
                          <p className="text-sm text-zinc-500 mt-0.5">{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                            exp.current
                              ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                              : 'bg-white/[0.04] text-zinc-500 border border-white/[0.08]'
                          }`}>
                            {exp.type}
                          </span>
                          <span className="text-xs text-zinc-600 font-mono whitespace-nowrap">{exp.period}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-zinc-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.highlights.map(tag => (
                          <span key={tag} className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.07] text-zinc-400 text-[11px] font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-[#050505] pointer-events-none" />
    </section>
  );
}

export default Experience;
