"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Crown, TrendingUp, Users, Gift, Volume2 } from "lucide-react"

export function FloatingVIP() {
  const [isOpen, setIsOpen] = useState(false)
  const [isGlowing, setIsGlowing] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlowing(true)
      setTimeout(() => setIsGlowing(false), 3000)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  const playVipSound = () => {
    const audio = new Audio("/vip-notification.mp3")
    audio.volume = 0.4
    audio.play().catch(() => {})
  }

  const handleOpenVip = () => {
    playVipSound()
    window.open("https://t.me/milionariomrx", "_blank")
  }

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          <div
            className={`absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 animate-ping ${isGlowing ? "opacity-75" : "opacity-0"}`}
          ></div>
          <div
            className={`absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 animate-pulse ${isGlowing ? "opacity-50" : "opacity-0"}`}
            style={{ animationDelay: "0.5s" }}
          ></div>

          <Button
            onClick={() => {
              playVipSound()
              setIsOpen(true)
            }}
            className={`relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full w-16 h-16 shadow-2xl transition-all duration-300 transform hover:scale-110 ${isGlowing ? "animate-bounce shadow-purple-500/50" : "animate-pulse"}`}
          >
            <Crown className="w-8 h-8" />
          </Button>

          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs rounded-full w-8 h-8 flex items-center justify-center font-bold animate-bounce shadow-lg">
            VIP
          </div>

          <div className="absolute bottom-full right-0 mb-2 bg-black/80 text-white text-xs px-3 py-1 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Grupo VIP Gratuito! 🚀
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <Card className="bg-gradient-to-br from-purple-900 via-pink-900 to-purple-800 border-2 border-purple-500/50 max-w-md w-full relative transform animate-scale-in shadow-2xl">
            <Button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full w-8 h-8 p-0 transition-all duration-200 hover:scale-110"
            >
              <X className="w-4 h-4" />
            </Button>

            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="relative">
                  <Crown className="w-16 h-16 text-yellow-400 mx-auto mb-4 animate-bounce drop-shadow-lg" />
                  <div className="absolute inset-0 w-16 h-16 mx-auto mb-4 bg-yellow-400/20 rounded-full animate-ping"></div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2 animate-fade-in">Grupo VIP Gratuito</h2>
                <p className="text-purple-200 animate-fade-in-delay">
                  Sinais exclusivos do Aviator e estratégias vencedoras!
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-white animate-slide-in-left">
                  <TrendingUp className="w-5 h-5 text-green-400 animate-pulse" />
                  <span>Sinais do Aviator em tempo real</span>
                </div>
                <div
                  className="flex items-center gap-3 text-white animate-slide-in-left"
                  style={{ animationDelay: "0.1s" }}
                >
                  <Users className="w-5 h-5 text-blue-400 animate-pulse" />
                  <span>Comunidade de +5.000 membros</span>
                </div>
                <div
                  className="flex items-center gap-3 text-white animate-slide-in-left"
                  style={{ animationDelay: "0.2s" }}
                >
                  <Gift className="w-5 h-5 text-yellow-400 animate-pulse" />
                  <span>Estratégias exclusivas grátis</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/50 rounded-lg p-4 mb-6 animate-pulse-glow">
                <p className="text-green-400 font-bold text-lg animate-bounce">100% GRATUITO</p>
                <p className="text-white/80 text-sm">Sem taxas, sem pegadinhas!</p>
              </div>

              <Button
                onClick={handleOpenVip}
                className="w-full bg-gradient-to-r from-green-500 via-blue-600 to-purple-600 hover:from-green-600 hover:via-blue-700 hover:to-purple-700 text-white font-bold py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-green-400/50 animate-gradient-x"
              >
                <Volume2 className="w-5 h-5 mr-2" />
                Entrar no Grupo VIP
              </Button>

              <p className="text-purple-200 text-xs mt-4 animate-fade-in-delay">
                Vagas limitadas! Entre agora e comece a ganhar hoje mesmo.
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
