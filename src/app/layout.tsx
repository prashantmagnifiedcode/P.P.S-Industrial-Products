import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { RfqProvider } from '@/context/RfqContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'P.P.S Industrial Products | Precision Cutting Tools & CNC Tooling',
  description:
    'P.P.S Industrial Products - Authorized distributor and supplier of tungsten carbide inserts (TNMG, CNMG, WNMG), CNC toolholders, milling cutters, and solid carbide end mills in Sector 5 Gurugram & Pan-India.',
  keywords: [
    'PPS Industrial Products',
    'P.P.S Industrial Products',
    'Carbide Inserts Gurugram',
    'TNMG Inserts',
    'CNMG 120408',
    'CNC Tooling Pan India',
    'Collet Chuck BT40 ER32',
    'Solid Carbide End Mills',
    'Precision Cutting Tools India'
  ],
  authors: [{ name: 'P.P.S Industrial Products' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <RfqProvider>{children}</RfqProvider>
      </body>
    </html>
  );
}
