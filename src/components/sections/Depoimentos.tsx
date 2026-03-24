"use client";

import { useState, useEffect, useRef } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Auto-play a cada 5s
  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(nextSlide, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Touch events nativos
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) { nextSlide(); resetTimer(); }
    else if (diff < -50) { prevSlide(); resetTimer(); }
    touchStartX.current = null;
  };

  return (
    <section
      id="depoimentos"
      className="bg-[#f9f6f1] py-[60px] px-5 md:px-6 md:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Título */}
        <div className="mb-14 text-center md:mb-16">
          <h2 className="text-2xl font-bold text-[#1a1a1a] font-[family-name:var(--font-playfair)] md:text-3xl lg:text-4xl">
            O que dizem nossos pacientes
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#1a1a1a]/70 md:mt-4 md:text-base">
            Depoimentos reais de quem confia no nosso trabalho.
          </p>
        </div>

        {/* Carrossel */}
        <div
          className="relative mx-auto overflow-hidden w-full max-w-[360px] md:max-w-[420px]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Track deslizante */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="flex-shrink-0 w-full flex flex-col justify-between rounded-[2rem] border border-[#c9a256]/20 bg-white p-8 shadow-sm select-none"
                style={{ minHeight: 360 }}
              >
                {/* Conteúdo do card */}
                <div className="flex flex-col items-center space-y-4 text-center">
                  {/* Estrelas */}
                  <div className="flex gap-1 text-[#c9a256]">
                    {[...Array(t.rating)].map((_, i) => (
                      <svg key={i} className="size-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-base leading-relaxed text-[#1a1a1a]/80 italic">
                    "{t.description}"
                  </blockquote>
                </div>

                {/* Avatar */}
                <div className="flex flex-col items-center gap-3 mt-6">
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
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrentIndex(i); resetTimer(); }}
                className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                  i === currentIndex ? "w-8 bg-[#c9a256]" : "w-2.5 bg-[#c9a256]/30"
                }`}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
