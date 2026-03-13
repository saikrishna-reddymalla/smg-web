import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { EditorialVisual } from "@/components/ui/editorial-visual";
import type { Category } from "@/types/content";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={category.href}
      className="group block rounded-[2rem] border border-white/70 bg-white/70 p-4 shadow-[0_24px_60px_rgba(62,42,24,0.09)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(62,42,24,0.14)]"
    >
      <EditorialVisual
        title={category.shortName}
        subtitle={category.heroDescription}
        variant={category.visual}
        className="min-h-[320px]"
      />
      <div className="flex items-center justify-between px-2 pb-2 pt-5">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#8a5a4d]">
            {category.eyebrow}
          </p>
          <h3 className="mt-2 font-serif text-2xl text-stone-950">
            {category.name}
          </h3>
        </div>
        <span className="rounded-full border border-stone-300 bg-white p-3 text-stone-900 transition group-hover:border-stone-900 group-hover:bg-stone-950 group-hover:text-stone-50">
          <ArrowUpRight size={18} />
        </span>
      </div>
    </Link>
  );
}
