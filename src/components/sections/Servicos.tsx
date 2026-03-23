"use client";

import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Clareamento Dental",
    description: "Tratamento estético que devolve a beleza e o brilho natural dos seus dentes com técnicas seguras e resultados duradouros.",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=600&q=80",
  },
  {
    title: "Implantes",
    description: "Solução definitiva para a perda dentária. Implantes de alta qualidade que restauram sua mastigação e autoestima.",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80",
  },
  {
    title: "Ortodontia",
    description: "Aparelhos fixos e alinhadores invisíveis para corrigir o alinhamento dos dentes e proporcionar um sorriso harmonioso.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffbb1960c55?w=600&q=80",
  },
  {
    title: "Prevenção",
    description: "Consultas regulares, limpeza profissional e orientações para manter sua saúde bucal em dia durante toda a vida.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80",
  },
];

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 40;
  const maxGap = 80;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth) return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export function Servicos() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const servicesLength = useMemo(() => services.length, []);
  const activeService = useMemo(() => services[activeIndex], [activeIndex]);

  // Touch handlers
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

  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay
  useEffect(() => {
    autoplayIntervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % servicesLength);
    }, 4000);
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [servicesLength]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % servicesLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [servicesLength]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + servicesLength) % servicesLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [servicesLength]);

  const onTouchEndHandle = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrev();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleNext, handlePrev]);

  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const offset = (index - activeIndex + servicesLength) % servicesLength;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + servicesLength) % servicesLength === index;
    const isRight = (activeIndex + 1) % servicesLength === index;

    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section id="servicos" className="bg-[#f9f6f1] py-[60px] px-5 md:py-20 md:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center md:mb-16 md:mt-10"
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
          className="w-full max-w-[64rem] mx-auto py-8"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEndHandle}
        >
          <div className="grid gap-3 md:gap-12 lg:gap-20 md:grid-cols-2 items-center">
            {/* Left side: Images */}
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] -mt-5 md:mt-0" style={{ perspective: "1000px" }} ref={imageContainerRef}>
              {services.map((service, index) => (
                <div
                  key={service.image}
                  className="absolute inset-x-8 sm:inset-x-12 inset-y-0 md:inset-0 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.15)] overflow-hidden"
                  style={getImageStyle(index)}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                </div>
              ))}
            </div>

            {/* Right side: Content */}
            <div className="flex flex-col justify-center h-full min-h-[140px] md:min-h-[250px] relative mt-2 md:mt-0 md:pl-5 text-center md:text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex flex-col"
                >
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] tracking-tight mb-2 md:mb-6 font-[family-name:var(--font-playfair)]">
                    {activeService.title}
                  </h3>
                  
                  <motion.p className="text-sm sm:text-base md:text-lg text-[#1a1a1a]/70 leading-relaxed font-medium">
                    {activeService.description.split(" ").map((word, i) => (
                      <motion.span
                        key={i}
                        initial={{ filter: "blur(5px)", opacity: 0, y: 3 }}
                        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.22,
                          ease: "easeInOut",
                          delay: 0.02 * i,
                        }}
                        style={{ display: "inline-block" }}
                      >
                        {word}&nbsp;
                      </motion.span>
                    ))}
                  </motion.p>
                </motion.div>
              </AnimatePresence>

              <div className="flex gap-4 pt-4 md:pt-12 mt-2 md:mt-auto justify-center md:justify-start">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-none cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  style={{
                    backgroundColor: hoverPrev ? "#b58f4a" : "#c9a256",
                  }}
                  onMouseEnter={() => setHoverPrev(true)}
                  onMouseLeave={() => setHoverPrev(false)}
                  aria-label="Serviço anterior"
                >
                  <FaArrowLeft size={18} color="#ffffff" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-none cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  style={{
                    backgroundColor: hoverNext ? "#b58f4a" : "#c9a256",
                  }}
                  onMouseEnter={() => setHoverNext(true)}
                  onMouseLeave={() => setHoverNext(false)}
                  aria-label="Próximo serviço"
                >
                  <FaArrowRight size={18} color="#ffffff" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
