"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "./ui/SectionHeading";

const images = [
  { src: "/images/fassade.jpg", alt: "Eingang von Bal-Mondo 60 in der Laufenstraße, Monschau" },
  { src: "/images/doener-teller.jpg", alt: "Drehspießteller mit Pommes, Salat und Knoblauchsoße" },
  { src: "/images/vorspeisen.jpg", alt: "Sigara Böregi mit Joghurt und frischem Salat" },
  { src: "/images/innenraum.jpg", alt: "Gastraum von Bal-Mondo 60 mit gemütlicher Sitzecke" },
];

export function Gallery() {
  return (
    <section id="galerie" className="relative bg-cream-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Galerie"
          title="Ein Blick zu uns rein"
          description="Frische Speisen und ein gemütliches Ambiente — so erleben Sie Bal-Mondo 60."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(60,20,10,0.1)]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
