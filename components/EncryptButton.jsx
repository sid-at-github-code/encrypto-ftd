"use client"

import { useRef, useState } from "react"
import { Lock, Unlock } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

const TARGET_TEXT = "A99ERW983HBSGS6373"
const CYCLES_PER_LETTER = 2
const SHUFFLE_TIME = 50
const CHARS = "!@#$%^&*():{};|,.<>/?"

export default function EncryptButton({ onClick }) {
  const intervalRef = useRef(null)
  const [showKey, setShowKey] = useState(false)
  const [text, setText] = useState(TARGET_TEXT)

  const scramble = () => {
    setShowKey(true)
    setTimeout(() => setShowKey(false), 5000)

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

    if (onClick) onClick()
  }

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined)
    setText(TARGET_TEXT)
  }

  return (
    <button
className="w-full max-w-[260px] flex justify-center group rounded-xl border border-transparent bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 px-4 py-2.5 md:py-3 text-sm md:text-base font-mono font-medium uppercase text-white duration-300"
      onClick={scramble}
    >
      <div className="flex items-center space-x-2">
        <AnimatePresence mode="wait" initial={false}>
          {showKey ? (
            <motion.span
              key="unlock"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.5 }}
            >
              <Unlock className="size-5 md:size-6" />
            </motion.span>
          ) : (
            <motion.span
              key="lock"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.5 }}
            >
              <Lock className="size-5 md:size-6" />
            </motion.span>
          )}
        </AnimatePresence>
        <p>{showKey ? text : "Encrypt Message"}</p>
      </div>
    </button>
  )
}
