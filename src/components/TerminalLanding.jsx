import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function TerminalLanding({ onSwitchMode }) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [showSwitchButton, setShowSwitchButton] = useState(false)

  const lines = [
    '$ whoami',
    'Nikhil Deshmukh',
    '',
    '$ role',
    'Software Engineer (Full-Stack | Cloud | AI)',
    '',
    '$ solved',
    '350+ DSA problems | 8+ Projects | 500+ Mentored',
    '',
    '$ experience',
    'SDE Intern @ Trovex.ai | AI/ML | Full-Stack | Cloud',
    '',
    '$ switch_mode',
    'Switching to UI mode...',
  ]

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      setIsTyping(false)
      setShowSwitchButton(true)
      return
    }

    const currentLine = lines[currentLineIndex]
    const typingSpeed = currentLine === '$ switch_mode' || currentLine === 'Switching to UI mode...' ? 50 : 40
    const isCommand = currentLine.startsWith('$')
    const delayBefore = isCommand ? 500 : 300

    const timeout = setTimeout(() => {
      if (displayedText.length < currentLine.length) {
        setDisplayedText(displayedText + currentLine[displayedText.length])
      } else {
        setDisplayedText('')
        setCurrentLineIndex(currentLineIndex + 1)
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayedText, currentLineIndex, lines])

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden flex items-center justify-center px-4">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-slate-950 to-slate-950 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-3xl"
      >
        {/* Terminal Window */}
        <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/80 rounded-lg overflow-hidden shadow-2xl">
          {/* Terminal Header */}
          <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="font-mono text-sm text-slate-400">nikhil@portfolio:~</span>
            <div className="w-12"></div>
          </div>

          {/* Terminal Content */}
          <div className="p-8 font-mono text-base md:text-lg min-h-96 space-y-2">
            {lines.slice(0, currentLineIndex + 1).map((line, idx) => (
              <div key={idx} className="text-slate-300">
                {line.startsWith('$') ? (
                  <span className="text-blue-400">{line}</span>
                ) : line.includes('Nikhil') ? (
                  <span className="text-green-400">{line}</span>
                ) : line.includes('Software Engineer') || line.includes('SDE') ? (
                  <span className="text-cyan-400">{line}</span>
                ) : line.includes('350+') || line.includes('project') ? (
                  <span className="text-yellow-400">{line}</span>
                ) : line.includes('Switching') ? (
                  <span className="text-blue-400">{line}</span>
                ) : (
                  <span>{line}</span>
                )}
              </div>
            ))}

            {/* Typing cursor */}
            {isTyping && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="inline-block w-2 h-6 bg-blue-400 ml-1"
              ></motion.span>
            )}
          </div>

          {/* Terminal Footer */}
          <div className="bg-slate-900/50 border-t border-slate-800 px-8 py-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: showSwitchButton ? 1 : 0, y: showSwitchButton ? 0 : 10 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-3 items-center"
            >
              <span className="text-slate-400 text-sm">Press button to switch:</span>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(96, 165, 250, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSwitchMode(false)}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all text-sm"
              >
                Enter UI Mode →
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 text-center text-slate-400 text-sm"
        >
          <p>💡 Hint: Navigate through the portfolio using the UI mode</p>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  )
}
