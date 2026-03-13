import { CheckCheck, Globe2, TimerReset } from "lucide-react";

import { trustPillars } from "@/lib/site-content";

import { MotionReveal } from "../ui/motion-reveal";
import { SectionHeading } from "../ui/section-heading";

const icons = [CheckCheck, Globe2, TimerReset];

export function TrustPillars() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Wholesale confidence"
          title="Trust built through curation, sourcing discipline, and delivery clarity."
          description="SMG Fashion positions reliability as part of the premium experience, not an afterthought."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {trustPillars.map((pillar, index) => {
            const Icon = icons[index];

            return (
              <MotionReveal key={pillar.title} delay={index * 0.08}>
                <div className="h-full rounded-[2rem] border border-white/70 bg-white/75 p-7 shadow-[0_24px_60px_rgba(62,42,24,0.09)]">
                  <div className="inline-flex rounded-full bg-[#f0e0d2] p-3 text-[#7d3140]">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl text-stone-950">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-stone-600">
                    {pillar.description}
                  </p>
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
