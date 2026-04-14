'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function About() {
  return (
    <section className="py-24 bg-stone-50" id="sobre">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-6">
              Muito prazer, sou <span className="text-violet-700 italic">Raquel Queiroz</span>
            </h2>
            
            <div className="space-y-4 text-stone-600 leading-relaxed text-lg">
              <p>
                Fundadora do Instituto Vibra Terapias, minha missão é ajudar mulheres a se reconectarem com sua verdadeira essência e a se libertarem de amarras energéticas que as impedem de prosperar.
              </p>
              <p>
                Minha própria jornada começou quando me vi em um momento de profunda desconexão e bloqueios. Foi através das terapias holísticas que encontrei não apenas a minha cura, mas o meu propósito de vida.
              </p>
              <p>
                Hoje, com anos de estudo e prática em Tarot Terapêutico, Radiestesia, Mesa Radiônica e Cura Multidimensional Arcturiana, dedico minha vida a ser um canal de luz e transformação para outras pessoas.
              </p>
              <p>
                Acredito que todas nós temos o poder de curar a nós mesmas quando recebemos a orientação e o suporte energético adequados.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 pt-8 border-t border-stone-200">
              <div>
                <p className="text-3xl font-serif font-medium text-violet-700 mb-1">+1.000</p>
                <p className="text-sm text-stone-500">Vidas transformadas</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-medium text-violet-700 mb-1">+5</p>
                <p className="text-sm text-stone-500">Anos de experiência</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/therapist/800/1066" 
                alt="Raquel Queiroz" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-100 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-violet-100 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
