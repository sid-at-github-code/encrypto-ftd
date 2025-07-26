"use client"

import { Lock, Shield, Key, Zap } from "lucide-react"

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Security Icons */}
      <div className="absolute top-20 left-10 animate-jelly-float-1">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-lg animate-jelly-bounce">
          <Lock className="w-6 h-6 text-blue-500/60 animate-lock-rotate" />
        </div>
      </div>

      <div className="absolute top-1/3 right-20 animate-jelly-float-2">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-lg animate-jelly-bounce-reverse">
          <Shield className="w-5 h-5 text-purple-500/60 animate-lock-rotate-reverse" />
        </div>
      </div>

      <div className="absolute bottom-1/3 left-1/4 animate-jelly-float-3">
        <div className="w-8 h-8 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-lg animate-jelly-bounce">
          <Key className="w-4 h-4 text-green-500/60 animate-lock-rotate" />
        </div>
      </div>

      <div className="absolute top-2/3 right-1/3 animate-jelly-float-4">
        <div className="w-14 h-14 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-lg animate-jelly-bounce-reverse">
          <Zap className="w-7 h-7 text-yellow-500/60 animate-lock-rotate-reverse" />
        </div>
      </div>

      <div className="absolute bottom-20 right-1/4 animate-jelly-float-5">
        <div className="w-12 h-12 bg-gradient-to-br from-pink-400/20 to-red-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-lg animate-jelly-bounce">
          <Lock className="w-6 h-6 text-pink-500/60 animate-lock-rotate" />
        </div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-float-reverse"></div>
      <div className="absolute top-1/2 left-1/5 w-20 h-20 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-xl animate-pulse-slow"></div>
    </div>
  )
}
