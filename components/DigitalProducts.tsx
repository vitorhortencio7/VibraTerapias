'use client';

import { motion } from 'motion/react';
import { BookOpen, PlayCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function DigitalProducts() {
  return (
    <section className="py-24 bg-stone-50" id="produtos">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-6"
          >
            Aprenda a <span className="text-violet-700 italic">cuidar</span> da sua própria energia
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-stone-600"
          >
            Além dos atendimentos, criei materiais práticos para que você possa desenvolver sua espiritualidade e aplicar essas ferramentas no seu dia a dia.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Ebook Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-stone-100 flex flex-col sm:flex-row"
          >
            <div className="sm:w-2/5 relative h-64 sm:h-auto bg-violet-100">
              <Image 
                src="https://picsum.photos/seed/ebook/400/600" 
                alt="Ebook Radiestesia" 
                fill 
                className="object-cover mix-blend-multiply opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 sm:w-3/5 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-violet-700 text-sm font-medium mb-4">
                <BookOpen className="w-4 h-4" />
                <span>E-book Digital</span>
              </div>
              <h3 className="text-2xl font-serif font-medium text-stone-900 mb-3">Guia Prático de Radiestesia para Iniciantes</h3>
              <p className="text-stone-600 mb-6 leading-relaxed">Aprenda a usar o pêndulo do zero para medir energias, limpar ambientes e tomar decisões com mais clareza.</p>
              <a 
                href="https://kiwify.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-violet-700 font-medium hover:text-violet-800 transition-colors mt-auto"
              >
                Comprar agora
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Course Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-stone-100 flex flex-col sm:flex-row"
          >
            <div className="sm:w-2/5 relative h-64 sm:h-auto bg-amber-100">
              <Image 
                src="https://picsum.photos/seed/course/400/600" 
                alt="Curso Online" 
                fill 
                className="object-cover mix-blend-multiply opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 sm:w-3/5 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-amber-600 text-sm font-medium mb-4">
                <PlayCircle className="w-4 h-4" />
                <span>Curso Online</span>
              </div>
              <h3 className="text-2xl font-serif font-medium text-stone-900 mb-3">Despertar Energético</h3>
              <p className="text-stone-600 mb-6 leading-relaxed">Um curso completo para você entender seus chakras, aprender técnicas de proteção e elevar sua vibração diária.</p>
              <a 
                href="https://kiwify.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors mt-auto"
              >
                Conhecer o curso
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
