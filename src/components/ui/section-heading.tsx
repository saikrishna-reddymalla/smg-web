import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8a5a4d]">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-serif text-4xl leading-tight text-stone-950 sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-stone-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
