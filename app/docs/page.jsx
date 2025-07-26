"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/ThemeProvider"
import DocsContent from "@/components/DocsContent"
import AnimatedBackground from "@/components/AnimatedBackground"

export default function DocsPage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
        <AnimatedBackground />
        <Navigation />
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">API Documentation</h1>
            <DocsContent />
          </div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
