"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";

const values = [
  {
    title: "Hausgemacht",
    text: "Schnitzel, Saucen und Desserts entstehen frisch in unserer Küche.",
  },
  {
    title: "Herzlich",
    text: "Persönlicher Service in familiärer Atmosphäre, vom Frühstück bis zum Abend.",
  },
  {
    title: "Mitten in Monschau",
    text: "Direkt am Markt, umgeben von der historischen Fachwerk-Altstadt.",
  },
];

export function Testimonials() {
  return (
    <section id="bewertungen" className="relative bg-cream-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Was Kunden sagen"
          title="Gäste schwärmen von der Stadtkrone"
          description="Unsere aktuelle Bewertung auf Google — lesen Sie gerne die Erfahrungen anderer Gäste."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center gap-5"
        >
          <div className="flex items-center gap-3 rounded-full border border-gold-400/40 bg-cream-50 px-6 py-3 shadow-sm">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
              ))}
            </div>
            <span className="font-display text-lg text-ink-900">4,6</span>
            <span className="text-sm text-ink-700/70">auf Google</span>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Stadtkrone+Café+Restaurant+Markt+2+Monschau"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-gold-700 transition-colors hover:text-gold-600"
          >
            Alle Bewertungen auf Google lesen
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-gold-500/15 bg-cream-50 p-6 text-center shadow-[0_8px_24px_rgba(60,20,10,0.06)] transition-shadow duration-300 hover:shadow-[0_16px_36px_rgba(60,20,10,0.12)]"
            >
              <h3 className="font-display text-lg text-ink-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700/80">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
