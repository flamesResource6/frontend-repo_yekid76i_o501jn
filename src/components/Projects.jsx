import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Realtime Collaboration Tool',
    description: 'A multiplayer canvas powered by WebRTC and CRDTs with buttery-smooth interactions.',
    tags: ['React', 'WebRTC', 'CRDT'],
    link: '#'
  },
  {
    title: 'Design System + Components',
    description: 'A polished, accessible component library following shadcn/ui conventions and Radix primitives.',
    tags: ['TypeScript', 'Radix', 'Tailwind'],
    link: '#'
  },
  {
    title: '3D Product Gallery',
    description: 'Interactive 3D scenes using Spline and Three.js to showcase products with motion.',
    tags: ['Spline', 'Three.js', 'Framer Motion'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Selected Work</h2>
          <p className="mt-3 text-gray-600">A few highlights of things I loved building recently.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-xl border border-gray-200 bg-white/70 backdrop-blur hover:shadow-lg hover:-translate-y-0.5 transition-all p-5"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-700" />
              </div>
              <p className="mt-2 text-sm text-gray-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs rounded-full bg-gray-100 text-gray-700 px-2.5 py-1 border border-gray-200">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
