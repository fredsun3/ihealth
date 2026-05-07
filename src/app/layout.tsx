import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: '健康科普平台 | HIV预防与养生知识',
    template: '%s | 健康科普平台',
  },
  description:
    '专业的 HIV 预防、中西医治疗、养生长寿健康科普平台。提供权威的健康知识，帮助您了解 HIV，预防疾病，追求健康长寿。',
  keywords: [
    'HIV预防',
    '艾滋病预防',
    '中西医治疗',
    '健康养生',
    '长寿知识',
    '健康科普',
    '抗逆转录病毒治疗',
    '中医药',
    '养生保健',
  ],
  authors: [{ name: '健康科普平台' }],
  openGraph: {
    title: '健康科普平台 | HIV预防与养生知识',
    description: '专业的 HIV 预防、中西医治疗、养生长寿健康科普平台',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
