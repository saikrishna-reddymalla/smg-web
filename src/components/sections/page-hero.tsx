import { EditorialVisual } from "@/components/ui/editorial-visual";
import type { Stat, VisualVariant } from "@/types/content";

import { Button } from "../ui/button";
import { MotionReveal } from "../ui/motion-reveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  visual: VisualVariant;
  stats?: Stat[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function PageHero({
  eyebrow,
  title,
  description,
  visual,
  stats,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="px-5 pb-16 pt-10 sm:px-8 lg:px-10 lg:pb-20 lg:pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <MotionReveal>
          <p className="text-xs uppercase tracking-[0.32em] text-[#8a5a4d]">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.02] text-stone-950 sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            {description}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryCta ? (
                <Button href={primaryCta.href}>{primaryCta.label}</Button>
              ) : null}
              {secondaryCta ? (
                <Button href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          )}
          {stats ? (
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.5rem] border border-white/70 bg-white/70 p-5 shadow-[0_18px_40px_rgba(62,42,24,0.08)]"
                >
                  <p className="text-2xl font-semibold text-stone-950">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-stone-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </MotionReveal>
        <MotionReveal delay={0.1}>
          <EditorialVisual
            title={title}
            subtitle={description}
            variant={visual}
            className="min-h-[420px]"
          />
        </MotionReveal>
      </div>
    </section>
  );
}
