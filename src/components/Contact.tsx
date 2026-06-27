"use client";

import { Clock, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { getOpenStatus, openingHours } from "@/data/hours";
import { cn } from "@/lib/utils";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Contact() {
  const [status, setStatus] = useState<ReturnType<typeof getOpenStatus> | null>(null);
  useEffect(() => {
    setStatus(getOpenStatus());
    const interval = setInterval(() => setStatus(getOpenStatus()), 60_000);
    return () => clearInterval(interval);
  }, []);

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
                  <div className="w-full">
                    <p className="font-display text-lg">Öffnungszeiten</p>
                    {status && (
                      <p className="mt-1 flex items-center gap-2 text-sm text-cream-100/75">
                        <span
                          className={cn(
                            "h-1.5 w-1.5 rounded-full",
                            status.isOpen ? "bg-emerald-400" : "bg-cream-100/40",
                          )}
                        />
                        {status.label}
                      </p>
                    )}
                    <ul className="mt-3 space-y-1">
                      {openingHours.map((d) => (
                        <li
                          key={d.day}
                          className="flex items-center justify-between gap-4 text-xs text-cream-100/60"
                        >
                          <span>{d.day}</span>
                          <span className={d.hours === "Geschlossen" ? "text-cream-100/35" : ""}>
                            {d.hours}
                          </span>
                        </li>
                      ))}
                    </ul>
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
                src="https://www.google.com/maps?q=Stadtkrone+Café+%26+Restaurant,+Markt+2,+52156+Monschau&output=embed"
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
