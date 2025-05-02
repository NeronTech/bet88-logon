"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, X, Share2 } from "lucide-react"
import Image from "next/image"

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showPrompt, setShowPrompt] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [isIOSChrome, setIsIOSChrome] = useState(false)
  const [isIOSSafari, setIsIOSSafari] = useState(false)
  const [showSteps, setShowSteps] = useState(false)

  useEffect(() => {
    // Check if it's iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    setIsIOS(isIOSDevice)

    // Check if it's Safari on iOS
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    setIsIOSSafari(isIOSDevice && isSafari)

    // Check if it's Chrome on iOS
    const isChrome = /CriOS/i.test(navigator.userAgent)
    setIsIOSChrome(isIOSDevice && isChrome)

    // For non-iOS devices, use the beforeinstallprompt event
    if (!isIOSDevice) {
      const handleBeforeInstallPrompt = (e: Event) => {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault()
        // Stash the event so it can be triggered later
        setDeferredPrompt(e)
        // Show the install prompt banner
        setShowPrompt(true)
      }

      window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)

      return () => {
        window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
      }
    } else {
      // For iOS, check if the app is already installed
      const isStandalone = "standalone" in window.navigator && (window.navigator as any).standalone
      if (!isStandalone) {
        // Show the prompt after a short delay to not interrupt initial page load
        const timer = setTimeout(() => {
          setShowPrompt(true)
        }, 2000)
        return () => clearTimeout(timer)
      }
    }
  }, [])

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      // For Android/Desktop
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      console.log(`User response to the install prompt: ${outcome}`)
      setDeferredPrompt(null)
      setShowPrompt(false)
    } else if (isIOS) {
      // For iOS, show installation steps
      setShowSteps(true)
    }
  }

  const dismissPrompt = () => {
    setShowPrompt(false)
    setShowSteps(false)
  }

  if (!showPrompt) return null

  return (
    <div className="fixed bottom-20 left-4 right-4 md:left-auto md:right-4 md:bottom-4 md:w-80 bg-gray-800 rounded-lg shadow-lg z-50 p-4 border border-gray-700 animate-in fade-in slide-in-from-bottom-5">
      <div className="flex items-start">
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 mr-3 relative overflow-hidden rounded-lg">
              <Image
                src="https://d2ygwlcxd4dd5s.cloudfront.net/BET_88_LOGO_with_encircled_colored_pagcor_63e9807d1d.png"
                alt="App Logo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-white">Install Bet88</h3>
              <p className="text-xs text-gray-300">Get the best experience</p>
            </div>
          </div>

          {showSteps ? (
            <div className="text-sm text-gray-300 mb-3 space-y-2">
              <p className="font-semibold">How to install on iOS:</p>
              {isIOSSafari ? (
                <ol className="list-decimal pl-5 space-y-1">
                  <li>
                    Tap the <Share2 className="inline-block h-4 w-4" /> share icon
                  </li>
                  <li>Scroll down and tap "Add to Home Screen"</li>
                  <li>Tap "Add" in the top right</li>
                </ol>
              ) : isIOSChrome ? (
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Tap the ⋮ menu icon</li>
                  <li>Tap "Share..."</li>
                  <li>Tap "Add to Home Screen"</li>
                </ol>
              ) : (
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Open this site in Safari</li>
                  <li>Tap the share icon</li>
                  <li>Tap "Add to Home Screen"</li>
                </ol>
              )}
              <Button onClick={dismissPrompt} variant="outline" className="w-full mt-2">
                Got it
              </Button>
            </div>
          ) : (
            <Button onClick={handleInstallClick} className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
              <Download className="w-4 h-4 mr-2" />
              Install App
            </Button>
          )}
        </div>
        <Button variant="ghost" size="icon" onClick={dismissPrompt} className="ml-2 -mt-1 -mr-1">
          <X className="h-4 w-4" />
          <span className="sr-only">Dismiss</span>
        </Button>
      </div>
    </div>
  )
}

