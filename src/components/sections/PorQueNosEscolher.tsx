"use client";

import { motion } from "framer-motion";
import { DiferenciaisCarousel } from "@/components/ui/profile-card-testimonial-carousel";

export function PorQueNosEscolher() {
  return (
    <section className="bg-white py-[60px] px-5 md:py-20 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-10 text-center md:mb-16"
        >
          <h2 className="text-2xl font-bold text-[#1a1a1a] font-[family-name:var(--font-playfair)] md:text-3xl lg:text-4xl hover:text-[#c9a256] transition-colors cursor-default">
            Por que nos escolher?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#1a1a1a]/70 md:mt-4 md:text-base">
            Diferenciais que fazem da nossa clínica a melhor escolha para o seu
            sorriso.
          </p>
        </motion.div>

        <DiferenciaisCarousel />
      </div>
    </section>
  );
}
