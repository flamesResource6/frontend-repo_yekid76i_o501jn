import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-bold text-gray-900">Hi, I’m Your Name</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I’m a front-end engineer and product-minded designer who loves building playful, modern interfaces.
              I focus on accessibility, performance, and delightful motion.
            </p>
            <p className="mt-3 text-gray-600">
              Tools I enjoy: React, Tailwind, Framer Motion, Spline, and modern web APIs.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-semibold hover:bg-black transition-colors">See Work</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-5 py-3 text-sm font-semibold border border-gray-300 hover:bg-gray-50 transition-colors">Resume</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 md:order-2"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-gray-200 bg-gradient-to-br from-blue-50 to-purple-50">
              <div className="absolute inset-0 grid place-items-center text-6xl">🪄</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
