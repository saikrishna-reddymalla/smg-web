import type { Metadata } from "next";

import { SectionHeading } from "@/components/ui/section-heading";
import { termsSections } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the SMG Fashion terms and conditions for site usage and wholesale enquiries.",
};

export default function TermsPage() {
  return (
    <main className="px-5 pb-20 pt-10 sm:px-8 lg:px-10 lg:pt-16">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Terms & Conditions"
          title="Guidance for using the SMG Fashion website and enquiry routes."
          description="These terms are intended to support the presentation of SMG Fashion as a wholesale-only business serving retailers in the United Kingdom."
        />
        <div className="mt-10 space-y-5">
          {termsSections.map((section) => (
            <section
              key={section.title}
              className="rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-[0_20px_60px_rgba(62,42,24,0.08)]"
            >
              <h2 className="font-serif text-3xl text-stone-950">
                {section.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-stone-600">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
