"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import { useState } from "react";

export function MobileCallBar() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setVisible(y > 500);
  });

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="glass fixed inset-x-0 bottom-0 z-40 flex gap-2.5 border-t border-cream-50/10 p-3 lg:hidden"
    >
      <a
        href="tel:+491633450894"
        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-cream-50/25 py-3 text-sm font-semibold text-cream-50"
      >
        <Phone className="h-4 w-4" /> Anrufen
      </a>
      <a
        href="#kontakt"
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gold-400 py-3 text-sm font-semibold text-wine-950"
      >
        <Calendar className="h-4 w-4" /> Kontakt
      </a>
    </motion.div>
  );
}
