'use client';

import { motion } from 'motion/react';
import { UserCheck } from 'lucide-react';

const profiles = [
  'Mulheres sensíveis à energia dos ambientes e das outras pessoas.',
  'Pessoas que sentem que a vida está travada, seja no amor, nas finanças ou na carreira.',
  'Quem busca autoconhecimento profundo e deseja entender sua missão de vida.',
  'Pessoas que sofrem com ansiedade, esgotamento mental e falta de clareza.',
  'Quem deseja desenvolver sua espiritualidade de forma leve e acolhedora.',
  'Mulheres que precisam se libertar de padrões repetitivos e crenças limitantes.'
];

export default function TargetAudience() {
  return (
    <section className="py-24 bg-violet-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
          
          <div className="relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-10 text-center"
            >
              Para quem é o trabalho do <span className="text-violet-700 italic">Instituto Vibra Terapias</span>?
            </motion.h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {profiles.map((profile, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center shrink-0 mt-1">
                    <UserCheck className="w-4 h-4 text-violet-600" />
                  </div>
                  <p className="text-stone-700 leading-relaxed">{profile}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
