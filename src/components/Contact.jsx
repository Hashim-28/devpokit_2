import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from 'emailjs-com'
import siteConfig from '../data/siteConfig'

// ⚠️ Replace these with your real EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_dna003c'
const EMAILJS_TEMPLATE_ID = 'template_1oj86fw'
const EMAILJS_PUBLIC_KEY = '5bgHwZk4BKG2TE1AA'

const ContactIcon = ({ type }) => {
  switch (type) {
    case 'email':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2-2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )
    case 'twitter':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )

    case 'github':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      )
    default:
      return null
  }
}

const contactInfo = [
  {
    type: 'email',
    label: 'Email Us',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    color: '#3b82f6',
  },
  ...(siteConfig.socials?.filter(s => !['instagram', 'linkedin'].includes(s.platform)) || []).map(s => ({
    type: s.platform,
    label: s.label,
    value: s.platform === 'twitter' ? `@${s.href.split('/').pop()}` : `View ${s.label}`,
    href: s.href,
    color: s.platform === 'twitter' ? '#8b5cf6' : s.platform === 'github' ? '#94a3b8' : '#3b82f6',
  }))
]

const initialForm = { name: '', email: '', subject: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Name is required'
  if (!form.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email'
  if (!form.subject.trim()) errors.subject = 'Subject is required'
  if (!form.message.trim()) errors.message = 'Message is required'
  else if (form.message.trim().length < 20) errors.message = 'Message must be at least 20 characters'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const formRef = useRef(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(e => { const n = { ...e }; delete n[name]; return n })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('loading')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-28 lg:py-36 relative overflow-hidden">
      {/* BG radial (Safe Mode: Hidden) */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — info */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
            >
              {/* Logo */}
              <div className="flex items-center gap-2.5 mb-8 group">
                <div className="relative h-16 flex items-center">
                  {siteConfig.logoUrl ? (
                    <img
                      src={siteConfig.logoUrl.startsWith('http') || siteConfig.logoUrl.startsWith('/') ? siteConfig.logoUrl : '/' + siteConfig.logoUrl}
                      alt={siteConfig.siteName}
                      className="h-16 w-auto object-contain"
                      style={{ filter: 'drop-shadow(0 0 10px rgba(59,130,246,0.3)) brightness(1.15)' }}
                    />
                  ) : (
                    <div className="relative w-14 h-14">
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400 to-purple-600 opacity-90" />
                      <div className="relative flex items-center justify-center h-full">
                        <span className="text-white font-black text-xl">Q</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <span className="section-badge">Get in Touch</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6"
            >
              Let's Build
              <br />
              <span className="gradient-text">Something</span>
              <br />
              Amazing.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/50 leading-relaxed mb-10 font-light"
            >
              Have an idea? A challenge? A vision? We'd love to hear about it.
              Drop us a message and our team will get back to you within 24 hours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              {contactInfo.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl group transition-all duration-300 border border-white/[0.06] hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.04]"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-lg flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${item.color}12`, color: item.color, border: `1px solid ${item.color}25` }}
                  >
                    <ContactIcon type={item.type} />
                  </div>
                  <div>
                    <p className="text-slice text-white/40 font-medium">{item.label}</p>
                    <p className="text-sm text-white/80 font-semibold group-hover:text-white transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="glass-card p-8 sm:p-10">
              <h3 className="text-xl font-bold text-white mb-6">Send us a message</h3>

              {/* Success banner */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl text-sm font-medium"
                  style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.3)', color: '#3b82f6' }}
                >
                  ✓ Message sent! We'll reply within 24 hours.
                </motion.div>
              )}

              {/* Error banner */}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl text-sm font-medium"
                  style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171' }}
                >
                  ✗ Something went wrong. Please try again or email us directly.
                </motion.div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className={`form-input ${errors.name ? '!border-red-500/60' : ''}`}
                    />
                    {errors.name && <p className="text-xs text-red-400 mt-1.5">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`form-input ${errors.email ? '!border-red-500/60' : ''}`}
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1.5">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Subject"
                    className={`form-input ${errors.subject ? '!border-red-500/60' : ''}`}
                  />
                  {errors.subject && <p className="text-xs text-red-400 mt-1.5">{errors.subject}</p>}
                </div>

                <div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className={`form-input resize-none ${errors.message ? '!border-red-500/60' : ''}`}
                  />
                  {errors.message && <p className="text-xs text-red-400 mt-1.5">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {status === 'loading' ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : 'Send Message →'}
                  </span>
                </button>

                <p className="text-xs text-white/30 text-center">
                  By submitting, you agree to our Privacy Policy. We never share your data.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
