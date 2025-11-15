import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, EyeOff } from 'lucide-react'

export default function Skills() {
  const [isApiView, setIsApiView] = useState(true)

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C++', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'Java'],
      icon: '💾',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Full-Stack',
      skills: ['Node.js', 'Express.js', 'React.js', 'Next.js', 'Tailwind', 'Framer'],
      icon: '⚙️',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS (EC2, S3, Lambda)', 'Docker', 'Linux', 'Vercel', 'Railway'],
      icon: '☁️',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB'],
      icon: '🗄️',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'AI & ML',
      skills: ['TensorFlow', 'Keras', 'LangChain', 'Pandas', 'NumPy'],
      icon: '🤖',
      color: 'from-orange-500 to-orange-600'
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
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.08, ease: 'easeOut' }
    })
  }

  return (
    <section id="skills" className="relative py-24 bg-slate-950 border-t border-slate-800/50 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-0 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header with Toggle */}
          <motion.div variants={itemVariants} className="mb-16 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                <span className="text-sm font-mono text-blue-400 uppercase tracking-widest">Skills & Expertise</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-100">Technical Arsenal</h2>
            </div>

            {/* View Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsApiView(!isApiView)}
              className="p-3 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all text-slate-300 hover:text-blue-400"
            >
              {isApiView ? <Eye size={24} /> : <EyeOff size={24} />}
            </motion.button>
          </motion.div>

          {/* Content Container - Full Width */}
          <AnimatePresence mode="wait">
            {isApiView && (
              <motion.div
                key="api-view"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="w-full bg-slate-900/50 border border-slate-800 rounded-lg overflow-hidden"
              >
                {/* Header */}
                <div className="bg-slate-900 px-6 py-4 border-b border-slate-800">
                  <span className="font-mono text-sm text-blue-400">GET /api/skills</span>
                </div>

                {/* Content */}
                <div className="px-6 py-6 font-mono text-xs sm:text-sm overflow-auto">
                  <div className="text-slate-400 space-y-2">
                    <div className="text-green-400">{'{'}</div>
                    <div className="ml-4 space-y-2 text-slate-300">
                      <div><span className="text-blue-300">"languages"</span>: [<span className="text-yellow-400">"C++", "Python", "JavaScript", "TypeScript", "SQL", "Java"</span>],</div>
                      <div><span className="text-blue-300">"full_stack"</span>: [<span className="text-yellow-400">"Node.js", "Express.js", "React.js", "Next.js", "Tailwind"</span>],</div>
                      <div><span className="text-blue-300">"cloud_devops"</span>: [<span className="text-yellow-400">"AWS (EC2, S3, Lambda)", "Docker", "Linux", "Vercel", "Railway"</span>],</div>
                      <div><span className="text-blue-300">"databases"</span>: [<span className="text-yellow-400">"MySQL", "MongoDB"</span>],</div>
                      <div><span className="text-blue-300">"ai_ml"</span>: [<span className="text-yellow-400">"TensorFlow", "Keras", "LangChain", "Pandas", "NumPy"</span>]</div>
                    </div>
                    <div className="text-green-400">{'}'}</div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* UI Grid View - Full Width */}
          <AnimatePresence mode="wait">
            {!isApiView && (
              <motion.div
                key="ui-view"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full"
              >
                  {skillCategories.map((category, idx) => (
                    <motion.div
                      key={idx}
                      custom={idx}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-50px' }}
                      className="group relative bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-sm border border-slate-800/60 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300 overflow-hidden hover:bg-slate-900/80"
                    >
                      {/* Background gradient on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon & Title */}
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-3xl">{category.icon}</span>
                          <div className={`inline-block px-2.5 py-1 rounded-full bg-gradient-to-r ${category.color} text-white text-xs font-semibold`}>
                            {category.title}
                          </div>
                        </div>

                        {/* Skills Grid */}
                        <div className="space-y-2">
                          {category.skills.map((skill, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + i * 0.06 }}
                              className="flex items-center gap-2"
                            >
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color} flex-shrink-0`}></div>
                              <span className="text-slate-300 text-sm">{skill}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Hover border effect */}
                      <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${category.color} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500`}></div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
