import type { Metadata } from "next";

import { SectionHeading } from "@/components/ui/section-heading";
import { privacySections } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the SMG Fashion privacy policy for wholesale enquiries and website usage.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="px-5 pb-20 pt-10 sm:px-8 lg:px-10 lg:pt-16">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Privacy Policy"
          title="Responsible handling of wholesale enquiry information."
          description="This policy outlines, in broad terms, how SMG Fashion may receive and use business contact information submitted through the website."
        />
        <div className="mt-10 space-y-5">
          {privacySections.map((section) => (
            <section
              key={section.title}
              className="rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-[0_20px_60px_rgba(62,42,24,0.08)]"
            >
              <h2 className="font-serif text-3xl text-stone-950">
                {section.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-stone-600">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
