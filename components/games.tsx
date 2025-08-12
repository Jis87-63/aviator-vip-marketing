"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const games = [
  {
    name: "Aviator",
    image: "/aviator-game.png", // corrigindo nome da imagem do Aviator
    description: "O jogo mais popular de Moçambique! Multiplique seus ganhos até 1000x",
    popularity: "98%",
    featured: true,
  },
  {
    name: "Roleta",
    image: "/roulette-real.png",
    description: "Roleta europeia e americana com dealers ao vivo",
    popularity: "92%",
  },
  {
    name: "Poker",
    image: "/poker-real.png",
    description: "Torneios diários com prêmios incríveis em MZN",
    popularity: "85%",
  },
  {
    name: "Slots",
    image: "/colorful-slot-machine.png",
    description: "Mais de 200 slots com jackpots progressivos",
    popularity: "95%",
  },
  {
    name: "Blackjack",
    image: "/blackjack-table.png",
    description: "Mesa clássica com dealers ao vivo",
    popularity: "88%",
  },
  {
    name: "Crash Games",
    image: "/rocket-crash-game.png",
    description: "Jogos de multiplicador com adrenalina",
    popularity: "96%",
  },
]

export function Games() {
  return (
    <section id="jogos" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">Jogos Mais Populares em Moçambique</h2>{" "}
          {/* melhor contraste */}
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            {" "}
            {/* melhor legibilidade */}
            Aviator é o jogo do momento! Explore nossa seleção completa com as melhores taxas de retorno em MZN.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {games.map((game, index) => (
            <Card
              key={index}
              className={`bg-gray-900/80 backdrop-blur-sm border-gray-700 hover:bg-gray-800/80 transition-all duration-300 overflow-hidden ${
                game.featured ? "ring-2 ring-yellow-400 transform scale-105" : ""
              }`} // fundo mais escuro para melhor contraste
            >
              <div className="relative">
                <img src={game.image || "/placeholder.svg"} alt={game.name} className="w-full h-48 object-cover" />
                <div
                  className={`absolute top-4 right-4 px-2 py-1 rounded-full text-sm font-bold ${
                    game.featured ? "bg-yellow-400 text-black" : "bg-green-500 text-white"
                  }`}
                >
                  {game.featured ? "🔥 TRENDING" : `${game.popularity} Popular`}
                </div>
                {game.featured && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                    MAIS JOGADO EM MZ
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-100 mb-2">{game.name}</h3> {/* melhor contraste */}
                <p className="text-gray-200 mb-4">{game.description}</p> {/* melhor legibilidade */}
                <Button
                  variant="outline"
                  className={`w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent ${
                    game.featured ? "bg-yellow-400 text-black hover:bg-yellow-500" : ""
                  }`}
                  onClick={() => window.open("https://www.megagamelive.com/affiliates/?btag=2084979", "_blank")}
                >
                  {game.featured ? "JOGAR AVIATOR AGORA!" : "Jogar Agora"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold text-lg"
          >
            <a href="https://www.megagamelive.com/affiliates/?btag=2084979" target="_blank" rel="noopener noreferrer">
              VER TODOS OS JOGOS
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
