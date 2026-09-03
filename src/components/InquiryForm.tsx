"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

/**
 * Inquiry form, wired to Netlify Forms: submissions are captured by
 * Netlify at deploy time (form detection must be enabled on the site)
 * and forwarded to the notification email configured in the Netlify
 * dashboard. Falls back to a mailto compose if the POST fails.
 */
export default function InquiryForm({ subject }: { subject: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          data as unknown as Record<string, string>,
        ).toString(),
      });
      if (!res.ok) throw new Error(`Form POST failed: ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`,
      );
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
      setStatus("error");
    }
  };

  const field =
    "w-full border border-ink/20 bg-paper px-4 py-3.5 text-ink placeholder:text-ink/40 focus:border-saddle focus:outline-none transition-colors";

  return (
    <form
      name="ranch-inquiry"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="ranch-inquiry" />
      <input type="hidden" name="subject" value={subject} />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>
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
        disabled={status === "sending"}
        className="w-full cursor-pointer bg-saddle px-8 py-4 font-display text-sm tracking-[0.25em] text-cream uppercase transition-colors hover:bg-bark disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Inquiry"}
      </button>
      {status === "sent" && (
        <p className="text-center text-sm text-saddle">
          Inquiry received — we&apos;ll get back to you shortly. Prefer the
          phone? Call{" "}
          <a href={site.phoneHref} className="underline underline-offset-2">
            {site.phone}
          </a>
          .
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-sm text-saddle">
          We opened your email app as a backup — or call us directly at{" "}
          <a href={site.phoneHref} className="underline underline-offset-2">
            {site.phone}
          </a>
          .
        </p>
      )}
    </form>
  );
}
