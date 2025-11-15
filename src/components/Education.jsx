import React from 'react'
import { motion } from 'framer-motion'

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const coursework = [
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Operating Systems',
    'Object-Oriented Programming',
    'Machine Learning',
    'Cloud Computing',
    'Computer Networks',
    'System Design'
  ]

  return (
    <section id="education" className="relative py-24 bg-slate-950 border-t border-slate-800/50 overflow-hidden">
      {/* Animated gradient blobs */}
      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 0.95, 1]
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute bottom-0 -right-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
              <span className="text-sm font-mono text-blue-400 uppercase tracking-widest">Education</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100">College</h2>
          </motion.div>

          {/* Education Card */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-sm border border-slate-800/60 rounded-lg p-8 md:px-10 hover:border-blue-500/30 transition-all duration-300"
          >
            {/* Institution & Details */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2">
                  Bennett University
                </h3>
                <p className="text-lg text-cyan-400 font-semibold mb-1">
                  Bachelor of Technology – Computer Science & Engineering
                </p>
                <p className="text-slate-400">Aug 2022 – May 2026 (Expected)</p>
              </div>
              <div className="mt-6 md:mt-0 text-right">
                <div className="text-4xl font-bold text-yellow-400">8.91</div>
                <div className="text-sm text-slate-400 mt-1">CGPA</div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-800/50 my-8"></div>

            {/* Coursework */}
            <div>
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-widest mb-4">Core Coursework</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {coursework.map((course, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-center gap-3 p-3 bg-slate-900/40 border border-slate-800/50 rounded-lg hover:border-blue-500/30 transition-all"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></div>
                    <span className="text-slate-300 text-sm">{course}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="border-t border-slate-800/50 my-8"></div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-xl font-bold text-blue-400">3.87</div>
                <div className="text-xs text-slate-400 mt-1">Years Completed</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-cyan-400">9.11</div>
                <div className="text-xs text-slate-400 mt-1">Max CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-emerald-400">Top</div>
                <div className="text-xs text-slate-400 mt-1">Batch Performer</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-yellow-400">✓</div>
                <div className="text-xs text-slate-400 mt-1">Merit Scholar</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
