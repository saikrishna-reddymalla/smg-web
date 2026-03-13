import type { Metadata } from "next";

import { GalleryGrid } from "@/components/sections/gallery-grid";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { galleryItems, imagePrompts } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore the SMG Fashion gallery featuring curated wholesale visuals across textiles, ethnic fashion, footwear, perfume, and cosmetics.",
};

export default function GalleryPage() {
  return (
    <main className="pb-20">
      <PageHero
        eyebrow="Gallery"
        title="Curated visuals for a heritage-led wholesale world."
        description="The gallery pairs premium placeholder visuals with a defined image direction so the brand can evolve into a cohesive campaign and catalogue language."
        visual="gallery"
      />
      <section className="px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <GalleryGrid items={galleryItems} />
        </div>
      </section>
      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Image direction"
            title="AI image prompts prepared for future premium asset generation."
            description="These prompts are centralised in code so campaign-style visuals can later replace the curated placeholders without reworking page structure."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {imagePrompts.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/70 bg-white/75 p-7 shadow-[0_20px_60px_rgba(62,42,24,0.08)]"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-[#8a5a4d]">
                  {item.useCase}
                </p>
                <h3 className="mt-4 font-serif text-3xl text-stone-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-stone-600">
                  {item.prompt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
