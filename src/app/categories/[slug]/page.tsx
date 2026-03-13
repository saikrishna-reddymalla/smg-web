import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { EnquiryForm } from "@/components/sections/enquiry-form";
import { PageHero } from "@/components/sections/page-hero";
import { ProductExplorer } from "@/components/sections/product-explorer";
import { WhatsAppCard } from "@/components/sections/whatsapp-card";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  categoryList,
  getCategoryBySlug,
  getCategoryProducts,
  siteConfig,
} from "@/lib/site-content";
import type { CategorySlug } from "@/types/content";

export function generateStaticParams() {
  return categoryList.map((category) => ({ slug: category.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const category = getCategoryBySlug(slug);

    if (!category) {
      return {
        title: `Category | ${siteConfig.name}`,
      };
    }

    return {
      title: category.name,
      description: category.pageDescription,
      openGraph: {
        title: `${category.name} | ${siteConfig.name}`,
        description: category.pageDescription,
      },
    };
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getCategoryProducts(category.slug as CategorySlug);

  return (
    <main className="pb-20">
      <PageHero
        eyebrow={category.eyebrow}
        title={category.heroTitle}
        description={category.heroDescription}
        visual={category.visual}
        stats={category.stats}
        primaryCta={{ label: "Browse Products", href: "#catalogue" }}
        secondaryCta={{ label: "Make an Enquiry", href: "#enquiry" }}
      />

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={category.shortName}
            title={category.introTitle}
            description={category.introBody}
          />
        </div>
      </section>

      <section className="px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Highlights"
            title={category.spotlightTitle}
            description={category.spotlightIntro}
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {category.spotlights.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.05}>
                <div className="h-full rounded-[2rem] border border-white/70 bg-white/75 p-7 shadow-[0_20px_60px_rgba(62,42,24,0.08)]">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#8a5a4d]">
                    {category.shortName}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl text-stone-950">
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
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Collections"
            title={category.collectionTitle}
            description={category.collectionIntro}
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {category.collections.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.05}>
                <div className="surface-grid h-full rounded-[2rem] border border-white/70 bg-[#f5efe6] p-7 shadow-[0_20px_60px_rgba(62,42,24,0.08)]">
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

      <section id="catalogue" className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <ProductExplorer
            products={categoryProducts}
            title={category.catalogTitle}
            description={category.catalogIntro}
            showCategoryFilter={false}
          />
        </div>
      </section>

      <section id="enquiry" className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <MotionReveal>
            <EnquiryForm
              defaultCategory={category.name}
              title={`Enquire about ${category.shortName}`}
              intro={category.enquiryIntro}
            />
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <WhatsAppCard categoryLabel={category.name} />
          </MotionReveal>
        </div>
      </section>
    </main>
  );
}
