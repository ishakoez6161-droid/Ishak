import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Stadtkrone Café & Restaurant in Monschau.",
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream-50 pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">
            <span className="h-px w-8 bg-current/60" />
            Rechtliches
          </div>
          <h1 className="font-display mt-4 text-4xl text-ink-900 sm:text-5xl">
            Impressum
          </h1>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink-700/90 sm:text-base">
            <section>
              <h2 className="font-display text-xl text-ink-900">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="mt-2">
                Stadtkrone Café &amp; Restaurant
                <br />
                Markt 2
                <br />
                52156 Monschau
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink-900">
                Vertreten durch
              </h2>
              <p className="mt-2 italic text-ink-500">
                [Bitte Name der Inhaberin/des Inhabers oder der
                Geschäftsführung ergänzen]
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink-900">Kontakt</h2>
              <p className="mt-2">
                Telefon: 0173 2521730
                <br />
                E-Mail:{" "}
                <span className="italic text-ink-500">
                  [Bitte E-Mail-Adresse ergänzen]
                </span>
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink-900">
                Streitschlichtung
              </h2>
              <p className="mt-2">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  className="text-gold-600 underline hover:text-gold-700"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                . Wir sind zur Teilnahme an einem Streitbeilegungsverfahren
                vor einer Verbraucherschlichtungsstelle nicht verpflichtet
                und nicht bereit.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
