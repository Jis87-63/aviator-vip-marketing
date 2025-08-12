"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star, TrendingUp, Volume2 } from "lucide-react"
import { useState } from "react"

export function Hero() {
  const [isPlaying, setIsPlaying] = useState(false)

  const playWinSound = () => {
    const audio = new Audio("/win-sound.mp3")
    audio.volume = 0.3
    audio.play().catch(() => {})
    setIsPlaying(true)
    setTimeout(() => setIsPlaying(false), 2000)
  }

  return (
    <section className="pt-24 pb-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-orange-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-60 left-1/2 w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-yellow-400 fill-current animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          <span className="text-white/80 text-sm">Avaliado por +10.000 jogadores</span>
          <button
            onClick={playWinSound}
            className={`ml-2 p-1 rounded-full transition-all ${isPlaying ? "bg-yellow-400 text-black" : "bg-white/20 text-white hover:bg-white/30"}`}
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up">
          Ganhe até{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 animate-gradient-x drop-shadow-lg">
            200% de Bônus
          </span>
          <br />
          no Seu Primeiro Depósito
        </h1>

        <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto animate-fade-in-delay drop-shadow-md">
          Descubra as melhores estratégias para maximizar seus ganhos no cassino online mais confiável de Moçambique.
          Comece hoje mesmo com nosso bônus exclusivo!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-black font-bold text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/50 animate-pulse-glow"
            onClick={playWinSound}
          >
            <a href="https://www.megagamelive.com/affiliates/?btag=2084979" target="_blank" rel="noopener noreferrer">
              RESGATAR BÔNUS DE 200% (MZN)
              <ArrowRight className="w-5 h-5 ml-2 animate-bounce-x" />
            </a>
          </Button>

          <div className="flex items-center gap-2 text-gray-100 animate-fade-in-delay">
            <TrendingUp className="w-5 h-5 text-green-400 animate-pulse" />
            <span>+5.000 jogadores ganharam hoje</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <div className="text-3xl font-bold text-yellow-400 mb-2 animate-count-up">200%</div>
            <div className="text-white">Bônus no 1º Depósito</div>
          </div>
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
            <div className="text-white">Suporte Disponível</div>
          </div>
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-white">Jogos Disponíveis</div>
          </div>
        </div>
      </div>
    </section>
  )
}
