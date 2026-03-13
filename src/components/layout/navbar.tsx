"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { primaryNavigation } from "@/lib/site-content";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import { LogoMark } from "../ui/logo-mark";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-[rgba(251,247,241,0.84)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <LogoMark />
        <nav className="hidden items-center gap-8 lg:flex">
          {primaryNavigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === item.href
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm tracking-[0.08em] text-stone-600 transition hover:text-stone-950",
                  active && "text-stone-950",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:block">
          <Button href="/contact" variant="secondary">
            Make an Enquiry
          </Button>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex rounded-full border border-stone-300 bg-white/80 p-3 text-stone-900 lg:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28 }}
            className="border-t border-white/60 bg-[rgba(251,247,241,0.95)] px-5 py-5 lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-3">
              {primaryNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-transparent bg-white/70 px-4 py-3 text-sm tracking-[0.08em] text-stone-700"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button href="/contact" variant="primary" className="mt-2">
                Make an Enquiry
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
