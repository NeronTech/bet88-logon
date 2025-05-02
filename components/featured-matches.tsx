import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FeaturedMatches() {
  const matches = [
    {
      id: 1,
      league: "Premier League",
      teamA: "Arsenal",
      teamB: "Chelsea",
      time: "Today, 20:00",
      live: true,
    },
    {
      id: 2,
      league: "La Liga",
      teamA: "Barcelona",
      teamB: "Real Madrid",
      time: "Tomorrow, 21:00",
      live: false,
    },
    {
      id: 3,
      league: "NBA",
      teamA: "Lakers",
      teamB: "Warriors",
      time: "Today, 22:30",
      live: true,
    },
  ]

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Featured Matches</h2>
        <Badge variant="outline" className="text-xs">
          See All
        </Badge>
      </div>

      <div className="space-y-3">
        {matches.map((match) => (
          <Card key={match.id} className="bg-gray-800 border-0">
            <CardContent className="p-3">
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-400">{match.league}</div>
                {match.live ? (
                  <Badge className="bg-red-500 text-white text-xs">LIVE</Badge>
                ) : (
                  <div className="text-xs text-gray-400">{match.time}</div>
                )}
              </div>

              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                  <span>{match.teamA}</span>
                </div>
                <div className="text-sm">vs</div>
                <div className="flex items-center gap-2">
                  <span>{match.teamB}</span>
                  <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-3">
                <div className="bg-gray-700 rounded p-1 text-center text-xs">
                  <div className="font-bold">1.95</div>
                  <div className="text-gray-400">Home</div>
                </div>
                <div className="bg-gray-700 rounded p-1 text-center text-xs">
                  <div className="font-bold">3.40</div>
                  <div className="text-gray-400">Draw</div>
                </div>
                <div className="bg-gray-700 rounded p-1 text-center text-xs">
                  <div className="font-bold">3.80</div>
                  <div className="text-gray-400">Away</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

