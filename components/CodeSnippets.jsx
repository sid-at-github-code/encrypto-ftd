"use client"

import { useState } from "react"
import { Monitor, Copy, Check, Book, TestTube, MessageCircle } from "lucide-react"

export default function CodeSnippets() {
  const [activeTab, setActiveTab] = useState("javascript")
  const [activeEndpoint, setActiveEndpoint] = useState("encrypt")
  const [copied, setCopied] = useState("")

  
    const snippets = {
    javascript: {
      encrypt: `const formData = new FormData();
formData.append('msg', 'Your message to encrypt');
formData.append('key', 'custom-secret-key');

fetch('https://main-app-link/encryption/by-sid', {
  method: 'POST',
  headers: {
    'x-api-key': 'YOUR_API_KEY'
  },
  body: formData
})
  .then(res => res.json())
  .then(data => {
    console.log('Encrypted Hash:', data.user_h_s_msg);
  })
  .catch(err => console.error('Error:', err));
`,
      decrypt: `const formData = new FormData();
formData.append('secret-msg', 'encrypted_string_here');
formData.append('secret-key', 'custom-secret-key');

fetch('https://main-app-link/decryption/by-sid', {
  method: 'POST',
  headers: {
    'x-api-key': 'YOUR_API_KEY'
  },
  body: formData
})
  .then(res => res.json())
  .then(data => {
    console.log('Decrypted Message:', data.final_decoded_message);
  })
  .catch(err => console.error('Error:', err));
`,
    },
    python: {
      encrypt: `import requests

url = 'https://main-app-link/encryption/by-sid'
headers = {
    'x-api-key': 'YOUR_API_KEY'
}

files = {
    'msg': ('', 'Your message to encrypt'),
    'key': ('', 'custom-secret-key')
}

response = requests.post(url, headers=headers, files=files)

if response.ok:
    result = response.json()
    print("Encrypted Hash:", result['user_h_s_msg'])
else:
    print("Error:", response.text)
`,
      decrypt: `import requests

url = 'https://main-app-link/decryption/by-sid'
headers = {
    'x-api-key': 'YOUR_API_KEY'
}

files = {
    'secret-msg': ('', 'encrypted_string_here'),
    'secret-key': ('', 'custom-secret-key')
}

response = requests.post(url, headers=headers, files=files)

if response.ok:
    result = response.json()
    print("Decrypted Message:", result['final_decoded_message'])
else:
    print("Error:", response.text)
`,
    },
    curl: {
      encrypt: `curl -s -X POST https://main-app-link/encryption/by-sid \
  -H "x-api-key: YOUR_API_KEY" \
  -F "msg=Your message to encrypt" \
  -F "key=custom-secret-key" | jq -r '.user_h_s_msg'
`,
      decrypt: `curl -s -X POST https://main-app-link/decryption/by-sid \
  -H "x-api-key: YOUR_API_KEY" \
  -F "secret-msg=encrypted_string_here" \
  -F "secret-key=custom-secret-key" | jq -r '.final_decoded_message'`,
    },
    node: {
      encrypt: `const axios = require('axios');
const FormData = require('form-data');

const form = new FormData();
form.append('msg', 'Your message to encrypt');
form.append('key', 'custom-secret-key');

axios.post('https://main-app-link/encryption/by-sid', form, {
  headers: {
    ...form.getHeaders(),
    'x-api-key': 'YOUR_API_KEY'
  }
})
.then(response => {
  console.log('Encrypted Hash:', response.data.user_h_s_msg);
})
.catch(error => {
  console.error('Error:', error.response?.data || error.message);
});
`,
      decrypt: `const axios = require('axios');
const FormData = require('form-data');

const form = new FormData();
form.append('secret-msg', 'encrypted_string_here');
form.append('secret-key', 'custom-secret-key');

axios.post('https://main-app-link/decryption/by-sid', form, {
  headers: {
    ...form.getHeaders(),
    'x-api-key': 'YOUR_API_KEY'
  }
})
.then(response => {
  console.log('Decrypted Message:', response.data.final_decoded_message);
})
.catch(error => {
  console.error('Error:', error.response?.data || error.message);
});

`,
    },
  }

  const tabs = [
    { id: "javascript", label: "JavaScript", icon: "JS", color: "from-yellow-500 to-orange-500" },
    { id: "python", label: "Python", icon: "PY", color: "from-blue-500 to-green-500" },
    { id: "node", label: "Node.js", icon: "NODE", color: "from-green-500 to-teal-500" },
    { id: "curl", label: "cURL", icon: "CURL", color: "from-gray-500 to-gray-700" },
  ]

  const endpoints = [
    { id: "encrypt", label: "Encrypt", icon: "🔐", color: "from-blue-500 to-purple-600" },
    { id: "decrypt", label: "Decrypt", icon: "🔓", color: "from-green-500 to-blue-500" },
  ]

  const copyCode = (code, type) => {
    navigator.clipboard.writeText(code)
    setCopied(`${activeTab}-${type}`)
    setTimeout(() => setCopied(""), 2000)
  }

  return (
    <div className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl border border-purple-200 dark:border-purple-800 overflow-hidden">
      <div className="p-6 sm:p-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
            <Monitor className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Code Examples</h2>
        </div>

        {/* Language Tabs */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 p-2 bg-gray-100 dark:bg-gray-700 rounded-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-gray-600"
                }`}
              >
                <span className="text-xs font-bold">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Endpoint Tabs */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 p-2 bg-gray-50 dark:bg-gray-800 rounded-xl">
            {endpoints.map((endpoint) => (
              <button
                key={endpoint.id}
                onClick={() => setActiveEndpoint(endpoint.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                  activeEndpoint === endpoint.id
                    ? `bg-gradient-to-r ${endpoint.color} text-white shadow-lg`
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-gray-600"
                }`}
              >
                <span>{endpoint.icon}</span>
                <span>{endpoint.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Code Block with Mac-style Browser */}
        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
          {/* Mac-style Header */}
          <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors cursor-pointer"></div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-gray-400 text-sm font-mono">
                {tabs.find((t) => t.id === activeTab)?.label} - {endpoints.find((e) => e.id === activeEndpoint)?.label}
              </div>
              <button
                onClick={() => copyCode(snippets[activeTab][activeEndpoint], activeEndpoint)}
                className="text-gray-400 hover:text-white transition-colors duration-200 p-1 rounded hover:bg-gray-700 flex items-center space-x-1"
                title="Copy code"
              >
                {copied === `${activeTab}-${activeEndpoint}` ? (
                  <>
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Code Content */}
          <div className="p-6 overflow-x-auto">
            <pre className="text-gray-100 text-sm leading-relaxed">
              <code className="language-javascript">{snippets[activeTab][activeEndpoint]}</code>
            </pre>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-4 rounded-xl border border-blue-200 dark:border-blue-700">
            <div className="flex items-center space-x-2 mb-2">
              <Book className="w-5 h-5 text-blue-500" />
              <span className="font-semibold text-blue-900 dark:text-blue-100">Documentation</span>
            </div>
            <p className="text-blue-700 dark:text-blue-300 text-sm">View full API docs</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-4 rounded-xl border border-green-200 dark:border-green-700">
            <div className="flex items-center space-x-2 mb-2">
              <TestTube className="w-5 h-5 text-green-500" />
              <span className="font-semibold text-green-900 dark:text-green-100">Test API</span>
            </div>
            <p className="text-green-700 dark:text-green-300 text-sm">Try it in Postman</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-4 rounded-xl border border-purple-200 dark:border-purple-700 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-2">
              <MessageCircle className="w-5 h-5 text-purple-500" />
              <span className="font-semibold text-purple-900 dark:text-purple-100">Support</span>
            </div>
            <p className="text-purple-700 dark:text-purple-300 text-sm">Get help & support</p>
          </div>
        </div>
      </div>
    </div>
  )
}
