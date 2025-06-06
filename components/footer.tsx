import Link from "next/link"
import { Instagram, Facebook, MapPin, Phone, Mail, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="gradient-bg text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <img src="/images/logo.png" alt="Pet Rações" className="h-16 w-auto mr-4" />
            </div>
            <p className="mb-6 text-lg leading-relaxed">
              A Pet Rações é sua parceira de confiança para cuidar do seu pet com todo amor e carinho que ele merece!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/petracoeslem"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-orange-200 transition-colors text-lg">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-orange-200 transition-colors text-lg">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#produtos" className="hover:text-orange-200 transition-colors text-lg">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="#localizacao" className="hover:text-orange-200 transition-colors text-lg">
                  Localização
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg">Av. Ayrton Senna, 1077, Santa Cruz, Luís Eduardo Magalhães - BA</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-6 h-6 mr-3 flex-shrink-0" />
                <a
                  href="https://wa.me/5577999685757"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-200 transition-colors text-lg"
                >
                  (77) 99968-5757 | (77) 99932-1077
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-6 h-6 mr-3 flex-shrink-0" />
                <a href="mailto:contato@petracoes.com.br" className="hover:text-orange-200 transition-colors text-lg">
                  contato@petracoes.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-lg flex items-center justify-center gap-2">
            &copy; {currentYear} Pet Rações. Feito com <Heart className="w-5 h-5 text-red-300 fill-red-300" /> para seu
            pet.
          </p>
        </div>
      </div>
    </footer>
  )
}
