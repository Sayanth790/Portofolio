import React from 'react';
import sayanthImg from './assets/sayanthimage.jpg';

function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] px-6 pt-24 pb-32"
    >
      {/* ── AMBIENT GLOW BLOBS (matching aj7) ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/30 blur-[120px] pointer-events-none animate-pulse-slow"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 -inset-20 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[90px] pointer-events-none"
        aria-hidden="true"
      />

      {/* ── NOISE TEXTURE ── */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" aria-hidden="true" />

      {/* ── GRID BACKGROUND ── */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-70" aria-hidden="true" />

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-6xl w-full mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* LEFT: Text & CTAs */}
        <div className="lg:col-span-7 space-y-8 animate-fadeInUp">

          {/* Availability pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-semibold tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            Available for work
          </div>

          {/* Headline */}
          <div className="space-y-0">
            <h1
              className="font-black text-white tracking-[-0.04em] leading-[0.9]"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}
            >
              Sayanth
            </h1>
            <h2
              className="font-black text-zinc-600 tracking-[-0.04em] leading-[0.9]"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
            >
              Web Dev.
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-zinc-400 text-base sm:text-lg max-w-lg leading-relaxed">
            Web Developer &amp; MCA student specializing in building high-performance,
            responsive web applications and clean digital interfaces.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-zinc-100 active:scale-95 transition-all duration-300 shadow-lg shadow-white/10"
            >
              Selected Works
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 active:scale-95 transition-all duration-300 shadow-lg shadow-blue-500/20 flex items-center gap-2"
            >
              Get in Touch
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2 pt-2">
            {/* GitHub */}
            <a
              href="https://github.com/Sayanth790"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl text-zinc-500 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/sayanth"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl text-zinc-500 hover:text-blue-400 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:sayus9015@gmail.com"
              aria-label="Email"
              className="p-2.5 rounded-xl text-zinc-500 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT: Profile Image Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="group relative w-[300px] md:w-[340px] lg:w-[380px]">
            {/* Outer glow border */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-600/30 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-700" />

            {/* Card */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] shadow-2xl">

              {/* Scan line effect on hover */}
              <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden rounded-3xl">
                <div className="absolute inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent opacity-0 group-hover:animate-[scan_3.5s_linear_infinite] group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={sayanthImg}
                  alt="Sayanth — Web Developer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700"
                />
              </div>

              {/* Bottom info bar */}
              <div className="px-5 py-4 bg-[#050505]/90 border-t border-white/5 flex items-center justify-between">
                <div>
                  <p className="text-white font-bold text-sm">Sayanth</p>
                  <p className="text-zinc-500 text-xs">Web Developer · MCA Student</p>
                </div>
                <div className="flex items-center gap-1.5 text-green-400 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Open to work
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
