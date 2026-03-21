"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Carolina M.",
    rating: 5,
    text: "Atendimento excepcional! A Dra. Maria é extremamente atenciosa e profissional. Meu clareamento superou as expectativas. Recomendo demais!",
    color: "#4285F4",
  },
  {
    name: "Roberto Santos",
    rating: 5,
    text: "Fiz implante há 2 anos e o resultado é incrível. A clínica é moderna, limpa e a equipe é muito acolhedora. Voltarei sempre que precisar.",
    color: "#34A853",
  },
  {
    name: "Juliana Oliveira",
    rating: 5,
    text: "Melhor dentista que já consultei. Explica tudo com clareza, não senti nenhum incômodo durante o tratamento. Ambiente super tranquilo.",
    color: "#EA4335",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
    >
      <text
        x="50%"
        y="58%"
        textAnchor="middle"
        fontSize="26"
        fontWeight="800"
        fontFamily="Arial, Helvetica, sans-serif"
        fill="#4285F4"
      >
        G
      </text>
    </svg>
  );
}

export function Depoimentos() {
  return (
    <section
      id="depoimentos"
      className="bg-[#f9f6f1] py-[60px] px-5 md:py-20 md:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center md:mb-16"
        >
          <h2 className="text-2xl font-bold text-[#1a1a1a] font-[family-name:var(--font-playfair)] md:text-3xl lg:text-4xl">
            O que dizem nossos pacientes
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#1a1a1a]/70 md:mt-4 md:text-base">
            Depoimentos reais de quem confia no nosso trabalho.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-5 min-[769px]:grid-cols-3 lg:gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={item}
              className="rounded-2xl border border-[#c9a256]/10 bg-white p-4 shadow-lg md:p-6"
            >
              <div className="mb-3 flex items-start justify-between">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-base font-bold text-white"
                  style={{ backgroundColor: t.color }}
                  aria-hidden
                >
                  {t.name.trim().charAt(0).toUpperCase()}
                </div>
                <GoogleLogo className="h-4 w-4 md:h-5 md:w-5" />
              </div>

              <div className="mb-3 flex gap-0.5 md:mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="size-4 fill-[#c9a256] text-[#c9a256] md:size-[18px]"
                  />
                ))}
              </div>
              <Quote className="mb-2 size-6 text-[#c9a256]/40 md:size-7" />
              <p className="mb-3 text-xs leading-relaxed text-[#1a1a1a]/80 md:mb-4 md:text-sm">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-sm font-medium text-[#1a1a1a]">{t.name}</p>
              <p className="text-xs text-[#1a1a1a]/60">Google Reviews</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
