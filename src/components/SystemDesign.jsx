import React from 'react'
import { motion } from 'framer-motion'

export default function SystemDesign() {
  const designs = [
    {
      title: 'Microservices Architecture',
      description: 'Breaking monoliths into scalable microservices with clear boundaries'
    },
    {
      title: 'REST API Design',
      description: 'Building RESTful APIs following best practices and standards'
    },
    {
      title: 'Database Optimization',
      description: 'Designing efficient schemas and query optimization strategies'
    },
    {
      title: 'Caching Strategies',
      description: 'Implementing Redis and caching layers for high performance'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
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
    <section className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 lg:px-8">
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
              <span className="text-sm font-mono text-blue-400 uppercase tracking-widest">Architecture</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100">System Design Expertise</h2>
          </motion.div>

          {/* Design Patterns Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {designs.map((design, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-8 bg-gradient-to-br from-slate-900/50 to-slate-950 border border-slate-800 rounded-lg hover:border-blue-400/50 transition-colors duration-300 cursor-pointer"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="w-12 h-12 bg-blue-400/10 rounded-lg flex items-center justify-center mb-4 border border-blue-400/30"
                >
                  <span className="text-blue-400 font-bold">{idx + 1}</span>
                </motion.div>
                <h3 className="text-xl font-semibold text-slate-100 mb-3">{design.title}</h3>
                <p className="text-slate-400 leading-relaxed">{design.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Architecture Flow */}
          <motion.div variants={itemVariants} className="mt-16 p-8 bg-slate-900/50 border border-slate-800 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-100 mb-6">Typical API Flow</h3>
            <div className="font-mono text-sm text-slate-300 space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-blue-400">Client</span>
                <div className="flex-1 h-px bg-blue-400/30"></div>
                <span className="text-blue-400">→</span>
              </div>
              <div className="flex items-center gap-4 ml-8">
                <span className="text-yellow-400">API Gateway</span>
                <div className="flex-1 h-px bg-blue-400/30"></div>
                <span className="text-blue-400">→</span>
              </div>
              <div className="flex items-center gap-4 ml-16">
                <span className="text-green-400">Microservices</span>
                <div className="flex-1 h-px bg-blue-400/30"></div>
                <span className="text-blue-400">→</span>
              </div>
              <div className="flex items-center gap-4 ml-24">
                <span className="text-purple-400">Database</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
