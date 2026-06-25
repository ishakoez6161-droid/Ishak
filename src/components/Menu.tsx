"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { drinkCategories, menuCategories } from "@/data/menu";
import { cn, formatPrice } from "@/lib/utils";
import { SectionHeading } from "./ui/SectionHeading";

export function Menu() {
  const [activeId, setActiveId] = useState(menuCategories[0].id);
  const isDrinks = activeId === "getraenke";
  const active = menuCategories.find((c) => c.id === activeId);

  return (
    <section id="speisekarte" className="relative bg-wine-950 py-24 sm:py-32">
      <div className="absolute inset-0 grain opacity-60" />
      <div className="relative mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Speisekarte"
          title="Hausgemacht & mit Liebe serviert"
          description="Eine Auswahl unserer Klassiker — vom deftigen Schnitzel bis zum süßen Abschluss."
          light
        />

        <div className="mt-12 flex flex-wrap justify-center gap-2.5">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={cn(
                "relative rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 sm:text-sm",
                activeId === cat.id
                  ? "text-wine-950"
                  : "text-cream-100/75 hover:text-gold-200",
              )}
            >
              {activeId === cat.id && (
                <motion.span
                  layoutId="menu-tab-bg"
                  className="absolute inset-0 rounded-full bg-gold-400"
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
          <button
            onClick={() => setActiveId("getraenke")}
            className={cn(
              "relative rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 sm:text-sm",
              isDrinks ? "text-wine-950" : "text-cream-100/75 hover:text-gold-200",
            )}
          >
            {isDrinks && (
              <motion.span
                layoutId="menu-tab-bg"
                className="absolute inset-0 rounded-full bg-gold-400"
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
            <span className="relative z-10">Getränke</span>
          </button>
        </div>

        <div className="mt-14">
          <AnimatePresence mode="wait">
            {isDrinks ? (
              <motion.div
                key="getraenke"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-x-10 gap-y-9 sm:grid-cols-2"
              >
                {drinkCategories.map((cat) => (
                  <div key={cat.label}>
                    <h3 className="font-display text-xl text-gold-300">{cat.label}</h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-cream-50/15 px-3 py-1 text-xs text-cream-100/80"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <p className="col-span-full mt-4 text-center text-sm text-cream-100/60">
                  Die vollständige Getränkekarte mit allen Preisen erhalten Sie
                  gerne bei uns vor Ort.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={active?.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {active?.intro && (
                  <p className="mb-8 text-center text-sm italic text-gold-200/80">
                    {active.intro}
                  </p>
                )}
                <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
                  {active?.items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.04 }}
                      className="group"
                    >
                      <div className="flex items-baseline gap-2">
                        <h3 className="font-display text-lg text-cream-50 sm:text-xl">
                          {item.name}
                        </h3>
                        <span className="leader-line text-gold-400/40 h-px flex-1 translate-y-[-4px]" />
                        <span className="font-display whitespace-nowrap text-lg text-gold-300 sm:text-xl">
                          {item.price !== undefined ? `${formatPrice(item.price)} €` : ""}
                        </span>
                      </div>
                      {item.description && (
                        <p className="mt-1 text-sm leading-relaxed text-cream-100/65">
                          {item.description}
                        </p>
                      )}
                      {item.tag && (
                        <span className="mt-1.5 inline-block rounded-full bg-gold-400/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold-300">
                          {item.tag}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
