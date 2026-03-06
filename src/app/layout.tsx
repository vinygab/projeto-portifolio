import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { ThemeProvider } from '@/components/theme-provider';
import { getSiteData } from '@/lib/content';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteData();

  return {
    title: {
      default: `${site.name} | Frontend Engineer`,
      template: `%s | ${site.name}`,
    },
    description: site.bio,
    metadataBase: new URL('https://portfolio-exemplo.vercel.app'),
    openGraph: {
      title: `${site.name} | Portfólio`,
      description: site.bio,
      type: 'website',
      locale: 'pt_BR',
      url: 'https://portfolio-exemplo.vercel.app',
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.variable} bg-background text-foreground font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
