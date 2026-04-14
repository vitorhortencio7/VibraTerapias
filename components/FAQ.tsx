'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Como funciona uma sessão online?',
    answer: 'As sessões online são realizadas por videochamada (Zoom ou Google Meet) e têm a mesma eficácia do atendimento presencial. A energia não tem barreiras físicas. Você só precisa de um lugar tranquilo e uma boa conexão com a internet.'
  },
  {
    question: 'Preciso acreditar em espiritualidade para participar?',
    answer: 'Não é necessário ter nenhuma crença religiosa específica. As terapias energéticas trabalham com frequências e vibrações. O mais importante é você estar aberta para receber e disposta a olhar para si mesma.'
  },
  {
    question: 'Quanto tempo dura uma sessão?',
    answer: 'A duração varia de acordo com a terapia escolhida. O Tarot Terapêutico e a Mesa Radiônica costumam durar cerca de 1h a 1h30. Já a Limpeza Energética e a Cura Arcturiana levam em média 45 minutos a 1 hora.'
  },
  {
    question: 'É possível aprender radiestesia mesmo sendo iniciante?',
    answer: 'Com certeza! Meu e-book "Guia Prático de Radiestesia para Iniciantes" foi criado exatamente para quem está começando do zero. A linguagem é simples, direta e cheia de exercícios práticos para você treinar.'
  },
  {
    question: 'Quantas sessões eu preciso fazer?',
    answer: 'Isso depende muito do seu momento atual e do que estamos tratando. Algumas questões se resolvem em uma única sessão de Mesa Radiônica, enquanto processos mais profundos podem exigir um acompanhamento. Sempre conversamos sobre isso no final do primeiro atendimento.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-6"
          >
            Perguntas <span className="text-violet-700 italic">frequentes</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-stone-600"
          >
            Tire suas dúvidas antes de agendar sua sessão ou adquirir um produto.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-stone-200 rounded-2xl overflow-hidden bg-stone-50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-medium text-stone-900 pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-stone-500 transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
