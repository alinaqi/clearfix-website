# Clear Fix — Website

Bilingual (DE/EN) landing page for **Clear Fix** — decluttering, moving and
disposal in Berlin. Built with **Next.js (App Router)** + **Tailwind CSS**.
Lead form submissions are emailed via **Resend** — no database required.

## Features

- Responsive one-page site: hero, services, 3-step process, before/after,
  reviews, quote form, contact, footer
- Language toggle (German default / English)
- Lead-capture form → email notification (Resend), with server-side validation
- Gemini-generated imagery (Mercedes Transporter hero + before/after shots)

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in your Resend key + destination email
npm run dev                  # http://localhost:3000
```

## Environment variables

| Variable          | Required | Description                                            |
| ----------------- | -------- | ------------------------------------------------------ |
| `RESEND_API_KEY`  | yes      | API key from https://resend.com/api-keys               |
| `LEAD_TO_EMAIL`   | yes      | Inbox that receives lead notifications                 |
| `LEAD_FROM_EMAIL` | no       | Verified sender; defaults to Resend's sandbox sender   |

## Deploy on Vercel

1. Import this repo in Vercel.
2. Add the three env vars above under **Settings → Environment Variables**.
3. Deploy. No database or extra config needed.

The lead form calls `POST /api/lead`, which validates input and sends the
notification email. If email isn't configured yet, the endpoint returns
`500 not_configured` — set the env vars to enable delivery.

## Editing content

Marketing copy lives in `lib/content.de.ts` / `lib/content.en.ts`.
Images are in `public/images`. The logo is `public/logo.svg`.

### Owner editor for legal pages (`/admin`)

The Impressum and Datenschutz texts are editable through a password-protected
editor at **`/admin`** — no code changes needed. Edits are saved to **Vercel
Blob** and go live immediately; if no Blob store or saved version exists, the
built-in defaults (`lib/legal.ts`, `lib/legal.datenschutz.ts`) are shown.

Setup on Vercel:

1. **Storage → Create a Blob store** and connect it to this project
   (this auto-adds `BLOB_READ_WRITE_TOKEN`).
2. Add **`ADMIN_PASSWORD`** under Environment Variables — the login password.
3. Redeploy. Visit `/admin`, log in, edit, save.
