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
        <section style={{ padding: '20px' }}>
          <h2 style={{ fontSize: '2em', color: '#333' }}>Тестовый текст на странице</h2>
          <p>Это дополнительный текст, который я добавил для тестирования.</p>
        </section>
      </main>
      <FooterComponent />
    </>
  )
}
