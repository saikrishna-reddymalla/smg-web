import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium tracking-[0.08em] transition duration-300";

const variants = {
  primary:
    "border border-[#d6c0a7] bg-[#efe2d3] text-stone-900 shadow-[0_20px_40px_rgba(167,137,106,0.16)] hover:-translate-y-0.5 hover:border-[#c9ae90] hover:bg-[#e8d7c4] focus-visible:bg-[#e8d7c4]",
  secondary:
    "border border-stone-300 bg-white/80 text-stone-900 hover:-translate-y-0.5 hover:border-stone-500 hover:bg-white",
  ghost:
    "text-stone-700 hover:-translate-y-0.5 hover:text-stone-950",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  rel?: AnchorHTMLAttributes<HTMLAnchorElement>["rel"];
  variant?: keyof typeof variants;
}

export function Button({
  children,
  className,
  href,
  target,
  rel,
  variant = "primary",
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        className={cn(baseStyles, variants[variant], className)}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
