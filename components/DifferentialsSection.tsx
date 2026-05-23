'use client'

import { Users, Home, Leaf, Zap, Shield, Heart } from 'lucide-react'

const differentials = [
  {
    icon: Users,
    title: 'Atendimento Personalizado',
    description: 'Cada cliente recebe um plano de tratamento exclusivo.'
  },
  {
    icon: Home,
    title: 'Ambiente Acolhedor',
    description: 'Espaço elegante e confortável para relaxar.'
  },
  {
    icon: Leaf,
    title: 'Resultados Naturais',
    description: 'Procedimentos que respeitam suas características naturais.'
  },
  {
    icon: Zap,
    title: 'Equipamentos Modernos',
    description: 'Tecnologia de ponta para melhores resultados.'
  },
  {
    icon: Shield,
    title: 'Segurança Garantida',
    description: 'Protocolos rigorosos e higiene impecável.'
  },
  {
    icon: Heart,
    title: 'Atendimento Humanizado',
    description: 'Relação de confiança e empatia com cada paciente.'
  }
]

export default function DifferentialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Por que escolher a Malu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Diferenciais que garantem sua satisfação e melhores resultados
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group relative p-8 bg-background border border-border rounded-xl hover:border-secondary/60 transition-all duration-300 overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className="p-3 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-lg w-fit group-hover:from-secondary/50 group-hover:to-accent/50 transition-all">
                    <Icon size={28} className="text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  {/* Line accent */}
                  <div className="h-1 w-8 bg-gradient-to-r from-secondary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
