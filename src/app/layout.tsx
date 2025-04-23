import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "株式会社Soares | Build What's Next",
  description: "株式会社Soaresは、革新的なテクノロジーとクリエイティブなアイデアを組み合わせ、お客様のビジネスの成長をサポートする会社です。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${inter.variable} bg-white text-gray-900 font-sans antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
