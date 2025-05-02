import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Image from "next/image"

export default function CasinoGames() {
  const games = [
    {
      id: 1,
      title: "Roulette",
      provider: "Evolution Gaming",
    },
    {
      id: 2,
      title: "Blackjack",
      provider: "Playtech",
    },
    {
      id: 3,
      title: "Baccarat",
      provider: "Ezugi",
    },
    {
      id: 4,
      title: "Poker",
      provider: "Evolution Gaming",
    },
    {
      id: 5,
      title: "Slots",
      provider: "NetEnt",
    },
  ]

  return (
    <div className="space-y-2 mt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Casino Games</h2>
        <Badge variant="outline" className="text-xs">
          See All
        </Badge>
      </div>

      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-3 pb-2">
          {games.map((game) => (
            <Card key={game.id} className="bg-gray-800 border-0 min-w-[180px] overflow-hidden">
              <div className="relative h-32">
                <Image
                  src={`https://games.evolution.com/wp-content/uploads/2023/07/first_person_xxxtreme_lightning_roulette_thumbnail_1000x563_2023_05.jpg?height=200&width=180&text=${encodeURIComponent(game.title)}`}
                  alt={game.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-2">
                    <h3 className="font-bold text-white">{game.title}</h3>
                    <p className="text-xs text-gray-300">{game.provider}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

