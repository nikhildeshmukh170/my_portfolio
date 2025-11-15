import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Palette, Zap, Server, Database, Rocket } from 'lucide-react'

export default function UILoadingWithFlyingElements({ onLoadingComplete }) {
  const [phase, setPhase] = useState(1) // 1 = intro, 2 = assembling, 3 = final, 4 = exit
  const [elementPhase, setElementPhase] = useState(0) // 0-6
  const [percent, setPercent] = useState(0)

  const flyingElements = [
    {
      id: 'html',
      icon: Code2,
      label: 'HTML',
      color: 'text-orange-400',
      bg: 'bg-gradient-to-br from-orange-500/20 via-orange-500/5 to-orange-600/20',
      border: 'border-orange-400/50',
      origin: { x: -280, y: -160 },
      delay: 0.2
    },
    {
      id: 'css',
      icon: Palette,
      label: 'CSS',
      color: 'text-blue-400',
      bg: 'bg-gradient-to-br from-blue-500/20 via-blue-500/5 to-blue-600/20',
      border: 'border-blue-400/50',
      origin: { x: 280, y: -140 },
      delay: 0.45
    },
    {
      id: 'js',
      icon: Zap,
      label: 'JavaScript',
      color: 'text-yellow-300',
      bg: 'bg-gradient-to-br from-yellow-500/20 via-yellow-500/5 to-yellow-600/20',
      border: 'border-yellow-300/60',
      origin: { x: -260, y: 140 },
      delay: 0.75
    },
    {
      id: 'api',
      icon: Server,
      label: 'API',
      color: 'text-purple-400',
      bg: 'bg-gradient-to-br from-purple-500/20 via-purple-500/5 to-purple-600/20',
      border: 'border-purple-400/60',
      origin: { x: 260, y: 160 },
      delay: 1.05
    },
    {
      id: 'db',
      icon: Database,
      label: 'Database',
      color: 'text-emerald-400',
      bg: 'bg-gradient-to-br from-emerald-500/20 via-emerald-500/5 to-emerald-600/20',
      border: 'border-emerald-400/60',
      origin: { x: -40, y: -220 },
      delay: 1.35
    },
    {
      id: 'deploy',
      icon: Rocket,
      label: 'Deploy',
      color: 'text-pink-400',
      bg: 'bg-gradient-to-br from-pink-500/20 via-pink-500/5 to-pink-600/20',
      border: 'border-pink-400/60',
      origin: { x: 40, y: 220 },
      delay: 1.65
    }
  ]

  useEffect(() => {
    // Total duration we’ll spread across ~7.5 seconds
    const timers = []

    // Phases: slower & clearer
    timers.push(
      window.setTimeout(() => setPhase(2), 800),   // start assembling
      window.setTimeout(() => setPhase(3), 4600),  // avatar finished, hold
      window.setTimeout(() => setPhase(4), 6500)   // fade out
    )

    // Element phase (for pills / progress text)
    flyingElements.forEach((_, i) => {
      timers.push(
        window.setTimeout(
          () => setElementPhase(i + 1),
          1200 + i * 600 // slower reveal of each
        )
      )
    })

    // Linear progress %
    const start = Date.now()
    const totalMs = 6200 // how long we want progress to reach ~100
    const progressTimer = window.setInterval(() => {
      const elapsed = Date.now() - start
      const p = Math.min(100, Math.round((elapsed / totalMs) * 100))
      setPercent(p)
    }, 100)
    timers.push(progressTimer)

    // Fire complete callback a bit after fade starts
    timers.push(
      window.setTimeout(() => {
        if (typeof onLoadingComplete === 'function') {
          onLoadingComplete()
        }
      }, 7200)
    )

    return () => {
      timers.forEach((id) => window.clearTimeout(id))
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const avatarVariants = {
    initial: { scale: 0.7, opacity: 0 },
    entering: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    },
    pulsing: {
      scale: [1, 1.04, 1],
      boxShadow: [
        '0 0 0px rgba(56,189,248,0.0)',
        '0 0 30px rgba(56,189,248,0.4)',
        '0 0 0px rgba(56,189,248,0.0)'
      ],
      transition: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' }
    }
  }

  const getFlyingVariants = (el) => ({
    offscreen: {
      x: el.origin.x,
      y: el.origin.y,
      opacity: 0,
      rotate: -10,
      scale: 0.7
    },
    orbit: {
      x: el.origin.x * 0.55,
      y: el.origin.y * 0.45,
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        delay: el.delay,
        duration: 1.3,
        ease: [0.16, 1, 0.3, 1] // smoother
      }
    },
    merge: {
      x: 0,
      y: 0,
      opacity: 0,
      scale: 0.1,
      rotate: 22,
      transition: {
        delay: 0.4,
        duration: 0.7,
        ease: 'easeIn'
      }
    }
  })

  const statusLine =
    phase === 1
      ? 'Booting UI engine…'
      : phase === 2
      ? 'Routing components into orbit…'
      : phase === 3
      ? 'Locking layout and visuals…'
      : 'Portfolio ready. Handing over control.'

  return (
    <AnimatePresence>
      {phase < 5 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black text-white overflow-hidden"
        >
          {/* Background: radial + subtle moving orbits */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-black to-slate-950" />

          {/* Soft radial glow center */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="w-[440px] h-[440px] rounded-full bg-cyan-500/7 blur-3xl" />
          </div>

          {/* Spinning orbit rings */}
          <motion.div
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          >
            <div className="w-[540px] h-[540px] rounded-full border border-slate-800/50 border-dashed" />
          </motion.div>
          <motion.div
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            animate={{ rotate: -360 }}
            transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
          >
            <div className="w-[380px] h-[380px] rounded-full border border-slate-800/40 border-dotted" />
          </motion.div>

          {/* Tiny floating background particles */}
          <div className="pointer-events-none absolute inset-0">
            {[...Array(18)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-cyan-400/30"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: 0.2 + Math.random() * 0.4
                }}
                animate={{
                  y: '-=40',
                  opacity: [0.2, 0.6, 0],
                  scale: [1, 1.4, 1]
                }}
                transition={{
                  duration: 6 + Math.random() * 4,
                  repeat: Infinity,
                  repeatType: 'loop',
                  delay: Math.random() * 3
                }}
              />
            ))}
          </div>

          {/* Center content */}
          <div className="relative z-10 flex h-full items-center justify-center px-4">
            <div className="relative w-full max-w-4xl flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
              {/* Left: flying elements orbiting avatar */}
              <div className="relative flex-1 flex items-center justify-center min-h-[280px]">
                {/* Flying elements */}
                {flyingElements.map((el, index) => {
                  const Icon = el.icon
                  return (
                    <motion.div
                      key={el.id}
                      className={
                        `absolute w-24 h-24 rounded-xl border ${el.border} ` +
                        `${el.bg} backdrop-blur-md flex flex-col items-center justify-center gap-1.5 ` +
                        'shadow-[0_0_24px_rgba(15,23,42,0.9)]'
                      }
                      variants={getFlyingVariants(el)}
                      initial="offscreen"
                      animate={
                        phase === 1
                          ? 'offscreen'
                          : phase === 2
                          ? 'orbit'
                          : 'merge'
                      }
                    >
                      <Icon size={26} className={el.color} />
                      <span className={`text-[11px] font-mono ${el.color}`}>
                        {el.label}
                      </span>
                    </motion.div>
                  )
                })}

                {/* Avatar core */}
                <motion.div
                  variants={avatarVariants}
                  initial="initial"
                  animate={phase >= 2 ? 'pulsing' : 'entering'}
                  className="relative"
                >
                  {/* inner pulse circle */}
                  <motion.div
                    className="absolute -inset-8 rounded-full bg-cyan-500/18 blur-2xl"
                    animate={{
                      opacity: [0.18, 0.45, 0.18],
                      scale: [0.95, 1.07, 0.95]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full border border-cyan-400/70 bg-slate-950/80 overflow-hidden shadow-[0_0_40px_rgba(8,47,73,0.9)]">
                    <img
                      src="/myimg.jpg"
                      alt="Nikhil"
                      className="w-full h-full object-cover"
                    />
                    {/* overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-900/40 mix-blend-soft-light" />
                  </div>
                </motion.div>
              </div>

              {/* Right: text panel */}
              <div className="flex-1 max-w-md space-y-4 md:space-y-5 text-center md:text-left">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-400">
                  UI MODE · STARTUP SEQUENCE
                </p>

                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-50">
                  Assembling your{' '}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    full-stack identity
                  </span>
                  .
                </h2>

                <p className="text-sm md:text-[15px] text-slate-400 leading-relaxed">
                  Frontend, backend, APIs, storage and deploy pipelines are
                  being wired together to render your portfolio in UI mode.
                </p>

                {/* Small progress steps */}
                <div className="space-y-2 pt-1">
                  <div className="flex flex-wrap justify-center md:justify-start gap-1.5 text-[11px] font-mono">
                    {flyingElements.map((el, idx) => (
                      <span
                        key={el.id}
                        className={
                          'px-2 py-0.5 rounded-full border ' +
                          (elementPhase > idx
                            ? 'border-cyan-400/80 text-cyan-300 bg-cyan-500/5'
                            : 'border-slate-700 text-slate-500')
                        }
                      >
                        {el.label}
                        {elementPhase > idx ? ' · ready' : ' · loading'}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom console-like bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="absolute bottom-0 left-0 right-0 z-20 border-t border-slate-800/70 bg-black/70 backdrop-blur-md"
          >
            <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-3 text-xs font-mono text-slate-400 md:flex-row md:items-center md:justify-between">
              {/* Progress */}
              <div className="w-full md:w-2/5">
                <div className="flex items-center justify-between mb-1">
                  <span>build-progress</span>
                  <span className="text-cyan-400">{percent}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-slate-900 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400"
                    animate={{ width: `${percent}%` }}
                    transition={{ duration: 0.25 }}
                  />
                </div>
              </div>

              {/* Status line */}
              <div className="flex-1 text-[11px] mt-1 md:mt-0 md:text-right text-slate-500">
                {statusLine}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
