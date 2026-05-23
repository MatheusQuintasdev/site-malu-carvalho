'use client'

import { Instagram, MessageCircle, MapPin } from 'lucide-react'

export default function CTAFooter() {
  return (
    <>
      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Agende sua avaliação e realce sua melhor versão ✨
            </h2>
            <p className="text-lg text-muted-foreground">
              Nada melhor do que você se olhar e se sentir ainda mais linda. É só o começo!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="https://wa.me/55"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Quero agendar agora
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-secondary">
                  <path d="M20 5L12 15H28L20 5Z" fill="currentColor" opacity="0.8"/>
                  <path d="M20 15L12 25H28L20 15Z" fill="currentColor"/>
                </svg>
                <div>
                  <h3 className="text-sm font-serif font-semibold text-secondary">Malu</h3>
                  <p className="text-xs text-background/70">Estética</p>
                </div>
              </div>
              <p className="text-sm text-background/80">
                Tratamentos estéticos premium para sua melhor versão.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-secondary">Navegação</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="#sobre" className="hover:text-secondary transition-colors">Sobre</a></li>
                <li><a href="#procedimentos" className="hover:text-secondary transition-colors">Procedimentos</a></li>
                <li><a href="#resultados" className="hover:text-secondary transition-colors">Resultados</a></li>
                <li><a href="#depoimentos" className="hover:text-secondary transition-colors">Depoimentos</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold text-secondary">Contato</h4>
              <div className="space-y-2 text-sm text-background/80">
                <div className="flex items-start gap-2">
                  <MapPin size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                  <span>Botucatu - SP, Brasil</span>
                </div>
                <a
                  href="https://instagram.com/maluc.estetica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-secondary transition-colors"
                >
                  <Instagram size={18} />
                  @maluc.estetica
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <h4 className="font-semibold text-secondary">Conecte-se</h4>
              <a
                href="https://wa.me/55"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-3 bg-secondary text-foreground font-semibold rounded-lg hover:bg-secondary/90 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-background/20">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/70 gap-4">
              <p>&copy; 2026 Malu Carvalho Estética. Todos os direitos reservados.</p>
              <p>Desenvolvido com ❤️ por Matheus Quintas</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/55"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 p-4 rounded-full bg-gradient-to-br from-secondary to-primary text-white shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all animate-bounce"
        aria-label="Contate via WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </>
  )
}
