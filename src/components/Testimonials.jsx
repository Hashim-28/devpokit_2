import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import testimonials from '../data/testimonials.json'

const StarRating = ({ count }) => (
  <div className="flex gap-1 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="text-yellow-400 text-base" style={{ filter: 'drop-shadow(0 0 4px rgba(250,200,0,0.6))' }}>★</span>
    ))}
  </div>
)

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const timerRef = useRef(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const paginate = (dir) => {
    setDirection(dir)
    setCurrent(c => (c + dir + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    timerRef.current = setInterval(() => paginate(1), 5500)
    return () => clearInterval(timerRef.current)
  }, [])

  const resetTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => paginate(1), 5500)
  }

  const handlePrev = () => { paginate(-1); resetTimer() }
  const handleNext = () => { paginate(1); resetTimer() }

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  }

  const t = testimonials[current]

  return (
    <section id="testimonials" className="py-28 lg:py-36 relative overflow-hidden">
      {/* BG blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(123,47,247,0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={ref} className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
            <span className="section-badge">Client Love</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight"
          >
            What Our
            <br />
            <span className="gradient-text">Clients Say</span>
          </motion.h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="glass-card p-8 sm:p-12 text-center"
            >
              {/* Large quote mark */}
              <div className="text-8xl font-black gradient-text opacity-20 leading-none mb-2 select-none" aria-hidden>
                "
              </div>

              <StarRating count={t.rating} />

              <blockquote className="text-xl sm:text-2xl font-light text-white/80 leading-relaxed mb-8 max-w-3xl mx-auto italic">
                "{t.text}"
              </blockquote>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2"
                  style={{ borderColor: 'rgba(0,245,255,0.3)' }}
                >
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm text-white/50">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-5 mt-8">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-white/60 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-200"
            >
              ←
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); resetTimer() }}
                  className={`transition-all duration-300 rounded-full ${
                    i === current ? 'w-6 h-2 bg-cyan-400' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-white/60 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-200"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
