"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

import { EditorialVisual } from "@/components/ui/editorial-visual";
import type { GalleryItem } from "@/types/content";

interface GalleryGridProps {
  items: GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <motion.button
            type="button"
            key={item.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 text-left shadow-[0_24px_60px_rgba(62,42,24,0.09)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(62,42,24,0.14)]"
            onClick={() => setActiveItem(item)}
          >
            <EditorialVisual
              title={item.title}
              subtitle={item.caption}
              variant={item.visual}
              className="min-h-[300px] rounded-none"
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeItem ? (
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
              className="w-full max-w-5xl rounded-[2rem] border border-white/70 bg-[#fbf7f1] p-5 shadow-[0_40px_90px_rgba(25,18,12,0.24)]"
            >
              <div className="flex justify-end">
                <button
                  type="button"
                  className="rounded-full border border-stone-300 bg-white p-3 text-stone-700"
                  onClick={() => setActiveItem(null)}
                  aria-label="Close gallery item"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
                <EditorialVisual
                  title={activeItem.title}
                  subtitle={activeItem.alt}
                  variant={activeItem.visual}
                  className="min-h-[420px]"
                />
                <div className="rounded-[2rem] border border-white/70 bg-white/70 p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#8a5a4d]">
                    Visual story
                  </p>
                  <h3 className="mt-4 font-serif text-4xl text-stone-950">
                    {activeItem.title}
                  </h3>
                  <p className="mt-5 text-base leading-8 text-stone-600">
                    {activeItem.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
