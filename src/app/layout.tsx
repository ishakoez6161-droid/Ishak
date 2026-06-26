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

const siteUrl = "https://balmondo60-monschau.de";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bal-Mondo 60 – Döner-Restaurant in Monschau",
    template: "%s | Bal-Mondo 60 Monschau",
  },
  description:
    "Bal-Mondo 60 in der Laufenstraße 60 in Monschau: frischer Drehspieß, Pide, Pizza, Falafel und türkische Klassiker. Täglich geöffnet von 09:00 bis 22:00 Uhr.",
  keywords: [
    "Bal-Mondo 60",
    "Döner Monschau",
    "Restaurant Monschau",
    "Türkisches Restaurant Monschau",
    "Drehspieß Monschau",
  ],
  authors: [{ name: "Bal-Mondo 60" }],
  openGraph: {
    title: "Bal-Mondo 60 – Döner-Restaurant in Monschau",
    description:
      "Frischer Drehspieß, Pide, Pizza und türkische Klassiker in der Laufenstraße 60 in Monschau.",
    url: siteUrl,
    siteName: "Bal-Mondo 60",
    images: [{ url: "/images/fassade.jpg", width: 1145, height: 920 }],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bal-Mondo 60 – Döner-Restaurant in Monschau",
    description:
      "Frischer Drehspieß, Pide, Pizza und türkische Klassiker in der Laufenstraße 60 in Monschau.",
    images: ["/images/fassade.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Bal-Mondo 60",
  image: `${siteUrl}/images/fassade.jpg`,
  servesCuisine: ["Turkish", "Döner", "Pizza", "Mediterranean"],
  priceRange: "€€",
  telephone: "+49 163 3450894",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Laufenstraße 60",
    postalCode: "52156",
    addressLocality: "Monschau",
    addressCountry: "DE",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "22:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "275",
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
