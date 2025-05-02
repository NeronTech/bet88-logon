import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import BottomNav from "@/components/bottom-nav"
import LiveMatches from "@/components/live-matches"
import Promotions from "@/components/promotions"
import CasinoGames from "@/components/casino-games"
import RegisterSW from "./register-sw"
import InstallPrompt from "@/components/install-prompt"
import IOSInstallBanner from "@/components/ios-install-banner"

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      <RegisterSW />
      <IOSInstallBanner />
      <Header />
      <InstallPrompt />

      {/* Hero Banner */}
      <div className="relative w-full h-48 md:h-64">
        <Image
          src="https://d2ygwlcxd4dd5s.cloudfront.net/Bet88_How_To_Download_2500x799_enp_0461d80d2d.jpg?height=400&width=800"
          alt="Welcome Bonus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-2">Welcome Bonus</h1>
            <p className="text-sm mb-4">Get up to $100 on your first deposit</p>
            <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black" asChild>
              <Link
                href="https://script.google.com/macros/s/AKfycbzsIGE0OsETk3zRx1h1zExsAI6hzgdRfsYwYJJV_MV3OSSAHiiFRF13Zn1UDuzB-A/exec"
                target="_blank"
                rel="noopener noreferrer"
              >
                Claim Now
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <Tabs defaultValue="sports" className="w-full">
          <TabsList className="grid grid-cols-5 mb-4">
            <TabsTrigger value="sports">Sports</TabsTrigger>
            <TabsTrigger value="live">Live</TabsTrigger>
            <TabsTrigger value="casino">Casino</TabsTrigger>
            <TabsTrigger value="slots">Slots</TabsTrigger>
            <TabsTrigger value="poker">Poker</TabsTrigger>
          </TabsList>

          <TabsContent value="sports" className="space-y-4">
            <CasinoGames />
          </TabsContent>

          <TabsContent value="live">
            <div className="grid gap-4">
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://d2ygwlcxd4dd5s.cloudfront.net/BET_88_LOGO_with_encircled_colored_pagcor_63e9807d1d.png?height=400&width=800"
                  alt="Live Casino"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-4">
                    <Badge className="bg-red-500 text-white mb-2">LIVE</Badge>
                    <h3 className="text-xl font-bold">Live Roulette</h3>
                    <p className="text-sm text-gray-300">Join now and play with live dealers</p>
                  </div>
                </div>
              </div>

              <LiveMatches />
            </div>
          </TabsContent>

          <TabsContent value="casino">
            <div className="space-y-4">
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://d2ygwlcxd4dd5s.cloudfront.net/static_en_6ff5e4ce09.jpg?height=400&width=800"
                  alt="Casino Games"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-4">
                    <h3 className="text-xl font-bold">Premium Casino</h3>
                    <p className="text-sm text-gray-300">Experience the thrill of our live casino games</p>
                  </div>
                </div>
              </div>

              <CasinoGames />
            </div>
          </TabsContent>

          <TabsContent value="slots">
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <Card key={index} className="bg-gray-800 border-0 overflow-hidden">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={`https://d2ygwlcxd4dd5s.cloudfront.net/Hot_Jackpot_en_2_27240bc484.jpg?height=300&width=200&text=Slot${index}`}
                      alt={`Slot Game ${index}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-3">
                    <h3 className="font-medium">Slot Game {index}</h3>
                    <p className="text-xs text-gray-400">Provider Name</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="poker">
            <div className="space-y-4">
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://bet88asian.com/wp-content/uploads/2024/12/Bet88-Home.jpg?height=400&width=800"
                  alt="Poker Games"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-4">
                    <h3 className="text-xl font-bold">Poker Tournaments</h3>
                    <p className="text-sm text-gray-300">Join our daily tournaments with big prizes</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                {["Texas Hold'em", "Omaha", "Seven Card Stud", "Caribbean Stud"].map((game, index) => (
                  <Card key={game} className="bg-gray-800 border-0 overflow-hidden">
                    <div className="relative h-40">
                      <Image
                        src={`https://d2ygwlcxd4dd5s.cloudfront.net/Live_Rebate_en_ae4acff90d.jpg?height=300&width=400&text=${encodeURIComponent(game)}`}
                        alt={game}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                        <div className="p-4">
                          <h3 className="font-bold">{game}</h3>
                          <p className="text-xs text-gray-300">Join table now</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <Promotions />
      </div>

      <BottomNav />
    </main>
  )
}

