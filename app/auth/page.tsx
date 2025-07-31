'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function AuthPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Simple password check - you can change this password
    const correctPassword = 'SimplTeam2024!'

    if (password === correctPassword) {
      // Set authentication cookie
      document.cookie = 'simpl-auth=authenticated; path=/; max-age=86400' // 24 hours
      router.push('/')
      router.refresh()
    } else {
      setError('Incorrect password. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-simpl-green via-simpl-green to-simpl-dark-green flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="mb-6">
            <Image
              src="/simpl-logo-green.svg"
              alt="Simpl Healthcare"
              width={180}
              height={45}
              className="mx-auto"
            />
          </div>
          <h1 className="text-2xl font-bold text-simpl-black mb-2 font-manrope">
            Team Preview Access
          </h1>
          <p className="text-simpl-dark-grey">
            Enter the team password to preview the new website
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-simpl-black mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-simpl-green focus:border-simpl-green outline-none transition-colors"
              placeholder="Enter team password"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-simpl-green hover:bg-simpl-dark-green text-white font-semibold py-3 px-4 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Authenticating...' : 'Access Website'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-simpl-dark-grey">
            🚀 <strong>Soft Launch Preview</strong>
          </p>
          <p className="text-xs text-simpl-dark-grey mt-2">
            This is a private preview for the Simpl Healthcare team only.
          </p>
        </div>
      </div>
    </div>
  )
} 