'use client';

import { motion } from 'motion/react';
import { Sparkles, Sun, Shield, HeartPulse } from 'lucide-react';

const services = [
  {
    icon: Sun,
    title: 'Tarot Terapêutico',
    description: 'Mais do que prever o futuro, o Tarot Terapêutico é um espelho da sua alma. Ele revela bloqueios inconscientes, traz clareza para o momento presente e orienta suas próximas decisões com sabedoria e leveza.',
    color: 'bg-amber-100 text-amber-600'
  },
  {
    icon: Sparkles,
    title: 'Mesa Radiônica',
    description: 'Uma poderosa ferramenta de cura quântica. Através da radiestesia, identificamos e transmutamos energias estagnadas, crenças limitantes e bloqueios que impedem a sua prosperidade e felicidade.',
    color: 'bg-violet-100 text-violet-600'
  },
  {
    icon: Shield,
    title: 'Limpeza e Blindagem',
    description: 'Sessão focada em remover larvas astrais, inveja e energias densas do seu campo áurico. Após a limpeza, criamos um escudo de proteção energética para manter sua vibração elevada.',
    color: 'bg-emerald-100 text-emerald-600'
  },
  {
    icon: HeartPulse,
    title: 'Cura Arcturiana',
    description: 'Terapia multidimensional de alta frequência que atua nos corpos físico, mental, emocional e espiritual. Ideal para curar traumas profundos, ansiedade e reconectar você com sua essência estelar.',
    color: 'bg-rose-100 text-rose-600'
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-white" id="servicos">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-6"
          >
            Como posso te ajudar a <span className="text-violet-700 italic">florescer</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-stone-600"
          >
            Cada atendimento é único e personalizado para o seu momento de vida. Escolha a terapia que mais ressoa com o seu coração agora.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-stone-50 p-8 sm:p-10 rounded-[2rem] border border-stone-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-stone-900 mb-4">{service.title}</h3>
              <p className="text-stone-600 leading-relaxed mb-8">{service.description}</p>
              
              <a 
                href="#agendar"
                className="inline-flex items-center text-violet-700 font-medium group-hover:text-violet-800 transition-colors"
              >
                Saber mais e agendar
                <Sparkles className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
