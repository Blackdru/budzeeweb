'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { FaBrain, FaGamepad, FaTrophy, FaUsers, FaClock, FaFire } from "react-icons/fa"

interface Game {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  players: number
  gradient: string
  player: {
    name: string
    avatar: string
  }
}

interface GameFilterProps {
  active: boolean
  children: React.ReactNode
}

export default function Games() {
  const [activeFilter, setActiveFilter] = useState('MEMORY GAMES')

  const games: Game[] = [
    {
      id: '1',
      title: 'CARD MATCH',
      icon: <FaBrain className="text-2xl" />,
      description: 'Classic memory card matching',
      difficulty: 'Easy',
      players: 2,
      gradient: 'from-primary to-secondary',
      player: {
        name: 'Alex Johnson',
        avatar: '/api/placeholder/32/32'
      }
    },
    {
      id: '2',
      title: 'PATTERN MEMORY',
      icon: <FaGamepad className="text-2xl" />,
      description: 'Remember complex patterns',
      difficulty: 'Medium',
      players: 4,
      gradient: 'from-secondary to-accent',
      player: {
        name: 'Sarah Wilson',
        avatar: '/api/placeholder/32/32'
      }
    },
    {
      id: '3',
      title: 'SPEED RECALL',
      icon: <FaClock className="text-2xl" />,
      description: 'Fast-paced memory challenge',
      difficulty: 'Hard',
      players: 2,
      gradient: 'from-accent to-primary',
      player: {
        name: 'Mike Chen',
        avatar: '/api/placeholder/32/32'
      }
    },
    {
      id: '4',
      title: 'SEQUENCE MASTER',
      icon: <FaTrophy className="text-2xl" />,
      description: 'Master sequence memorization',
      difficulty: 'Medium',
      players: 3,
      gradient: 'from-primary to-accent',
      player: {
        name: 'Emma Davis',
        avatar: '/api/placeholder/32/32'
      }
    },
    {
      id: '5',
      title: 'BRAIN TRAINER',
      icon: <FaFire className="text-2xl" />,
      description: 'Ultimate brain workout',
      difficulty: 'Hard',
      players: 1,
      gradient: 'from-secondary to-primary',
      player: {
        name: 'David Kim',
        avatar: '/api/placeholder/32/32'
      }
    },
    {
      id: '6',
      title: 'TEAM MEMORY',
      icon: <FaUsers className="text-2xl" />,
      description: 'Collaborative memory game',
      difficulty: 'Easy',
      players: 4,
      gradient: 'from-accent to-secondary',
      player: {
        name: 'Lisa Brown',
        avatar: '/api/placeholder/32/32'
      }
    }
  ]

  const filters = ['MEMORY GAMES', 'MULTIPLAYER', 'SINGLE PLAYER', 'TOURNAMENTS']

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-secondary'
      case 'Medium': return 'text-accent'
      case 'Hard': return 'text-destructive'
      default: return 'text-muted-foreground'
    }
  }

  return (
    <div className="w-full bg-gradient-to-br from-background via-card/10 to-background p-4 sm:p-6 md:p-8">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8">
        EXPLORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">MEMORY GAMES</span>
      </h2>

      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
          {filters.map((filter) => (
            <GameFilter
              key={filter}
              active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </GameFilter>
          ))}
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <div
              key={game.id}
              className="rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm border border-border hover:bg-card/70 transition-all duration-300 group"
            >
              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Game Icon & Title */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${game.gradient} rounded-xl flex items-center justify-center text-white`}>
                    {game.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground">{game.title}</h3>
                    <p className="text-sm text-muted-foreground">{game.description}</p>
                  </div>
                </div>

                {/* Game Stats */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <span className={`font-semibold ${getDifficultyColor(game.difficulty)}`}>
                      {game.difficulty}
                    </span>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <FaUsers className="text-xs" />
                      {game.players} Players
                    </span>
                  </div>
                </div>

                {/* Player Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8 border border-border">
                      <AvatarImage src={game.player.avatar} alt={game.player.name} />
                      <AvatarFallback className="text-xs">{game.player.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">{game.player.name}</span>
                  </div>
                  
                  <Button 
                    className={`bg-gradient-to-r ${game.gradient} hover:opacity-90 text-white font-bold py-2 px-4 text-sm rounded-xl transition-all duration-300 group-hover:scale-105 shadow-lg`}
                  >
                    PLAY NOW
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button 
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25"
          >
            VIEW ALL GAMES
          </Button>
        </div>
      </div>
    </div>
  )
}

function GameFilter({ active, children, onClick }: GameFilterProps & { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300",
        "border border-transparent",
        active
          ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25"
          : "bg-card/50 border-border text-muted-foreground hover:text-foreground hover:bg-card"
      )}
    >
      {children}
    </button>
  )
}