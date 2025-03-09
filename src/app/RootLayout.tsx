// src/app/layout.tsx
import { Inter, Poppins } from "next/font/google";
import "@/styles/globals.css";

// Font configuration
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "ApoData Analytics | Intelligence Commerciale pour Pharmacies",
  description: "Plateforme d'analyse de données pour optimiser la performance des pharmacies et laboratoires pharmaceutiques.",
  keywords: "pharmacie, analytics, business intelligence, ventes, stocks, laboratoires pharmaceutiques",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="fr" 
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}