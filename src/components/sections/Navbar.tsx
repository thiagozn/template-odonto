"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

const WHATSAPP_NUMBER = "5511999999999";
const SCROLL_THRESHOLD = 80;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    handleScroll(); // checa estado inicial (SSR/hydration)
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "border-b border-[#c9a256]/20 bg-white/95 shadow-[0_2px_20px_rgba(0,0,0,0.08)] backdrop-blur-sm"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="relative mx-auto max-w-7xl px-5 md:px-6 lg:px-8">
        <div className="flex h-14 md:h-16 items-center justify-between">
          <Link
            href="#home"
            onClick={() => setIsOpen(false)}
            className={cn(
              "text-base font-normal tracking-tight font-[family-name:var(--font-playfair)] md:text-xl",
              isScrolled ? "text-[#1a1a1a]" : "text-white"
            )}
          >
            <span>Dra. </span>
            <span className="italic">Daniela Souza</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-300 hover:text-[#c9a256]",
                  isScrolled ? "text-[#1a1a1a]" : "text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className={cn(
                "bg-[#25D366] text-white transition-all duration-300 hover:bg-[#20bd5a]",
                isScrolled ? "border-transparent" : "border border-white/60"
              )}
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar
              </a>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((o) => !o)}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-md transition-colors duration-300 md:hidden",
              isScrolled
                ? "text-[#1a1a1a] hover:bg-[#f9f6f1]"
                : "text-white hover:bg-white/10"
            )}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Dropdown mobile (≤768px) */}
        <div
          id="mobile-menu"
          className={cn(
            "absolute left-0 right-0 top-full z-50 overflow-hidden border-b border-[#c9a256]/20 bg-white shadow-lg transition-[max-height,opacity] duration-300 ease-out md:hidden",
            isOpen
              ? "max-h-[min(24rem,calc(100dvh-3.5rem))] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          )}
        >
          <div className="flex max-h-[min(24rem,calc(100dvh-3.5rem))] flex-col gap-1 overflow-y-auto px-5 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-[#1a1a1a] hover:bg-[#f9f6f1] hover:text-[#c9a256]"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-2 w-full bg-[#25D366] text-white hover:bg-[#20bd5a]"
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                Agendar via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
