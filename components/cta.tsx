import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Clock, Gift } from "lucide-react"

export function CTA() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <Card className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-2 border-purple-400/50 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Clock className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-bold">OFERTA POR TEMPO LIMITADO</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Não Perca Esta Oportunidade!</h2>

            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Milhares de jogadores já estão aproveitando nosso bônus de 200%. Seja o próximo a transformar sua vida
              financeira!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2 text-white">
                <Gift className="w-5 h-5 text-green-400" />
                <span>Bônus de 200% no primeiro depósito</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Gift className="w-5 h-5 text-blue-400" />
                <span>Cadastro 100% gratuito</span>
              </div>
            </div>

            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold text-xl px-12 py-6"
            >
              <a href="https://www.megagamelive.com/affiliates/?btag=2084979" target="_blank" rel="noopener noreferrer">
                COMEÇAR A GANHAR AGORA
                <ArrowRight className="w-6 h-6 ml-2" />
              </a>
            </Button>

            <p className="text-white/60 text-sm mt-4">* Termos e condições aplicáveis. Jogue com responsabilidade.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
