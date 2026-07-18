import Link from "next/link";
import { Logo } from "./Logo";
import type { LegalDoc } from "@/lib/legal";

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <div className="min-h-screen bg-cream">
      <header className="border-b border-line bg-cream/90">
        <div className="container-x flex h-16 items-center justify-between">
          <Link href="/" aria-label="Clear Fix">
            <Logo />
          </Link>
          <Link href="/" className="text-sm font-semibold text-brand hover:underline">
            ← Zurück zur Startseite
          </Link>
        </div>
      </header>

      <main className="container-x max-w-3xl py-16">
        <h1 className="text-3xl font-extrabold tracking-tight text-brand-darker sm:text-4xl">{doc.title}</h1>
        <p className="mt-2 text-sm text-muted">{doc.updated}</p>
        {doc.intro && <p className="mt-6 leading-relaxed text-brand-darker/90">{doc.intro}</p>}

        <div className="mt-10 space-y-9">
          {doc.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-lg font-bold text-brand">{s.heading}</h2>
              <div className="mt-3 space-y-2">
                {s.body.map((line, i) => (
                  <p key={i} className="leading-relaxed text-brand-darker/90">
                    {line}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-line">
        <div className="container-x flex flex-col gap-3 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Clear Fix · Berlin</p>
          <div className="flex gap-5">
            <Link href="/impressum" className="hover:text-brand">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-brand">
              Datenschutz
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
