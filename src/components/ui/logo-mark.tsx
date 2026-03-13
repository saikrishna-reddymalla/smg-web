import Link from "next/link";

import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
}

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-end gap-2 text-[0.72rem] uppercase tracking-[0.32em] text-stone-600 transition hover:text-stone-900",
        className,
      )}
    >
      <span className="font-serif text-3xl font-semibold leading-none tracking-[0.08em] text-stone-950">
        SMG
      </span>
      <span className="pb-1">Fashion</span>
    </Link>
  );
}
