import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './context/ThemeProvider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hezron Terminal — Network Engineer | Full-stack Developer | Marketing Specialist',
  description:
    'The command center for Yonathan Hezron. Network Engineering (MikroTik MTCRE/MTCNA), Full-stack Development, and Strategic Marketing — all in one dual-theme portfolio.',
  keywords: [
    'Yonathan Hezron',
    'Network Engineer',
    'Full-stack Developer',
    'MikroTik',
    'MTCNA',
    'MTCRE',
    'Portfolio',
    'Next.js',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
