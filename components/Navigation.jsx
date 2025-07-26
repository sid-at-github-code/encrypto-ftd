"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "./ThemeProvider"
import { Moon, Sun, Menu, X } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-lg" : "bg-white dark:bg-gray-800"
      } border-b border-gray-200 dark:border-gray-700`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-md">
                  <img
                    src="/main_logo_encrypto.png"
                    alt="Encrypto Logo"
                    className="w-full h-full object-cover"
                  />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors duration-300">
              Encrypto
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-200 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/tool"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-200 relative group"
            >
              Tool
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/api-access"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-200 relative group"
            >
              API
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/docs"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-200 relative group"
            >
              Docs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-110"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform duration-200"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform duration-200"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-64 pb-4" : "max-h-0"}`}
        >
          <div className="flex flex-col space-y-2 animate-fade-in">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 py-2 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg px-2"
            >
              Home
            </Link>
            <Link
              href="/tool"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 py-2 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg px-2"
            >
              Tool
            </Link>
            <Link
              href="/api-access"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 py-2 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg px-2"
            >
              API
            </Link>
            <Link
              href="/docs"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 py-2 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg px-2"
            >
              Docs
            </Link>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 text-left hover:scale-105">
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
