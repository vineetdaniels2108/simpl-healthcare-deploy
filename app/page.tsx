import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import PracticeJourneySection from '../components/PracticeJourneySection'
import SolutionsSection from '../components/SolutionsSection'
import SimplWaySection from '../components/SimplWaySection'
import TestimonialsSection from '../components/TestimonialsSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <PracticeJourneySection />
      <SolutionsSection />
      <SimplWaySection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
} 