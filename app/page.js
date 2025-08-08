import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gabung from './components/gabung'  
import FAQ from './components/FAQ'
import Contact from './components/contact/page.js'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
       <About />
      <Gabung />   
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}