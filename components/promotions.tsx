import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Image from "next/image"

export default function Promotions() {
  const promotions = [
    {
      id: 1,
      title: "Welcome Bonus",
      description: "100% up to $100",
    },
    {
      id: 2,
      title: "Free Bet",
      description: "Bet $50 Get $20 Free",
    },
    {
      id: 3,
      title: "Accumulator Bonus",
      description: "Up to 70% extra on accumulators",
    },
    {
      id: 4,
      title: "Refer a Friend",
      description: "Get $50 for each referral",
    },
  ]

  return (
    <div className="space-y-2 mt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Promotions</h2>
        <Badge variant="outline" className="text-xs">
          See All
        </Badge>
      </div>

      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-3 pb-2">
          {promotions.map((promo) => (
            <Card key={promo.id} className="bg-gray-800 border-0 min-w-[200px] overflow-hidden">
              <div className="h-24 relative">
                <Image
                  src={`https://d2ygwlcxd4dd5s.cloudfront.net/Signup_Banner_2_f4c570a5b4.jpg?height=150&width=200&text=${encodeURIComponent(promo.title)}`}
                  alt={promo.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center justify-center">
                  <h3 className="text-lg font-bold text-white">{promo.title}</h3>
                </div>
              </div>
              <CardContent className="p-3">
                <p className="text-sm text-center">{promo.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

