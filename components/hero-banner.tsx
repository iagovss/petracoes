"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Heart, Star, Truck, Shield } from "lucide-react"

export default function HeroBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden wave-bg">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots"></div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/images/hero-pets.png')",
        }}
      ></div>

      {/* Floating Elements - Hidden on mobile */}
      <div className="absolute top-20 left-4 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 bg-white/20 rounded-full floating hidden sm:block"></div>
      <div
        className="absolute top-40 right-4 sm:right-20 w-12 sm:w-16 h-12 sm:h-16 bg-white/30 rounded-full floating hidden sm:block"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-32 left-4 sm:left-20 w-20 sm:w-24 h-20 sm:h-24 bg-white/20 rounded-full floating hidden sm:block"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 border border-white/30"
          >
            <Heart className="w-4 sm:w-5 h-4 sm:h-5 text-white fill-white" />
            <span className="text-white font-bold text-sm sm:text-base">Cuidando do seu pet com amor</span>
            <Heart className="w-4 sm:w-5 h-4 sm:h-5 text-white fill-white" />
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 sm:mb-8 leading-tight px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontFamily: "var(--font-fredoka)" }}
          >
            Seu Pet Merece o{" "}
            <span className="bg-white text-orange-500 px-2 sm:px-4 py-1 sm:py-2 rounded-2xl sm:rounded-3xl inline-block transform rotate-1 sm:rotate-2">
              Melhor!
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-medium px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Na Pet Rações você encontra tudo para deixar seu amiguinho feliz e saudável! 🐕🐱
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12 max-w-4xl mx-auto px-4"
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
              <Star className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-300 mx-auto mb-1 sm:mb-2" />
              <span className="text-white font-bold text-xs sm:text-sm">Qualidade Premium</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
              <Truck className="w-6 sm:w-8 h-6 sm:h-8 text-white mx-auto mb-1 sm:mb-2" />
              <span className="text-white font-bold text-xs sm:text-sm">Entrega Rápida</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
              <Shield className="w-6 sm:w-8 h-6 sm:h-8 text-green-300 mx-auto mb-1 sm:mb-2" />
              <span className="text-white font-bold text-xs sm:text-sm">Produtos Seguros</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
              <Heart className="w-6 sm:w-8 h-6 sm:h-8 text-red-300 mx-auto mb-1 sm:mb-2" />
              <span className="text-white font-bold text-xs sm:text-sm">Feito com Amor</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
          >
            <Button
              asChild
              size="lg"
              className="btn-primary text-base sm:text-lg lg:text-xl px-8 sm:px-10 lg:px-12 py-4 sm:py-6 lg:py-7 shadow-2xl w-full sm:w-auto"
            >
              <a href="https://wa.me/5577999685757" target="_blank" rel="noopener noreferrer">
                🛒 Comprar Agora
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              className="btn-secondary text-base sm:text-lg lg:text-xl px-8 sm:px-10 lg:px-12 py-4 sm:py-6 lg:py-7 w-full sm:w-auto"
            >
              <a href="#produtos">🎯 Ver Produtos</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <div className="flex flex-col items-center text-white/80">
          <p className="text-xs sm:text-sm mb-2 sm:mb-3 font-bold">Descubra mais</p>
          <div className="w-6 sm:w-8 h-10 sm:h-12 border-2 border-white/60 rounded-full flex justify-center bg-white/10 backdrop-blur-sm bounce-slow">
            <div className="w-1.5 sm:w-2 h-3 sm:h-4 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
