import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import TerminalLanding from './components/TerminalLanding'
import UILoadingWithFlyingElements from './components/UILoadingWithFlyingElements'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Experience from './components/Experience'
import Leadership from './components/Leadership'
import Achievements from './components/Achievements'
import SystemDesign from './components/SystemDesign'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [uiMode, setUiMode] = useState(false)
  const [showLoading, setShowLoading] = useState(false)

  const handleEnterUI = () => {
    // Show loading animation
    setShowLoading(true)
  }

  const handleLoadingComplete = () => {
    // After animation, show main UI
    setShowLoading(false)
    setUiMode(true)
  }

  // Show loading animation
  if (showLoading) {
    return (
      <AnimatePresence>
        <UILoadingWithFlyingElements onLoadingComplete={handleLoadingComplete} />
      </AnimatePresence>
    )
  }

  // Show terminal landing
  if (!uiMode) {
    return <TerminalLanding onSwitchMode={handleEnterUI} />
  }

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col overflow-x-hidden">
      {/* Global vertical animation line */}
      {/* <VerticalAnimationLine /> */}
      
      <Header onTerminalMode={() => setUiMode(false)} />
      <main className="flex-1 pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Leadership />
        <Achievements />
        <SystemDesign />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
