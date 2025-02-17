import type { Metadata } from "next";
import { Lexend, Lexend_Exa, Spectral, Inconsolata } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import RootContainer from "@/components/layout/rootContainer";

export const metadata: Metadata = {
  title: "Jayden Boesch",
  description: "Personal website showcasing Jayden Boesch's work and projects.",
  keywords: ["Jayden", "Boesch", "Portfolio"],
  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.png",
    apple: "/assets/favicon.png",
    other: {
      rel: "/assets/favicon.png",
      url: "/assets/favicon.png",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayden Boesch",
    description: "Personal website showcasing Jayden Boesch's work and projects.",
    creator: "@BoeschJayden",
  },
  openGraph: {
    title: "Jayden Boesch",
    description: "Personal website showcasing Jayden Boesch's work and projects.",
    siteName: "Jayden Boesch",
    images: [
      {
        url: "https://jboesch.com/assets/cover.png",
        width: 500,
        height: 258,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

const lexendExa = Lexend_Exa({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend-exa",
});

const spectral = Spectral({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "400", "600"],
  variable: "--font-spectral",
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inconsolata",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={clsx(
        lexend.variable,
        lexendExa.variable,
        spectral.variable,
        inconsolata.variable
      )}
    >
      <body className="font-sans">
        <RootContainer>{children}</RootContainer>
      </body>
    </html>
  );
}
