import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dstudium.com"),
  title: "DSTUDIUM | Tecnologia, automação e inteligência artificial",
  description:
    "Produtos digitais, automação de processos, integrações e soluções com inteligência artificial para negócios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-bg-primary font-sans text-text-primary">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
