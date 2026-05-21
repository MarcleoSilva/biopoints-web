import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DemoProvider } from "@/lib/context/DemoContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BioPoints — Cada litro de biocombustível vale mais",
  description:
    "BioPoints é uma plataforma de fidelidade climática que converte emissões de CO₂ evitadas em recompensas reais. Salvador, Bahia.",
  keywords: [
    "biocombustível",
    "etanol",
    "biodiesel",
    "créditos de carbono",
    "Salvador",
    "cidades inteligentes",
    "transição energética",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <DemoProvider>{children}</DemoProvider>
      </body>
    </html>
  );
}
