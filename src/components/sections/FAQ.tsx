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
    id: "item-0",
    question: "Como faço para agendar uma consulta?",
    answer:
      "Você pode agendar através do WhatsApp, pelo formulário nesta página ou ligando para nossa clínica. Responderemos o mais rápido possível para definir o melhor horário para você.",
  },
  {
    id: "item-1",
    question: "A clínica aceita planos de saúde?",
    answer:
      "Sim, trabalhamos com os principais planos odontológicos. Entre em contato para verificarmos a cobertura do seu plano e as melhores condições de pagamento.",
  },
  {
    id: "item-2",
    question: "Qual a duração média de uma consulta?",
    answer:
      "A primeira consulta geralmente leva entre 40 e 60 minutos, pois inclui avaliação completa e planejamento. Consultas de retorno e procedimentos variam conforme o tratamento.",
  },
  {
    id: "item-3",
    question: "Dói fazer tratamento odontológico?",
    answer:
      "Utilizamos técnicas modernas e anestésicos de qualidade para garantir seu conforto. A maioria dos pacientes relata pouca ou nenhuma dor durante os procedimentos.",
  },
  {
    id: "item-4",
    question: "Quanto tempo dura o clareamento dental?",
    answer:
      "O resultado do clareamento pode durar de 1 a 3 anos, dependendo dos seus hábitos alimentares e de higiene. Evitar café, vinho e cigarro ajuda a prolongar o efeito.",
  },
  {
    id: "item-5",
    question: "Posso fazer implante se tenho medo de dentista?",
    answer:
      "Sim! Oferecemos sedação consciente para pacientes com ansiedade ou medo. Você ficará relaxado durante todo o procedimento, que é realizado com segurança e conforto.",
  },
];

export function FAQ() {
  return (
    <section className="bg-white py-[60px] px-5 md:py-20 md:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl space-y-8 md:space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 text-center md:text-left"
        >
          <h2 className="text-2xl font-bold text-[#1a1a1a] font-[family-name:var(--font-playfair)] md:text-3xl lg:text-4xl">
            Perguntas frequentes
          </h2>
          <p className="text-sm text-[#1a1a1a]/70 md:text-base max-w-2xl mx-auto md:mx-0">
            Aqui estão as dúvidas mais comuns sobre nossos procedimentos. Caso não encontre a resposta que procura, nossa equipe de atendimento está pronta para ajudar.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion
            type="single"
            collapsible
            className="bg-[#f9f6f1] w-full -space-y-px rounded-xl"
            defaultValue="item-0"
          >
            {faqs.map((item) => (
              <AccordionItem
                value={item.id}
                key={item.id}
                className="relative border-x border-[#c9a256]/20 first:rounded-t-xl first:border-t last:rounded-b-xl last:border-b"
              >
                <AccordionTrigger className="px-5 py-5 text-[15px] hover:text-[#c9a256] text-[#1a1a1a] font-medium leading-6 hover:no-underline transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#1a1a1a]/80 pb-6 px-5 text-sm md:text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <p className="text-sm md:text-base text-[#1a1a1a]/70 mt-8 text-center md:text-left">
            Ainda tem dúvidas? Fale diretamente com nossa{' '}
            <a href="#agendamento" className="text-[#c9a256] font-semibold hover:underline transition-colors">
              equipe de atendimento
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
