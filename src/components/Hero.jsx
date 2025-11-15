import React from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, ArrowDown } from 'lucide-react'

export default function Hero() {
  const infoPills = [
    'Full-stack & Backend',
    '350+ DSA Problems',
    '20K+ Product Users',
    'Open-source Contributor'
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-black text-white flex items-center"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-black to-slate-950 pointer-events-none" />
      <div className="absolute -right-32 top-10 w-72 h-72 bg-blue-500/20 blur-3xl pointer-events-none" />
      <div className="absolute -left-24 bottom-10 w-72 h-72 bg-cyan-500/15 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-16 pb-16">
          {/* LEFT: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-5 order-2 lg:order-1"
          >
            {/* Small chip */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/80 px-3 py-1 text-[11px] font-mono text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Developer · Backend & Systems</span>
            </div>

            {/* Name */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                Nikhil{' '}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Deshmukh
                </span>
              </h1>
            </div>

            {/* Short tagline */}
            <p className="text-base sm:text-lg text-slate-200 max-w-xl">
              I build reliable backends and clean interfaces that feel fast and
              simple for real users.
            </p>

            {/* Small pills – very minimal */}
            <div className="flex flex-wrap gap-2 pt-1">
              {infoPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-slate-800 bg-slate-950/80 px-3 py-1 text-[11px] sm:text-xs text-slate-300"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm sm:text-[15px] font-medium text-white shadow-md shadow-blue-600/40 hover:bg-blue-500 transition-all"
              >
                <Download size={18} />
                <span>Resume</span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-950 px-6 py-3 text-sm sm:text-[15px] font-medium text-slate-100 hover:border-blue-500/70 hover:bg-slate-900 transition-all"
              >
                <Mail size={18} />
                <span>Contact</span>
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT: Image card + techy animated background */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 sm:w-72 lg:w-80">
              {/* Animated tech grid / ring behind card */}
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-8 rounded-3xl"
              >
                {/* Spinning gradient ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-4 rounded-3xl border border-slate-800/60 bg-[conic-gradient(from_0deg,_rgba(56,189,248,0.25),_transparent_40%,_rgba(37,99,235,0.3),_transparent_80%)] opacity-40 blur-[2px]"
                />

                {/* Subtle grid */}
                <div className="absolute inset-3 rounded-3xl bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:18px_18px] opacity-40" />

                {/* Orbiting nodes */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-5"
                >
                  <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.7)]" />
                  <div className="absolute top-1/2 -right-1 h-2 w-2 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.7)]" />
                  <div className="absolute bottom-3 left-3 h-1.5 w-1.5 rounded-full bg-emerald-400/90 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                </motion.div>
              </motion.div>

              {/* Main card */}
              <div className="relative rounded-2xl border border-slate-800 bg-slate-950/90 shadow-2xl shadow-black/60 overflow-hidden backdrop-blur">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-800 px-3 py-2">
                  <span className="text-[11px] font-mono text-slate-400">
                    /nikhil/profile
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    online
                  </span>
                </div>

                {/* Image */}
                <div className="relative h-72 sm:h-80 overflow-hidden">
                  <img
                    src="/myimg.jpg"
                    alt="Nikhil Deshmukh"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 px-3 pb-3 pt-2 text-xs text-slate-200 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      Focus: Backend · Systems
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Stack: Node · React
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator – tiny */}
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex justify-center pb-4"
        >
          <button
            type="button"
            onClick={() => window.scrollBy({ top: 400, behavior: 'smooth' })}
            className="flex flex-col items-center gap-1 text-[11px] text-slate-500 hover:text-slate-300 transition-colors"
          >
            <span>Scroll</span>
            <ArrowDown size={16} className="stroke-current" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
