"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Crown, TrendingUp, Users, Gift } from "lucide-react"

export function FloatingVIP() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full w-16 h-16 shadow-2xl animate-pulse"
        >
          <Crown className="w-8 h-8" />
        </Button>
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-bounce">
          VIP
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="bg-gradient-to-br from-purple-900 to-pink-900 border-purple-500/50 max-w-md w-full relative">
            <Button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full w-8 h-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>

            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <Crown className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white mb-2">Grupo VIP Gratuito</h2>
                <p className="text-purple-200">Sinais exclusivos do Aviator e estratégias vencedoras!</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-white">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span>Sinais do Aviator em tempo real</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span>Comunidade de +5.000 membros</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Gift className="w-5 h-5 text-yellow-400" />
                  <span>Estratégias exclusivas grátis</span>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4 mb-6">
                <p className="text-green-400 font-bold text-lg">100% GRATUITO</p>
                <p className="text-white/80 text-sm">Sem taxas, sem pegadinhas!</p>
              </div>

              <Button
                onClick={() => window.open("https://t.me/milionariomrx", "_blank")}
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 text-lg"
              >
                Entrar no Grupo VIP
              </Button>

              <p className="text-purple-200 text-xs mt-4">Vagas limitadas! Entre agora e comece a ganhar hoje mesmo.</p>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
