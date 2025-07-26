"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/ThemeProvider"
import EncryptPanel from "@/components/EncryptPanel"
import DecryptPanel from "@/components/DecryptPanel"
import AnimatedBackground from "@/components/AnimatedBackground"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import EncryptButton from "@/components/EncryptButton"
import DecryptButton from "@/components/DecryptButton"
export default function ToolPage() {
  const [activePanel, setActivePanel] = useState("") // "" | "encrypt" | "decrypt"

  const handleBack = () => {
    setActivePanel("")
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
        <AnimatedBackground />
        <Navigation />
        <div className="pt-20 pb-8 px-4 relative z-10">
          <div className="container mx-auto max-w-5xl">
            {/* Title */}
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Encryption Tool
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Securely encrypt and decrypt your messages with our easy-to-use tool
              </p>
            </motion.div>

            {/* Two Option Buttons */}
            <AnimatePresence mode="wait">
              {!activePanel && (
                <motion.div
                  className="flex justify-center gap-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <EncryptButton onClick={() => setActivePanel("encrypt")} />
<DecryptButton onClick={() => setActivePanel("decrypt")} />

                </motion.div>
              )}
            </AnimatePresence>

            {/* Active Panel */}
            <AnimatePresence mode="wait">
              {activePanel && (
                <motion.div
                  key={activePanel}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4 }}
                  className="mt-8"
                >
                  {/* Back Button */}
                  <div className="mb-6">
                    <button
                      onClick={handleBack}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full shadow hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      <ArrowLeft size={20} />
                      <span className="font-medium">Back</span>
                    </button>
                  </div>

                  {activePanel === "encrypt" && <EncryptPanel />}
                  {activePanel === "decrypt" && <DecryptPanel />}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
