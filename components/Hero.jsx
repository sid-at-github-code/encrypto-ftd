"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Rocket, Key, Lock } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 min-h-[80vh] flex items-center">
      {/* Background SVG */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div
          className="w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: "url('/encrypro_bg.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Floating Jelly Lock Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Lock 1 */}
        <div className="absolute top-20 left-10 sm:left-20 animate-jelly-float-1">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg animate-jelly-bounce">
            <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400 animate-lock-rotate" />
          </div>
        </div>

        {/* Lock 2 */}
        <div className="absolute top-40 right-10 sm:right-20 animate-jelly-float-2">
          <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-400/30 to-pink-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg animate-jelly-bounce-reverse">
            <Lock className="w-5 h-5 sm:w-7 sm:h-7 text-purple-600 dark:text-purple-400 animate-lock-rotate-reverse" />
          </div>
        </div>

        {/* Lock 3 */}
        <div className="absolute bottom-32 left-1/4 animate-jelly-float-3">
          <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400/30 to-blue-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg animate-jelly-bounce">
            <Lock className="w-4 h-4 sm:w-6 sm:h-6 text-green-600 dark:text-green-400 animate-lock-rotate" />
          </div>
        </div>

        {/* Lock 4 */}
        <div className="absolute top-1/2 right-1/4 animate-jelly-float-4">
          <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg animate-jelly-bounce-reverse">
            <Lock className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-600 dark:text-yellow-400 animate-lock-rotate-reverse" />
          </div>
        </div>

        {/* Lock 5 - Mobile hidden */}
        <div className="hidden sm:block absolute bottom-20 right-1/3 animate-jelly-float-5">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-400/30 to-red-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg animate-jelly-bounce">
            <Lock className="w-6 h-6 text-pink-600 dark:text-pink-400 animate-lock-rotate" />
          </div>
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Text Content */}
          <div className="text-left lg:pr-8">
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              End-to-End Message
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-shift">
                Encryption Made Simple
              </span>
            </h1>
            <p
              className={`text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl transform transition-all duration-1000 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              Encrypt messages and share them securely. Use our free developer API to integrate into your app with
              enterprise-grade security.
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transform transition-all duration-1000 delay-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <Link
                href="/tool"
                className="group bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Try It Now</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/api-access"
                className="group bg-white dark:bg-gray-800 border-2 border-purple-500 text-purple-600 dark:text-purple-400 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:bg-purple-50 dark:hover:bg-gray-700 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Key className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Get API Key</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Stats or Features */}
            <div
              className={`mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 transform transition-all duration-1000 delay-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 dark:text-blue-400">
                  256-bit
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">3 Layer Encryption</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-600 dark:text-purple-400">
                  99.9%
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Uptime SLA</div>
              </div>
              <div className="text-center lg:text-left col-span-2 sm:col-span-1">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-pink-600 dark:text-pink-400">Free</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">API Access</div>
              </div>
            </div>
          </div>

          {/* Right side - Animated Blob */}
          <div className="flex justify-center lg:justify-end items-center relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px]">
              {/* Main rotating blob */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="w-full h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-20 blur-xl animate-pulse-slow"></div>
              </div>

              {/* Shiny blob with custom shape */}
              <div className="absolute inset-4 animate-spin-reverse">
                <div
                  className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 opacity-80 animate-blob-morph"
                  style={{
                    borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                    background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #06b6d4)",
                    backgroundSize: "400% 400%",
                    animation:
                      "blob-morph 8s ease-in-out infinite, gradient-shift 6s ease infinite, rotate-blob 12s linear infinite",
                    filter: "blur(1px)",
                    boxShadow: "0 0 60px rgba(139, 92, 246, 0.3), inset 0 0 60px rgba(255, 255, 255, 0.1)",
                  }}
                ></div>
              </div>

              {/* Inner glow */}
              <div className="absolute inset-8 animate-spin-slow-reverse">
                <div
                  className="w-full h-full bg-gradient-to-tr from-white/30 via-blue-200/40 to-purple-200/30 opacity-60"
                  style={{
                    borderRadius: "40% 60% 70% 30% / 40% 70% 30% 60%",
                    animation: "blob-morph-reverse 10s ease-in-out infinite, rotate-blob-reverse 15s linear infinite",
                    filter: "blur(2px)",
                  }}
                ></div>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <div
                  className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/40 via-transparent to-transparent rotate-45 animate-shine"
                  style={{
                    animation: "shine 4s ease-in-out infinite",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
