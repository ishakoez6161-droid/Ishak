"use client";

import { Clock, MapPin, Phone } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Contact() {
  return (
    <section id="kontakt" className="relative bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Kontakt & Anfahrt"
          title="Wir freuen uns auf Ihren Besuch"
          description="In der Laufenstraße in Monschau — gerne auch zum Mitnehmen telefonisch bestellen."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-[1.75rem] bg-wine-950 p-8 text-cream-50 sm:p-10">
              <div className="space-y-7">
                <div className="flex gap-4">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-gold-400" />
                  <div>
                    <p className="font-display text-lg">Adresse</p>
                    <p className="mt-1 text-sm text-cream-100/75">
                      Laufenstraße 60, 52156 Monschau
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="h-5 w-5 flex-shrink-0 text-gold-400" />
                  <div>
                    <p className="font-display text-lg">Telefon</p>
                    <a
                      href="tel:+491633450894"
                      className="mt-1 inline-block text-sm text-cream-100/75 hover:text-gold-300"
                    >
                      0163 3450894
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="h-5 w-5 flex-shrink-0 text-gold-400" />
                  <div>
                    <p className="font-display text-lg">Öffnungszeiten</p>
                    <p className="mt-1 text-sm text-cream-100/75">
                      Täglich · 09:00 – 22:00 Uhr
                    </p>
                    <p className="mt-0.5 text-xs text-cream-100/50">
                      Montag bis Sonntag durchgehend geöffnet.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="tel:+491633450894"
                className="mt-10 inline-flex items-center justify-center rounded-full bg-gold-400 px-6 py-3.5 text-sm font-semibold text-wine-950 transition-transform duration-300 hover:scale-[1.02]"
              >
                Jetzt anrufen &amp; bestellen
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="h-full min-h-[360px] overflow-hidden rounded-[1.75rem] border border-gold-500/15 shadow-[0_8px_30px_rgba(60,20,10,0.08)]">
              <iframe
                title="Anfahrt zu Bal-Mondo 60, Laufenstraße 60, 52156 Monschau"
                src="https://www.google.com/maps?q=Bal-Mondo+60,+Laufenstraße+60,+52156+Monschau&output=embed"
                className="h-full min-h-[360px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
