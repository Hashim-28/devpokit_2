import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We start by understanding your vision, goals, and users. We define the roadmap and technical architecture to ensure a solid foundation.',
    color: '#00f5ff',
  },
  {
    number: '02',
    title: 'Design & Prototyping',
    description: 'Our designers create intuitive, high-fidelity interfaces and interactive prototypes, ensuring the user experience is seamless and engaging.',
    color: '#7b2ff7',
  },
  {
    number: '03',
    title: 'Agile Development',
    description: 'We build your product using cutting-edge technologies and clean code practices, with frequent updates and iterative improvements.',
    color: '#00f5ff',
  },
  {
    number: '04',
    title: 'Deployment & Beyond',
    description: 'We launch your product to the world and provide ongoing support, optimization, and scaling as your business grows.',
    color: '#7b2ff7',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="about" className="py-28 lg:py-36 relative overflow-hidden bg-white/[0.01]">
      {/* Background accents (Safe Mode: Hidden) */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="section-badge">About DevPokit</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6"
            >
              We are a team of
              <br />
              <span className="gradient-text">Digital Perfectionists.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-white/50 leading-relaxed font-light mb-8"
            >
              DevPokit was founded on the principle that software should be more than just code it should be a powerful tool for growth and a delight to use. We combine deep technical expertise with a design first mindset to build products that stand out in today's crowded digital landscape.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <div className="glass-card px-6 py-4 flex flex-col items-center justify-center border-cyan-400/20">
                <span className="text-2xl font-black text-cyan-400">50+</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Projects</span>
              </div>
              <div className="glass-card px-6 py-4 flex flex-col items-center justify-center border-purple-400/20">
                <span className="text-2xl font-black text-purple-400">3+</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Years</span>
              </div>
              <div className="glass-card px-6 py-4 flex flex-col items-center justify-center border-cyan-400/20">
                <span className="text-2xl font-black text-cyan-400">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Delivery</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden glass-card p-2 border-white/10">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Our Team working"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-space via-transparent to-transparent opacity-60" />
            </div>
            {/* Decal removed */}
          </motion.div>
        </div>

        {/* How We Work / Process */}
        <div id="process" className="pt-20">
          <div className="text-center mb-16">
            <span className="section-badge">How We Work</span>
            <h3 className="text-3xl sm:text-4xl font-bold text-white">Our Strategic <span className="gradient-text">Process</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative group lg:pt-8"
              >
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[52px] left-[100px] w-full h-[1px] bg-gradient-to-r from-white/20 to-transparent z-0" />
                )}

                <div className="relative z-10 glass-card p-7 group-hover:border-white/20 transition-all duration-300 h-full">
                  <div
                    className="text-4xl font-black mb-4 opacity-20 group-hover:opacity-100 transition-opacity"
                    style={{ color: step.color }}
                  >
                    {step.number}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">{step.title}</h4>
                  <p className="text-sm text-white/50 leading-relaxed font-light">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
