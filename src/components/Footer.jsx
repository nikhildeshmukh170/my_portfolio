import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/nikhildeshmukh170', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/nikhildeshmukh17', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:nikhildeshmukh170@gmail.com', label: 'Email' }
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/70 mt-16">
      {/* subtle top gradient line */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />

      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="mx-auto h-40 max-w-5xl bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-[1.5fr,1fr,1.2fr] mb-8"
        >
          {/* Branding / mini-bio */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900/80 px-3 py-1 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-slate-400">
                Portfolio · UI Mode
              </span>
            </div>

            <h3 className="text-lg font-semibold text-slate-50 mb-1">
              Nikhil Deshmukh
            </h3>
            <p className="text-slate-400 text-sm mb-3">
              Full-stack / backend engineer focused on reliable systems, clean UX,
              and products people actually use.
            </p>
            <p className="text-[11px] font-mono text-slate-500">
              Currently exploring{' '}
              <span className="text-cyan-400">
                Node.js, system design, and performance-first UIs
              </span>
              .
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="group inline-flex items-center gap-1 text-slate-400 hover:text-slate-100 transition-colors"
                >
                  <span className="h-px w-0 bg-cyan-400 group-hover:w-4 transition-all" />
                  <span>About</span>
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-1 text-slate-400 hover:text-slate-100 transition-colors"
                >
                  <span className="h-px w-0 bg-cyan-400 group-hover:w-4 transition-all" />
                  <span>Projects</span>
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="group inline-flex items-center gap-1 text-slate-400 hover:text-slate-100 transition-colors"
                >
                  <span className="h-px w-0 bg-cyan-400 group-hover:w-4 transition-all" />
                  <span>Experience</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-1 text-slate-400 hover:text-slate-100 transition-colors"
                >
                  <span className="h-px w-0 bg-cyan-400 group-hover:w-4 transition-all" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social + small CTA */}
          <div className="flex flex-col items-start md:items-end justify-between gap-4">
            <div className="w-full md:w-auto">
              <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 mb-3">
                Connect
              </h4>
              <div className="flex gap-2.5">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2, scale: 1.02 }}
                      whileTap={{ scale: 0.96 }}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-slate-400 hover:border-cyan-500 hover:text-cyan-300 transition-all"
                      title={link.label}
                    >
                      <Icon size={17} />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            <p className="text-[11px] font-mono text-slate-500 md:text-right">
              Open to internships and backend-focused roles.
              <br />
              <span className="text-slate-400">Let’s build something useful.</span>
            </p>
          </div>
        </motion.div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-slate-800/80 pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500"
        >
          <p className="text-center md:text-left">
            © {currentYear} <span className="text-slate-300">Nikhil Deshmukh</span>. All
            rights reserved.
          </p>

          <p className="flex items-center gap-1 text-center md:text-right">
            Built with
            <motion.span
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex"
            >
              <Heart size={13} className="text-rose-500" fill="currentColor" />
            </motion.span>
            and React · Framer Motion.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
