import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import siteConfig from '../data/siteConfig'

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background accents */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, #f97316 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, #7b2ff7 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="section-badge">Our Expertise</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6"
          >
            Specialized in <span className="gradient-text">Modern</span> Solutions.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/50 max-w-2xl mx-auto font-light"
          >
            We leverage cutting-edge technologies to build scalable, high-performance digital products that drive growth and innovation.
          </motion.p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {siteConfig.services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="glass-card-hover electric-hover group p-[1px] h-full"
            >
              <div className="glow-intense" />
              <div className="electric-inner p-8 h-full">
                {/* Card background gradient on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${service.color}, transparent 70%)`,
                  }}
                />

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    background: `${service.color}12`,
                    border: `1px solid ${service.color}25`,
                  }}
                >
                  <span className="relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                    {service.icon}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed font-light group-hover:text-white/70 transition-colors">
                  {service.description}
                </p>

                {/* Bottom accent bar */}
                <div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r transition-all duration-500 w-0 group-hover:w-full"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${service.color}, #7b2ff7)`,
                    boxShadow: `0 0 15px ${service.color}80`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Capabilities/Tech row ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 lg:mt-32 p-8 lg:p-12 glass-card border-blue-400/10 relative overflow-hidden group"
        >
          {/* Subtle bg glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-400/5 blur-[80px] rounded-full group-hover:bg-blue-400/10 transition-colors" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-12">
              <h3 className="text-2xl font-bold mb-3">Our Core Stack</h3>
              <p className="text-sm text-white/40 leading-relaxed">
                We use the best tools for the job, ensuring performance, maintainability, and security at every level.
              </p>
            </div>

            <div className="lg:col-span-2 flex flex-wrap gap-8 justify-center lg:justify-start">
              {[
                { label: 'Frontend', techs: 'React, Next.js, Framer Motion' },
                { label: 'Mobile', techs: 'Flutter, React Native, Swift' },
                { label: 'Backend', techs: 'Node.js, Python, PostgreSQL, MongoDB' },
                { label: 'Cloud', techs: 'AWS, Docker, Kubernetes, Vercel' },
              ].map((group) => (
                <div key={group.label} className="flex flex-col gap-1.5">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold">
                    {group.label}
                  </span>
                  <span className="text-sm text-white/80 font-medium">{group.techs}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
