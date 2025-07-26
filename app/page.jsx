"use client"
import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"
import SplitSection from "@/components/SplitSection"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/ThemeProvider"

export default function HomePage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navigation />
        <div className="pt-16">
          <Hero />
          <HowItWorks />
          <SplitSection />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
