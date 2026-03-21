import {
  Navbar,
  Hero,
  Servicos,
  PorQueNosEscolher,
  Sobre,
  Agendamento,
  Depoimentos,
  FAQ,
  Footer,
  StickyBottomBar,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicos />
        <PorQueNosEscolher />
        <Sobre />
        <Agendamento />
        <Depoimentos />
        <FAQ />
        <section className="bg-[#f9f6f1] py-[60px] px-5 md:py-20 md:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1!2d-46.6333!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjgiUyA0NsKwMzcnNTkuOSJX!5e0!3m2!1spt!2sbr"
              width="100%"
              height="300"
              style={{
                border: 0,
                display: "block",
                filter: "grayscale(20%)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
        <Footer />
      </main>
      <StickyBottomBar />
      {/* Espaço para a barra sticky em mobile */}
      <div
        className="shrink-0 md:hidden"
        style={{ height: "calc(min(56px, 10vh) + 12px)" }}
        aria-hidden
      />
    </>
  );
}
