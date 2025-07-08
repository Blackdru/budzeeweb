'use client'

import React, { useEffect, useState } from 'react'
import { Brain, Shield, Zap, Users, Trophy, LucideIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { FaBrain, FaGamepad, FaTrophy } from 'react-icons/fa'

interface Game {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

interface FeatureProps {
  icon: LucideIcon;
  text: string;
  color: string;
}

export default function Cards(): React.ReactElement {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const games: Game[] = [
    { 
      title: "Memory Match",
      description: "Classic card matching game",
      icon: <FaBrain className="text-4xl" />,
      gradient: "from-primary to-secondary"
    },
    { 
      title: "Pattern Memory",
      description: "Remember and repeat patterns",
      icon: <FaGamepad className="text-4xl" />,
      gradient: "from-secondary to-accent"
    },
    { 
      title: "Speed Memory",
      description: "Fast-paced memory challenges",
      icon: <FaTrophy className="text-4xl" />,
      gradient: "from-accent to-primary"
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % games.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [games.length])

  const getCardStyle = (index: number): React.CSSProperties => {
    const position = (index - activeIndex + games.length) % games.length
    let transform = ''
    let opacity = 1
    let zIndex = 1

    if (position === 0) {
      transform = 'translateX(0) scale(1)'
      zIndex = 3
    } else if (position === 1) {
      transform = 'translateX(110%) scale(0.9)'
      opacity = 0.7
      zIndex = 2
    } else if (position === games.length - 1) {
      transform = 'translateX(-110%) scale(0.9)'
      opacity = 0.7
      zIndex = 2
    } else {
      opacity = 0
    }

    return { transform, opacity, zIndex }
  }

  
  return (
    <div className='mt-20 pb-16'>
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
          <span className="block text-2xl md:text-3xl font-medium mb-2 text-muted-foreground">TRAIN YOUR</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            MEMORY SKILLS
          </span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Challenge yourself with engaging memory games designed to improve cognitive function and have fun
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto h-[400px] mb-20 overflow-hidden">
        <div className="absolute w-full h-full flex justify-center items-center">
          {games.map((game, index) => (
            <div
              key={index}
              className="absolute w-full max-w-sm transition-all duration-500 ease-in-out"
              style={getCardStyle(index)}
            >
              <div className="relative group mx-4">
                <div className={`absolute inset-0 bg-gradient-to-r ${game.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>
                <div className="relative bg-card border border-border rounded-2xl overflow-hidden backdrop-blur-sm">
                  <div className="p-8 text-center">
                    <div className={`w-20 h-20 bg-gradient-to-r ${game.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white`}>
                      {game.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{game.title}</h3>
                    <p className="text-muted-foreground mb-6">{game.description}</p>
                    {index === activeIndex && (
                      <Button 
                        className={`bg-gradient-to-r ${game.gradient} hover:opacity-90 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg`}
                      >
                        PLAY NOW
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-6 mb-20">
        <Button 
          className="relative px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-bold text-white overflow-hidden group shadow-lg shadow-primary/25"
        >
          <span className="relative">VIEW ALL GAMES</span>
        </Button>
        <Button 
          variant="outline"
          className="relative px-8 py-4 border-2 border-primary rounded-xl font-bold text-primary overflow-hidden group hover:bg-primary hover:text-white transition-all duration-300"
        >
          <span className="relative">START PLAYING</span>
        </Button>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-20">
        <Feature icon={Brain} text="Memory Training" color="text-primary" />
        <Feature icon={Shield} text="100% Secure" color="text-secondary" />
        <Feature icon={Zap} text="Instant Play" color="text-accent" />
        <Feature icon={Users} text="Multiplayer" color="text-primary" />
        <Feature icon={Trophy} text="Win Rewards" color="text-secondary" />
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-accent">100%</span> Skill-Based Memory Games
        </h2>
        <p className="text-muted-foreground">Improve your cognitive abilities while having fun with friends</p>
      </div>
    </div>
  )
}

function Feature({ icon: Icon, text, color }: Readonly<FeatureProps>): React.ReactElement {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="relative mb-4">
        <div className={`absolute inset-0 ${color.replace('text-', 'bg-')} blur-lg opacity-0 group-hover:opacity-20 transition duration-300 rounded-full`}></div>
        <div className={`w-12 h-12 ${color.replace('text-', 'bg-')}/20 rounded-xl flex items-center justify-center relative`}>
          <Icon className={`w-6 h-6 ${color} relative`} />
        </div>
      </div>
      <p className="font-semibold text-foreground">{text}</p>
    </div>
  )
}