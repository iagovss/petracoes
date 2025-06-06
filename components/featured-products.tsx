"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dog, Cat, DogIcon as Horse, MilkIcon as Cow, Pill, Dumbbell } from "lucide-react"

export default function FeaturedProducts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const products = [
    {
      title: "Ração para Cães",
      description: "Nutrição completa e balanceada para todas as fases da vida do seu cão",
      icon: <Dog className="h-10 w-10" />,
      color: "bg-orange-light",
    },
    {
      title: "Ração para Gatos",
      description: "Formulações específicas para atender às necessidades nutricionais dos felinos",
      icon: <Cat className="h-10 w-10" />,
      color: "bg-orange-light",
    },
    {
      title: "Ração para Cavalos",
      description: "Alimentos balanceados para cavalos de trabalho, esporte e lazer",
      icon: <Horse className="h-10 w-10" />,
      color: "bg-orange-light",
    },
    {
      title: "Ração para Bovinos",
      description: "Suplementação e nutrição completa para gado de corte e leite",
      icon: <Cow className="h-10 w-10" />,
      color: "bg-orange-light",
    },
    {
      title: "Produtos Veterinários",
      description: "Medicamentos, vacinas e produtos para saúde e bem-estar animal",
      icon: <Pill className="h-10 w-10" />,
      color: "bg-orange-light",
    },
    {
      title: "Suplementos e Acessórios",
      description: "Complementos nutricionais e itens essenciais para o dia a dia dos animais",
      icon: <Dumbbell className="h-10 w-10" />,
      color: "bg-orange-light",
    },
  ]

  return (
    <section id="produtos" className="section-container alternate-bg">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Produtos em Destaque</h2>
        <p className="section-subtitle">
          Oferecemos uma ampla variedade de produtos para atender às necessidades de todos os tipos de animais
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className={`${product.color} p-6 flex justify-center`}>{product.icon}</div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <Button asChild variant="outline" className="w-full rounded-full">
                  <a href="https://wa.me/5577999343065" target="_blank" rel="noopener noreferrer">
                    Fale sobre este produto
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
