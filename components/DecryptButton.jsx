"use client"

import { useRef, useState } from "react"
import { FiLock } from "react-icons/fi"
import { motion } from "framer-motion"

const TARGET_TEXT = "  Decrypt message  "
const CYCLES_PER_LETTER = 2
const SHUFFLE_TIME = 50
const CHARS = "!@#$%^&*():{};|,.<>/?"

export default function DecryptButton({ onClick }) {
  const intervalRef = useRef(null)
  const [text, setText] = useState(TARGET_TEXT)

const scramble = () => {
  let pos = 0
  intervalRef.current = setInterval(() => {
    const scrambled = TARGET_TEXT.split("")
      .map((char, index) =>
        pos / CYCLES_PER_LETTER > index
          ? char
          : CHARS[Math.floor(Math.random() * CHARS.length)]
      )
      .join("")
    setText(scrambled)
    pos++
    if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) stopScramble()
  }, SHUFFLE_TIME)
}

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined)
    setText(TARGET_TEXT)
  }

  return (
    <motion.button
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      onClick={onClick}
className="group relative overflow-hidden rounded-xl bg-neutral-700 px-4 py-2 font-mono font-medium uppercase text-neutral-300 transition-colors hover:text-indigo-300"
    >
    <span className="absolute inset-0 z-0 bg-gradient-to-r from-green-500 to-darkgreen-200" />
      <div className="relative z-10 flex items-center gap-2">
        <FiLock />
        <span>{text}</span>
      </div>
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 via-indigo-400/100 to-indigo-400/0 opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  )
}
