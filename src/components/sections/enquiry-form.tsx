"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useState } from "react";
import { useForm } from "react-hook-form";

import { enquirySchema, type EnquiryPayload } from "@/lib/validation";
import { categoryList } from "@/lib/site-content";

import { Button } from "../ui/button";

interface EnquiryFormProps {
  defaultCategory?: string;
  title?: string;
  intro?: string;
}

export function EnquiryForm({
  defaultCategory = "",
  title = "Share your wholesale enquiry",
  intro = "Tell us about your category focus, retail positioning, and buying requirements.",
}: EnquiryFormProps) {
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryPayload>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      businessName: "",
      email: "",
      phone: "",
      category: defaultCategory,
      message: "",
    },
  });

  const onSubmit = handleSubmit((values) => {
    setStatus({ type: "idle", message: "" });

    startTransition(async () => {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus({
          type: "error",
          message:
            result.message ??
            "The enquiry could not be submitted. Please review the form and try again.",
        });
        return;
      }

      reset({
        name: "",
        businessName: "",
        email: "",
        phone: "",
        category: defaultCategory,
        message: "",
      });

      setStatus({
        type: "success",
        message:
          result.message ??
          "Your enquiry has been recorded. Connect the API route to your CRM or email workflow when ready.",
      });
    });
  });

  return (
    <div className="rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-[0_20px_60px_rgba(62,42,24,0.08)]">
      <p className="text-xs uppercase tracking-[0.28em] text-[#8a5a4d]">
        Enquiry form
      </p>
      <h3 className="mt-4 font-serif text-3xl text-stone-950">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-stone-600">{intro}</p>
      <form className="mt-8 space-y-5" onSubmit={onSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name" error={errors.name?.message}>
            <input
              {...register("name")}
              className={inputStyles}
              placeholder="Your full name"
            />
          </Field>
          <Field label="Business name" error={errors.businessName?.message}>
            <input
              {...register("businessName")}
              className={inputStyles}
              placeholder="Retail business name"
            />
          </Field>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Email" error={errors.email?.message}>
            <input
              {...register("email")}
              className={inputStyles}
              placeholder="name@business.co.uk"
              type="email"
            />
          </Field>
          <Field label="Phone" error={errors.phone?.message}>
            <input
              {...register("phone")}
              className={inputStyles}
              placeholder="Contact number"
            />
          </Field>
        </div>
        <Field label="Category of interest" error={errors.category?.message}>
          <select {...register("category")} className={inputStyles}>
            <option value="">Select a category</option>
            {categoryList.map((category) => (
              <option key={category.slug} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Message" error={errors.message?.message}>
          <textarea
            {...register("message")}
            className={`${inputStyles} min-h-[160px] resize-none`}
            placeholder="Tell us about the category mix, target customer, or sourcing direction you are exploring."
          />
        </Field>
        {status.type !== "idle" ? (
          <p
            className={
              status.type === "success"
                ? "text-sm text-emerald-700"
                : "text-sm text-red-700"
            }
          >
            {status.message}
          </p>
        ) : null}
        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Submitting..." : "Send Enquiry"}
        </Button>
      </form>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.18em] text-stone-600">
        {label}
      </span>
      <div className="mt-3">{children}</div>
      {error ? <p className="mt-2 text-xs text-red-700">{error}</p> : null}
    </label>
  );
}

const inputStyles =
  "w-full rounded-[1.2rem] border border-stone-200 bg-[#faf7f2] px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-stone-500 focus:bg-white";
