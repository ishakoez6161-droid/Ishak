"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#ueber-uns", label: "Über uns" },
  { href: "/#speisekarte", label: "Speisekarte" },
  { href: "/#galerie", label: "Galerie" },
  { href: "/#bewertungen", label: "Bewertungen" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function Navbar({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid || scrolled || open
          ? "glass shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link href="/#top" className="font-display text-2xl tracking-wide text-cream-50">
          Bal-Mondo <span className="text-gold-400">60</span>
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm font-medium uppercase tracking-wider text-cream-100/90 transition-colors hover:text-gold-300"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+491633450894"
            className="flex items-center gap-2 text-sm font-medium text-cream-100/90 transition-colors hover:text-gold-300"
          >
            <Phone className="h-4 w-4" />
            0163 3450894
          </a>
          <Link
            href="/#kontakt"
            className="rounded-full border border-gold-400/70 bg-gold-400/10 px-5 py-2.5 text-sm font-semibold text-gold-200 transition-all duration-300 hover:bg-gold-400 hover:text-wine-950"
          >
            Kontakt
          </Link>
        </div>

        <button
          aria-label="Menü öffnen"
          className="text-cream-50 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-6 sm:px-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-cream-50/10 py-3 text-base font-medium text-cream-100"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+491633450894"
                className="mt-3 flex items-center justify-center gap-2 rounded-full border border-cream-50/20 py-3 text-sm font-medium text-cream-100"
              >
                <Phone className="h-4 w-4" /> 0163 3450894
              </a>
              <Link
                href="/#kontakt"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-gold-400 py-3 text-center text-sm font-semibold text-wine-950"
              >
                Kontakt
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
