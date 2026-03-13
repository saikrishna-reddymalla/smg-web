import { MessageCircleMore } from "lucide-react";

import { contactConfig } from "@/lib/site-content";
import { formatPhone } from "@/lib/utils";

export function FloatingWhatsApp() {
  if (!contactConfig.whatsapp) {
    return null;
  }

  const href = `https://wa.me/${formatPhone(contactConfig.whatsapp)}?text=${encodeURIComponent(
    "Hello SMG Fashion, I would like to discuss a wholesale enquiry.",
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-stone-950 px-5 py-3 text-sm font-medium tracking-[0.08em] text-white shadow-[0_20px_50px_rgba(24,18,13,0.28)] transition hover:-translate-y-0.5 hover:bg-[#2b1f16]"
    >
      <MessageCircleMore size={18} />
      WhatsApp
    </a>
  );
}
