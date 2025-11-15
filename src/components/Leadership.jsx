import React from 'react'
import { motion } from 'framer-motion'

export default function Leadership() {
  const leadership = [
    {
      id: 1,
      title: "Tech Lead",
      company: "NayaSetu Legal AI",
      period: "2023 - Present",
      description: "Led a team of 8 engineers in building scalable AI-powered legal research platform",
      achievements: ["Reduced API latency by 40%", "Built 3 major features", "Mentored 4 junior developers"],
      icon: "🎯",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Senior Developer",
      company: "Guru Soya E-commerce",
      period: "2022 - 2023",
      description: "Architected and led microservices migration for high-traffic e-commerce platform",
      achievements: ["Improved system scalability 5x", "Led migration of 15+ services", "Established coding standards"],
      icon: "🏗️",
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 3,
      title: "Open Source Maintainer",
      company: "GitHub Community",
      period: "2020 - Present",
      description: "Maintain multiple open-source projects with focus on backend development",
      achievements: ["1K+ GitHub stars", "1M+ npm downloads", "100+ merged contributions"],
      icon: "🔓",
      color: "from-purple-500 to-pink-500"
    }
  ]

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

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.6, 
        delay: i * 0.15,
        ease: "easeOut"
      }
    })
  }

  return (
    <section id="leadership" className="relative py-24 bg-slate-950 border-t border-slate-800 overflow-hidden">
      {/* Animated gradient blobs */}
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 60, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -60, 0],
          scale: [1, 0.95, 1]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute bottom-0 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
              <span className="text-sm font-mono text-blue-400 uppercase tracking-widest">Leadership</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100">Leadership Experience</h2>
            <p className="text-slate-400 mt-4 max-w-2xl">Leading technical teams and driving innovation across products and communities</p>
          </motion.div>

          {/* Leadership Timeline */}
          <motion.div className="space-y-8">
            {leadership.map((role, idx) => (
              <motion.div
                key={role.id}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="group relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-lg p-8 hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Top Section */}
                  <div className="flex items-start gap-6 mb-6">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      className={`text-4xl p-4 rounded-lg bg-gradient-to-br ${role.color} bg-opacity-10 flex-shrink-0`}
                    >
                      {role.icon}
                    </motion.div>

                    {/* Details */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-100 mb-1">{role.title}</h3>
                      <p className={`text-sm font-semibold bg-gradient-to-r ${role.color} bg-clip-text text-transparent mb-2`}>
                        {role.company}
                      </p>
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <span className="font-mono">📅</span>
                        {role.period}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 mb-6 leading-relaxed">{role.description}</p>

                  {/* Achievements */}
                  <div className="space-y-2 bg-slate-800/30 p-4 rounded-lg border border-slate-700/50">
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-3">Key Achievements</p>
                    {role.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-center gap-2 text-slate-300 text-sm"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${role.color} flex-shrink-0`}></div>
                        <span>{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover border effect */}
                <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${role.color} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500`}></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Leadership Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-slate-900/50 border border-slate-800 rounded-lg p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                  <span className="text-2xl">👥</span> Team Leadership
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Experienced in leading cross-functional teams, mentoring junior developers, and building collaborative engineering cultures that foster innovation and growth.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📈</span> Technical Strategy
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Proven ability to architect scalable solutions, optimize system performance, and establish technical best practices that drive product excellence.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
