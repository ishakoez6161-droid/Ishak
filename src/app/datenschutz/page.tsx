import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Bal-Mondo 60 in Monschau.",
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <Navbar solid />
      <main className="bg-cream-50 pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">
            <span className="h-px w-8 bg-current/60" />
            Rechtliches
          </div>
          <h1 className="font-display mt-4 text-4xl text-ink-900 sm:text-5xl">
            Datenschutzerklärung
          </h1>

          <div className="mt-10 space-y-10 text-sm leading-relaxed text-ink-700/90 sm:text-base">
            <section>
              <h2 className="font-display text-xl text-ink-900">
                1. Verantwortlicher
              </h2>
              <p className="mt-2">
                Verantwortlicher für die Datenverarbeitung auf dieser Website
                im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
              </p>
              <p className="mt-2">
                Nimettin Bal
                <br />
                Bal-Mondo 60
                <br />
                Laufenstraße 60
                <br />
                52156 Monschau
                <br />
                Telefon: 0163 3450894
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:nimettinbal9@gmail.com"
                  className="text-gold-600 underline hover:text-gold-700"
                >
                  nimettinbal9@gmail.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink-900">
                2. Allgemeines zur Datenverarbeitung
              </h2>
              <p className="mt-2">
                Wir verarbeiten personenbezogene Daten unserer Nutzer
                grundsätzlich nur, soweit dies zur Bereitstellung einer
                funktionsfähigen Website sowie unserer Inhalte und
                Leistungen erforderlich ist. Die Verarbeitung
                personenbezogener Daten erfolgt regelmäßig nur nach
                Einwilligung des Nutzers oder auf Grundlage gesetzlicher
                Erlaubnisse, insbesondere Art. 6 Abs. 1 lit. b DSGVO
                (Vertragserfüllung bzw. Anbahnung) und Art. 6 Abs. 1 lit. f
                DSGVO (berechtigtes Interesse).
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink-900">
                3. Hosting
              </h2>
              <p className="mt-2">
                Diese Website wird bei einem externen Dienstleister gehostet
                (Hosting-Provider). Die personenbezogenen Daten, die auf
                dieser Website erfasst werden, werden auf den Servern des
                Hosters gespeichert. Hierbei kann es sich u. a. um
                IP-Adressen, Kontaktanfragen, Meta- und
                Kommunikationsdaten, Zugriffsdaten und sonstige Daten
                handeln, die über eine Website generiert werden.
              </p>
              <p className="mt-2">
                Der Einsatz des Hosters erfolgt zum Zwecke der
                Vertragserfüllung gegenüber unseren potenziellen und
                bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im
                Interesse einer sicheren, schnellen und effizienten
                Bereitstellung unseres Online-Angebots durch einen
                professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink-900">
                4. Server-Log-Dateien
              </h2>
              <p className="mt-2">
                Der Provider unserer Website erhebt und speichert
                automatisch Informationen in sogenannten Server-Log-Dateien,
                die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="mt-2">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen
                wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt
                auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO, um einen
                technisch fehlerfreien und sicheren Betrieb der Website zu
                gewährleisten.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink-900">
                5. Google Maps
              </h2>
              <p className="mt-2">
                Auf dieser Website binden wir die Karte des Dienstes Google
                Maps ein, der von Google LLC, 1600 Amphitheatre Parkway,
                Mountain View, CA 94043, USA (&bdquo;Google&ldquo;)
                angeboten wird. Beim Aufruf der Seite, auf der die Karte
                eingebunden ist, stellt Google eine Verbindung zu den
                Servern von Google her. Dabei kann Google die IP-Adresse
                und weitere Daten der Nutzerin bzw. des Nutzers erfassen und
                verarbeiten, gegebenenfalls auch auf Servern in den USA.
              </p>
              <p className="mt-2">
                Die Nutzung erfolgt im Interesse einer ansprechenden
                Darstellung unseres Standorts und einer leichten Auffindbarkeit
                auf unserer Website (Art. 6 Abs. 1 lit. f DSGVO). Weitere
                Informationen zum Umgang mit Nutzerdaten finden Sie in der
                Datenschutzerklärung von Google:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gold-600 underline hover:text-gold-700"
                >
                  https://policies.google.com/privacy
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink-900">
                6. Schriftarten
              </h2>
              <p className="mt-2">
                Diese Website nutzt zur einheitlichen Darstellung von
                Schriftarten sogenannte Web Fonts. Die verwendeten
                Schriftarten werden bei der Erstellung der Website lokal
                eingebunden und beim Aufruf der Seite von unserem eigenen
                Server bereitgestellt. Es findet hierfür keine Verbindung zu
                Servern von Google oder einem anderen Anbieter statt, es
                werden keine personenbezogenen Daten an Dritte übertragen.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink-900">
                7. Kontaktaufnahme
              </h2>
              <p className="mt-2">
                Wenn Sie per Telefon oder E-Mail mit uns Kontakt aufnehmen,
                wird Ihre Anfrage inklusive aller daraus hervorgehenden
                personenbezogenen Daten (Name, Anfrage, ggf.
                Telefonnummer und E-Mail-Adresse) zur Bearbeitung Ihres
                Anliegens bei uns gespeichert und verarbeitet. Diese Daten
                geben wir nicht ohne Ihre Einwilligung weiter. Die
                Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung
                eines Vertrags zusammenhängt oder zur Durchführung
                vorvertraglicher Maßnahmen erforderlich ist. In allen
                übrigen Fällen beruht die Verarbeitung auf unserem
                berechtigten Interesse an der effektiven Bearbeitung der an
                uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink-900">
                8. SSL- bzw. TLS-Verschlüsselung
              </h2>
              <p className="mt-2">
                Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw.
                TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
                Sie daran, dass die Adresszeile des Browsers von
                &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt
                und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink-900">
                9. Speicherdauer
              </h2>
              <p className="mt-2">
                Soweit innerhalb dieser Datenschutzerklärung keine
                speziellere Speicherdauer genannt wurde, verbleiben Ihre
                personenbezogenen Daten bei uns, bis der Zweck für die
                Datenverarbeitung entfällt. Sofern Sie ein berechtigtes
                Löschersuchen geltend machen oder eine Einwilligung zur
                Datenverarbeitung widerrufen, werden Ihre Daten gelöscht,
                sofern keine sonstigen rechtlich zulässigen Gründe für die
                Speicherung Ihrer personenbezogenen Daten bei uns vorliegen
                (z. B. steuer- oder handelsrechtliche
                Aufbewahrungsfristen).
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink-900">
                10. Ihre Rechte
              </h2>
              <p className="mt-2">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft
                über Ihre gespeicherten personenbezogenen Daten, deren
                Herkunft und Empfänger und den Zweck der
                Datenverarbeitung sowie ein Recht auf Berichtigung,
                Sperrung oder Löschung dieser Daten. Daneben steht Ihnen ein
                Recht auf Einschränkung der Verarbeitung, ein Recht auf
                Datenübertragbarkeit sowie ein Widerspruchsrecht gegen die
                Verarbeitung zu. Hierzu sowie zu weiteren Fragen zum Thema
                Datenschutz können Sie sich jederzeit unter der im Impressum
                angegebenen Adresse an uns wenden.
              </p>
              <p className="mt-2">
                Ihnen steht zudem ein Beschwerderecht bei der zuständigen
                Aufsichtsbehörde zu, beispielsweise der
                Landesbeauftragten für Datenschutz und
                Informationsfreiheit Nordrhein-Westfalen.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink-900">
                11. Aktualität dieser Datenschutzerklärung
              </h2>
              <p className="mt-2">
                Diese Datenschutzerklärung ist aktuell gültig. Durch die
                Weiterentwicklung unserer Website oder die Umsetzung neuer
                Technologien kann es notwendig werden, diese
                Datenschutzerklärung zu ändern. Die jeweils aktuelle Version
                finden Sie stets auf dieser Seite.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
