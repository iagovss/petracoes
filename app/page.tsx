import AboutUs from "@/components/about-us"
import Brands from "@/components/brands"
import FeaturedProducts from "@/components/featured-products"
import Footer from "@/components/footer"
import Header from "@/components/header"
import HeroBanner from "@/components/hero-banner"
import Location from "@/components/location"
import Testimonials from "@/components/testimonials"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroBanner />
      <AboutUs />
      <Brands />
      <FeaturedProducts />
      <Testimonials />
      <Location />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
