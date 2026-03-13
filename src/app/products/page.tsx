import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { ProductExplorer } from "@/components/sections/product-explorer";
import { products } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse wholesale products from SMG Fashion across textiles, clothing, footwear, perfume, and cosmetics.",
};

export default function ProductsPage() {
  return (
    <main className="pb-20">
      <PageHero
        eyebrow="Products"
        title="A premium product view across textiles, fashion, footwear, and beauty."
        description="Browse the full SMG Fashion assortment through a cleaner B2B discovery experience with search, filters, and quick view."
        visual="gallery"
      />
      <section className="px-5 py-4 sm:px-8 lg:px-10 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <ProductExplorer
            products={products}
            title="All product lines"
            description="Explore curated products across the three business categories and refine by category, segment, or descriptive keywords."
          />
        </div>
      </section>
    </main>
  );
}
