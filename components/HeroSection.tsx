'use client'

import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center min-h-[600px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 border border-secondary/40 rounded-full backdrop-blur-sm"
            >
              <Sparkles size={16} className="text-secondary" />
              <span className="text-xs sm:text-sm font-medium text-primary">Especialista Biomédica com Pós-graduação</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-foreground leading-tight"
              >
                <span className="text-primary">Realce</span> sua melhor versão
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg"
              >
                Tratamentos faciais e corporais de alta precisão, focados em autoestima, beleza natural e resultados duradouros.
              </motion.p>
            </div>

            {/* Highlights */}
            <motion.div variants={itemVariants} className="space-y-4 pt-4">
              {[
                { title: 'Resultados Visíveis', desc: 'Transformação real antes e depois' },
                { title: 'Atendimento Premium', desc: 'Experiência personalizada e exclusiva' },
                { title: 'Segurança Garantida', desc: 'Protocolos internacionais certificados' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.title}</p>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.button
                onClick={() => scrollToSection('depoimentos')}
                className="px-8 py-3.5 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(82, 41, 41, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                Agendar Avaliação
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('resultados')}
                className="px-8 py-3.5 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Resultados
                <ArrowRight size={18} />
              </motion.button>
            </motion.div>
          </div>

          {/* Right Content - Elegant Image Showcase */}
          <motion.div
            variants={itemVariants}
            className="relative hidden md:flex items-center justify-center h-[500px]"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-secondary/15 to-accent/15 rounded-3xl blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-secondary/20 backdrop-blur-sm bg-white/5">
              <motion.img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/681335805_17888232666473182_220892915846778720_n%20%281%29-LmZkeoLfRMknO3YmbyR7qs1xlqzsuF.jpg"
                alt="Malu Carvalho"
                className="w-full h-full object-cover"
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="flex justify-center mt-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="inline-flex flex-col items-center gap-2">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Scroll para explorar</p>
          <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
