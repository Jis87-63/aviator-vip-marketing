import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Gift, Clock, Shield, Zap } from "lucide-react"

export function Bonus() {
  return (
    <section id="bonus" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-4 drop-shadow-lg">
            Oferta Exclusiva por Tempo Limitado
          </h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto drop-shadow-md">
            Aproveite nosso bônus especial de 200% no primeiro depósito em Metical moçambicano. Uma oportunidade única
            para multiplicar seus ganhos no Aviator e outros jogos!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-gray-900/90 to-gray-800/90 border-2 border-yellow-400 backdrop-blur-sm shadow-2xl shadow-yellow-400/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Gift className="w-8 h-8 text-yellow-400" />
                    <span className="text-2xl font-bold text-yellow-300 drop-shadow-lg">BÔNUS ESPECIAL</span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 mb-4 drop-shadow-lg">
                    200% DE BÔNUS
                  </h3>

                  <p className="text-gray-100 mb-6 text-lg drop-shadow-md">
                    Depósito mínimo de apenas 100 MZN! Deposite 1.000 MZN e receba 3.000 MZN para jogar! Triplique seu
                    saldo inicial e maximize suas chances de ganhar no Aviator e outros jogos populares.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-green-400" />
                      <span className="text-gray-100">Ativação instantânea</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-100">100% seguro e confiável</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-yellow-400" />
                      <span className="text-gray-100">Válido para Aviator e todos os jogos</span>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    asChild
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold text-lg w-full md:w-auto shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <a
                      href="https://www.megagamelive.com/affiliates/?btag=2084979"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      RESGATAR AGORA (MZN)
                    </a>
                  </Button>
                </div>

                <div className="text-center">
                  <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/50 shadow-xl">
                    <div className="text-6xl mb-4">✈️</div>
                    <div className="text-2xl font-bold text-yellow-300 mb-2 drop-shadow-lg">Como Funciona:</div>
                    <div className="space-y-2 text-gray-100">
                      <div>1. Clique em "Resgatar Agora"</div>
                      <div>2. Faça seu cadastro</div>
                      <div>3. Deposite mínimo 100 MZN</div>
                      <div>4. Receba 200% de bônus em MZN!</div>
                      <div>5. Comece a jogar Aviator!</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
