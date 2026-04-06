import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from 'emailjs-com'

// ⚠️ Replace these with your real EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_dna003c'
const EMAILJS_TEMPLATE_ID = 'template_1oj86fw'
const EMAILJS_PUBLIC_KEY = '5bgHwZk4BKG2TE1AA'

const contactInfo = [
  {
    icon: '✉',
    label: 'Email Us',
    value: 'qiblax@gmail.com',
    href: 'mailto:qiblax@gmail.com',
    color: '#00f5ff',
  },
  {
    icon: '◎',
    label: 'Twitter / X',
    value: '@QiblaX',
    href: 'https://twitter.com/qiblax',
    color: '#7b2ff7',
  },
  {
    icon: '⌖',
    label: 'LinkedIn',
    value: 'QiblaX Software',
    href: 'https://linkedin.com',
    color: '#00f5ff',
  },
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
                    {item.icon}
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
                  style={{ background: 'rgba(0,245,255,0.1)', border: '1px solid rgba(0,245,255,0.3)', color: '#00f5ff' }}
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
