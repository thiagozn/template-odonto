"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const stats = [
  { value: "15+", label: "Anos de experiência" },
  { value: "5.000+", label: "Pacientes atendidos" },
  { value: "4.9", label: "Avaliação Google" },
];

const WHATSAPP_NUMBER = "5511999999999";

const HERO_OVERLAY_DESKTOP =
  "linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.75) 35%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.0) 100%)";
/** Mobile: overlay mais escuro para contraste do texto */
const HERO_OVERLAY_MOBILE =
  "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.75) 70%, rgba(0,0,0,0.85) 100%)";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background com gradiente + imagem local */}
      <div
        className="absolute inset-0 z-[1] md:hidden"
        aria-hidden
        style={{
          backgroundImage: `${HERO_OVERLAY_MOBILE}, url('/images/hero.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />
      <div
        className="absolute inset-0 z-[1] hidden md:block"
        aria-hidden
        style={{
          backgroundImage: `${HERO_OVERLAY_DESKTOP}, url('/images/hero.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 px-5 pt-[100px] pb-24 md:px-6 md:pt-24 lg:grid-cols-2 lg:px-8 lg:pb-12">
        <div className="flex flex-col justify-between lg:pr-8">
          <div className="flex flex-1 flex-col justify-center py-6 md:py-8 lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="max-w-xl text-left"
            >
              <h1 className="max-md:text-[clamp(1.8rem,6vw,2.4rem)] max-md:leading-tight font-bold tracking-tight text-white font-[family-name:var(--font-playfair)] md:text-4xl md:leading-tight lg:text-[2.75rem] lg:leading-[1.15]">
                Seu sorriso merece
                <br />
                <span className="text-[#c9a256]">cuidado especial</span>
              </h1>
              <p className="mt-4 text-base leading-relaxed text-white/90 md:mt-5 md:text-lg lg:text-xl">
                Odontologia de excelência com tratamentos personalizados e
                tecnologia de ponta para o seu bem-estar.
              </p>

              <p className="mt-3 flex items-start gap-2 text-left text-xs leading-snug text-[rgba(255,255,255,0.65)] md:mt-4 md:text-sm lg:text-base">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-[rgba(255,255,255,0.65)] md:size-5"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <span>
                  Rua das Flores, 123 — Centro, São Paulo · SP
                </span>
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="mt-6 md:mt-8"
              >
                {/* Mobile: compacto, uma linha */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit max-w-full items-center gap-2.5 bg-[#25D366] py-3.5 px-6 text-[0.82rem] font-semibold text-white transition-colors hover:bg-[#20bd5a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden whitespace-nowrap"
                  style={{ borderRadius: 6 }}
                >
                  <WhatsAppIcon className="size-4 shrink-0" />
                  Agendar pelo WhatsApp
                </a>
                {/* Desktop: CTA original */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center gap-3 bg-[#25D366] px-8 py-4 text-[0.85rem] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#20bd5a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  style={{ borderRadius: 6 }}
                >
                  <WhatsAppIcon className="size-[1.125rem] shrink-0" />
                  Marcar avaliação agora pelo WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.45 }}
            className="mt-8 flex w-full flex-nowrap items-stretch justify-between gap-0 border-t border-white/10 pt-6 md:mt-10 md:flex-wrap md:justify-start md:gap-y-6 md:pt-8 lg:mt-0 lg:border-t-0 lg:pt-0"
          >
            {stats.map((stat, i) => (
              <Fragment key={stat.label}>
                {i > 0 && (
                  <div
                    className="mx-1.5 h-auto w-px shrink-0 self-stretch bg-white/15 md:mx-3 md:h-10 lg:mx-6"
                    aria-hidden
                  />
                )}
                <div className="min-w-0 flex-1 text-left md:min-w-[7.5rem] md:flex-none lg:min-w-[8.5rem]">
                  <div className="text-lg font-bold leading-none text-[#c9a256] font-[family-name:var(--font-playfair)] md:text-2xl lg:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 line-clamp-2 text-[0.65rem] leading-tight text-white/75 md:text-xs lg:text-sm">
                    {stat.label}
                  </div>
                </div>
              </Fragment>
            ))}
          </motion.div>
        </div>

        <div className="hidden lg:block" aria-hidden />
      </div>
    </section>
  );
}
