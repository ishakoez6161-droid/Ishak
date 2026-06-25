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
          description="Direkt am Markt in der Monschauer Altstadt — telefonische Reservierung empfohlen."
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
                      Markt 2, 52156 Monschau
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="h-5 w-5 flex-shrink-0 text-gold-400" />
                  <div>
                    <p className="font-display text-lg">Telefon</p>
                    <a
                      href="tel:+491732521730"
                      className="mt-1 inline-block text-sm text-cream-100/75 hover:text-gold-300"
                    >
                      0173 2521730
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="h-5 w-5 flex-shrink-0 text-gold-400" />
                  <div>
                    <p className="font-display text-lg">Öffnungszeiten</p>
                    <p className="mt-1 text-sm text-cream-100/75">
                      Heute geöffnet · schließt um 21:00 Uhr
                    </p>
                    <p className="mt-0.5 text-xs text-cream-100/50">
                      Aktuelle Öffnungszeiten gerne telefonisch erfragen.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="tel:+491732521730"
                className="mt-10 inline-flex items-center justify-center rounded-full bg-gold-400 px-6 py-3.5 text-sm font-semibold text-wine-950 transition-transform duration-300 hover:scale-[1.02]"
              >
                Jetzt anrufen &amp; reservieren
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="h-full min-h-[360px] overflow-hidden rounded-[1.75rem] border border-gold-500/15 shadow-[0_8px_30px_rgba(60,20,10,0.08)]">
              <iframe
                title="Anfahrt zur Stadtkrone, Markt 2, 52156 Monschau"
                src="https://www.google.com/maps?q=Markt+2,+52156+Monschau&output=embed"
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
