import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-blue-700/80 bg-blue-50/70 border border-blue-200 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Available for Work
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              Building playful, modern, interactive experiences
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-xl">
              I craft delightful web apps with a focus on motion, accessibility, and performance. Explore selected projects and get in touch.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-semibold hover:bg-black transition-colors">View Projects</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-5 py-3 text-sm font-semibold border border-gray-300 hover:bg-gray-50 transition-colors">Contact Me</a>
            </div>
          </motion.div>

          <div className="lg:col-span-6" />
        </div>
      </div>
    </section>
  )
}
