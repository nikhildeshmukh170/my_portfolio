import React from 'react'
import { motion } from 'framer-motion'

export default function Experience() {
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

  const achievements = [
    { icon: '👥', label: 'Users', value: '20K+' },
    { icon: '🏢', label: 'Enterprise Customers', value: '50K+' },
    { icon: '⚡', label: 'Traffic Improvement', value: '+70%' },
    { icon: '🔌', label: 'Secure APIs', value: '10+' },
    { icon: '⚙️', label: 'Latency Reduction', value: '40%' },
    { icon: '🚀', label: 'Deployed Solutions', value: 'Multiple' }
  ]

  return (
    <section id="experience" className="relative py-24 bg-slate-950 border-t border-slate-800/50 overflow-hidden">
      {/* Animated gradient blobs */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -60, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-0 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
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
              <span className="text-sm font-mono text-blue-400 uppercase tracking-widest">Professional</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100">Experience</h2>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-sm border border-slate-800/60 rounded-lg p-8 md:p-10 hover:border-blue-500/30 transition-all duration-300"
          >
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2">
                    Software Engineer Intern
                  </h3>
                  <p className="text-lg text-cyan-400 font-semibold">Trovex.ai</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-400">May 2025 – Present</div>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Building next-generation AI-integrated solutions and scalable systems for enterprise customers. Working across full-stack development, cloud architecture, and AI/ML integration with focus on performance optimization and security.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-800/50 my-8"></div>

            {/* Achievements Grid */}
            <div>
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-widest mb-6">Key Achievements</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {achievements.map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="p-4 bg-slate-900/40 border border-slate-800/50 rounded-lg hover:border-blue-500/30 transition-all"
                  >
                    <div className="text-2xl mb-2">{achievement.icon}</div>
                    <div className="text-lg font-bold text-yellow-400">{achievement.value}</div>
                    <div className="text-xs text-slate-400 mt-1">{achievement.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-800/50 my-8"></div>

            {/* Key Responsibilities */}
            <div>
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-widest mb-4">Key Responsibilities</h4>
              <ul className="space-y-3">
                {[
                  'Developed and maintained customer-facing platform used by 20,000+ active users',
                  'Built enterprise product solutions for Bajaj Finance serving 50,000+ customers',
                  'Optimized system performance and SEO, achieving +70% traffic improvement',
                  'Designed and integrated 10+ secure REST APIs with comprehensive documentation',
                  'Implemented Redis caching strategies, reducing latency by 40%',
                  'Worked with AI and backend teams in Agile environment using Jira and Jest',
                  'Collaborated on system design and database optimization',
                  'Participated in code reviews and mentored junior developers'
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06 }}
                    className="flex gap-3 text-slate-300"
                  >
                    <span className="text-blue-400 flex-shrink-0 mt-1">▪</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-800/50 my-8"></div>

            {/* Technologies & Tools */}
            <div>
              <h4 className="text-sm font-mono text-blue-400 uppercase tracking-widest mb-4">Technologies & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Node.js', 'AWS', 'MongoDB', 'Docker', 'Redis', 'FastAPI', 'GraphQL', 'Jira', 'Jest', 'Git'].map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.04 }}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-slate-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Additional Info Card */}
          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg">
              <div className="text-sm font-mono text-blue-400 uppercase tracking-widest mb-2">Current Focus</div>
              <div className="text-slate-300">Full-Stack • AI Integration • Performance Optimization</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg">
              <div className="text-sm font-mono text-purple-400 uppercase tracking-widest mb-2">Team Environment</div>
              <div className="text-slate-300">Agile • Cross-functional • Collaborative</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-lg">
              <div className="text-sm font-mono text-emerald-400 uppercase tracking-widest mb-2">Impact Driven</div>
              <div className="text-slate-300">User Growth • System Reliability • Code Quality</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
