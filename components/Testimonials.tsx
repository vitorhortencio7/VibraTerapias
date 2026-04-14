'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Mariana Silva',
    role: 'Empreendedora',
    content: 'Eu estava me sentindo completamente estagnada. A sessão de Mesa Radiônica com a Raquel foi um divisor de águas. Na mesma semana, portas que estavam fechadas há meses se abriram. A energia dela é incrível e muito acolhedora.',
    image: 'https://picsum.photos/seed/mariana/100/100'
  },
  {
    name: 'Juliana Costa',
    role: 'Professora',
    content: 'Fiz o Tarot Terapêutico e chorei do início ao fim. Não foi sobre adivinhar o futuro, mas sobre entender o que estava me bloqueando no presente. Saí da sessão com uma clareza que eu não tinha há anos.',
    image: 'https://picsum.photos/seed/juliana/100/100'
  },
  {
    name: 'Camila Rodrigues',
    role: 'Arquiteta',
    content: 'A limpeza energética mudou o clima da minha casa e da minha vida. Eu sentia um peso constante nos ombros que simplesmente desapareceu. Recomendo de olhos fechados o trabalho do Instituto Vibra Terapias.',
    image: 'https://picsum.photos/seed/camila/100/100'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-stone-900 text-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-medium mb-6"
          >
            Histórias de <span className="text-violet-400 italic">transformação</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-stone-400"
          >
            Não acredite apenas nas minhas palavras. Veja o que as mulheres que já passaram por essa jornada têm a dizer.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-stone-800 p-8 rounded-[2rem] relative"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-stone-700 opacity-50" />
              
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              
              <p className="text-stone-300 leading-relaxed mb-8 italic">
                &quot;{testimonial.content}&quot;
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    fill 
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="font-medium text-stone-100">{testimonial.name}</p>
                  <p className="text-sm text-stone-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
