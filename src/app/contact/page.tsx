import type { Metadata } from "next";
import { Building2, Clock3, Mail, MapPin, Phone } from "lucide-react";

import { EnquiryForm } from "@/components/sections/enquiry-form";
import { PageHero } from "@/components/sections/page-hero";
import { WhatsAppCard } from "@/components/sections/whatsapp-card";
import { contactConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact SMG Fashion for wholesale enquiries across textiles, ethnic fashion, footwear, perfume, and cosmetics.",
};

const detailCards = [
  {
    label: "Service area",
    value: contactConfig.serviceArea,
    icon: MapPin,
  },
  {
    label: "Business hours",
    value: contactConfig.businessHours,
    icon: Clock3,
  },
  {
    label: "Email",
    value: contactConfig.email,
    icon: Mail,
  },
  {
    label: "Phone",
    value: contactConfig.phone,
    icon: Phone,
  },
  {
    label: "Address",
    value: contactConfig.addressLines.length
      ? contactConfig.addressLines.join(", ")
      : null,
    icon: Building2,
  },
];

export default function ContactPage() {
  return (
    <main className="pb-20">
      <PageHero
        eyebrow="Contact"
        title="Begin a wholesale conversation with SMG Fashion."
        description="Use the contact route for category enquiries, product introductions, and retail partnership discussions. Business details are centralised in code so they can be updated cleanly when final information is confirmed."
        visual="heritage"
      />
      <section className="px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {detailCards
              .filter((item) => item.value)
              .map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-[0_20px_60px_rgba(62,42,24,0.08)]"
                  >
                    <div className="inline-flex rounded-full bg-[#f1e1d4] p-3 text-[#8a5a4d]">
                      <Icon size={18} />
                    </div>
                    <p className="mt-5 text-xs uppercase tracking-[0.22em] text-stone-500">
                      {item.label}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-stone-700">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            <WhatsAppCard />
          </div>
          <EnquiryForm
            title="General retail enquiry"
            intro="Share your business profile, product interests, and any preferred timeline for discussion."
          />
        </div>
      </section>
    </main>
  );
}
