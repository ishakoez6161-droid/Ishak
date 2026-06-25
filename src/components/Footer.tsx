import { MapPin, Phone } from "lucide-react";
import Link from "next/link";

const links = [
  { href: "/#ueber-uns", label: "Über uns" },
  { href: "/#speisekarte", label: "Speisekarte" },
  { href: "/#bewertungen", label: "Bewertungen" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function Footer() {
  return (
    <footer className="bg-wine-950 pt-16 pb-8 text-cream-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <Link href="/#top" className="font-display text-2xl text-cream-50">
              Stadt<span className="text-gold-400">krone</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream-100/60">
              Café &amp; Restaurant in der Altstadt von Monschau — hausgemachte
              Küche, herzlicher Service.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              Navigation
            </p>
            <ul className="mt-4 space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-cream-100/70 transition-colors hover:text-gold-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              Kontakt
            </p>
            <ul className="mt-4 space-y-3 text-sm text-cream-100/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400" />
                Markt 2, 52156 Monschau
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-gold-400" />
                <a href="tel:+491732521730" className="hover:text-gold-300">
                  0173 2521730
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream-50/10 pt-6 text-xs text-cream-100/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Stadtkrone Café &amp; Restaurant. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-4">
            <a href="/impressum" className="hover:text-gold-300">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-gold-300">
              Datenschutz
            </a>
            <span>Monschau, Eifel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
