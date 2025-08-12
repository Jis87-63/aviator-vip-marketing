import { Button } from "@/components/ui/button"
import { Trophy, Sparkles } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
            <Trophy className="w-6 h-6 text-black" />
          </div>
          <span className="text-xl font-bold text-white">MegaWin</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#bonus" className="text-white/80 hover:text-white transition-colors">
            Bônus
          </a>
          <a href="#jogos" className="text-white/80 hover:text-white transition-colors">
            Jogos
          </a>
          <a href="#estrategias" className="text-white/80 hover:text-white transition-colors">
            Estratégias
          </a>
        </nav>

        <Button
          asChild
          className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold"
        >
          <a href="https://www.megagamelive.com/affiliates/?btag=2084979" target="_blank" rel="noopener noreferrer">
            <Sparkles className="w-4 h-4 mr-2" />
            JOGAR AGORA
          </a>
        </Button>
      </div>
    </header>
  )
}
