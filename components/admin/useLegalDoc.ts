"use client";

import { useState, useEffect, useCallback } from "react";
import type { LegalDoc } from "@/lib/legal";

type Save = "idle" | "saving" | "saved" | "error";

export function useLegalDoc(slug: string) {
  const [doc, setDoc] = useState<LegalDoc | null>(null);
  const [save, setSave] = useState<Save>("idle");

  useEffect(() => {
    setDoc(null);
    fetch(`/api/admin/legal?slug=${slug}`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((j) => setDoc(j.doc))
      .catch(() => setDoc(null));
  }, [slug]);

  const persist = useCallback(async () => {
    if (!doc) return;
    setSave("saving");
    const res = await fetch(`/api/admin/legal?slug=${slug}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ doc }),
    });
    setSave(res.ok ? "saved" : "error");
  }, [doc, slug]);

  return { doc, setDoc, save, persist };
}
