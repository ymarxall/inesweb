import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Desa from '../components/Desa'
import Why from '../components/Why'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Desa />
      <Why />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}