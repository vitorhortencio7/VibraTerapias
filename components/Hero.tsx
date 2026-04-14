'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-stone-50 pt-20 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-rose-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100/50 text-violet-800 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Instituto Vibra Terapias</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-stone-900 leading-tight mb-6">
              Restaure sua energia e <span className="text-violet-700 italic">desbloqueie</span> os caminhos da sua vida.
            </h1>
            
            <p className="text-lg sm:text-xl text-stone-600 mb-8 leading-relaxed">
              Terapias energéticas e espirituais para mulheres que buscam clareza, proteção e cura emocional. Encontre o equilíbrio que você precisa para voltar a fluir.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#agendar"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-violet-700 hover:bg-violet-800 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Agendar minha sessão
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#servicos"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-stone-700 bg-white border border-stone-200 hover:bg-stone-50 rounded-full transition-all"
              >
                Conhecer terapias
              </a>
            </div>
            
            <div className="mt-10 flex items-center gap-4 text-sm text-stone-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-stone-50 bg-stone-200 overflow-hidden relative">
                    <Image src={`https://picsum.photos/seed/woman${i}/100/100`} alt="Cliente" fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <p>Junte-se a centenas de mulheres transformadas</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/spirituality/800/1000" 
                alt="Energia e Espiritualidade" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-stone-900">Atendimento Online</p>
                <p className="text-xs text-stone-500">Para todo o mundo</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
