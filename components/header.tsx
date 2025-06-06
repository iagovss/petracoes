"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Sobre", href: "#sobre" },
    { name: "Marcas", href: "#marcas" },
    { name: "Produtos", href: "#produtos" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Localização", href: "#localizacao" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled ? "bg-white/95 backdrop-blur-lg shadow-xl py-2" : "bg-transparent py-3 sm:py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Pet Rações - A melhor loja de rações"
            className="h-10 sm:h-12 md:h-16 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "font-semibold transition-all duration-300 hover:scale-110 text-sm xl:text-base",
                isScrolled ? "text-gray-700 hover:text-orange-500" : "text-white hover:text-orange-300 text-shadow",
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button className="btn-primary text-sm xl:text-base">
            <Phone className="w-4 h-4 mr-2" />
            <a href="https://wa.me/5577999685757" target="_blank" rel="noopener noreferrer">
              Fale Conosco
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "lg:hidden transition-colors duration-300 p-2 rounded-full",
            isScrolled ? "text-gray-700 bg-orange-100" : "text-white bg-white/20",
          )}
          onClick={toggleMenu}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-xl py-4 px-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-orange-500 font-semibold transition-colors py-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="btn-primary w-full mt-4">
              <Phone className="w-4 h-4 mr-2" />
              <a href="https://wa.me/5577999685757" target="_blank" rel="noopener noreferrer">
                Fale Conosco
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
