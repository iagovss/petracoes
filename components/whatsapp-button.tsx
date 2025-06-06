"use client"

import { MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <a
      href="https://wa.me/5577999343065"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 bg-green-600 text-white rounded-full p-4 shadow-lg z-50 transition-all duration-300 hover:bg-green-700",
        isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0",
      )}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}
