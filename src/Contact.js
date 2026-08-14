import React from 'react';
import { useScrollReveal } from './useScrollReveal';

const contactLinks = [
  {
    id: 'github',
    platform: 'GitHub',
    handle: 'github.com/Sayanth790',
    url: 'https://github.com/Sayanth790',
    description: 'Check out my open source work',
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    )
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    handle: 'linkedin.com/in/sayanth',
    url: 'https://linkedin.com/in/sayanth',
    description: 'Connect with me professionally',
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    )
  },
  {
    id: 'email',
    platform: 'Email',
    handle: 'sayus9015@gmail.com',
    url: 'mailto:sayus9015@gmail.com',
    description: 'Send me a direct message',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

function Contact() {
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section
      id="contact"
      className="relative py-24 bg-[#050505] px-6 overflow-hidden"
    >
      {/* Top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-40" />

      {/* Large ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">

        {/* ── LEFT: CTA text ── */}
        <div ref={leftRef} className="reveal lg:col-span-5 space-y-8">

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-widest">
              Get In Touch
            </div>

            <h2
              className="font-black text-white tracking-tight leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Let's build{' '}
              <span className="text-blue-500">better</span>{' '}
              products.
            </h2>

            <p className="text-zinc-400 text-base leading-relaxed">
              Open for interesting opportunities or just a meaningful chat.
              I'm always excited to connect with people building cool things.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:sayus9015@gmail.com"
              className="px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-zinc-100 active:scale-95 transition-all duration-300 shadow-lg shadow-white/10"
            >
              Start a Conversation
            </a>
            <a
              href="mailto:sayus9015@gmail.com"
              className="px-6 py-3 rounded-full bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 active:scale-95 transition-all duration-300 shadow-lg shadow-blue-500/20 flex items-center gap-2"
            >
              Email Me
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Availability note */}
          <div className="flex items-center gap-2.5 text-sm text-zinc-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            Currently available for freelance &amp; full-time roles
          </div>
        </div>

        {/* ── RIGHT: Contact card stack ── */}
        <div ref={rightRef} className="reveal reveal-delay-2 lg:col-span-7 space-y-4">
          {contactLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-5 p-5 rounded-3xl border border-white/[0.06] bg-white/[0.02] hover:border-blue-500/30 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(59,130,246,0.07)] transition-all duration-400 overflow-hidden"
            >
              {/* Hover blob */}
              <div className="absolute -inset-12 bg-blue-600/[0.06] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon box */}
              <div className="relative flex-shrink-0 w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-500 group-hover:text-blue-400 group-hover:border-blue-500/30 group-hover:bg-blue-500/5 transition-all duration-300">
                {link.icon}
              </div>

              {/* Info */}
              <div className="relative flex-1 min-w-0">
                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-0.5">
                  {link.platform}
                </div>
                <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors duration-300 truncate">
                  {link.handle}
                </div>
                <div className="text-xs text-zinc-600 mt-0.5">{link.description}</div>
              </div>

              {/* Arrow */}
              <svg
                className="relative flex-shrink-0 w-4 h-4 text-zinc-700 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          ))}
        </div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-[#050505] pointer-events-none" />
    </section>
  );
}

export default Contact;
