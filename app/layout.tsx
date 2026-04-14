import type {Metadata} from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Instituto Vibra Terapias | Raquel Queiroz',
  description: 'Terapias energéticas e espirituais para restaurar seu equilíbrio emocional e desbloquear seus caminhos.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${cormorant.variable} scroll-smooth`}>
      <body className="font-sans bg-stone-50 text-stone-800 antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
