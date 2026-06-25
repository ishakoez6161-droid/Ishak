"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "./ui/SectionHeading";

export function Testimonials() {
  return (
    <section id="bewertungen" className="relative bg-cream-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Was Kunden sagen"
          title="Gäste schwärmen von der Stadtkrone"
          description="Eine Auswahl an Stimmen unserer Gäste aus Monschau und der ganzen Region."
        />

        <div className="mt-10 flex justify-center">
          <div className="flex items-center gap-3 rounded-full border border-gold-400/40 bg-cream-50 px-6 py-3 shadow-sm">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < 5 ? "fill-gold-500 text-gold-500" : "text-gold-500/30"}`}
                />
              ))}
            </div>
            <span className="font-display text-lg text-ink-900">4,6</span>
            <span className="text-sm text-ink-700/70">auf Google</span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="flex flex-col rounded-2xl border border-gold-500/15 bg-cream-50 p-6 shadow-[0_8px_24px_rgba(60,20,10,0.06)] transition-shadow duration-300 hover:shadow-[0_16px_36px_rgba(60,20,10,0.12)]"
            >
              <Quote className="h-6 w-6 text-gold-400" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={`h-3.5 w-3.5 ${
                      idx < t.rating ? "fill-gold-500 text-gold-500" : "text-gold-500/25"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700/90">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 border-t border-gold-500/10 pt-4">
                <p className="font-display text-base text-ink-900">{t.name}</p>
                <p className="text-xs uppercase tracking-wider text-ink-500">{t.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
