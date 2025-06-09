'use client'

import React, { useState, useEffect, useCallback } from 'react'

interface TypeWriterProps {
  texts: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
  startDelay?: number
  cursorBlinkSpeed?: number
}

const TypeWriter: React.FC<TypeWriterProps> = ({
  texts,
  className = '',
  typingSpeed = 60,
  deletingSpeed = 30,
  pauseTime = 1200,
  startDelay = 500,
  cursorBlinkSpeed = 800
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isStarted, setIsStarted] = useState(false)
  const [isCursorVisible, setIsCursorVisible] = useState(true)

  // Cursor blink effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setIsCursorVisible(prev => !prev)
    }, cursorBlinkSpeed)
    return () => clearInterval(cursorTimer)
  }, [cursorBlinkSpeed])

  // Start the animation after initial delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStarted(true)
    }, startDelay)
    return () => clearTimeout(timer)
  }, [startDelay])

  const getRandomDelay = (baseSpeed: number) => {
    // More natural randomization
    const randomFactor = Math.random() * 0.3 + 0.85 // Random between 0.85 and 1.15
    return Math.floor(baseSpeed * randomFactor)
  }

  const typeText = useCallback(() => {
    if (!isStarted) return

    const currentFullText = texts[currentTextIndex]
    
    if (!isDeleting && currentText === currentFullText) {
      setIsPaused(true)
      setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseTime)
      return
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false)
      setCurrentTextIndex((prev) => (prev + 1) % texts.length)
      return
    }

    const currentSpeed = isDeleting ? deletingSpeed : typingSpeed
    const delay = getRandomDelay(currentSpeed)

    const timer = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(currentFullText.substring(0, currentText.length - 1))
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length + 1))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseTime, isStarted])

  useEffect(() => {
    if (!isPaused && isStarted) {
      typeText()
    }
  }, [currentText, isPaused, typeText, isStarted])

  return (
    <span className={`inline-block ${className}`}>
      <span className="relative">
        {currentText}
        <span 
          className={`absolute ml-0.5 transition-opacity duration-150 ${
            isCursorVisible ? 'opacity-100' : 'opacity-0'
          } text-indigo-600 dark:text-indigo-400`}
        >
          |
        </span>
      </span>
    </span>
  )
}

export default TypeWriter 