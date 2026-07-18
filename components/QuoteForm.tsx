"use client";

import { useState, FormEvent } from "react";
import { useLanguage } from "./LanguageProvider";
import { Field, inputClass } from "./FormField";

type Status = "idle" | "sending" | "success" | "error";

async function postLead(form: HTMLFormElement, locale: string) {
  const data = Object.fromEntries(new FormData(form).entries());
  const res = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, locale }),
  });
  if (!res.ok) throw new Error("request failed");
}

export function QuoteForm() {
  const { t, locale } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      await postLead(form, locale);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="quote" className="bg-brand-soft/50 py-20">
      <div className="container-x max-w-2xl">
        <p className="kicker text-center">{t.form.kicker}</p>
        <h2 className="section-title text-center">{t.form.title}</h2>
        <p className="mx-auto mt-3 max-w-md text-center text-sm text-muted">{t.form.sub}</p>

        {status === "success" ? (
          <p className="mt-8 rounded-2xl border border-brand/30 bg-white p-6 text-center font-medium text-brand">
            {t.form.success}
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 grid gap-4 rounded-2xl border border-line bg-white p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={t.form.name}>
                <input name="name" required className={inputClass()} autoComplete="name" />
              </Field>
              <Field label={t.form.phone}>
                <input name="phone" type="tel" className={inputClass()} autoComplete="tel" />
              </Field>
            </div>
            <Field label={t.form.email}>
              <input name="email" type="email" required className={inputClass()} autoComplete="email" />
            </Field>
            <Field label={t.form.service}>
              <select name="service" required defaultValue="" className={inputClass()}>
                <option value="" disabled>
                  —
                </option>
                {t.form.serviceOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </Field>
            <Field label={t.form.message}>
              <textarea name="message" rows={4} className={inputClass()} />
            </Field>
            <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60">
              {status === "sending" ? t.form.sending : t.form.submit}
            </button>
            {status === "error" && <p className="text-center text-sm text-red-600">{t.form.error}</p>}
            <p className="text-center text-xs text-muted">
              {t.form.consent}{" "}
              <a href="/datenschutz" className="underline hover:text-brand">
                {t.footer.privacy}
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
