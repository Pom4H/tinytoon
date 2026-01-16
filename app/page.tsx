import Header from './components/layout/Header'
import FooterComponent from './components/layout/FooterComponent'
import HeroSection from './components/sections/HeroSection'
import ServicesSection from './components/sections/ServicesSection'
import CasesSection from './components/sections/CasesSection'
import ContactSection from './components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <CasesSection />
        <ContactSection />
      </main>
      <FooterComponent />
    </>
  )
}
