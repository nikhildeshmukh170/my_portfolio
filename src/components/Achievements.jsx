import React from 'react'
import { motion } from 'framer-motion'

export default function Achievements() {
  const achievements = [
    {
      id: 1,
      title: "Top Performer",
      description: "Recognized as top performer in technical excellence",
      year: "2024",
      icon: "⭐",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 2,
      title: "Open Source Contributor",
      description: "1000+ stars across multiple GitHub repositories",
      year: "2023-2024",
      icon: "🔧",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Tech Speaker",
      description: "Delivered talks at 5+ international tech conferences",
      year: "2023",
      icon: "🎤",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Innovation Award",
      description: "Won innovation award for scalable system design",
      year: "2024",
      icon: "🏆",
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 5,
      title: "Mentor Leader",
      description: "Mentored 20+ junior developers in career growth",
      year: "2022-2024",
      icon: "👨‍🏫",
      color: "from-red-500 to-pink-500"
    },
    {
      id: 6,
      title: "Best Project",
      description: "Awarded for building most impactful platform",
      year: "2023",
      icon: "🚀",
      color: "from-indigo-500 to-purple-500"
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
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  }

  return (
    <section id="achievements" className="relative py-24 bg-slate-950 border-t border-slate-800 overflow-hidden">
      {/* Animated gradient blobs */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 -right-32 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-0 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
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
              <span className="text-sm font-mono text-blue-400 uppercase tracking-widest">Recognition</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100">Achievements & Awards</h2>
            <p className="text-slate-400 mt-4 max-w-2xl">Recognized for technical excellence, innovation, and leadership in software development</p>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {achievements.map((achievement, idx) => (
              <motion.div
                key={achievement.id}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="group relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className={`text-4xl mb-4 inline-block p-3 rounded-lg bg-gradient-to-br ${achievement.color} bg-opacity-10`}
                  >
                    {achievement.icon}
                  </motion.div>

                  {/* Year Badge */}
                  <div className={`inline-block mb-3 px-2.5 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${achievement.color}`}>
                    {achievement.year}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-100 mb-2">{achievement.title}</h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed">{achievement.description}</p>

                  {/* Hover line effect */}
                  <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${achievement.color} transform translate-y-full group-hover:translate-y-0 transition-transform duration-500`}></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Summary Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 text-center"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">6+</div>
              <div className="text-slate-400 mt-2">Major Awards</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 text-center"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">20+</div>
              <div className="text-slate-400 mt-2">Developers Mentored</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 text-center"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">1K+</div>
              <div className="text-slate-400 mt-2">GitHub Stars</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
