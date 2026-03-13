import Link from "next/link";

import {
  categoryList,
  contactConfig,
  legalNavigation,
  primaryNavigation,
  siteConfig,
} from "@/lib/site-content";

import { LogoMark } from "../ui/logo-mark";

export function Footer() {
  return (
    <footer className="border-t border-white/70 bg-[#f5efe6]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-10">
        <div>
          <LogoMark />
          <p className="mt-5 max-w-md text-sm leading-7 text-stone-600">
            {siteConfig.tagline} A premium B2B wholesale house for textiles,
            clothing, footwear, perfume, and cosmetics serving retailers across
            the United Kingdom.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.28em] text-stone-500">
            {contactConfig.serviceArea}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-medium uppercase tracking-[0.22em] text-stone-700">
            Navigation
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-stone-600">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-stone-950">
                  {item.label}
                </Link>
              </li>
            ))}
            {categoryList.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-stone-950">
                  {item.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-medium uppercase tracking-[0.22em] text-stone-700">
            Legal
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-stone-600">
            {legalNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-stone-950">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/70 px-5 py-5 text-center text-xs tracking-[0.22em] text-stone-500 uppercase sm:px-8 lg:px-10">
        © 2026 {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
