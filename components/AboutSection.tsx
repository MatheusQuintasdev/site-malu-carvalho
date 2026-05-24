'use client'

import Image from 'next/image'
import { CheckCircle, Award, Heart, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AboutSection() {
  const features = [
    { icon: Heart, label: 'Humanização', desc: 'Atendimento com empatia e cuidado' },
    { icon: Sparkles, label: 'Personalizado', desc: 'Tratamentos sob medida para você' },
    { icon: Award, label: 'Expertise', desc: 'Pós-graduação e experiência certificada' },
    { icon: CheckCircle, label: 'Resultados', desc: 'Transformação natural e duradoura' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="sobre" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/5 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute -top-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image - Enhanced */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div
              className="absolute -inset-6 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-3xl blur-2xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-secondary/20">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/681335805_17888232666473182_220892915846778720_n%20%281%29-LmZkeoLfRMknO3YmbyR7qs1xlqzsuF.jpg"
                  alt="Malu Carvalho - Biomédica Especialista"
                  width={450}
                  height={550}
                  className="w-full h-auto object-cover"
                  priority
                />
              </motion.div>
              
              {/* Badge Overlay */}
              <motion.div
                className="absolute bottom-6 left-6 px-4 py-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-white/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <p className="font-serif text-sm font-semibold text-primary">Especialista Certified</p>
                <p className="text-xs text-muted-foreground">Pós-graduação em Estética</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Heading */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
                <p className="text-sm font-semibold text-primary uppercase tracking-wide">Sobre Mim</p>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground leading-tight">
                Conheça <span className="text-gradient">Malu Carvalho</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Sou Malu Carvalho, biomédica apaixonada por transformar vidas através da estética. Com pós-graduação em estética e muita dedicação, meu propósito é elevar a autoestima de cada paciente com tratamentos seguros, naturais e personalizados.
              </p>
            </motion.div>

            {/* Features Grid - 2x2 */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ translateY: -4 }}
                  className="p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-colors group cursor-pointer"
                >
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary/40 to-accent/40 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 10 }}
                  >
                    <feature.icon size={20} className="text-primary" />
                  </motion.div>
                  <p className="font-semibold text-sm text-foreground">{feature.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-6 border-t border-border/50">
              {[
                { number: '1000+', label: 'Pacientes Felizes' },
                { number: '100%', label: 'Satisfação' }
              ].map((stat, idx) => (
                <div key={idx} className="space-y-2">
                  <motion.p
                    className="text-3xl md:text-4xl font-serif font-bold text-primary"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {stat.number}
                  </motion.p>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Gradient Text Styling */}
      <style>{`
        .text-gradient {
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </section>
  )
}
