'use client'

import { motion } from 'framer-motion'
import { Lock, Beaker, Heart, Clock, FileCheck, Hexagon } from 'lucide-react'

const techCareSections = [
  {
    title: 'Segurança & Protocolos',
    icon: Lock,
    items: [
      'Avaliação dermatológica prévia',
      'Equipamentos esterilizados',
      'Profissional certificado internacionalmente',
      'Acompanhamento pós-procedimento'
    ],
    color: 'from-primary to-accent'
  },
  {
    title: 'Metodologia Científica',
    icon: Beaker,
    items: [
      'Protocolos baseados em pesquisa',
      'Análise de pele prévia',
      'Tecnologia de ponta certificada',
      'Resultados mensuráveis'
    ],
    color: 'from-accent to-secondary'
  },
  {
    title: 'Cuidado Pós-Tratamento',
    icon: Heart,
    items: [
      'Instruções personalizadas',
      'Suporte via WhatsApp 24/7',
      'Acompanhamento fotográfico',
      'Retoques conforme necessário'
    ],
    color: 'from-secondary to-primary'
  }
]

export default function TechCareSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/5 to-background relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute -top-40 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        animate={{ x: [0, 40, 0], opacity: [0.2, 0.4, 0.2] }}
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
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">Excelência em Cuidado</p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground">
            Tecnologia & Protocolos <span className="text-primary">Premium</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada detalhe é pensado para sua segurança, conforto e resultados extraordinários
          </p>
        </motion.div>

        {/* Three Column Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {techCareSections.map((section, index) => {
            const IconComponent = section.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ translateY: -12 }}
                className="relative group"
              >
                {/* Gradient Background */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-br ${section.color} rounded-3xl blur-2xl opacity-25 group-hover:opacity-40 transition-opacity duration-300`}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 6, repeat: Infinity, delay: index * 2 }}
                />

                {/* Card */}
                <div className="relative h-full p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-secondary/20 hover:border-secondary/40 transition-all">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                    whileHover={{ rotate: -10 }}
                  >
                    <IconComponent size={32} className="text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-6">{section.title}</h3>

                  {/* Items List */}
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: itemIndex * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                      >
                        <Hexagon size={16} className={`text-primary flex-shrink-0 mt-1`} />
                        <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Timeline / Process Section */}
        <motion.div
          className="mt-20 p-12 rounded-3xl bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border border-primary/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-12">
            Seu Percurso de Transformação
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Avaliação', desc: 'Análise detalhada e consulta' },
              { step: '2', title: 'Planejamento', desc: 'Tratamento personalizado' },
              { step: '3', title: 'Execução', desc: 'Procedimento com precisão' },
              { step: '4', title: 'Evolução', desc: 'Acompanhamento contínuo' }
            ].map((phase, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent items-center justify-center text-white font-serif text-2xl font-bold mb-3">
                  {phase.step}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{phase.title}</h4>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
                
                {idx < 3 && (
                  <motion.div
                    className="hidden md:block absolute mt-8 ml-8 text-2xl text-primary/30"
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                  >
                    →
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
