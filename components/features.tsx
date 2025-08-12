import { Card, CardContent } from "@/components/ui/card"
import { Target, TrendingUp, Shield, Users, Zap, Award } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Estratégias Comprovadas",
    description: "Métodos testados e aprovados por milhares de jogadores para maximizar seus ganhos.",
  },
  {
    icon: TrendingUp,
    title: "Análise de Tendências",
    description: "Acompanhe padrões e estatísticas em tempo real para tomar decisões mais inteligentes.",
  },
  {
    icon: Shield,
    title: "Jogo Responsável",
    description: "Ferramentas e dicas para manter o controle e jogar de forma consciente e segura.",
  },
  {
    icon: Users,
    title: "Comunidade Ativa",
    description: "Faça parte de uma comunidade de jogadores experientes e compartilhe estratégias.",
  },
  {
    icon: Zap,
    title: "Resultados Rápidos",
    description: "Veja resultados imediatos aplicando nossas técnicas e estratégias otimizadas.",
  },
  {
    icon: Award,
    title: "Suporte Premium",
    description: "Atendimento especializado 24/7 para tirar dúvidas e otimizar sua experiência.",
  },
]

export function Features() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Por Que Escolher Nossa Plataforma?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Oferecemos as melhores ferramentas e estratégias para você ter sucesso no mundo dos cassinos online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-white/80">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
