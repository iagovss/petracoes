import type React from "react"
import "@/app/globals.css"
import { Inter, Fredoka } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })
const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka" })

export const metadata: Metadata = {
  title: "Pet Rações | A melhor loja de rações em Luís Eduardo Magalhães",
  description:
    "Pet Rações - Produtos de qualidade para seu pet em Luís Eduardo Magalhães. Rações, acessórios e muito mais!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} ${fredoka.variable}`}>{children}</body>
    </html>
  )
}
