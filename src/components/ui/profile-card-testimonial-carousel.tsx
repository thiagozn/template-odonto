"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CardItem {
  title: string;
  description: string;
  imageUrl: string;
}

const items: CardItem[] = [
  {
    title: "Ambiente Moderno",
    description: "Nossa clínica foi projetada para oferecer conforto, tecnologia e um ambiente acolhedor para todos os pacientes.",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80",
  },
  {
    title: "Atendimento Humanizado",
    description: "Nossa equipe prioriza a atenção e o cuidado de cada paciente, tornando cada visita uma experiência tranquila e segura.",
    imageUrl: "https://images.unsplash.com/photo-1606811842243-af7e16970c1f?w=600&q=80",
  },
  {
    title: "Equipamentos de Ponta",
    description: "Utilizamos tecnologia de última geração para diagnósticos precisos e tratamentos mais rápidos e confortáveis.",
    imageUrl: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80",
  },
  {
    title: "Equipe Especializada",
    description: "Profissionais qualificados e em constante atualização para oferecer o melhor tratamento para você.",
    imageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&q=80",
  },
];

export function DiferenciaisCarousel({ className }: { className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => setCurrentIndex((i) => (i + 1) % items.length);
  const handlePrevious = () => setCurrentIndex((i) => (i - 1 + items.length) % items.length);
  const current = items[currentIndex];

  return (
    <div className={cn("w-full max-w-5xl mx-auto px-4", className)}>

      {/* DESKTOP */}
      <div className="hidden md:flex relative items-center">
        <div className="w-[470px] h-[470px] rounded-[2rem] overflow-hidden bg-[#f9f6f1] flex-shrink-0 shadow-lg relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full h-full absolute inset-0"
            >
              <Image src={current.imageUrl} alt={current.title} width={470} height={470} className="w-full h-full object-cover" priority />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="bg-white rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.08)] p-10 ml-[-80px] z-10 max-w-xl flex-1 border border-[#c9a256]/10 relative h-[300px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 p-10 flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4 font-[family-name:var(--font-playfair)]">{current.title}</h2>
              <p className="text-[#1a1a1a]/70 text-lg leading-relaxed">{current.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden -mx-4 px-4 flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 pt-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {items.map((item, index) => (
          <div key={index} className="w-[85%] flex-shrink-0 snap-start bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#c9a256]/10 flex flex-col overflow-hidden">
            <div className="w-full aspect-square bg-[#f9f6f1] relative">
               <Image src={item.imageUrl} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 85vw, 50vw" priority={index === 0} />
            </div>
            <div className="p-6 text-left flex-grow flex flex-col justify-center">
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-3 font-[family-name:var(--font-playfair)] tracking-wide">{item.title}</h2>
              <p className="text-[#1a1a1a]/70 text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
        {/* Espaçador final para permitir que o último item mostre a sombra e scroll total */}
        <div className="w-[4%] flex-shrink-0" aria-hidden="true" />
      </div>

      {/* NAVEGAÇÃO DESKTOP */}
      <div className="hidden md:flex justify-center items-center gap-6 mt-12 md:mt-8">
        <button onClick={handlePrevious} className="w-12 h-12 rounded-full bg-white border border-[#c9a256]/20 shadow-md flex items-center justify-center hover:bg-[#c9a256] hover:text-white transition-colors cursor-pointer text-[#1a1a1a]">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button key={i} onClick={() => setCurrentIndex(i)} className={cn("h-2 rounded-full transition-all cursor-pointer", i === currentIndex ? "w-6 bg-[#c9a256]" : "w-2 bg-[#c9a256]/30")} aria-label={`Go to item ${i}`} />
          ))}
        </div>
        <button onClick={handleNext} className="w-12 h-12 rounded-full bg-white border border-[#c9a256]/20 shadow-md flex items-center justify-center hover:bg-[#c9a256] hover:text-white transition-colors cursor-pointer text-[#1a1a1a]">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
