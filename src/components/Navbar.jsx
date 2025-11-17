import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight text-gray-900 text-lg">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">MyPortfolio</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          {navItems.map(item => (
            <a key={item.href} href={item.href} className="hover:text-gray-900 transition-colors">
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-4 ml-2">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-gray-900">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-gray-900">
              <Linkedin size={18} />
            </a>
            <a href="#contact" aria-label="Email" className="hover:text-gray-900">
              <Mail size={18} />
            </a>
          </div>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/30 bg-white/80">
          <nav className="px-4 py-3 space-y-2">
            {navItems.map(item => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-2 py-2 rounded hover:bg-gray-100">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
