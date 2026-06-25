import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://stadtkrone-monschau.de";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Stadtkrone – Café & Restaurant in Monschau",
    template: "%s | Stadtkrone Monschau",
  },
  description:
    "Stadtkrone Café & Restaurant am Markt in Monschau: hausgemachte Schnitzel, Pasta, Burger und Desserts in historischer Fachwerk-Atmosphäre. Jetzt Tisch reservieren.",
  keywords: [
    "Stadtkrone Monschau",
    "Restaurant Monschau",
    "Café Monschau",
    "Schnitzel Monschau",
    "Markt Monschau Essen",
  ],
  authors: [{ name: "Stadtkrone Café & Restaurant" }],
  openGraph: {
    title: "Stadtkrone – Café & Restaurant in Monschau",
    description:
      "Hausgemachte Küche in historischer Fachwerk-Atmosphäre direkt am Markt in Monschau.",
    url: siteUrl,
    siteName: "Stadtkrone Monschau",
    images: [{ url: "/images/fassade.jpg", width: 1145, height: 920 }],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stadtkrone – Café & Restaurant in Monschau",
    description:
      "Hausgemachte Küche in historischer Fachwerk-Atmosphäre direkt am Markt in Monschau.",
    images: ["/images/fassade.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Stadtkrone Café & Restaurant",
  image: `${siteUrl}/images/fassade.jpg`,
  servesCuisine: ["German", "European", "Café"],
  priceRange: "€€",
  telephone: "+49 173 2521730",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Markt 2",
    postalCode: "52156",
    addressLocality: "Monschau",
    addressCountry: "DE",
  },
  url: siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${playfair.variable} ${manrope.variable}`}>
      <body className="bg-cream-50 text-ink-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
