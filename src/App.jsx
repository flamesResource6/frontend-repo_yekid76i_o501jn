import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />

      <footer className="py-10 text-center text-sm text-gray-600">Built with love, motion, and a splash of 3D ✨</footer>
    </div>
  )
}

export default App
