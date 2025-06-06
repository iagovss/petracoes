"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"
import { motion } from "framer-motion"
import { MapPin, Clock, Phone } from "lucide-react"

export default function Location() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="localizacao" className="section-container alternate-bg">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Nossa Localização</h2>
        <p className="section-subtitle">Venha nos visitar! Estamos sempre prontos para atender você e seu pet</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="card-modern h-[300px] sm:h-[400px] p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.9375!2d-45.8!3d-12.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9339f0f43a3d3d1d%3A0x8df4d8a8921f2d93!2sAv.%20Ayrton%20Senna%2C%201077%20-%20Santa%20Cruz%2C%20Lu%C3%ADs%20Eduardo%20Magalh%C3%A3es%20-%20BA%2C%2047855-282!5e0!3m2!1spt-BR!2sbr!4v1717687211000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "1rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa da localização da Pet Rações"
              ></iframe>
            </div>
          </div>

          <div className="card-modern p-6 sm:p-8 order-1 lg:order-2">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gradient">Informações de Contato</h3>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start">
                <div className="bg-orange-100 p-2 sm:p-3 rounded-xl sm:rounded-2xl mr-3 sm:mr-4 flex-shrink-0">
                  <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Endereço</h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Av. Ayrton Senna, 1077
                    <br />
                    Santa Cruz, Luís Eduardo Magalhães - BA
                    <br />
                    CEP: 47855-282
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-2 sm:p-3 rounded-xl sm:rounded-2xl mr-3 sm:mr-4 flex-shrink-0">
                  <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Horário de Funcionamento</h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Segunda a Sábado: 7h às 20h
                    <br />
                    Domingo: 7h às 14h
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-2 sm:p-3 rounded-xl sm:rounded-2xl mr-3 sm:mr-4 flex-shrink-0">
                  <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Contato</h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    WhatsApp 1: (77) 99968-5757
                    WhatsApp 2: (77) 99932-1077
                    <br />
                    Instagram: @petracoeslem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
