import './globals.css';
import type { Metadata } from 'next';
import Navigation from '@/app/components/navigation/navigation';
import Footer from '@/app/components/footer/footer';


export const metadata: Metadata = {
  title: 'Emilie De Oliveira - Portfolio développeuse front & back',
  description: 'Portfolio d\'Emilie De Oliveira, développeuse front & back, passionnée, en constante recherche de montée en compétences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
