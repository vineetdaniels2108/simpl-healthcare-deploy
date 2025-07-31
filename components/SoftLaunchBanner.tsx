'use client'

import { useState } from 'react'
import { X, Eye } from 'lucide-react'

export default function SoftLaunchBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4" />
          <span className="text-sm font-medium">
            🚀 <strong>SOFT LAUNCH PREVIEW</strong> - This is a private preview for the Simpl Healthcare team
          </span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-white/80 transition-colors"
          aria-label="Close banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
} 