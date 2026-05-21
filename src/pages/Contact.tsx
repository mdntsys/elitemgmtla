import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Property Care',
    message: '',
  })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Inquiry — ${form.interest} — ${form.name || 'Prospective client'}`,
    )
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nInterest: ${form.interest}\n\n${form.message}`,
    )
    window.location.href = `mailto:sales@eliteestatemanagementla.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="mx-auto max-w-[1600px] px-6 md:px-10 pt-16 md:pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="max-w-3xl"
      >
        <p className="text-xs tracking-luxe uppercase text-ink/60">Contact</p>
        <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.05] text-ink">
          Reach out.
        </h1>
        <p className="mt-8 text-base md:text-lg leading-relaxed text-ink/75 max-w-xl">
          Every engagement begins with a private conversation. Share a little about
          your property and household; we will respond personally within one
          business day.
        </p>
      </motion.div>

      <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        {/* Contact details */}
        <div className="space-y-12">
          <div>
            <p className="text-xs tracking-luxe uppercase text-ink/60">Email</p>
            <a
              href="mailto:sales@eliteestatemanagementla.com"
              className="mt-3 inline-block font-display text-2xl md:text-3xl text-ink hover:opacity-70 transition-opacity"
            >
              sales@eliteestatemanagementla.com
            </a>
          </div>
          <div>
            <p className="text-xs tracking-luxe uppercase text-ink/60">Telephone</p>
            <a
              href="tel:+13105550100"
              className="mt-3 inline-block font-display text-2xl md:text-3xl text-ink hover:opacity-70 transition-opacity"
            >
              +1 (310) 555-0100
            </a>
            <p className="mt-2 text-xs text-ink/50">Placeholder — swap with live number</p>
          </div>
          <div>
            <p className="text-xs tracking-luxe uppercase text-ink/60">Office</p>
            <p className="mt-3 font-display text-2xl md:text-3xl text-ink leading-snug">
              Los Angeles, California<br />
              By appointment only
            </p>
          </div>
          <div>
            <p className="text-xs tracking-luxe uppercase text-ink/60">Hours</p>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">
              Monday – Friday, 8:00 – 18:00 PT<br />
              24-hour response for active clients
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-8">
          <Field
            label="Your name"
            value={form.name}
            onChange={(v) => setForm({ ...form, name: v })}
            required
          />
          <Field
            label="Email"
            type="email"
            value={form.email}
            onChange={(v) => setForm({ ...form, email: v })}
            required
          />
          <Field
            label="Phone (optional)"
            type="tel"
            value={form.phone}
            onChange={(v) => setForm({ ...form, phone: v })}
          />
          <div>
            <label className="block text-xs tracking-luxe uppercase text-ink/60 mb-3">
              Area of interest
            </label>
            <select
              value={form.interest}
              onChange={(e) => setForm({ ...form, interest: e.target.value })}
              className="w-full border-b border-ink/30 bg-transparent py-3 text-ink font-display text-lg focus:border-ink focus:outline-none"
            >
              <option>Property Care</option>
              <option>Vendor Management</option>
              <option>Private Concierge</option>
              <option>Domestic Staffing</option>
              <option>Transportation & Travel</option>
              <option>Private Jet Chartering</option>
              <option>Full-service management</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-xs tracking-luxe uppercase text-ink/60 mb-3">
              A note about your home
            </label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              className="w-full border-b border-ink/30 bg-transparent py-3 text-ink resize-none focus:border-ink focus:outline-none"
              placeholder="Square footage, location, staff already in place, anything we should know..."
            />
          </div>

          <button
            type="submit"
            className="group inline-flex items-center gap-4 mt-4"
          >
            <span className="text-xs tracking-luxe uppercase text-ink">
              Send inquiry
            </span>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-cream transition-transform group-hover:scale-105">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12 L19 12 M13 6 L19 12 L13 18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>

          <p className="text-xs text-ink/50 pt-4">
            Submitting opens your email client with the details prefilled. All
            correspondence remains confidential.
          </p>
        </form>
      </div>
    </section>
  )
}

type FieldProps = {
  label: string
  value: string
  onChange: (v: string) => void
  type?: string
  required?: boolean
}

function Field({ label, value, onChange, type = 'text', required }: FieldProps) {
  return (
    <div>
      <label className="block text-xs tracking-luxe uppercase text-ink/60 mb-3">
        {label}{required && <span className="text-ink/40"> *</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full border-b border-ink/30 bg-transparent py-3 text-ink font-display text-lg focus:border-ink focus:outline-none"
      />
    </div>
  )
}
