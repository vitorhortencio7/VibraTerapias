'use client';

import { motion } from 'motion/react';
import { CloudRain, Lock, Compass, BatteryWarning } from 'lucide-react';

const painPoints = [
  {
    icon: BatteryWarning,
    title: 'Sensação de energia pesada',
    description: 'Você se sente constantemente cansada, esgotada ou sugada, mesmo após descansar. Parece que há um peso invisível sobre seus ombros.'
  },
  {
    icon: Lock,
    title: 'Bloqueios emocionais',
    description: 'Sente que algo está travando sua vida amorosa, financeira ou profissional, mas não consegue identificar o que é ou como resolver.'
  },
  {
    icon: Compass,
    title: 'Falta de clareza e propósito',
    description: 'Sente-se perdida, desconectada da sua intuição e com dificuldade de tomar decisões importantes para o seu futuro.'
  },
  {
    icon: CloudRain,
    title: 'Ansiedade espiritual',
    description: 'Sente uma necessidade urgente de proteção energética e de se reconectar com sua essência, mas não sabe por onde começar.'
  }
];

export default function PainPoints() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-6"
          >
            Você sente que a sua vida está <span className="text-violet-700 italic">travada</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-stone-600"
          >
            Muitas mulheres chegam até mim carregando fardos que não são delas. Se você se identifica com alguma dessas situações, saiba que você não está sozinha e existe um caminho de cura.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="bg-stone-50 p-8 rounded-3xl border border-stone-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center text-violet-600 mb-6">
                <point.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-3">{point.title}</h3>
              <p className="text-stone-600 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
