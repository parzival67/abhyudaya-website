import type { Metadata } from "next";
import { Inter, Playfair_Display, Source_Sans_3, Baloo_Tamma_2 } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/contexts/AppContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

const balooTamma = Baloo_Tamma_2({
  variable: "--font-baloo-tamma",
  subsets: ["kannada", "latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Abhyudaya Trust - Empowering Specially Abled Children",
  description: "Abhyudaya Trust is a local NGO dedicated to supporting specially abled children through physiotherapy, rehabilitation, day-care, speech therapy, and comprehensive care programs.",
  keywords: "NGO, specially abled children, physiotherapy, rehabilitation, speech therapy, day-care, Bangalore, Karnataka",
  authors: [{ name: "Abhyudaya Trust" }],
  openGraph: {
    title: "Abhyudaya Trust - Empowering Specially Abled Children",
    description: "Comprehensive care and support for specially abled children through innovative therapies and programs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${sourceSans.variable} ${balooTamma.variable} antialiased`}
      >
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
