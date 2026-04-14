'use client';

import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-violet-700 relative overflow-hidden" id="agendar">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-violet-600 rounded-full mix-blend-screen filter blur-[100px] opacity-50 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500 rounded-full mix-blend-screen filter blur-[120px] opacity-20 -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-violet-600/50 text-amber-300 mb-8 border border-violet-500/50"
        >
          <Sparkles className="w-8 h-8" />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-8 leading-tight"
        >
          Você está pronta para dar o <span className="text-amber-300 italic">primeiro passo</span> rumo ao seu equilíbrio?
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-violet-100 mb-12 leading-relaxed max-w-2xl mx-auto"
        >
          Não adie mais a sua cura. Agende sua sessão agora e comece a transformar a energia que atrai a sua realidade.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="https://wa.me/5511999999999" // Replace with actual WhatsApp link
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-violet-900 bg-amber-300 hover:bg-amber-400 rounded-full transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Falar no WhatsApp
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a 
            href="#produtos"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-violet-600/50 hover:bg-violet-600 border border-violet-500 rounded-full transition-all"
          >
            Ver cursos e e-books
          </a>
        </motion.div>
      </div>
    </section>
  );
}
