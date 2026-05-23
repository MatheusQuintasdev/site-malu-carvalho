import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import BenefitsSection from '@/components/BenefitsSection'
import ProceduresSection from '@/components/ProceduresSection'
import GallerySection from '@/components/GallerySection'
import TechCareSection from '@/components/TechCareSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import DifferentialsSection from '@/components/DifferentialsSection'
import CTAFooter from '@/components/CTAFooter'

export default function Page() {
  return (
    <main className="w-full overflow-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <ProceduresSection />
      <GallerySection />
      <TechCareSection />
      <TestimonialsSection />
      <DifferentialsSection />
      <CTAFooter />
    </main>
  )
}
