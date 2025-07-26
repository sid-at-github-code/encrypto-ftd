"use client"

import { useState, useEffect, useRef } from "react"
import { Edit3, Lock, Unlock } from "lucide-react"

export default function HowItWorks() {
  const [visibleSteps, setVisibleSteps] = useState([])
  const sectionRef = useRef(null)

  const steps = [
    {
      number: "1",
      title: "Write a message",
      description: "Enter your text message that you want to encrypt securely",
      icon: Edit3,
    },
    {
      number: "2",
      title: "Encrypt & share secure string",
      description: "Get an encrypted string that you can safely share with anyone",
      icon: Lock,
    },
    {
      number: "3",
      title: "Receiver pastes and decrypts",
      description: "The recipient uses the encrypted string to reveal your message",
      icon: Unlock,
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, index])
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 px-4 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Simple, secure encryption in three easy steps
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div
                key={index}
                className={`text-center group transform transition-all duration-700 ${
                  visibleSteps.includes(index)
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-10 opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    {step.number}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center animate-bounce-slow">
                    <IconComponent className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-blue-500 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
