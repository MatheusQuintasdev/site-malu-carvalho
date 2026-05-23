'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

const galleryImages = [
  {
    before: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/resultados1-c248FvAOXkMgoq9C6MM4GTSmGYDyH0.jpg',
    alt: 'Resultado antes e depois 1'
  },
  {
    before: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/resultados2-9MI2ZgCtVzbfC9WTdj4Q5ZMCB2DxHt.jpg',
    alt: 'Resultado antes e depois 2'
  },
  {
    before: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/resultados3-JzpjQ39wIqGpwUyDbS8nIutu6oHsiV.jpg',
    alt: 'Resultado antes e depois 3'
  },
  {
    before: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/resultados4-jNzIQW8GhBx7OOrROKEjaNDeXXdrFZ.jpg',
    alt: 'Resultado antes e depois 4'
  },
  {
    before: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/resultados5-9BbH5OXJS96Xv9OIgOYeL0pcZ4JnYz.jpg',
    alt: 'Resultado antes e depois 5'
  },
  {
    before: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/resultados6-YO02wS0N2G9LHQZut2Y88QXVrXzc5R.jpg',
    alt: 'Resultado antes e depois 6'
  },
  {
    before: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/resultados7-oLt8gIFRMOlHwvcNJEwrfSTDue9mhx.jpg',
    alt: 'Resultado antes e depois 7'
  }
]

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="resultados" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Antes e Depois
          </h2>
          <p className="text-lg text-muted-foreground">
            Resultados reais de pacientes reais
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image.before)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer bg-muted/50 aspect-square"
            >
              <Image
                src={image.before}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.5 1.5H5.75A4.25 4.25 0 001.5 5.75v8.5A4.25 4.25 0 005.75 18.5h8.5a4.25 4.25 0 004.25-4.25V9.5" />
                    <path d="M10 6.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
                    <circle cx="15.5" cy="5" r="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-secondary transition-colors"
            >
              <X size={32} />
            </button>
            <Image
              src={selectedImage}
              alt="Resultado ampliado"
              width={1000}
              height={1000}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
}
