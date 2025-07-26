"use client"

import { useState , useEffect } from "react"
import { Key, Zap, Clock, Sparkles } from "lucide-react"

export default function ApiKeySection() {
  
  const [copied, setCopied] = useState(false)

  const copyApiKey = () => {
    navigator.clipboard.writeText(apiKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
const [apiKey, setApiKey] = useState('');
const [email, setEmail] = useState('');
const [expiry, setExpiry] = useState('');
const [loading, setLoading] = useState(true);

useEffect(() => {
  const params = new URLSearchParams(window.location.search);

  const token = params.get('token');
  const emailParam = params.get('email');
  const expiryParam = params.get('expiry');

  if (token) setApiKey(token);
  if (emailParam) setEmail(decodeURIComponent(emailParam));
  if (expiryParam) setExpiry(decodeURIComponent(expiryParam));

  setLoading(false);
}, []);

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-6 sm:p-8 mb-8 border border-blue-200 dark:border-blue-800 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full translate-y-12 -translate-x-12"></div>

      <div className="relative z-10">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Key className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your API Key</h2>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg">
            <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400 ml-4">API Key</span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={loading ? 'Loading...' : apiKey}
                  readOnly
                  className="flex-1 p-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white font-mono text-sm rounded-lg border-0 focus:ring-0"
                />
                <button
                  onClick={copyApiKey}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-2"
                >
                  {copied ? (
                    <>
                      <span className="text-sm">✓ Copied!</span>
                    </>
                  ) : (
                    <>
                      <span className="text-sm">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-4 rounded-xl border border-blue-200 dark:border-blue-700">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div className="font-semibold text-blue-900 dark:text-blue-100">Rate Limit</div>
              </div>
              <div className="text-blue-700 dark:text-blue-300 font-medium">10 requests/hour</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-4 rounded-xl border border-green-200 dark:border-green-700">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div className="font-semibold text-green-900 dark:text-green-100">Expires</div>
              </div>
              <div className="text-green-700 dark:text-green-300 font-medium">{expiry}</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-4 rounded-xl border border-purple-200 dark:border-purple-700 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="font-semibold text-purple-900 dark:text-purple-100">email</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-purple-700 dark:text-purple-300 font-medium">{email}</span>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
