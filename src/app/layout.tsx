import Footer from '@/shared/components/Layout/Footer';
import Header from '@/shared/components/Layout/Header';
import { ThemeProvider } from '@/shared/components/theme-provider';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import type React from 'react';
import '../shared/styles/globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
  title: {
    template: '%s | Growing Minds Kindergarten',
    default: 'Growing Minds Kindergarten - Exploring and Growing Together',
  },
  description:
    "A kindergarten teacher's blog sharing early childhood education insights, activities, and resources for parents and educators.",
  keywords: [
    'kindergarten',
    'early education',
    'teaching resources',
    'childhood development',
    'learning activities',
  ],
  authors: [{ name: 'Jane Doe', url: 'https://growingminds.edu' }],
  creator: 'Jane Doe',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://growingminds.edu',
    siteName: 'Growing Minds Kindergarten',
    title: 'Growing Minds Kindergarten - Exploring and Growing Together',
    description:
      "A kindergarten teacher's blog sharing early childhood education insights, activities, and resources for parents and educators.",
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Growing Minds Kindergarten',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Growing Minds Kindergarten',
    description:
      "A kindergarten teacher's blog sharing early childhood education insights, activities, and resources for parents and educators.",
    images: ['/images/twitter-image.jpg'],
    creator: '@growingminds',
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.variable} font-nunito min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
