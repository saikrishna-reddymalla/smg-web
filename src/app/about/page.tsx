import type { Metadata } from "next";

import { EditorialVisual } from "@/components/ui/editorial-visual";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutHighlights } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about SMG Fashion, a premium wholesale house serving UK retailers across textiles, ethnic fashion, footwear, perfume, and cosmetics.",
};

export default function AboutPage() {
  return (
    <main className="pb-20">
      <section className="px-5 pb-16 pt-10 sm:px-8 lg:px-10 lg:pb-20 lg:pt-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <MotionReveal>
            <SectionHeading
              eyebrow="About SMG Fashion"
              title="A wholesale brand shaped by tradition, presentation, and retail relevance."
              description="SMG Fashion exists to give UK retailers a stronger, more curated route into ethnic textiles, celebrationwear, footwear, perfume, and beauty. The brand speaks in a premium tone because the product deserves a premium setting."
            />
            <div className="mt-8 space-y-4 text-base leading-8 text-stone-600">
              <p>
                Our perspective is simple: heritage product categories should be
                presented with the same composure and editorial care expected of
                any luxury retail environment.
              </p>
              <p>
                That means disciplined assortment building, cleaner visual
                language, and a wholesale experience designed around trust,
                clarity, and stronger retail storytelling.
              </p>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <EditorialVisual
              title="Traditional roots. Premium wholesale posture."
              subtitle="A refined business identity designed for retailers who want richness without clutter."
              variant="heritage"
              className="min-h-[440px]"
            />
          </MotionReveal>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What makes us distinctive"
            title="Luxury aesthetics backed by wholesale practicality."
            description="SMG Fashion is positioned for retailers who want a category mix that feels culturally rich, commercially ready, and visually coherent."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {aboutHighlights.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.05}>
                <div className="h-full rounded-[2rem] border border-white/70 bg-white/75 p-7 shadow-[0_20px_60px_rgba(62,42,24,0.08)]">
                  <h3 className="font-serif text-3xl text-stone-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-stone-600">
                    {item.description}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          <MotionReveal>
            <div className="rounded-[2rem] border border-white/70 bg-[#f5efe6] p-8 shadow-[0_20px_60px_rgba(62,42,24,0.08)]">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8a5a4d]">
                Vision
              </p>
              <h3 className="mt-4 font-serif text-4xl text-stone-950">
                To become a trusted premium wholesale house for retailers
                seeking heritage-led product stories.
              </h3>
              <p className="mt-5 text-base leading-8 text-stone-600">
                SMG Fashion aims to unite curation, sourcing confidence, and
                strong presentation so retailers can build richer, more elegant
                assortments across fashion and beauty.
              </p>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <div className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_20px_60px_rgba(62,42,24,0.08)]">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8a5a4d]">
                UK retailer positioning
              </p>
              <h3 className="mt-4 font-serif text-4xl text-stone-950">
                Built for boutiques, occasionwear specialists, and retail buyers
                with a sharper eye.
              </h3>
              <p className="mt-5 text-base leading-8 text-stone-600">
                The business is designed to support retailers who want ethnic
                product categories presented with more finesse, consistency, and
                commercial clarity.
              </p>
            </div>
          </MotionReveal>
        </div>
      </section>
    </main>
  );
}
