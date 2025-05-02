"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Bell, Menu, Search, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Header() {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
      <div className="flex items-center justify-between p-4">
        {/* Left side - Menu and Logo */}
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-gray-900 text-white border-r border-gray-800">
              <div className="flex flex-col gap-6 mt-6">
                <Link href="/" className="flex items-center gap-2 text-lg font-bold">
                  <div className="relative w-8 h-8">
                    <Image
                      src="https://d2ygwlcxd4dd5s.cloudfront.net/BET_88_LOGO_with_encircled_colored_pagcor_63e9807d1d.png"
                      alt="Bet88 Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  Bet88
                </Link>
                <nav className="flex flex-col gap-4">
                  <Link href="#" className="flex items-center gap-2 text-sm">
                    Sports
                  </Link>
                  <Link href="#" className="flex items-center gap-2 text-sm">
                    Live Betting
                  </Link>
                  <Link href="#" className="flex items-center gap-2 text-sm">
                    Casino
                  </Link>
                  <Link href="#" className="flex items-center gap-2 text-sm">
                    Promotions
                  </Link>
                  <Link href="#" className="flex items-center gap-2 text-sm">
                    VIP Program
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center text-lg font-bold">
            <div className="relative w-8 h-8 mr-2">
              <Image
                src="https://d2ygwlcxd4dd5s.cloudfront.net/BET_88_LOGO_with_encircled_colored_pagcor_63e9807d1d.png"
                alt="Bet88 Logo"
                fill
                className="object-contain"
              />
            </div>
            Bet88
          </Link>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setShowSearch(!showSearch)}>
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>

          <Button variant="outline" size="sm" className="hidden md:flex">
            <User className="h-4 w-4 mr-2" />
            Login
          </Button>

          <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black hidden md:flex">
            Register
          </Button>
        </div>
      </div>

      {/* Search bar */}
      {showSearch && (
        <div className="px-4 pb-3 animate-in fade-in">
          <Input placeholder="Search events, teams, or players..." className="bg-gray-800 border-gray-700" />
        </div>
      )}
    </header>
  )
}

