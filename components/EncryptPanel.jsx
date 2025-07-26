"use client"

import { useState } from "react"
import { Lock, Copy, Check, X, Send, Key, Eye, EyeOff } from "lucide-react"

export default function EncryptPanel() {
  const [message, setMessage] = useState("")
  const [encryptionKey, setEncryptionKey] = useState("")
  const [responseResult, setResponseResult] = useState("")
  const [copied, setCopied] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showKey, setShowKey] = useState(false)

  const generateRandomKey = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let result = ""
    for (let i = 0; i < 32; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setEncryptionKey(result)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(responseResult)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
const handleSubmit = async () => {
  if (!message.trim() || !encryptionKey.trim()) return;

  setIsSubmitting(true);

  try {
    const formData = new FormData();
    formData.append('msg', message);
    formData.append('key', encryptionKey);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/encryption/by-sid`, {
      method: 'POST',
      headers: {
        'x-api-key': 'encrypto-key:sid@master_key' // ✅ your custom API key
      },
      body: formData // Let the browser set the right content-type
    });

    if (response.ok) {
      const result = await response.json(); // or use .json() if it's JSON
      setResponseResult(result.user_h_s_msg);
      console.log('Form submitted successfully');
    } else {
      console.error('Form submission failed');
      setResponseResult('Error: Form submission failed');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    setResponseResult('Error: ' + error.message);
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-900/30 rounded-2xl shadow-xl p-6 border border-blue-200 dark:border-blue-700 transition-all duration-300 hover:shadow-2xl transform hover:scale-[1.02] relative overflow-hidden">
      {/* Sending Illustration */}
      <div className="absolute top-4 right-4 opacity-10 dark:opacity-5">
        <div className="relative">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse-slow">
            <Send className="w-12 h-12 text-white" />
          </div>
          {/* Animated waves */}
          <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping"></div>
          <div className="absolute inset-2 rounded-full border-2 border-purple-400 animate-ping animation-delay-200"></div>
          <div className="absolute inset-4 rounded-full border-2 border-blue-300 animate-ping animation-delay-400"></div>
        </div>
      </div>

      <div className="flex items-center space-x-3 mb-6 relative z-10">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
          <Lock className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Encrypt Message</h2>
        <div className="flex-1 flex justify-end">
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <Send className="w-4 h-4" />
            <span>Sending</span>
          </div>
        </div>
      </div>

      <div className="space-y-4 relative z-10">
        {/* Message Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Your Message (up to 1000 characters)
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={1000}
            rows={6}
            className="w-full p-4 border border-blue-300 dark:border-blue-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 resize-none hover:border-blue-400 dark:hover:border-blue-500"
            placeholder="Enter your message here..."
          />
          <div className="flex justify-between items-center mt-1">
            <div
              className={`text-sm transition-colors duration-200 ${
                message.length > 900 ? "text-red-500" : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {message.length}/1000
            </div>
            {message.length > 0 && (
              <button
                onClick={() => setMessage("")}
                className="text-sm text-gray-500 hover:text-red-500 transition-colors duration-200 flex items-center space-x-1"
              >
                <X className="w-3 h-3" />
                <span>Clear</span>
              </button>
            )}
          </div>
        </div>

        {/* Encryption Key Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Encryption Key</label>
          <div className="relative">
            <input
              type={showKey ? "text" : "password"}
              value={encryptionKey}
              onChange={(e) => setEncryptionKey(e.target.value)}
              className="w-full p-4 pr-24 border border-blue-300 dark:border-blue-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 hover:border-blue-400 dark:hover:border-blue-500 font-mono"
              placeholder="Enter or generate encryption key..."
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
              <button
                onClick={() => setShowKey(!showKey)}
                className="p-2 text-gray-500 hover:text-blue-500 transition-colors duration-200 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
                title={showKey ? "Hide key" : "Show key"}
              >
                {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
              <button
                onClick={generateRandomKey}
                className="p-2 text-gray-500 hover:text-purple-500 transition-colors duration-200 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20"
                title="Generate random key"
              >
                <Key className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center mt-1">
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {encryptionKey.length > 0 ? `${encryptionKey.length} characters` : "Key required for encryption"}
            </div>
            <button
              onClick={generateRandomKey}
              className="text-xs text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors duration-200 font-medium"
            >
              Generate Random Key
            </button>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={!message.trim() || !encryptionKey.trim() || isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 relative overflow-hidden group shadow-lg"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Submitting...</span>
            </div>
          ) : (
            <>
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <Lock className="w-4 h-4" />
                <span>Encrypt & Send</span>
                <Send className="w-4 h-4" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </>
          )}
        </button>

        {responseResult && (
          <div className="space-y-2 animate-fade-in-up">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Server Response</label>
            <div className="relative group">
              <textarea
                value={responseResult}
                readOnly
                rows={3}
                className="w-full p-4 pr-12 border border-blue-300 dark:border-blue-600 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-gray-900 dark:text-white font-mono text-sm transition-all duration-200 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30"
              />
              <button
                onClick={copyToClipboard}
                className="absolute top-3 right-3 p-2 text-blue-500 hover:text-blue-700 transition-all duration-200 hover:scale-110 rounded-lg hover:bg-white dark:hover:bg-blue-800"
                title="Copy to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            {copied && (
              <div className="text-green-600 text-sm flex items-center space-x-1 animate-fade-in">
                <Check className="w-4 h-4" />
                <span>Copied to clipboard!</span>
              </div>
            )}
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
              <div className="flex items-center space-x-2 text-green-700 dark:text-green-300 text-sm">
                <Send className="w-4 h-4" />
                <span className="font-medium">Response Received!</span>
              </div>
              <p className="text-green-600 dark:text-green-400 text-xs mt-1">
                Server has processed your request successfully.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}