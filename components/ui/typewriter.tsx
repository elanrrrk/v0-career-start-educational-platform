"use client"

import { useState, useEffect, useCallback } from "react"

interface TypewriterProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  className?: string
}

export function Typewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  className = "",
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const type = useCallback(() => {
    const currentWord = words[currentWordIndex]

    if (isDeleting) {
      setCurrentText((prev) => prev.slice(0, -1))
      if (currentText === "") {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
      }
    } else {
      setCurrentText(currentWord.slice(0, currentText.length + 1))
      if (currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseDuration)
        return
      }
    }
  }, [currentText, currentWordIndex, isDeleting, pauseDuration, words])

  useEffect(() => {
    const timeout = setTimeout(
      type,
      isDeleting ? deletingSpeed : typingSpeed
    )
    return () => clearTimeout(timeout)
  }, [type, isDeleting, deletingSpeed, typingSpeed])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse text-primary">|</span>
    </span>
  )
}
