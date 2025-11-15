import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const nav = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
]

export default function Header({ onTerminalMode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/75 backdrop-blur-2xl border-b border-slate-700/70 shadow-[0_18px_45px_rgba(15,23,42,0.95)]'
          : 'bg-slate-950/55 backdrop-blur-xl border-b border-slate-800/40'
      }`}
    >
      {/* subtle gradient line at top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 py-3 flex items-center justify-between">
        {/* LEFT: Identity */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900/80 border border-slate-700/80 text-sm font-semibold text-slate-100 group-hover:border-blue-500 transition-colors">
            N
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">
              Nikhil Deshmukh
            </p>
            <p className="text-[11px] text-slate-400">Full-stack & Backend</p>
          </div>
        </a>

        {/* CENTER: Nav (desktop) */}
        <nav className="hidden md:flex items-center gap-6 text-slate-300">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="group relative text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400 hover:text-slate-100 transition-colors"
            >
              {n.label}
              <span className="pointer-events-none absolute -bottom-1 left-0 right-0 mx-auto h-[2px] w-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-full transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* RIGHT: CTAs (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <motion.button
            onClick={onTerminalMode}
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-1.5 rounded-md border border-slate-700/80 bg-slate-950/80 px-3 py-1.5 text-[11px] font-mono text-slate-300 hover:border-blue-500 hover:text-blue-400 transition-all"
          >
            <span className="text-emerald-400">$</span>
            <span>terminal mode</span>
          </motion.button>
          <motion.a
            href="#contact"
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-md bg-blue-600/95 px-4 py-1.5 text-xs font-medium text-white hover:bg-blue-500 transition-colors"
          >
            Get in touch
          </motion.a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden p-2 text-slate-300 hover:text-slate-100 transition-colors"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile nav */}
      <motion.nav
        initial={false}
        animate={isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.25 }}
        className="md:hidden overflow-hidden bg-slate-950/95 backdrop-blur-2xl border-t border-slate-800/80"
      >
        <div className="container mx-auto px-4 py-3 space-y-1">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setIsOpen(false)}
              className="block w-full text-left rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-900/80 hover:text-slate-100 transition-colors"
            >
              {n.label}
            </a>
          ))}

          <div className="mt-3 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsOpen(false)
                onTerminalMode && onTerminalMode()
              }}
              className="w-full rounded-md border border-slate-700/80 px-3 py-2 text-[12px] font-mono text-slate-300 hover:border-blue-500 hover:text-blue-400 transition-colors"
            >
              $ Terminal mode
            </button>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full rounded-md bg-blue-600/95 px-3 py-2 text-sm font-medium text-white text-center hover:bg-blue-500 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </motion.nav>
    </motion.header>
  )
}
