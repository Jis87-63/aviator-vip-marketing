import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Bonus } from "@/components/bonus"
import { Games } from "@/components/games"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { FloatingVIP } from "@/components/floating-vip"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <Hero />
      <Bonus />
      <Features />
      <Games />
      <Testimonials />
      <CTA />
      <Footer />
      <FloatingVIP />
    </main>
  )
}
