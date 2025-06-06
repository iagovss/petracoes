"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      name: "Maria Silva",
      location: "Luís Eduardo Magalhães, BA",
      image: "/placeholder.svg?height=100&width=100",
      text: "Ótimo atendimento e entrega rápida na zona rural! Sempre encontro tudo o que preciso para meus animais.",
    },
    {
      name: "João Oliveira",
      location: "Barreiras, BA",
      image: "/placeholder.svg?height=100&width=100",
      text: "A qualidade das rações é excelente. Meus cães estão mais saudáveis desde que comecei a comprar na Rações do Cerrado.",
    },
    {
      name: "Ana Santos",
      location: "Luís Eduardo Magalhães, BA",
      image: "/placeholder.svg?height=100&width=100",
      text: "Preços justos e produtos sempre frescos. O atendimento personalizado faz toda a diferença!",
    },
  ]

  return (
    <section id="depoimentos" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">O que Nossos Clientes Dizem</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="italic">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
