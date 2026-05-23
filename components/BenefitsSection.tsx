'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, Users, Microscope, Leaf, TrendingUp } from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'Resultados Imediatos',
    description: 'Veja transformações reais desde a primeira sessão com protocolos avançados',
  },
  {
    icon: Shield,
    title: ' Segurança Absoluta',
    description: 'Todos os procedimentos seguem rigorosos padrões de segurança internacional',
  },
  {
    icon: Users,
    title: 'Abordagem Humanizada',
    description: 'Cada paciente é única - tratamentos personalizados conforme necessidades',
  },
  {
    icon: Microscope,
    title: 'Tecnologia Premium',
    description: 'Equipamentos de última geração para máxima precisão e efetividade',
  },
  {
    icon: Leaf,
    title: 'Resultados Naturais',
    description: 'Valorizo a beleza natural realçando características únicas de cada uma',
  },
  {
    icon: TrendingUp,
    title: 'Duradouros e Progressivos',
    description: 'Resultados que evoluem e se mantêm ao longo do tempo',
  },
]

export default function BenefitsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/5 to-background relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute -top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center space-y-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">Por Que Escolher Malu</p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground">
            Benefícios <span className="text-primary">Premium</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experiência de classe mundial com cuidado personalizado em cada detalhe
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ translateY: -8, boxShadow: '0 20px 40px rgba(82, 41, 41, 0.15)' }}
                className="p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-all group"
              >
                <motion.div
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 15 }}
                >
                  <IconComponent size={24} className="text-primary" />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          className="mt-20 p-10 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
            Pronto para sua transformação?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Agende sua avaliação gratuita e descubra como podemos realçar sua melhor versão
          </p>
          <motion.a
            href="https://wa.me/5514998205555"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Agendar Avaliação Gratuita
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
