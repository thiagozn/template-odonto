"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    id: "dep-1",
    name: "Ana Carolina M.",
    tipo: "Paciente - Clareamento",
    rating: 5,
    description:
      "Atendimento excepcional! A Dra. é extremamente atenciosa e profissional. Meu clareamento superou as expectativas. Recomendo demais!",
    color: "#4285F4",
  },
  {
    id: "dep-2",
    name: "Roberto Santos",
    tipo: "Paciente - Implante",
    rating: 5,
    description:
      "Fiz implante há 2 anos e o resultado é incrível. A clínica é moderna, limpa e a equipe é muito acolhedora. Voltarei sempre que precisar.",
    color: "#34A853",
  },
  {
    id: "dep-3",
    name: "Juliana Oliveira",
    tipo: "Paciente - Ortodontia",
    rating: 5,
    description:
      "Melhor dentista que já consultei. Explica tudo com clareza, não senti nenhum incômodo durante o tratamento. Ambiente super tranquilo.",
    color: "#EA4335",
  },
  {
    id: "dep-4",
    name: "Marcos Pereira",
    tipo: "Paciente - Consulta",
    rating: 5,
    description:
      "Fui indicado por um amigo e não me arrependo. Atendimento humanizado, clínica moderna e resultado excelente. Com certeza voltarei!",
    color: "#c9a256",
  },
];

export function Depoimentos() {
  const [cards, setCards] = useState(testimonials);

  const handleDragEnd = (info: any) => {
    // Threshold para direita (passando pro próximo se arrastou muito pra esquerda)
    if (info.offset.x < -100) {
      setCards((prev) => {
        const remaining = prev.slice(1);
        const top = prev[0];
        return [...remaining, top];
      });
    }
  };

  return (
    <section
      id="depoimentos"
      className="bg-[#f9f6f1] py-[60px] px-5 md:px-6 md:py-20 lg:px-8 overflow-hidden relative"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center md:mb-16"
        >
          <h2 className="text-2xl font-bold text-[#1a1a1a] font-[family-name:var(--font-playfair)] md:text-3xl lg:text-4xl">
            O que dizem nossos pacientes
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#1a1a1a]/70 md:mt-4 md:text-base">
            Arraste os depoimentos para a esquerda para ler os próximos relatos.
          </p>
        </motion.div>

        {/* REMOVIDOS ESPAÇOS VAZIOS. TAMANHO FIXO EXATO PARA O STACK. */}
        <div className="relative mx-auto w-full max-w-[340px] md:max-w-[400px] h-[450px]">
          <AnimatePresence>
            {cards.map((t, index) => {
              return (
                <motion.div
                  layout // Essencial: faz o Framer resetar o drag offset automaticamente quando a ordem é alterada!
                  key={t.id}
                  className="absolute top-0 left-0 flex w-full h-[400px] flex-col justify-between rounded-[2rem] border border-[#c9a256]/20 bg-white p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] cursor-grab active:cursor-grabbing"
                  style={{
                    zIndex: cards.length - index,
                    transformOrigin: "bottom center",
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    y: 50,
                  }}
                  animate={{
                    x: 0, // Garante que após o drag, volte perfeitamente pra centralização x=0
                    y: index * 16,
                    scale: 1 - index * 0.05,
                    opacity: 1 - index * 0.15,
                    rotate: index === 0 ? 0 : index % 2 === 0 ? 2 : -2,
                  }}
                  // ANIMAÇÃO DE SAÍDA
                  exit={{
                    x: "-100vw",
                    opacity: 0,
                    transition: { duration: 0.2 },
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                  // DRAG CONFIGS PARA SNAP BACK
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={{ left: 0.7, right: 0.1 }}
                  whileDrag={index === 0 ? { scale: 0.98 } : undefined}
                  onDragEnd={(_, info) => handleDragEnd(info)}
                >
                  <div className="flex flex-col items-center space-y-4 text-center pointer-events-none mb-2">
                    <div className="flex gap-1 text-[#c9a256] drop-shadow-sm">
                      {[...Array(t.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="size-5 md:size-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-base leading-relaxed text-[#1a1a1a]/80 italic">
                      "{t.description}"
                    </blockquote>
                  </div>

                  <div className="flex flex-col items-center gap-3 mt-auto pointer-events-none pb-2">
                    <Avatar className="!size-14 border-2 border-[#c9a256]/30 shadow-sm">
                      <AvatarFallback
                        style={{ backgroundColor: t.color }}
                        className="text-white font-bold text-lg"
                      >
                        {t.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <span className="block font-semibold tracking-wide text-[#1a1a1a]">
                        {t.name}
                      </span>
                      <span className="block text-xs text-[#1a1a1a]/50 uppercase font-medium tracking-wide mt-1">
                        {t.tipo}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
