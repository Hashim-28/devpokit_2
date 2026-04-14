import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function SplashScreen({ finishLoading }) {
  const [complete, setComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setComplete(true)
      setTimeout(finishLoading, 800) // Delay to let exit animation breathe
    }, 2800)
    return () => clearTimeout(timer)
  }, [finishLoading])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05,
        filter: 'blur(10px)',
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background radial glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]"
      />

      {/* Cyberpunk grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

      <div className="relative flex flex-col items-center">
        {/* Main Logo Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9, filter: 'brightness(0) invert(0)' }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'brightness(1.1) drop-shadow(0 0 30px rgba(59,130,246,0.4))'
          }}
          transition={{
            duration: 1.2,
            hide: { opacity: 0, scale: 1.2 },
            ease: [0.16, 1, 0.3, 1]
          }}
          className="relative z-10 mb-12"
        >
          {/* Logo Image */}
          <img
            src="/images/Futuristic QiblaX logo design.png"
            alt="QiblaX"
            className="w-40 h-auto sm:w-56 transition-transform duration-500 hover:scale-105"
          />

          {/* Animated Glow Ring */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-blue-500/10 blur-2xl -z-10"
          />

          {/* Scanning line */}
          <motion.div
            initial={{ top: "-10%" }}
            animate={{ top: "110%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent z-20"
          />
        </motion.div>

        {/* Brand Text / Loading State */}
        <div className="flex flex-col items-center gap-6">
          <motion.h1
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-white text-xs font-black uppercase tracking-[0.5em] text-center"
          >
            Digital Excellence
          </motion.h1>

          <div className="w-40 h-[2px] bg-white/5 relative overflow-hidden rounded-full">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2.5, ease: [0.65, 0, 0.35, 1] }}
              className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Decorative side corner lines */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "100px" }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute top-10 left-10 w-px bg-blue-500/30"
      />
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100px" }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute top-10 left-10 h-px bg-blue-500/30"
      />

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "100px" }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 right-10 w-px bg-blue-500/30"
      />
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100px" }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 right-10 h-px bg-blue-500/30"
      />
    </motion.div>
  )
}
