"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

/**
 * Inquiry form. Currently composes an email to the team —
 * swap `handleSubmit` for a CRM/API endpoint when the back office
 * infrastructure comes online.
 */
export default function InquiryForm({ subject }: { subject: string }) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`,
    );
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSent(true);
  };

  const field =
    "w-full border border-ink/20 bg-paper px-4 py-3.5 text-ink placeholder:text-ink/40 focus:border-saddle focus:outline-none transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input required name="name" placeholder="Full name" className={field} autoComplete="name" />
        <input name="phone" placeholder="Phone" className={field} autoComplete="tel" />
      </div>
      <input
        required
        type="email"
        name="email"
        placeholder="Email address"
        className={field}
        autoComplete="email"
      />
      <textarea
        required
        name="message"
        placeholder="Tell us about the property you're looking for, or ask us anything…"
        rows={4}
        className={field}
      />
      <button
        type="submit"
        className="w-full cursor-pointer bg-saddle px-8 py-4 font-display text-sm tracking-[0.25em] text-cream uppercase transition-colors hover:bg-bark"
      >
        Send Inquiry
      </button>
      {sent && (
        <p className="text-center text-sm text-saddle">
          Your email client should have opened — we look forward to hearing
          from you. Prefer the phone? Call{" "}
          <a href={site.phoneHref} className="underline underline-offset-2">
            {site.phone}
          </a>
          .
        </p>
      )}
    </form>
  );
}
