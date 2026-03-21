"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como faço para agendar uma consulta?",
    answer:
      "Você pode agendar através do WhatsApp, pelo formulário nesta página ou ligando para nossa clínica. Responderemos o mais rápido possível para definir o melhor horário para você.",
  },
  {
    question: "A clínica aceita planos de saúde?",
    answer:
      "Sim, trabalhamos com os principais planos odontológicos. Entre em contato para verificarmos a cobertura do seu plano e as melhores condições de pagamento.",
  },
  {
    question: "Qual a duração média de uma consulta?",
    answer:
      "A primeira consulta geralmente leva entre 40 e 60 minutos, pois inclui avaliação completa e planejamento. Consultas de retorno e procedimentos variam conforme o tratamento.",
  },
  {
    question: "Doi fazer tratamento odontológico?",
    answer:
      "Utilizamos técnicas modernas e anestésicos de qualidade para garantir seu conforto. A maioria dos pacientes relata pouca ou nenhuma dor durante os procedimentos.",
  },
  {
    question: "Quanto tempo dura o clareamento dental?",
    answer:
      "O resultado do clareamento pode durar de 1 a 3 anos, dependendo dos seus hábitos alimentares e de higiene. Evitar café, vinho e cigarro ajuda a prolongar o efeito.",
  },
  {
    question: "Posso fazer implante se tenho medo de dentista?",
    answer:
      "Sim! Oferecemos sedação consciente para pacientes com ansiedade ou medo. Você ficará relaxado durante todo o procedimento, que é realizado com segurança e conforto.",
  },
];

export function FAQ() {
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
            Perguntas frequentes
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#1a1a1a]/70 md:mt-4 md:text-base">
            Tire suas dúvidas sobre nossos serviços e procedimentos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="overflow-hidden rounded-xl border bg-[#f9f6f1]"
          >
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-[#c9a256]/20 px-3 last:border-b-0 md:px-4"
              >
                <AccordionTrigger className="text-left text-sm font-medium text-[#1a1a1a] hover:text-[#c9a256] hover:no-underline md:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs text-[#1a1a1a]/80 md:text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
