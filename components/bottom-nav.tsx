import { Home, Search, Trophy, User, Wallet } from "lucide-react"
import Link from "next/link"

export default function BottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-800">
      <div className="grid grid-cols-5 h-16">
        <Link href="/" className="flex flex-col items-center justify-center">
          <Home className="h-5 w-5" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link href="#" className="flex flex-col items-center justify-center">
          <Search className="h-5 w-5" />
          <span className="text-xs mt-1">Search</span>
        </Link>
        <Link href="#" className="flex flex-col items-center justify-center">
          <Trophy className="h-5 w-5" />
          <span className="text-xs mt-1">Sports</span>
        </Link>
        <Link href="#" className="flex flex-col items-center justify-center">
          <Wallet className="h-5 w-5" />
          <span className="text-xs mt-1">Wallet</span>
        </Link>
        <Link href="#" className="flex flex-col items-center justify-center">
          <User className="h-5 w-5" />
          <span className="text-xs mt-1">Account</span>
        </Link>
      </div>
    </div>
  )
}

