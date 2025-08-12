import { Button } from "@/components/ui/button"
import { ArrowRight, Star, TrendingUp } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <span className="text-white/80 text-sm">Avaliado por +10.000 jogadores</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Ganhe até{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            200% de Bônus
          </span>
          <br />
          no Seu Primeiro Depósito
        </h1>

        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Descubra as melhores estratégias para maximizar seus ganhos no cassino online mais confiável de Moçambique.
          Comece hoje mesmo com nosso bônus exclusivo!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold text-lg px-8 py-4"
          >
            <a href="https://www.megagamelive.com/affiliates/?btag=2084979" target="_blank" rel="noopener noreferrer">
              RESGATAR BÔNUS DE 200% (MZN)
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>

          <div className="flex items-center gap-2 text-white/80">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <span>+5.000 jogadores ganharam hoje</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">200%</div>
            <div className="text-white">Bônus no 1º Depósito</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
            <div className="text-white">Suporte Disponível</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-white">Jogos Disponíveis</div>
          </div>
        </div>
      </div>
    </section>
  )
}
