import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // Formspree expects email and message (and optional name) at the top level
      const payload = {
        email: formData.email,
        message: `Name: ${formData.name}\n\n${formData.message}`,
        _subject: `New Contact from ${formData.name}`,
        _replyto: formData.email
      }

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      const data = await res.json()

      if (res.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError(data.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Network error. Please try again.')
      console.error('Form error:', err)
    } finally {
      setLoading(false)
    }
  }

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

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nikhildeshmukh170@gmail.com',
      link: 'mailto:nikhildeshmukh170@gmail.com',
      color: 'text-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@nikhildeshmukh170',
      link: 'https://github.com/nikhildeshmukh170',
      color: 'text-slate-300'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/nikhildeshmukh17',
      link: 'https://linkedin.com/in/nikhildeshmukh17',
      color: 'text-blue-400'
    }
  ]

  return (
    <section
      id="contact"
      className="relative py-20 bg-black border-t border-slate-800/50 overflow-hidden"
    >
      {/* Animated gradient blobs */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -50, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-0 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
      />

      {/* subtle grid-ish overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_top,_#38bdf81a,_transparent_60%),radial-gradient(circle_at_bottom,_#1d4ed81a,_transparent_55%)]" />

      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800/70 bg-slate-950/70 px-4 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-slate-400">
                Contact · API Mode
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
              Let&apos;s Work Together
            </h2>
            <p className="text-base md:text-lg text-slate-400 font-light max-w-2xl mx-auto">
              Whether it&apos;s a backend-heavy system, a clean UI, or an idea you&apos;re
              still shaping — I&apos;d love to hear about it.
            </p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Methods */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xs text-blue-400 font-mono tracking-[0.2em] uppercase mb-4">
                Direct channels
              </h3>
              <div className="space-y-3">
                {contactMethods.map((method, idx) => {
                  const Icon = method.icon
                  return (
                    <motion.a
                      key={idx}
                      href={method.link}
                      target={method.label !== 'Email' ? '_blank' : undefined}
                      rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.08 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 4 }}
                      className="group flex items-center gap-4 p-4 rounded-lg bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900/70 transition-all"
                    >
                      <div
                        className={`p-3 rounded-lg bg-slate-800/60 group-hover:bg-slate-800 transition-all ${method.color}`}
                      >
                        <Icon size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[11px] text-slate-500 font-mono uppercase tracking-wide">
                          {method.label}
                        </div>
                        <div className="text-slate-200 group-hover:text-blue-400 transition-colors truncate text-sm">
                          {method.value}
                        </div>
                      </div>
                    </motion.a>
                  )
                })}
              </div>

              {/* Quick Info */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8 pt-6 border-t border-slate-800 space-y-3 text-sm"
              >
                <p className="text-slate-500">
                  💬{' '}
                  <span className="text-slate-400">
                    I usually reply within <span className="text-slate-200">24 hours</span>.
                  </span>
                </p>
                <p className="text-slate-500">
                  ✨{' '}
                  <span className="text-slate-400">
                    Open to internships, backend-heavy roles, and early-stage products.
                  </span>
                </p>
                <p className="text-slate-500">
                  🚀{' '}
                  <span className="text-slate-400">
                    Especially interested in <span className="text-slate-200">scalable systems</span> and{' '}
                    <span className="text-slate-200">developer tools</span>.
                  </span>
                </p>
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              variants={itemVariants}
              className="relative bg-gradient-to-br from-slate-900/60 to-slate-950/70 border border-slate-800 rounded-xl overflow-hidden group"
            >
              {/* Glow effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500/15 via-cyan-500/10 to-blue-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-xl" />

              {/* Form Header */}
              <div className="px-6 lg:px-8 py-4 border-b border-slate-800 bg-slate-950/70 flex items-center justify-between">
                <span className="font-mono text-xs text-blue-400">
                  <span className="text-cyan-400">POST</span> /api/contact
                </span>
                <span className="text-[11px] font-mono text-slate-500 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  live
                </span>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="p-6 lg:p-8">
                {!submitted ? (
                  <div className="space-y-5">
                    {/* Name */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <label className="text-[11px] text-slate-400 font-mono uppercase tracking-[0.18em] block mb-2">
                        name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:border-blue-400 focus:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-400/30 transition-all text-sm"
                        placeholder="Your name"
                      />
                    </motion.div>

                    {/* Email */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.05 }}
                      viewport={{ once: true }}
                    >
                      <label className="text-[11px] text-slate-400 font-mono uppercase tracking-[0.18em] block mb-2">
                        email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:border-blue-400 focus:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-400/30 transition-all text-sm"
                        placeholder="your@email.com"
                      />
                    </motion.div>

                    {/* Message */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <label className="text-[11px] text-slate-400 font-mono uppercase tracking-[0.18em] block mb-2">
                        message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:border-blue-400 focus:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-400/30 transition-all text-sm resize-none"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </motion.div>

                    {/* Error message */}
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-red-400 font-mono"
                      >
                        {error}
                      </motion.p>
                    )}

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.15 }}
                      viewport={{ once: true }}
                      whileHover={!loading ? { scale: 1.02, y: -2 } : {}}
                      whileTap={!loading ? { scale: 0.98 } : {}}
                      className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                    >
                      {loading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-white/80 border-t-transparent rounded-full"
                          ></motion.div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send
                            size={18}
                            className="group-hover:translate-x-1 group-hover:-translate-y-[1px] transition-transform"
                          />
                        </>
                      )}
                    </motion.button>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      animate={{ scale: [0.85, 1.05, 1] }}
                      transition={{ duration: 0.5 }}
                      className="mb-4 flex justify-center"
                    >
                      <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/40 rounded-full flex items-center justify-center">
                        <CheckCircle size={32} className="text-emerald-400" />
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-semibold text-slate-100 mb-1">
                      Message sent successfully
                    </h3>
                    <p className="text-slate-400 text-sm max-w-sm mx-auto">
                      Thanks for reaching out. Your message has been delivered to my inbox — I’ll
                      get back to you soon.
                    </p>
                    <p className="mt-4 text-[11px] font-mono text-slate-500">
                      status: <span className="text-emerald-400">200 OK</span>
                    </p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
