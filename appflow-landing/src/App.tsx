import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { AppPreview } from './components/AppPreview'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <AppPreview />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
