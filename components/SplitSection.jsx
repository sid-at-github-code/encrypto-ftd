"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Lock, Code } from "lucide-react"

export default function SplitSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20"
    >
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <Link href="/tool" className="group block">
            <div
              className={`bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-900/30 rounded-2xl shadow-xl p-6 sm:p-8 h-full transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105 border border-blue-200 dark:border-blue-700 relative overflow-hidden transform ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              {/* Enhanced animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="text-center relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <Lock className="w-8 h-8 text-white animate-pulse" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  Try the App
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Encrypt and decrypt messages instantly with our user-friendly interface. Perfect for secure
                  communication.
                </p>
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium inline-flex items-center space-x-2 group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-300 transform group-hover:scale-105 shadow-lg">
                  <span>Start Encrypting</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/api-access" className="group block">
            <div
              className={`bg-gradient-to-br from-white to-green-50 dark:from-gray-800 dark:to-green-900/30 rounded-2xl shadow-xl p-6 sm:p-8 h-full transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105 border border-green-200 dark:border-green-700 relative overflow-hidden transform ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              {/* Enhanced animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-blue-100/50 dark:from-green-900/20 dark:to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="text-center relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <Code className="w-8 h-8 text-white animate-pulse" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                  Use Developer API
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Integrate encryption into your applications with our simple REST API. Get your free API key today.
                </p>
                <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-xl font-medium inline-flex items-center space-x-2 group-hover:from-green-600 group-hover:to-blue-700 transition-all duration-300 transform group-hover:scale-105 shadow-lg">
                  <span>Get API Key</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
