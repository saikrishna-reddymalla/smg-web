import { CategoryCard } from "@/components/sections/category-card";
import { EnquiryForm } from "@/components/sections/enquiry-form";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { PageHero } from "@/components/sections/page-hero";
import { ProductExplorer } from "@/components/sections/product-explorer";
import { TrustPillars } from "@/components/sections/trust-pillars";
import { WhatsAppCard } from "@/components/sections/whatsapp-card";
import { Button } from "@/components/ui/button";
import { EditorialVisual } from "@/components/ui/editorial-visual";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  aboutHighlights,
  categoryList,
  galleryItems,
  products,
  siteConfig,
} from "@/lib/site-content";

export default function HomePage() {
  return (
    <main className="pb-20">
      <PageHero
        eyebrow="SMG Fashion"
        title="Luxury ethnic wholesale, shaped for modern British retail."
        description={`${siteConfig.tagline} SMG Fashion brings together premium textiles, celebrationwear, traditional footwear, fragrances, and beauty essentials for retailers seeking a warmer, more elevated wholesale identity.`}
        visual="heritage"
        stats={[
          { label: "Business model", value: "B2B only" },
          { label: "Retail market", value: "United Kingdom" },
          { label: "Category focus", value: "3 curated pillars" },
        ]}
        primaryCta={{ label: "Explore Categories", href: "#categories" }}
        secondaryCta={{ label: "View Products", href: "/products" }}
      />

      <section id="categories" className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Business categories"
            title="Three wholesale categories, presented with a premium house point of view."
            description="Each category has its own detail page, product showcase, and enquiry route so retailers can move from discovery to discussion without friction."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {categoryList.map((category) => (
              <MotionReveal key={category.slug}>
                <CategoryCard category={category} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <ProductExplorer
            products={products.filter((product) => product.featured)}
            title="Featured products"
            description="A tighter showcase of ranges that signal the SMG Fashion tone: selective, category-aware, and designed for stronger visual merchandising."
          />
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <MotionReveal>
            <EditorialVisual
              title="Traditional roots, premium wholesale posture"
              subtitle="A curated B2B story for retailers who want heritage richness presented with greater restraint and confidence."
              variant="gallery"
              className="min-h-[420px]"
            />
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <SectionHeading
              eyebrow="About SMG Fashion"
              title="A wholesale house where ethnic tradition meets refined retail sensibility."
              description="SMG Fashion is shaped for retailers who want more than stock lists. The brand blends cultural richness, premium product curation, and a composed B2B tone for boutiques, independent stores, and occasion-led retail environments."
            />
            <div className="mt-8 space-y-5">
              {aboutHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.6rem] border border-white/70 bg-white/75 p-5 shadow-[0_18px_40px_rgba(62,42,24,0.08)]"
                >
                  <h3 className="font-serif text-2xl text-stone-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-stone-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/about" variant="secondary">
                Discover SMG Fashion
              </Button>
            </div>
          </MotionReveal>
        </div>
      </section>

      <TrustPillars />

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Gallery preview"
            title="Visual stories with textile depth, occasion polish, and beauty softness."
            description="Curated placeholders and image prompts are included to support a cohesive future art direction across campaign, catalogue, and merchandising imagery."
          />
          <div className="mt-10">
            <GalleryGrid items={galleryItems.slice(0, 6)} />
          </div>
          <div className="mt-8">
            <Button href="/gallery" variant="secondary">
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <MotionReveal>
            <div className="rounded-[2rem] border border-white/70 bg-[#f4eadf] p-7 shadow-[0_20px_60px_rgba(62,42,24,0.08)]">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8a5a4d]">
                Contact preview
              </p>
              <h2 className="mt-4 font-serif text-4xl text-stone-950">
                Start a refined wholesale conversation.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-stone-600">
                SMG Fashion is built for retail partnerships. Use the enquiry
                route below to begin a category discussion, product request, or
                broader brand introduction.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-white/70 bg-white/70 p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-stone-500">
                    Retail market
                  </p>
                  <p className="mt-3 text-lg text-stone-900">
                    United Kingdom
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-white/70 bg-white/70 p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-stone-500">
                    Enquiry route
                  </p>
                  <p className="mt-3 text-lg text-stone-900">
                    Products, sourcing, and appointments
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact">Open Contact Page</Button>
                <Button href="/products" variant="secondary">
                  Browse All Products
                </Button>
              </div>
            </div>
          </MotionReveal>
          <div className="grid gap-6">
            <MotionReveal delay={0.05}>
              <WhatsAppCard />
            </MotionReveal>
            <MotionReveal delay={0.1}>
              <EnquiryForm
                title="General wholesale enquiry"
                intro="Introduce your business, the categories you are exploring, and any launch or replenishment timing."
              />
            </MotionReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
