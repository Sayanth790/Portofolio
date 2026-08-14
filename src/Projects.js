import React, { useState } from 'react';
import { useScrollReveal } from './useScrollReveal';

const allProjects = [
  {
    id: 1,
    title: 'AI-Powered Expense Tracker',
    subtitle: 'MCA Mini Project',
    category: 'MINI PROJECTS',
    description: 'Smart expense tracking application featuring automated AI categorization and real-time financial insights dashboard.',
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Sayanth790/ai-expense-tracker',
    year: '2026'
  },
  {
    id: 2,
    title: 'Recipe Finder',
    subtitle: 'Spoonacular API Integration',
    category: 'WEB',
    description: 'Interactive recipe search engine allowing users to discover and filter recipes by available ingredients in real time.',
    techStack: ['React', 'API Integration', 'Tailwind CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Sayanth790/recipe-finder',
    year: '2025'
  },
  {
    id: 3,
    title: 'Developer Portfolio',
    subtitle: 'Personal Web Portfolio',
    category: 'WEB',
    description: 'Modern, high-performance developer portfolio built with React and Tailwind CSS, featuring smooth animations.',
    techStack: ['React', 'Tailwind CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Sayanth790',
    year: '2026'
  }
];

const filters = ['ALL', 'WEB', 'MINI PROJECTS'];

function Projects() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const titleRef = useScrollReveal();
  const gridRef = useScrollReveal();

  const filtered = activeFilter === 'ALL'
    ? allProjects
    : allProjects.filter(p => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative py-24 bg-[#050505] px-6 overflow-hidden"
    >
      {/* Top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">

        {/* ── HEADER ── */}
        <div ref={titleRef} className="reveal text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-widest">
            Portfolio Showcase
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Featured <span className="text-zinc-600">Projects</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            A collection of my work — from web applications to API integrations.
          </p>
        </div>

        {/* ── FILTER PILLS ── */}
        <div className="flex justify-center items-center gap-2">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                activeFilter === f
                  ? 'bg-white text-black shadow-lg shadow-white/10'
                  : 'bg-white/[0.03] border border-white/[0.08] text-zinc-500 hover:text-zinc-300 hover:border-white/20 hover:bg-white/[0.05]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* ── PROJECT CARDS ── */}
        <div ref={gridRef} className="reveal reveal-delay-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <a
              key={project.id}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between rounded-3xl border border-white/[0.06] bg-white/[0.02] hover:border-blue-500/30 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(59,130,246,0.08)] transition-all duration-500 overflow-hidden p-7 space-y-6 cursor-pointer"
            >
              {/* Hover glow blob */}
              <div className="absolute -inset-20 bg-blue-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Card top */}
              <div className="relative space-y-4">
                <div className="flex justify-between items-start gap-2">
                  <span className="text-[10px] font-mono text-blue-400 font-semibold uppercase tracking-widest">
                    {project.subtitle}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-zinc-500 tracking-wider uppercase whitespace-nowrap">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  {project.title}
                </h3>

                <p className="text-zinc-500 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Card bottom */}
              <div className="relative space-y-5 pt-5 border-t border-white/[0.05]">
                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.07] text-zinc-400 text-[11px] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub link row */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-600 font-mono">{project.category}</span>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-500 group-hover:text-blue-400 transition-colors duration-300">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>View on GitHub</span>
                    <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-[#050505] pointer-events-none" />
    </section>
  );
}

export default Projects;
