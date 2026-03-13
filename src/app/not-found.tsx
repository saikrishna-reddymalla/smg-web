import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-5 py-20 sm:px-8 lg:px-10">
      <div className="max-w-xl rounded-[2rem] border border-white/70 bg-white/80 p-10 text-center shadow-[0_20px_60px_rgba(62,42,24,0.08)]">
        <p className="text-xs uppercase tracking-[0.28em] text-[#8a5a4d]">
          Not found
        </p>
        <h1 className="mt-4 font-serif text-5xl text-stone-950">
          This page is not part of the SMG Fashion collection.
        </h1>
        <p className="mt-5 text-base leading-8 text-stone-600">
          The page you requested could not be found. Return to the homepage and
          continue exploring the wholesale categories.
        </p>
        <div className="mt-8">
          <Button href="/">Back to Home</Button>
        </div>
      </div>
    </main>
  );
}
