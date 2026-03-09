import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Fizyoterapist Kadir Temel | Antalya Fizyoterapi",
  description: "Antalya Muratpaşa'da IKOMT, Schroth Method Skolyoz Rehabilitasyonu ve kaliteli fizyoterapi hizmeti. Bilimsel temelli, modern ve efektif tedavi yaklaşımı.",
  keywords: ["fizyoterapi", "antalya", "muratpaşa", "rehabilitasyon", "manuel terapi", "IKOMT", "schroth", "skolyoz"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${plusJakarta.variable} ${dmSans.variable} font-body antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
