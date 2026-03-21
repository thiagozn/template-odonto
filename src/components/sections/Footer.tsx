"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5511999999999";
const PHONE_NUMBER = "551132221234";

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer
      id="contato"
      className="bg-[#1a1a1a] py-[60px] px-5 text-white md:py-16 md:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
          {/* Logo e descrição */}
          <div className="lg:col-span-2">
            <Link
              href="#home"
              className="text-xl font-bold font-[family-name:var(--font-playfair)] text-white md:text-2xl"
            >
              Sorriso Saudável
            </Link>
            <p className="mt-4 text-white/70 max-w-md">
              Odontologia de excelência com profissionais especializados.
              Cuide do seu sorriso com quem entende de saúde bucal.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-[#c9a256] uppercase tracking-wider mb-4">
              Navegação
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#c9a256] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatos */}
          <div>
            <h3 className="text-sm font-semibold text-[#c9a256] uppercase tracking-wider mb-4">
              Contato
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center gap-2 text-white/70 hover:text-[#c9a256] transition-colors"
                >
                  <Phone size={18} />
                  (11) 3222-1234
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-[#c9a256] transition-colors"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@sorrisosaudavel.com.br"
                  className="flex items-center gap-2 text-white/70 hover:text-[#c9a256] transition-colors"
                >
                  <Mail size={18} />
                  contato@sorrisosaudavel.com.br
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-white/70">
                  <MapPin size={18} className="shrink-0 mt-0.5" />
                  Rua das Flores, 123 - Centro
                  <br />
                  São Paulo - SP
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-center text-xs text-white/60 md:mt-12 md:pt-8 md:text-sm">
          <p>
            © {new Date().getFullYear()} Sorriso Saudável. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
