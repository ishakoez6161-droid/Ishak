"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Phone, Star } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden bg-wine-950"
    >
      <motion.div className="absolute inset-0" style={{ scale: imageScale, y: imageY }}>
        <Image
          src="/images/fassade.jpg"
          alt="Bal-Mondo 60 Food Location, Eingang in der Laufenstraße in Monschau"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-wine-950/80 via-wine-950/55 to-wine-950/90" />
      <div className="absolute inset-0 grain" />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 flex items-center gap-2 rounded-full border border-gold-400/40 bg-cream-50/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-200"
        >
          <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
          4,7 · 275 Google-Rezensionen
          <span className="h-1 w-1 rounded-full bg-gold-300/60" />
          Täglich geöffnet · 09:00–22:00
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs font-semibold uppercase tracking-[0.4em] text-gold-300"
        >
          Döner-Restaurant · Monschau
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mt-5 text-balance text-6xl text-cream-50 sm:text-7xl md:text-8xl"
        >
          Bal-Mondo <span className="text-gradient-gold italic">60</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-cream-100/85 sm:text-lg"
        >
          Frischer Drehspieß, hausgemachte Pide und Pizza, knackige Salate und
          türkische Klassiker — mitten in Monschau, jeden Tag für Sie zubereitet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="tel:+491633450894"
            className="group relative w-full overflow-hidden rounded-full bg-gold-400 px-8 py-3.5 text-sm font-semibold tracking-wide text-wine-950 transition-transform duration-300 hover:scale-[1.03] sm:w-auto"
          >
            Jetzt anrufen
          </a>
          <a
            href="#speisekarte"
            className="w-full rounded-full border border-cream-50/30 px-8 py-3.5 text-sm font-semibold tracking-wide text-cream-50 transition-colors duration-300 hover:border-gold-300 hover:text-gold-200 sm:w-auto"
          >
            Speisekarte ansehen
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-cream-100/70"
        >
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-gold-300" /> Laufenstraße 60, 52156 Monschau
          </span>
          <a href="tel:+491633450894" className="flex items-center gap-1.5 hover:text-gold-200">
            <Phone className="h-4 w-4 text-gold-300" /> 0163 3450894
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-6 items-start justify-center rounded-full border border-cream-50/40 p-1.5"
        >
          <span className="h-1.5 w-1 rounded-full bg-gold-300" />
        </motion.div>
      </motion.div>
    </section>
  );
}
