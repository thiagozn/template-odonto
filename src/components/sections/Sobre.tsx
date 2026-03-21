"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const credentials = [
  "Graduação em Odontologia - Universidade de São Paulo",
  "Especialização em Implantodontia - ABO",
  "Pós-graduação em Ortodontia - Invisalign Certified",
  "Membro da Associação Brasileira de Odontologia",
];

export function Sobre() {
  return (
    <section
      id="sobre"
      className="bg-[#f9f6f1] py-[60px] px-5 md:py-20 md:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-8 min-[769px]:gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:aspect-[4/5]"
          >
            <Image
              src="/images/dentista.jpg"
              alt="Dra. Maria Silva - Dentista"
              fill
              className="object-cover object-[center_top]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            <h2 className="text-2xl font-bold text-[#1a1a1a] font-[family-name:var(--font-playfair)] md:text-3xl lg:text-4xl">
              Sobre a dentista
            </h2>
            <p className="text-sm leading-relaxed text-[#1a1a1a]/80 md:text-base">
              A Dra. Maria Silva dedica sua carreira a transformar sorrisos e
              melhorar a qualidade de vida dos pacientes. Com mais de 15 anos de
              experiência, combina técnica apurada com um atendimento acolhedor,
              sempre priorizando o conforto e a segurança de cada pessoa que
              passa pela clínica.
            </p>
            <p className="text-sm leading-relaxed text-[#1a1a1a]/80 md:text-base">
              Acredita que a odontologia vai além dos dentes — é sobre
              autoestima, saúde geral e bem-estar. Por isso, investe
              constantemente em capacitação e tecnologia para oferecer os
              melhores tratamentos disponíveis.
            </p>
            <div>
              <h3 className="mb-3 text-base font-semibold text-[#1a1a1a] font-[family-name:var(--font-playfair)] md:mb-4 md:text-lg">
                Credenciais
              </h3>
              <ul className="space-y-2 text-sm text-[#1a1a1a]/80 md:text-base">
                {credentials.map((cred, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 text-[#c9a256]">•</span>
                    {cred}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
