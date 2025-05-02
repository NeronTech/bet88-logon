"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Share2, X } from "lucide-react"
import Image from "next/image"

export default function IOSInstallBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if it's iOS Safari and not in standalone mode
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    const isStandalone = "standalone" in window.navigator && (window.navigator as any).standalone

    if (isIOS && isSafari && !isStandalone) {
      // Show banner after user has been on the site for a few seconds
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [])

  if (!showBanner) return null

  return (
    <div className="fixed top-0 left-0 right-0 bg-yellow-500 text-black p-2 z-50 flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-8 h-8 relative mr-2">
          <Image
            src="https://d2ygwlcxd4dd5s.cloudfront.net/BET_88_LOGO_with_encircled_colored_pagcor_63e9807d1d.png"
            alt="Bet88 Logo"
            fill
            className="object-contain"
          />
        </div>
        <div className="text-xs">
          <p className="font-bold">Install Bet88 on your iPhone</p>
          <p>
            Tap <Share2 className="inline h-3 w-3" /> and then "Add to Home Screen"
          </p>
        </div>
      </div>
      <Button variant="ghost" size="icon" onClick={() => setShowBanner(false)} className="text-black">
        <X className="h-4 w-4" />
      </Button>
    </div>
  )
}

