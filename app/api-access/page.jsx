"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/ThemeProvider"
import ApiKeySection from "@/components/ApiKeySection"
import CodeSnippets from "@/components/CodeSnippets"
import AnimatedBackground from "@/components/AnimatedBackground"

export default function ApiPage() {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const searchParams = useSearchParams()

  useEffect(() => {
    const signedInFlag = searchParams.get("signedIn")
    if (signedInFlag === "True") {
      setIsSignedIn(true)
    }
  }, [searchParams])

  const handleEmailSubmit = async () => {
    // Validate email
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dev/get-token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      
      // Extract the link from the response
      if (data.link) {
        // Redirect to the link
        window.location.href = data.link
      } else {
        setError("No redirect link received from server")
      }
    } catch (error) {
      console.error("Error:", error)
      setError("Failed to process request. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
        <AnimatedBackground />
        <Navigation />
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Developer API Access</h1>

            {!isSignedIn ? (
              <div className="text-center">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    Sign in to get your API key
                  </h2>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white w-full sm:w-auto"
                      disabled={isLoading}
                    />
                    <button
                      onClick={handleEmailSubmit}
                      disabled={isLoading}
                      className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-medium transition-colors duration-200"
                    >
                      {isLoading ? "Processing..." : "Sign in with email"}
                    </button>
                  </div>
                  
                  {error && (
                    <div className="mt-4 p-3 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded-lg">
                      <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <>
                <ApiKeySection />
                <CodeSnippets />
              </>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}