import React from 'react';
import { useScrollReveal } from './useScrollReveal';

const skillCategories = [
  {
    name: 'Frontend',
    color: 'blue',
    skills: ['React', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS']
  },
  {
    name: 'Backend & Database',
    color: 'green',
    skills: ['Node.js', 'Express.js', 'PostgreSQL', 'RESTful APIs', 'JSON API']
  },
  {
    name: 'Tools & Workflow',
    color: 'purple',
    skills: ['Git & GitHub', 'VS Code', 'npm / npx', 'Vercel', 'Postman']
  }
];

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Chinmaya Institute of Technology',
    status: 'Pursuing · 3rd Sem',
    year: 'Present',
    badge: 'current'
  },
  {
    degree: 'B.Sc. Computer Science',
    institution: 'Kannur University',
    status: 'Graduated',
    year: '2025',
    badge: 'done'
  }
];

function About() {
  const titleRef = useScrollReveal();
  const eduRef = useScrollReveal();
  const skillsRef = useScrollReveal();

  return (
    <section
      id="about"
      className="relative py-24 bg-[#050505] px-6 overflow-hidden"
    >
      {/* Subtle top border line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">

        {/* ── SECTION HEADER ── */}
        <div ref={titleRef} className="reveal space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-widest">
            Background &amp; Expertise
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            About <span className="text-zinc-600">Me</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            I'm a Web Developer and MCA student dedicated to creating clean code, intuitive interfaces, and robust web solutions.
          </p>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">

          {/* LEFT — Education */}
          <div ref={eduRef} className="reveal reveal-delay-1 lg:col-span-5 space-y-5">
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
              <span className="w-4 h-px bg-blue-500" />
              Education
            </h3>

            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="group relative p-6 rounded-3xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300 overflow-hidden hover-shadow-on-desktop"
                >
                  {/* Hover glow */}
                  <div className="absolute -inset-12 bg-blue-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative flex justify-between items-start mb-3">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                      edu.badge === 'current'
                        ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                        : 'bg-white/5 text-zinc-400 border border-white/10'
                    }`}>
                      {edu.status}
                    </span>
                    <span className="text-xs text-zinc-600 font-mono">{edu.year}</span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {edu.degree}
                  </h4>
                  <p className="text-zinc-500 text-sm mt-1">{edu.institution}</p>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { label: 'Projects Built', value: '10+' },
                { label: 'MCA Semester', value: '3rd' }
              ].map(({ label, value }) => (
                <div key={label} className="p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center">
                  <div className="text-2xl font-black text-white">{value}</div>
                  <div className="text-xs text-zinc-500 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Skills */}
          <div ref={skillsRef} className="reveal reveal-delay-2 lg:col-span-7 space-y-5">
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
              <span className="w-4 h-px bg-blue-500" />
              Technical Stack &amp; Skills
            </h3>

            <div className="space-y-4">
              {skillCategories.map((cat) => (
                <div
                  key={cat.name}
                  className="p-6 rounded-3xl border border-white/[0.06] bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-4">
                    {cat.name}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-300 text-xs font-medium hover:border-blue-500/30 hover:text-white hover:bg-blue-500/5 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-[#050505] pointer-events-none" />
    </section>
  );
}

export default About;
