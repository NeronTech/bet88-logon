import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export default function LiveMatches() {
  const liveMatches = [
    {
      id: 1,
      league: "Premier League",
      teamA: "Man Utd",
      teamB: "Liverpool",
      score: "1-2",
      minute: "67'",
    },
    {
      id: 2,
      league: "Bundesliga",
      teamA: "Bayern",
      teamB: "Dortmund",
      score: "2-2",
      minute: "78'",
    },
    {
      id: 3,
      league: "Serie A",
      teamA: "Juventus",
      teamB: "Milan",
      score: "0-1",
      minute: "54'",
    },
    {
      id: 4,
      league: "Ligue 1",
      teamA: "PSG",
      teamB: "Marseille",
      score: "3-0",
      minute: "82'",
    },
  ]

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Live Now</h2>
        <Badge variant="outline" className="text-xs">
          See All
        </Badge>
      </div>

      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-3 pb-2">
          {liveMatches.map((match) => (
            <Card key={match.id} className="bg-gray-800 border-0 min-w-[250px]">
              <CardContent className="p-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-400">{match.league}</div>
                  <Badge className="bg-red-500 text-white text-xs">{match.minute}</Badge>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                    <span>{match.teamA}</span>
                  </div>
                  <div className="text-sm font-bold">{match.score}</div>
                  <div className="flex items-center gap-2">
                    <span>{match.teamB}</span>
                    <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mt-3">
                  <div className="bg-gray-700 rounded p-1 text-center text-xs">
                    <div className="font-bold">1.65</div>
                    <div className="text-gray-400">Home</div>
                  </div>
                  <div className="bg-gray-700 rounded p-1 text-center text-xs">
                    <div className="font-bold">2.10</div>
                    <div className="text-gray-400">Draw</div>
                  </div>
                  <div className="bg-gray-700 rounded p-1 text-center text-xs">
                    <div className="font-bold">5.20</div>
                    <div className="text-gray-400">Away</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

