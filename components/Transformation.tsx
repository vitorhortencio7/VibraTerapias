'use client';

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const benefits = [
  'Restauração do equilíbrio emocional e mental',
  'Limpeza de energias densas e larvas astrais',
  'Fortalecimento do seu campo de proteção energética',
  'Desbloqueio de caminhos na vida pessoal, amorosa e financeira',
  'Maior clareza para tomar decisões importantes',
  'Reconexão com a sua intuição e propósito de vida'
];

export default function Transformation() {
  return (
    <section className="py-24 bg-stone-900 text-stone-50 overflow-hidden relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-600 rounded-full mix-blend-screen filter blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-600 rounded-full mix-blend-screen filter blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-3xl overflow-hidden"
          >
            <Image 
              src="https://picsum.photos/seed/healing/800/1000" 
              alt="Transformação e Cura" 
              fill 
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              Existe uma forma mais <span className="text-violet-400 italic">leve</span> de viver a sua jornada.
            </h2>
            <p className="text-lg text-stone-300 mb-8 leading-relaxed">
              As terapias energéticas não são mágicas, são ferramentas profundas de autoconhecimento e realinhamento. Ao limpar o que não serve mais, abrimos espaço para o novo fluir em sua vida.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-violet-400 shrink-0 mt-0.5" />
                  <span className="text-stone-200">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <a 
              href="#agendar"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-stone-900 bg-violet-300 hover:bg-violet-400 rounded-full transition-all"
            >
              Quero sentir essa transformação
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
