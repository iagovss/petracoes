"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"
import { motion } from "framer-motion"

export default function Brands() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const brands = [
    {
      name: "Golden",
      logo: "/images/brands/golden.png",
      description: "Ração premium para cães de todas as idades",
      color: "from-orange-400 to-orange-600",
    },
    {
      name: "Finotrato",
      logo: "/images/brands/finotrato.png",
      description: "Nutrição completa e balanceada",
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "GranPlus",
      logo: "/images/brands/granplus.png",
      description: "Ração super premium para cães adultos",
      color: "from-red-400 to-red-600",
    },
    {
      name: "NexGard",
      logo: "/images/brands/nexgard.png",
      description: "Proteção contra pulgas e carrapatos",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Bomguy",
      logo: "/images/brands/bomguy.png",
      description: "Alimento premium para cães adultos",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      name: "Pedigree",
      logo: "/images/brands/pedigree.png",
      description: "Nutrição completa para raças pequenas",
      color: "from-orange-400 to-red-500",
    },
    {
      name: "Atacama",
      logo: "/images/brands/atacama.png",
      description: "Ração natural para cães adultos",
      color: "from-amber-400 to-orange-500",
    },
  ]

  return (
    <section id="marcas" className="section-container relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-orange-500 rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-28 h-28 bg-primary rounded-full"></div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h2 className="section-title">Marcas que Trabalhamos</h2>
        <p className="section-subtitle">
          Selecionamos as melhores marcas do mercado para oferecer qualidade e confiança aos nossos clientes
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass-effect rounded-3xl shadow-xl overflow-hidden card-hover">
                {/* Gradient Border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}
                ></div>

                <div className="relative p-6">
                  <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={brand.logo || "/placeholder.svg"}
                      alt={`${brand.name} - ${brand.description}`}
                      className="max-h-24 max-w-full object-contain"
                    />
                  </div>

                  <div className="text-center">
                    <h3 className="font-bold text-xl mb-2 text-secondary group-hover:text-primary transition-colors duration-300">
                      {brand.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{brand.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-3xl p-8 inline-block">
            <p className="text-xl text-gray-700 mb-6 font-medium">Não encontrou a marca que procura?</p>
            <a
              href="https://wa.me/5577999343065"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-orange-500 text-white rounded-full font-medium hover:from-primary/90 hover:to-orange-500/90 transition-all duration-300 transform hover:scale-105 shadow-lg pulse-glow"
            >
              💬 Consulte Disponibilidade
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
