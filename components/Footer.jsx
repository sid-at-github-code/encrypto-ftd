"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <img
                    src="/main_logo_encrypto.png"
                    alt="Encrypto Logo"
                    className="w-full h-full object-cover"
                  />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">Encrypto</span>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-gray-600 dark:text-gray-300">
            <a
              href="https://github.com/sid-at-github-code"
              className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
            >
              GitHub
            </a>
            <Link href="/docs" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
              Docs
            </Link>
            
            <a href="https://www.linkedin.com/in/techsid01" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
              Creators Linkedin
            </a>
            <a href="mailto:siddharthpatol0206@gmail.com" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
              Contact
            </a>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400">© 2025 Encrypto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
