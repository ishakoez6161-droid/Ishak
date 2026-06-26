"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "./ui/Reveal";

const highlights = [
  {
    title: "Frisch vom Drehspieß",
    text: "Unser Fleisch wird täglich frisch zubereitet und direkt vom Spieß geschnitten.",
  },
  {
    title: "Hausgemacht",
    text: "Soßen, Salate und Beilagen entstehen jeden Tag neu in unserer Küche.",
  },
  {
    title: "Für jeden Anlass",
    text: "Vom schnellen Snack zwischendurch bis zum gemütlichen Essen mit Familie und Freunden.",
  },
];

export function About() {
  return (
    <section id="ueber-uns" className="relative overflow-hidden bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-12">
        <Reveal className="relative order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] shadow-2xl"
          >
            <Image
              src="/images/innenraum.jpg"
              alt="Gemütlicher Gastraum von Bal-Mondo 60 in Monschau"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-wine-950/30 via-transparent to-transparent" />
          </motion.div>
          <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-2xl border border-gold-400/40 sm:block" />
          <div className="absolute -top-6 -left-6 hidden h-20 w-20 rounded-full bg-gold-400/15 sm:block" />
        </Reveal>

        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">
            <span className="h-px w-8 bg-current/60" />
            Über uns
          </div>
          <Reveal delay={0.05}>
            <h2 className="font-display mt-4 text-balance text-4xl leading-[1.1] text-ink-900 sm:text-5xl">
              Türkische Küche mit
              <span className="italic text-gold-600"> Herz und Frische</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-ink-700/90 sm:text-lg">
              Bal-Mondo 60 liegt in der Laufenstraße im Herzen von Monschau.
              Bei uns treffen herzliche Gastfreundschaft und hausgemachte
              Küche auf frische Zutaten — vom klassischen Drehspieß über
              knusprige Pide bis hin zu Pizza, Pasta und Salaten.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-base leading-relaxed text-ink-700/90 sm:text-lg">
              Ob schnell zum Mitnehmen oder gemütlich bei uns vor Ort — jedes
              Gericht wird mit Sorgfalt und besten Zutaten zubereitet, damit
              Sie sich rundum wohlfühlen.
            </p>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-1">
            {highlights.map((item) => (
              <RevealItem key={item.title}>
                <div className="flex gap-4 border-l-2 border-gold-400/50 pl-5">
                  <div>
                    <h3 className="font-display text-lg text-ink-900">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-700/80">{item.text}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
