import { MapPin, Phone } from "lucide-react";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M15 8.5h-2c-.6 0-1 .4-1 1V11h3l-.4 3H12v7H9v-7H7v-3h2V9.2C9 6.9 10.5 5 13 5h2v3.5Z" />
    </svg>
  );
}

const links = [
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#speisekarte", label: "Speisekarte" },
  { href: "#bewertungen", label: "Bewertungen" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Footer() {
  return (
    <footer className="bg-wine-950 pt-16 pb-8 text-cream-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <a href="#top" className="font-display text-2xl text-cream-50">
              Stadt<span className="text-gold-400">krone</span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream-100/60">
              Café &amp; Restaurant in der Altstadt von Monschau — hausgemachte
              Küche, herzlicher Service.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-50/15 transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-50/15 transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
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
          <p>Monschau, Eifel</p>
        </div>
      </div>
    </footer>
  );
}
