"use client";

import { useState, FormEvent } from "react";

export function LoginForm({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(false);
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setBusy(false);
    if (res.ok) onSuccess();
    else setError(true);
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-24 max-w-sm rounded-2xl border border-line bg-white p-8">
      <h1 className="text-xl font-extrabold text-brand-darker">Clear Fix · Admin</h1>
      <p className="mt-1 text-sm text-muted">Bitte anmelden, um die Rechtstexte zu bearbeiten.</p>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Passwort"
        className="mt-5 w-full rounded-xl border border-line px-4 py-3 text-sm outline-none focus:border-brand"
        autoFocus
      />
      {error && <p className="mt-2 text-sm text-red-600">Falsches Passwort.</p>}
      <button type="submit" disabled={busy} className="btn-primary mt-4 w-full disabled:opacity-60">
        {busy ? "…" : "Anmelden"}
      </button>
    </form>
  );
}
