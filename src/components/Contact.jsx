import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        })
      })

      const data = await res.json()
      if (res.ok) setStatus('Thanks! I will get back to you soon.')
      else setStatus(data.detail || 'Something went wrong.')
    } catch (err) {
      setStatus('Unable to send right now.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Let’s build something</h2>
          <p className="mt-3 text-gray-600">Tell me about your project, timeline, or just say hi.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-4 max-w-2xl">
          <input required name="name" placeholder="Your name" className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900" />
          <input required name="email" type="email" placeholder="Your email" className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900" />
          <textarea required name="message" rows="5" placeholder="Your message" className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900" />
          <div className="flex items-center gap-4">
            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-semibold hover:bg-black transition-colors">Send Message</button>
            {status && <p className="text-sm text-gray-600">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
