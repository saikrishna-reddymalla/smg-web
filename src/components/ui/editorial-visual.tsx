import { cn } from "@/lib/utils";
import type { VisualVariant } from "@/types/content";

const visualThemes: Record<
  VisualVariant,
  {
    shell: string;
    orb: string;
    arch: string;
    badge: string;
  }
> = {
  heritage: {
    shell: "from-[#fbf7f1] via-[#efe3d2] to-[#d7b58f]",
    orb: "bg-[#6b3d34]/15",
    arch: "border-[#7f5b3d]/20",
    badge: "Heritage",
  },
  textile: {
    shell: "from-[#f9f4ec] via-[#ead9c3] to-[#bea07b]",
    orb: "bg-[#8a5a4d]/20",
    arch: "border-[#8f6d4d]/25",
    badge: "Textiles",
  },
  bridal: {
    shell: "from-[#fbf6ef] via-[#ead4ca] to-[#c5927b]",
    orb: "bg-[#7d3140]/18",
    arch: "border-[#7d3140]/20",
    badge: "Occasionwear",
  },
  footwear: {
    shell: "from-[#faf6f0] via-[#e3d3c4] to-[#bf8d68]",
    orb: "bg-[#5d3e2b]/20",
    arch: "border-[#5d3e2b]/20",
    badge: "Footwear",
  },
  perfume: {
    shell: "from-[#fffaf3] via-[#f0dfc4] to-[#d3a66d]",
    orb: "bg-[#7a5230]/18",
    arch: "border-[#9a713e]/20",
    badge: "Perfume",
  },
  beauty: {
    shell: "from-[#fffaf5] via-[#f1e3d8] to-[#d9b7ab]",
    orb: "bg-[#92586d]/16",
    arch: "border-[#a5756e]/20",
    badge: "Beauty",
  },
  gallery: {
    shell: "from-[#fffdf8] via-[#ece2d4] to-[#cdb294]",
    orb: "bg-[#6d4936]/15",
    arch: "border-[#6d4936]/20",
    badge: "Gallery",
  },
};

interface EditorialVisualProps {
  title: string;
  subtitle?: string;
  variant: VisualVariant;
  className?: string;
}

export function EditorialVisual({
  title,
  subtitle,
  variant,
  className,
}: EditorialVisualProps) {
  const theme = visualThemes[variant];

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br p-6 shadow-[0_30px_80px_rgba(62,42,24,0.12)]",
        theme.shell,
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.72),transparent_52%)]" />
      <div
        className={cn(
          "absolute -right-8 top-8 h-40 w-40 rounded-full blur-2xl transition duration-500 group-hover:scale-110",
          theme.orb,
        )}
      />
      <div
        className={cn(
          "absolute bottom-[-20%] left-1/2 h-[80%] w-[58%] -translate-x-1/2 rounded-t-[999px] border-[18px]",
          theme.arch,
        )}
      />
      <div className="absolute inset-x-6 top-6 flex items-center justify-between">
        <span className="rounded-full border border-white/70 bg-white/70 px-3 py-1 text-[0.62rem] font-medium uppercase tracking-[0.28em] text-stone-700">
          {theme.badge}
        </span>
        <span className="h-px w-16 bg-white/80" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.28)_40%,transparent_100%)] opacity-0 transition duration-500 group-hover:translate-x-6 group-hover:opacity-100" />
      <div className="relative flex h-full min-h-[280px] flex-col justify-end">
        <div className="rounded-[1.5rem] border border-white/70 bg-white/55 p-5 backdrop-blur">
          <h3 className="font-serif text-2xl text-stone-950">{title}</h3>
          {subtitle ? (
            <p className="mt-3 max-w-sm text-sm leading-7 text-stone-700">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
