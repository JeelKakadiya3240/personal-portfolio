'use client'

import React from 'react'
import Image from 'next/image'
import TypeWriter from './TypeWriter'

const Hero = () => {
  const titles = [
    'Jeel Kakadiya',
    'Software Developer',
    'Full Stack Engineer',
    'Problem Solver',
    'Tech Enthusiast'
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Vignette effect */}
      <div className="pointer-events-none absolute inset-0 z-0" style={{background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, rgba(0,0,0,0.08) 100%)'}} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/profile.png"
            alt="Jeel Kakadiya profile photo"
            width={144}
            height={144}
            className="rounded-full shadow-lg mb-6 border-4 border-indigo-200 dark:border-indigo-700 object-cover"
            priority
          />
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">Hi, I'm</span>
            <span className="block text-indigo-600 dark:text-indigo-400 min-h-[1.5em] flex items-center justify-center">
              <TypeWriter 
                texts={titles}
                typingSpeed={60}
                deletingSpeed={30}
                pauseTime={1200}
                startDelay={500}
                cursorBlinkSpeed={800}
              />
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            A passionate Software Developer specializing in building exceptional digital experiences.
            Currently pursuing Master's in Computer Science at Arizona State University.
          </p>
          <div className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row sm:justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full text-base font-semibold shadow-lg bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border border-white/60 dark:border-gray-700/60 text-indigo-700 dark:text-indigo-200 hover:bg-white/60 dark:hover:bg-gray-800/60 hover:shadow-xl transition-all duration-200 gap-2 group"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full text-base font-semibold shadow-lg bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border border-white/60 dark:border-gray-700/60 text-indigo-700 dark:text-indigo-200 hover:bg-white/60 dark:hover:bg-gray-800/60 hover:shadow-xl transition-all duration-200 gap-2 group"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 