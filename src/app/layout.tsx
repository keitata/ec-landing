import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MainHeader from '@/components/layout/MainHeader';
import MainFooter from '@/components/layout/MainFooter';
import { BRAND_CONFIG } from '@/constants/brand';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: BRAND_CONFIG.PRODUCT_NAME,
  description: BRAND_CONFIG.DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <MainHeader />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
