import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '~/contexts/theme';

const geist = Geist({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Matheus França | Desenvolvedor Full Stack - FalaAiMatheus',
  description:
    'Portfolio profissional de Matheus França (FalaAiMatheus). Especialista em React, Next.js e soluções digitais modernas.',
  creator: 'Matheus França',
  keywords: [
    'Matheus França',
    'FalaAiMatheus',
    'Desenvolvedor Frontend',
    'Next.js Portfolio',
    'React Developer',
    'Full Stack',
  ],
  applicationName: 'Fala Ai Matheus Portfolio',
  authors: [
    { name: 'Matheus França', url: 'https://github.com/FalaAiMatheus' },
  ],
  formatDetection: {
    address: false,
    date: false,
    email: false,
    telephone: false,
    url: true,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://falaaimatheus.vercel.app/',
    title: 'Matheus França | FalaAiMatheus',
    description:
      'Sou uma pessoa apaixonada por tecnologia desde de cedo, e também uma pessoa que gosta de resolver problemas com muita criatividade. Já participei de alguns projetos sendo um deles o desenvolvimento do portal do trabalhe conosco do Grupo de Comunicação O POVO, o desenvolvimento do site do Front End Day, principal evento de tecnologia da comunidade do Front End CE. Entre outros projetos internos do Grupo de Comunicação O POVO.',
    siteName: 'FalaAiMatheus Portfolio',
  },
  twitter: {
    title: 'Matheus França | FalaAiMatheus',
    description: 'Desenvolvedor Full Stack apaixonado por tecnologia.',
    creator: '@FalaAiMatheus',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geist.className} antialised`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
