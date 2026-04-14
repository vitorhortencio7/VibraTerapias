import { Sparkles, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-stone-100 font-serif text-xl mb-4">
              <Sparkles className="w-5 h-5 text-violet-400" />
              <span>Instituto Vibra Terapias</span>
            </div>
            <p className="text-stone-500 max-w-sm leading-relaxed mb-6">
              Terapias energéticas e espirituais para restaurar seu equilíbrio emocional e desbloquear seus caminhos.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-violet-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-violet-600 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-stone-100 font-medium mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#sobre" className="hover:text-violet-400 transition-colors">Sobre a Raquel</a></li>
              <li><a href="#servicos" className="hover:text-violet-400 transition-colors">Terapias</a></li>
              <li><a href="#produtos" className="hover:text-violet-400 transition-colors">Cursos e E-books</a></li>
              <li><a href="#faq" className="hover:text-violet-400 transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-stone-100 font-medium mb-4">Contato</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-violet-400 transition-colors">WhatsApp: (11) 99999-9999</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">contato@vibraterapias.com.br</a></li>
              <li><p className="text-stone-500">Atendimento Online para todo o mundo.</p></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-stone-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Instituto Vibra Terapias. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-stone-300 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
