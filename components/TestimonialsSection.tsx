'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/depoimento1-FUgNfGaSsbfXhFFi13jI8hJzwYXCjF.jpg',
    title: 'Depoimento cliente 1',
  },
  {
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/depoimento2-0lRIYOqnf96UPpbMnQKkfQlNnhBMh4.jpg',
    title: 'Depoimento cliente 2',
  },
  {
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/depoimento3-viFlSXuqIUQH6RRWBHYVhhGlc1hngG.jpg',
    title: 'Depoimento cliente 3',
  }
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 6000)
    return () => clearInterval(interval)
  }, [autoPlay])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
    setAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
    setAutoPlay(false)
  }

  return (
    <section id="depoimentos" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
            <Heart size={16} className="text-accent" />
            <span className="text-sm font-medium text-primary">Depoimentos Reais</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground">
            Histórias de <span className="text-accent">Transformação</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja como as pacientes estão se sentindo mais confiantes e radiantes após os tratamentos
          </p>
        </motion.div>

        {/* Netflix-Style Carousel */}
        <div className="relative group">
          {/* Main Carousel Container */}
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-2xl bg-black/5"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="relative w-full h-[500px] sm:h-[600px] md:h-[700px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].title}
                  fill
                  className="object-cover w-full h-full"
                  priority
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                
                {/* Counter */}
                <motion.div
                  className="absolute top-6 right-6 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-semibold border border-white/30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {currentIndex + 1} / {testimonials.length}
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <motion.button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all border border-white/30 opacity-0 group-hover:opacity-100"
              whileHover={{ scale: 1.15, backgroundColor: 'rgba(255,255,255,0.5)' }}
              whileTap={{ scale: 0.9 }}
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </motion.button>
            
            <motion.button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all border border-white/30 opacity-0 group-hover:opacity-100"
              whileHover={{ scale: 1.15, backgroundColor: 'rgba(255,255,255,0.5)' }}
              whileTap={{ scale: 0.9 }}
              aria-label="Próximo"
            >
              <ChevronRight size={24} />
            </motion.button>

            {/* Indicators - Centered Below */}
            <motion.div
              className="flex justify-center gap-2 absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setAutoPlay(false)
                  }}
                  className={`transition-all rounded-full backdrop-blur-md border ${
                    index === currentIndex
                      ? 'bg-white/60 w-10 h-3 border-white/80'
                      : 'bg-white/20 w-3 h-3 border-white/40 hover:bg-white/40'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Auto-play indicator */}
        <motion.div
          className="flex justify-center gap-2 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="h-1 bg-gradient-to-r from-primary to-accent rounded-full"
            animate={{
              width: autoPlay ? '60px' : '0px'
            }}
            transition={{
              duration: 6,
              repeat: autoPlay ? Infinity : 0,
              ease: 'linear'
            }}
          />
          {!autoPlay && (
            <motion.button
              onClick={() => setAutoPlay(true)}
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              Retomar automático
            </motion.button>
          )}
        </motion.div>
      </div>
    </section>
  )
}
