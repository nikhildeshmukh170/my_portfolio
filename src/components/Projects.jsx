import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Monitor, Copy, Check } from 'lucide-react'

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null)
  const [viewMode, setViewMode] = useState({}) // Track API/UI mode per project
  const [copied, setCopied] = useState(null)

  const projects = [
    {
      id: 'nayasetu',
      title: 'NayaSetu — GenAI Legal Assistant',
      description: 'Intelligent legal research platform using AI and NLP to analyze cases, provide insights, and assist lawyers.',
      users: '1000+',
      languages: '5+ Indian Languages',
      tech: ['Next.js', 'FastAPI', 'AWS', 'Gemini API', 'LangChain', 'Pinecone'],
      latency: '<500ms',
      deployment: ['Vercel', 'AWS EC2'],
      image: 'https://via.placeholder.com/600x400?text=NayaSetu',
      github: 'https://github.com/nikhildeshmukh170',
      live: '#',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'gurusoya',
      title: 'Guru Soya Products — E-Commerce Platform',
      description: 'Scalable e-commerce platform with payment integration, admin dashboard, and real-time inventory.',
      orders: '500+',
      products: '20+',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay', 'Redis', 'Tailwind'],
      features: ['Payments', 'Admin Dashboard', 'REST APIs', 'Real-time Updates'],
      image: 'https://via.placeholder.com/600x400?text=GuruSoya',
      github: 'https://github.com/nikhildeshmukh170',
      live: '#',
      color: 'from-emerald-500 to-teal-500'
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

  const toggleView = (projectId) => {
    const currentMode = viewMode[projectId] || 'api'
    // Simple toggle between API and UI mode
    if (currentMode === 'api') {
      setViewMode(prev => ({
        ...prev,
        [projectId]: 'ui'
      }))
    } else {
      setViewMode(prev => ({
        ...prev,
        [projectId]: 'api'
      }))
    }
  }

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section id="projects" className="relative py-24 bg-slate-950 border-t border-slate-800/50 overflow-hidden">
      {/* Animated gradient blobs */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-0 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
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
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
              <span className="text-sm font-mono text-blue-400 uppercase tracking-widest">Featured Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100">Projects</h2>
            <p className="text-slate-400 mt-4">API-first architecture with toggleable UI preview</p>
          </motion.div>

          {/* Projects List - Column Layout */}
          <div className="space-y-8">
            {projects.map((project) => {
              const currentMode = viewMode[project.id] || 'api'
              const apiJson = `{
  "id": "${project.id}",
  "title": "${project.title}",
  "description": "${project.description}",
  ${project.users ? `"users": "${project.users}",` : ''}
  ${project.orders ? `"orders": "${project.orders}",` : ''}
  ${project.languages ? `"languages": "${project.languages}",` : ''}
  ${project.products ? `"products": "${project.products}",` : ''}
  ${project.latency ? `"latency": "${project.latency}",` : ''}
  "tech": [
    ${project.tech.map(t => `"${t}"`).join(',\n    ')}
  ],
  "links": {
    "github": "${project.github}",
    "live": "${project.live}"
  }
}`

              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="border border-slate-800 rounded-lg overflow-hidden bg-slate-900/20 hover:border-blue-500/30 transition-all"
                >
                  {/* Project Header - Always Visible */}
                  <div className="p-6 md:p-8 bg-slate-950/30 border-b border-slate-800">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2">{project.title}</h3>
                        <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                        
                        {/* Stats Inline */}
                        <div className="flex flex-wrap gap-6">
                          {project.users && (
                            <div className="flex flex-col">
                              <span className="text-yellow-400 font-bold text-lg">{project.users}</span>
                              <span className="text-slate-400 text-xs">Users</span>
                            </div>
                          )}
                          {project.orders && (
                            <div className="flex flex-col">
                              <span className="text-yellow-400 font-bold text-lg">{project.orders}</span>
                              <span className="text-slate-400 text-xs">Orders</span>
                            </div>
                          )}
                          {project.languages && (
                            <div className="flex flex-col">
                              <span className="text-cyan-400 font-bold text-lg">{project.languages}</span>
                              <span className="text-slate-400 text-xs">Languages</span>
                            </div>
                          )}
                          {project.products && (
                            <div className="flex flex-col">
                              <span className="text-cyan-400 font-bold text-lg">{project.products}</span>
                              <span className="text-slate-400 text-xs">Products</span>
                            </div>
                          )}
                          {project.latency && (
                            <div className="flex flex-col">
                              <span className="text-emerald-400 font-bold text-lg">{project.latency}</span>
                              <span className="text-slate-400 text-xs">Latency</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Toggle Button */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleView(project.id)}
                        className="flex-shrink-0 p-3 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-blue-400 text-slate-300 hover:text-blue-400 transition-all"
                        title={currentMode === 'api' ? 'Show UI' : 'Show API'}
                      >
                        {currentMode === 'api' ? <Code size={24} /> : <Monitor size={24} />}
                      </motion.button>
                    </div>
                  </div>

                  {/* Content Section - API or UI */}
                  <AnimatePresence mode="wait">
                    {currentMode === 'api' ? (
                      // API View
                      <motion.div
                        key="api"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 md:p-8 bg-slate-950/50 overflow-x-hidden"
                      >
                        {/* API Endpoint Header */}
                        <div className="flex items-center justify-between gap-4 mb-4 flex-wrap lg:flex-nowrap">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1.5 rounded-md font-semibold">GET</span>
                            <span className="text-xs font-mono text-slate-300">/api/projects/{project.id}</span>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => copyToClipboard(apiJson, project.id)}
                            className="p-2 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-blue-400 text-slate-400 hover:text-blue-400 transition-all"
                          >
                            {copied === project.id ? <Check size={18} /> : <Copy size={18} />}
                          </motion.button>
                        </div>

                        {/* JSON Code */}
                        <div className="w-full overflow-x-auto border border-slate-800 rounded-lg">
                          <pre className="text-xs font-mono text-slate-300 bg-slate-900/80 rounded-lg p-5 m-0 min-w-min">
{apiJson}
                          </pre>
                        </div>

                        {/* Response Info */}
                        <div className="mt-6 pt-6 border-t border-slate-700 grid grid-cols-3 gap-4">
                          <div>
                            <p className="text-xs text-slate-500 font-mono mb-1">Status</p>
                            <p className="text-sm text-emerald-400 font-semibold">200 OK</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 font-mono mb-1">Response Time</p>
                            <p className="text-sm text-slate-300 font-semibold">24ms</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 font-mono mb-1">Content-Type</p>
                            <p className="text-sm text-slate-300 font-semibold">application/json</p>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      // UI View
                      <motion.div
                        key="ui"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 md:p-8 space-y-6"
                      >
                        {/* Project Image */}
                        <div className="relative h-56 rounded-lg overflow-hidden group">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}></div>
                        </div>

                        {/* Tech Stack */}
                        <div>
                          <p className="text-xs font-mono text-blue-400 uppercase tracking-widest font-bold mb-3">Technology Stack</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, i) => (
                              <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-slate-300 hover:border-blue-400 transition-all"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Features */}
                        {project.features && (
                          <div>
                            <p className="text-xs font-mono text-blue-400 uppercase tracking-widest font-bold mb-3">Key Features</p>
                            <div className="grid grid-cols-2 gap-3">
                              {project.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-4 border-t border-slate-800">
                          <motion.a
                            href={project.github}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 px-4 py-3 rounded-lg border border-slate-700 text-slate-300 text-sm font-semibold hover:border-blue-400 hover:text-blue-400 transition-all text-center"
                          >
                            View Code
                          </motion.a>
                          <motion.a
                            href={project.live}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all text-center"
                          >
                            Live Demo
                          </motion.a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
