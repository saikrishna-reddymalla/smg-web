import { MessageCircleMore } from "lucide-react";

import { contactConfig } from "@/lib/site-content";
import { formatPhone } from "@/lib/utils";

import { Button } from "../ui/button";

interface WhatsAppCardProps {
  categoryLabel?: string;
}

export function WhatsAppCard({ categoryLabel }: WhatsAppCardProps) {
  const message = categoryLabel
    ? `Hello SMG Fashion, I would like to enquire about ${categoryLabel}.`
    : "Hello SMG Fashion, I would like to discuss a wholesale enquiry.";

  const href = contactConfig.whatsapp
    ? `https://wa.me/${formatPhone(contactConfig.whatsapp)}?text=${encodeURIComponent(
        message,
      )}`
    : null;

  return (
    <div className="rounded-[2rem] border border-white/70 bg-[#f3e8db] p-7 shadow-[0_20px_60px_rgba(62,42,24,0.08)]">
      <div className="inline-flex rounded-full bg-white p-3 text-[#7d3140]">
        <MessageCircleMore size={20} />
      </div>
      <h3 className="mt-5 font-serif text-3xl text-stone-950">
        WhatsApp Enquiries
      </h3>
      <p className="mt-4 text-sm leading-7 text-stone-600">
        {href
          ? "Speak with the wholesale team on WhatsApp for a faster category discussion."
          : "A direct WhatsApp line can be enabled from the central contact configuration. Until then, use the enquiry form or contact page for wholesale discussions."}
      </p>
      <div className="mt-6">
        {href ? (
          <Button href={href} target="_blank" rel="noreferrer">
            Start WhatsApp Enquiry
          </Button>
        ) : (
          <Button href="/contact" variant="secondary">
            Open Contact Page
          </Button>
        )}
      </div>
    </div>
  );
}
