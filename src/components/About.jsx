import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
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

  return (
    <section id="about" className="relative py-24 bg-slate-950 border-t border-slate-800/50 overflow-hidden">
      {/* Animated gradient blobs */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
              <span className="text-sm font-mono text-blue-400 uppercase tracking-widest">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100">Who I Am</h2>
          </motion.div>

          {/* Bio Card */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-sm border border-slate-800/60 rounded-lg p-8 md:p-10 hover:border-blue-500/30 transition-all duration-300"
          >
            <p className="text-lg text-slate-300 leading-relaxed space-y-6">
              <span className="block">
                I'm a <span className="text-blue-400 font-semibold">Software Engineer</span> focused on <span className="text-cyan-400 font-semibold">full-stack development</span>, <span className="text-purple-400 font-semibold">AI-integrated applications</span>, <span className="text-emerald-400 font-semibold">cloud architectures</span>, and <span className="text-pink-400 font-semibold">modern UI/UX</span>.
              </span>

              <span className="block">
                I've built applications used by <span className="text-yellow-400 font-semibold">20,000+ users</span> and enterprise systems serving <span className="text-yellow-400 font-semibold">50,000+ customers</span>. My work combines technical excellence with thoughtful design, ensuring every system scales with precision and is built with care.
              </span>

              <span className="block">
                Strong foundation in <span className="text-slate-200 font-semibold">DSA, system design, ML architectures, database optimization, and software architecture patterns</span>. I'm passionate about solving complex problems, optimizing performance, and creating products that users love.
              </span>

              <span className="block">
                Currently exploring <span className="text-blue-400 font-semibold">GenAI applications</span>, <span className="text-purple-400 font-semibold">real-time systems</span>, and <span className="text-cyan-400 font-semibold">scalable microservices</span> while mentoring developers and contributing to open-source communities.
              </span>
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            <div className="text-center p-6 bg-slate-900/40 border border-slate-800/50 rounded-lg hover:border-blue-500/30 transition-all">
              <div className="text-2xl md:text-3xl font-bold text-blue-400">20K+</div>
              <div className="text-sm text-slate-400 mt-2">Active Users</div>
            </div>
            <div className="text-center p-6 bg-slate-900/40 border border-slate-800/50 rounded-lg hover:border-blue-500/30 transition-all">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400">50K+</div>
              <div className="text-sm text-slate-400 mt-2">Enterprise Customers</div>
            </div>
            <div className="text-center p-6 bg-slate-900/40 border border-slate-800/50 rounded-lg hover:border-blue-500/30 transition-all">
              <div className="text-2xl md:text-3xl font-bold text-emerald-400">3+</div>
              <div className="text-sm text-slate-400 mt-2">Years in Tech</div>
            </div>
            <div className="text-center p-6 bg-slate-900/40 border border-slate-800/50 rounded-lg hover:border-blue-500/30 transition-all">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">100%</div>
              <div className="text-sm text-slate-400 mt-2">Commitment</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
