import { Card, CardContent } from "@/components/ui/card"
import { Star, User } from "lucide-react"

const testimonials = [
  {
    name: "António Machel",
    location: "Maputo, Maputo",
    text: "Ganhei 45.000 MZN no Aviator usando as estratégias! O bônus de 200% me ajudou muito no início.",
    rating: 5,
    winAmount: "45.000 MZN",
  },
  {
    name: "Maria Nhantumbo",
    location: "Beira, Sofala",
    text: "Plataforma confiável! Já saquei mais de 32.000 MZN em apenas 3 semanas jogando roleta!",
    rating: 5,
    winAmount: "32.500 MZN",
  },
  {
    name: "João Sitoe",
    location: "Nampula, Nampula",
    text: "Transformei 5.000 MZN em mais de 18.000 MZN no poker! As dicas realmente funcionam.",
    rating: 5,
    winAmount: "18.200 MZN",
  },
  {
    name: "Esperança Cossa",
    location: "Matola, Maputo",
    text: "Suporte excelente via Telegram! Ganhei 28.000 MZN no Aviator seguindo os sinais VIP!",
    rating: 5,
    winAmount: "28.800 MZN",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O Que Nossos Jogadores Moçambicanos Dizem</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Milhares de jogadores de todo Moçambique já transformaram suas vidas com nossos sinais e estratégias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">{testimonial.location}</p>
                  </div>
                  <div className="ml-auto bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Ganhou {testimonial.winAmount}
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-white/80 italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
