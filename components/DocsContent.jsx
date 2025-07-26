"use client"

export default function DocsContent() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Authentication</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          All API requests require authentication using your API key in the Authorization header:
        </p>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-8">
          <code>x-api-key: YOUR_API_KEY</code>
        </pre>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Endpoints</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">POST /encrypt</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Encrypt a text message.</p>

            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Request Body (form data format):</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4">
              {`{
  "msg": "Your message to encrypt" ,
  "key": "Your encryption key"
}`}
            </pre>

            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Response:</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4">
              {`{
    "note": "msg is deleted after recieved, if not then auto-deleted in 24-hrs ",
    "status": "recieved",
    "user_h_s_msg": "b3c50e90605639ef1c095a8ea7b36e0b7ff3b4c4700af4d0e5c8d72075ba5177",
    "your_set_key": "your_key expires after 30 days "
}`}
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">POST /decrypt</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Decrypt an encrypted string.</p>

            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Request Body:(form data)</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4">
              {`{
  "secret-msg": "encrypted_string_here",
  "secret-password": "your_key"
}`}
            </pre>

            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Response:</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4">
              {`{
    "final_decoded_message": "decoded_message_here",
    "key_status": "You can reuse the password key for future encoding & decoding",
    "msg_status": "The Message has been permanently deleted"
}`}
            </pre>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-12">Rate Limits</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Free tier: 10 requests per hour per API key</p>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-8">Error Codes</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
            <div className="font-semibold text-gray-900 dark:text-white">400 - Bad Request</div>
            <div className="text-gray-600 dark:text-gray-300">Invalid request format or missing required fields</div>
          </div>
          <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
            <div className="font-semibold text-gray-900 dark:text-white">401 - Unauthorized</div>
            <div className="text-gray-600 dark:text-gray-300">Invalid or missing API key</div>
          </div>
          <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
            <div className="font-semibold text-gray-900 dark:text-white">429 - Too Many Requests</div>
            <div className="text-gray-600 dark:text-gray-300">Rate limit exceeded</div>
          </div>
          <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
            <div className="font-semibold text-gray-900 dark:text-white">500 - Internal Server Error</div>
            <div className="text-gray-600 dark:text-gray-300">Server error occurred</div>
          </div>
        </div>
      </div>
    </div>
  )
}
