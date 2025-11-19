import { HeroSection } from '@/components/hero-section'
import { FeatureCards } from '@/components/feature-cards'
import { Footer } from '@/components/footer'
import { ConsoleEasterEgg } from '@/components/console-easter-egg'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <ConsoleEasterEgg />
      <HeroSection />
      <FeatureCards />
      <Footer />
    </main>
  )
}
