"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    title: "Clareamento Dental",
    description:
      "Tratamento estético que devolve a beleza e o brilho natural dos seus dentes com técnicas seguras e resultados duradouros.",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
  },
  {
    title: "Implantes",
    description:
      "Solução definitiva para a perda dentária. Implantes de alta qualidade que restauram sua mastigação e autoestima.",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
  },
  {
    title: "Ortodontia",
    description:
      "Aparelhos fixos e alinhadores invisíveis para corrigir o alinhamento dos dentes e proporcionar um sorriso harmonioso.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80",
  },
  {
    title: "Prevenção",
    description:
      "Consultas regulares, limpeza profissional e orientações para manter sua saúde bucal em dia durante toda a vida.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80",
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

export function Servicos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndHandle = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  return (
    <section
      id="servicos"
      className="bg-[#f9f6f1] py-[60px] px-5 md:py-20 md:px-6 lg:px-8 overflow-hidden"
    >
      <style>{`
        .mobile-carousel-servicos {
          transform: translateX(calc(-${currentIndex * 100}% - ${currentIndex * 1}rem));
        }
        @media (min-width: 768px) {
          .mobile-carousel-servicos {
            transform: none !important;
          }
        }
      `}</style>
      <div className="mx-auto max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center md:mb-16"
        >
          <h2 className="text-2xl font-bold text-[#1a1a1a] font-[family-name:var(--font-playfair)] md:text-3xl lg:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#1a1a1a]/70 md:mt-4 md:text-base">
            Oferecemos tratamentos completos para cuidar da sua saúde bucal com
            excelência e carinho.
          </p>
        </motion.div>

        <div 
          className="relative group"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEndHandle}
        >
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -mt-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 shadow-md text-[#1a1a1a] md:hidden -ml-2"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -mt-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 shadow-md text-[#1a1a1a] md:hidden -mr-2"
            aria-label="Próximo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="overflow-hidden md:overflow-visible">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mobile-carousel-servicos flex md:grid gap-4 md:gap-5 min-[769px]:grid-cols-2 lg:grid-cols-4 lg:gap-6 transition-transform duration-300 ease-in-out"
            >
              {services.map((service, i) => (
                <motion.div key={i} variants={item} className="w-full shrink-0 md:w-auto md:shrink">
                  <Card className="h-full overflow-hidden border-0 bg-white shadow-lg transition-shadow hover:shadow-xl max-md:gap-2 max-md:py-5">
                    <div className="relative w-full aspect-[16/9] max-md:max-h-[200px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <CardHeader className="max-md:px-5 max-md:pb-1 max-md:pt-2">
                  <CardTitle className="text-base text-[#1a1a1a] font-[family-name:var(--font-playfair)] md:text-lg">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="max-md:px-5 max-md:pt-0">
                  <CardDescription className="text-sm text-[#1a1a1a]/70">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
            </motion.div>
          </div>

          <div className="mt-6 flex justify-center gap-2 md:hidden">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === i ? "w-6 bg-[#c9a256]" : "w-2 bg-[#c9a256]/30"
                }`}
                aria-label={`Ir para o serviço ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
