"use client";

import { motion } from "framer-motion";
import { Award, Heart, Clock, Shield } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Excelência Profissional",
    description:
      "Equipe especializada com formação contínua e experiência comprovada em diversos tratamentos.",
  },
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description:
      "Cuidamos de você com empatia e atenção, tornando cada consulta uma experiência agradável.",
  },
  {
    icon: Clock,
    title: "Flexibilidade de Horários",
    description:
      "Agendamentos que se encaixam na sua rotina, incluindo horários estendidos para sua comodidade.",
  },
  {
    icon: Shield,
    title: "Tecnologia e Segurança",
    description:
      "Utilizamos equipamentos modernos e materiais de primeira linha para garantir tratamentos seguros.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

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
          <h2 className="text-2xl font-bold text-[#1a1a1a] font-[family-name:var(--font-playfair)] md:text-3xl lg:text-4xl">
            Por que nos escolher?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#1a1a1a]/70 md:mt-4 md:text-base">
            Diferenciais que fazem da nossa clínica a melhor escolha para o seu
            sorriso.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-5 max-md:gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8"
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              variants={item}
              className="rounded-xl bg-[#f9f6f1] p-5 text-center transition-colors hover:bg-[#f9f6f1]/80 md:p-6"
            >
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#c9a256]/20 text-[#c9a256] md:mb-4 md:h-14 md:w-14">
                <reason.icon className="size-6 md:size-7" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-[#1a1a1a] font-[family-name:var(--font-playfair)] md:text-lg">
                {reason.title}
              </h3>
              <p className="text-xs text-[#1a1a1a]/70 md:text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
