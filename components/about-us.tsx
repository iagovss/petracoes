"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"
import { motion } from "framer-motion"
import { Users, Award, Heart, Truck } from "lucide-react"

export default function AboutUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "2+", label: "Anos de Experiência" },
    { icon: <Award className="w-8 h-8" />, number: "1000+", label: "Clientes Satisfeitos" },
    { icon: <Heart className="w-8 h-8" />, number: "7", label: "Marcas Premium" },
    { icon: <Truck className="w-8 h-8" />, number: "7h às 20h", label: "Entrega Rápida" },
  ]

  return (
    <section id="sobre" className="section-container alternate-bg relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h2 className="section-title">Sobre Nós</h2>
        <p className="section-subtitle">Conheça nossa história e compromisso com o bem-estar dos seus pets</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Nossa Missão</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                A Rações do Cerrado é um negócio familiar que nasceu da paixão por animais e do compromisso com o campo.
                Há mais de 2 anos, atendemos com dedicação os produtores rurais e amantes de pets de Luís Eduardo
                Magalhães e região.
              </p>
            </div>

            <div className="glass-effect rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Nossos Valores</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Oferecemos produtos de qualidade, com atendimento personalizado e preços justos. Entendemos as
                necessidades específicas dos animais do cerrado e selecionamos cuidadosamente nosso estoque para
                garantir a melhor nutrição e cuidado.
              </p>
            </div>

            <div className="glass-effect rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Nosso Compromisso</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Mais que uma loja, somos parceiros dos nossos clientes, construindo relacionamentos baseados em
                confiança e conhecimento técnico. Seu pet merece o melhor, e estamos aqui para garantir isso.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass-effect rounded-2xl p-6 text-center card-hover group"
              >
                <div className="text-primary mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
