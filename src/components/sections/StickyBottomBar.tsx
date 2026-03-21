"use client";

import { Phone, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5511999999999";
const PHONE_NUMBER = "551132221234";

export function StickyBottomBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#c9a256]/20 bg-white/95 backdrop-blur-sm md:hidden"
      style={{
        maxHeight: "min(56px, 10vh)",
        paddingBottom: "max(0px, env(safe-area-inset-bottom))",
      }}
    >
      <div
        className="mx-auto flex max-h-[min(56px,10vh)] w-full max-w-7xl items-center gap-2 px-3"
        style={{ height: "min(56px, 10vh)" }}
      >
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex h-9 min-h-0 flex-1 items-center justify-center gap-1.5 rounded-md bg-[#1a1a1a] px-2 text-xs font-semibold text-white transition-colors hover:bg-[#2a2a2a]"
        >
          <Phone className="size-4 shrink-0" aria-hidden />
          Ligar
        </a>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 min-h-0 flex-1 items-center justify-center gap-1.5 rounded-md bg-[#25D366] px-2 text-xs font-semibold text-white transition-colors hover:bg-[#20bd5a]"
        >
          <MessageCircle className="size-4 shrink-0" aria-hidden />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
