import { Shield, Clock, Award, Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">MegaWin Moçambique</h3>
            <p className="text-white/80 mb-4">
              Sua plataforma confiável para estratégias de cassino e os melhores bônus em Metical moçambicano.
            </p>
            <div className="flex items-center gap-2 text-white/60">
              <Send className="w-4 h-4" />
              <a
                href="https://t.me/Avpredictorla"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                @Avpredictorla (Telegram)
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Recursos</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Estratégias Aviator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Análises
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Estatísticas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Dicas VIP
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Suporte</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a
                  href="https://t.me/Avpredictorla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Telegram 24/7
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Guias Aviator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/Avpredictorla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Contato Direto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Segurança</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/80">
                <Shield className="w-4 h-4 text-green-400" />
                <span>SSL Certificado</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>Telegram 24/7</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>Licenciado MZN</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60 mb-4">© 2024 MegaWin Moçambique. Todos os direitos reservados.</p>
          <p className="text-white/40 text-sm">
            Jogue com responsabilidade. Este site é destinado apenas para maiores de 18 anos em Moçambique. Se você tem
            problemas com jogos, procure ajuda profissional.
          </p>
        </div>
      </div>
    </footer>
  )
}
