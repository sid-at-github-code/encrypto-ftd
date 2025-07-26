"use client"

import { useState } from "react"
import { Unlock, Copy, Check, X, AlertTriangle, Download, Eye, EyeOff } from "lucide-react"

export default function DecryptPanel() {
  const [encryptedString, setEncryptedString] = useState("")
  const [decryptionKey, setDecryptionKey] = useState("")
  const [responseResult, setResponseResult] = useState("")
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showKey, setShowKey] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(responseResult)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
const handleSubmit = async () => {
  if (!encryptedString.trim() || !decryptionKey.trim()) return;

  setIsSubmitting(true);
  setError("");
  setResponseResult("");

  try {
    const formData = new FormData();
    formData.append('secret-msg', encryptedString);
    formData.append('secret-password', decryptionKey);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/decryption/by-sid`, {
      method: 'POST',
      headers: {
        'x-api-key': 'encrypto-key:sid@master_key' // ✅ Added header here
      },
      body: formData
    });

    if (response.ok) {
      const result = await response.json(); // or use .json() if needed
      setResponseResult(result.final_decoded_message);
      setError("");
      console.log('Form submitted successfully');
    } else {
      const errorText = await response.text();
      setError('Server Error: ' + errorText);
      setResponseResult("");
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    setError('Network Error: ' + error.message);
    setResponseResult("");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="bg-gradient-to-br from-white to-green-50 dark:from-gray-800 dark:to-green-900/30 rounded-2xl shadow-xl p-6 border border-green-200 dark:border-green-700 transition-all duration-300 hover:shadow-2xl transform hover:scale-[1.02] relative overflow-hidden">
      {/* Receiving Illustration */}
      <div className="absolute top-4 right-4 opacity-10 dark:opacity-5">
        <div className="relative">
          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center animate-pulse-slow">
            <Download className="w-12 h-12 text-white" />
          </div>
          {/* Animated incoming waves */}
          <div className="absolute -inset-2 rounded-full border-2 border-green-400 animate-ping"></div>
          <div className="absolute -inset-4 rounded-full border-2 border-blue-400 animate-ping animation-delay-200"></div>
          <div className="absolute -inset-6 rounded-full border-2 border-green-300 animate-ping animation-delay-400"></div>
        </div>
      </div>

      <div className="flex items-center space-x-3 mb-6 relative z-10">
        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
          <Unlock className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Decrypt Message</h2>
        <div className="flex-1 flex justify-end">
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <Download className="w-4 h-4" />
            <span>Receiving</span>
          </div>
        </div>
      </div>

      <div className="space-y-4 relative z-10">
        {/* Encrypted String Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Encrypted String</label>
          <textarea
            value={encryptedString}
            onChange={(e) => setEncryptedString(e.target.value)}
            rows={3}
            className="w-full p-4 border border-green-300 dark:border-green-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-mono text-sm transition-all duration-200 resize-none hover:border-green-400 dark:hover:border-green-500"
            placeholder="Paste encrypted string here..."
          />
          {encryptedString.length > 0 && (
            <div className="flex justify-between items-center mt-1">
              <div className="text-xs text-gray-500 dark:text-gray-400">{encryptedString.length} characters</div>
              <button
                onClick={() => setEncryptedString("")}
                className="text-sm text-gray-500 hover:text-red-500 transition-colors duration-200 flex items-center space-x-1"
              >
                <X className="w-3 h-3" />
                <span>Clear</span>
              </button>
            </div>
          )}
        </div>

        {/* Decryption Key Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Decryption Key</label>
          <div className="relative">
            <input
              type={showKey ? "text" : "password"}
              value={decryptionKey}
              onChange={(e) => setDecryptionKey(e.target.value)}
              className="w-full p-4 pr-12 border border-green-300 dark:border-green-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 hover:border-green-400 dark:hover:border-green-500 font-mono"
              placeholder="Enter the decryption key..."
            />
            <button
              onClick={() => setShowKey(!showKey)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-green-500 transition-colors duration-200 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20"
              title={showKey ? "Hide key" : "Show key"}
            >
              {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {decryptionKey.length > 0 ? `${decryptionKey.length} characters` : "Key required for decryption"}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={!encryptedString.trim() || !decryptionKey.trim() || isSubmitting}
          className="w-full bg-gradient-to-r from-green-600 to-blue-700 hover:from-green-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 relative overflow-hidden group shadow-lg"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Processing...</span>
            </div>
          ) : (
            <>
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Decrypt & Receive</span>
                <Unlock className="w-4 h-4" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </>
          )}
        </button>

        {error && (
          <div className="text-red-600 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-200 dark:border-red-800 animate-shake">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4" />
              <span>{error}</span>
            </div>
          </div>
        )}

        {responseResult && (
          <div className="space-y-2 animate-fade-in-up">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Server Response</label>
            <div className="relative group">
              <textarea
                value={responseResult}
                readOnly
                rows={6}
                className="w-full p-4 pr-12 border border-green-300 dark:border-green-600 rounded-xl bg-green-50 dark:bg-green-900/20 text-gray-900 dark:text-white transition-all duration-200 group-hover:bg-green-100 dark:group-hover:bg-green-900/30"
              />
              <button
                onClick={copyToClipboard}
                className="absolute top-3 right-3 p-2 text-green-500 hover:text-green-700 transition-all duration-200 hover:scale-110 rounded-lg hover:bg-white dark:hover:bg-green-800"
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
                <Check className="w-4 h-4" />
                <span className="font-medium">Response Received Successfully!</span>
              </div>
              <p className="text-green-600 dark:text-green-400 text-xs mt-1">
                Server has processed your decryption request successfully.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}