"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useDeferredValue, useState } from "react";

import { EditorialVisual } from "@/components/ui/editorial-visual";
import { Button } from "@/components/ui/button";
import { categoryList } from "@/lib/site-content";
import type { Product } from "@/types/content";

interface ProductExplorerProps {
  products: Product[];
  title: string;
  description: string;
  showCategoryFilter?: boolean;
}

export function ProductExplorer({
  products,
  title,
  description,
  showCategoryFilter = true,
}: ProductExplorerProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeAudience, setActiveAudience] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const deferredQuery = useDeferredValue(query);

  const audienceOptions = Array.from(
    new Set(products.map((product) => product.audience)),
  );

  const visibleProducts = products.filter((product) => {
    const searchTarget = [
      product.name,
      product.description,
      product.segment,
      product.audience,
      ...product.tags,
    ]
      .join(" ")
      .toLowerCase();

    const matchesQuery = searchTarget.includes(deferredQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;
    const matchesAudience =
      activeAudience === "All" || product.audience === activeAudience;

    return matchesQuery && matchesCategory && matchesAudience;
  });

  return (
    <div>
      <div className="flex flex-col gap-6 rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-[0_20px_60px_rgba(62,42,24,0.08)] lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.28em] text-[#8a5a4d]">
            Product discovery
          </p>
          <h3 className="mt-4 font-serif text-3xl text-stone-950">{title}</h3>
          <p className="mt-4 text-sm leading-7 text-stone-600">{description}</p>
        </div>
        <label className="relative w-full max-w-sm">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
          />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="w-full rounded-full border border-stone-200 bg-[#faf7f2] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-stone-500 focus:bg-white"
            placeholder="Search products, segments, or moods"
          />
        </label>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        {showCategoryFilter ? (
          <>
            <FilterChip
              active={activeCategory === "All"}
              onClick={() => setActiveCategory("All")}
            >
              All categories
            </FilterChip>
            {categoryList.map((category) => (
              <FilterChip
                key={category.slug}
                active={activeCategory === category.slug}
                onClick={() => setActiveCategory(category.slug)}
              >
                {category.shortName}
              </FilterChip>
            ))}
          </>
        ) : null}
      </div>
      <div className="mt-3 flex flex-wrap gap-3">
        <FilterChip
          active={activeAudience === "All"}
          onClick={() => setActiveAudience("All")}
        >
          All segments
        </FilterChip>
        {audienceOptions.map((audience) => (
          <FilterChip
            key={audience}
            active={activeAudience === audience}
            onClick={() => setActiveAudience(audience)}
          >
            {audience}
          </FilterChip>
        ))}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleProducts.map((product, index) => (
          <motion.button
            type="button"
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
            onClick={() => setSelectedProduct(product)}
            className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 text-left shadow-[0_24px_60px_rgba(62,42,24,0.09)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(62,42,24,0.14)]"
          >
            <EditorialVisual
              title={product.name}
              subtitle={product.segment}
              variant={product.visual}
              className="min-h-[260px] rounded-none"
            />
            <div className="p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-[#f1e1d4] px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-[#8a5a4d]">
                  {product.badge}
                </span>
                <span className="text-xs uppercase tracking-[0.22em] text-stone-500">
                  {product.audience}
                </span>
              </div>
              <h4 className="mt-4 font-serif text-2xl text-stone-950">
                {product.name}
              </h4>
              <p className="mt-3 text-sm leading-7 text-stone-600">
                {product.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-stone-200 px-3 py-1 text-[0.68rem] uppercase tracking-[0.2em] text-stone-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {visibleProducts.length === 0 ? (
        <div className="mt-8 rounded-[2rem] border border-dashed border-stone-300 bg-white/70 p-8 text-center text-sm leading-7 text-stone-600">
          No products matched that search. Refine the filters or explore another
          category.
        </div>
      ) : null}

      <AnimatePresence>
        {selectedProduct ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-stone-950/45 px-5 py-8 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.28 }}
              className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-[2rem] border border-white/70 bg-[#fbf7f1] p-5 shadow-[0_40px_90px_rgba(25,18,12,0.24)]"
            >
              <div className="flex justify-end">
                <button
                  type="button"
                  className="rounded-full border border-stone-300 bg-white p-3 text-stone-700"
                  onClick={() => setSelectedProduct(null)}
                  aria-label="Close quick view"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                <EditorialVisual
                  title={selectedProduct.name}
                  subtitle={selectedProduct.alt}
                  variant={selectedProduct.visual}
                  className="min-h-[360px]"
                />
                <div className="rounded-[2rem] border border-white/70 bg-white/70 p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#8a5a4d]">
                    Quick view
                  </p>
                  <h4 className="mt-4 font-serif text-4xl text-stone-950">
                    {selectedProduct.name}
                  </h4>
                  <p className="mt-5 text-base leading-8 text-stone-600">
                    {selectedProduct.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="rounded-full bg-[#f1e1d4] px-3 py-1 text-[0.7rem] uppercase tracking-[0.2em] text-[#8a5a4d]">
                      {selectedProduct.badge}
                    </span>
                    <span className="rounded-full border border-stone-200 px-3 py-1 text-[0.7rem] uppercase tracking-[0.2em] text-stone-500">
                      {selectedProduct.segment}
                    </span>
                    <span className="rounded-full border border-stone-200 px-3 py-1 text-[0.7rem] uppercase tracking-[0.2em] text-stone-500">
                      {selectedProduct.audience}
                    </span>
                  </div>
                  <div className="mt-8">
                    <p className="text-xs uppercase tracking-[0.22em] text-stone-500">
                      Materials and attributes
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {selectedProduct.materials.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-stone-200 bg-[#faf7f2] px-3 py-2 text-xs uppercase tracking-[0.18em] text-stone-600"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button href="/contact">Enquire About This Range</Button>
                    <Button
                      variant="secondary"
                      onClick={() => setSelectedProduct(null)}
                    >
                      Continue Browsing
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function FilterChip({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "rounded-full bg-stone-950 px-4 py-2 text-[0.72rem] uppercase tracking-[0.22em] text-stone-50"
          : "rounded-full border border-stone-300 bg-white/75 px-4 py-2 text-[0.72rem] uppercase tracking-[0.22em] text-stone-600 transition hover:border-stone-500 hover:text-stone-900"
      }
    >
      {children}
    </button>
  );
}
