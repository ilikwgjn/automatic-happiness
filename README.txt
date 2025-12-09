BloxEra — Static demo site (ready to upload to Vercel)

What's included:
- index.html
- style.css
- script.js
- assets/logo.jpg

How to deploy to Vercel (quick):
1. Go to https://vercel.com
2. Click "New Project" -> "Import Project" -> "Upload" (or "Continue Without Git" -> "Upload Folder")
3. Upload the folder 'bloxera_site' (or upload the zip)
4. Deploy

Notes:
- This is a static demo (no real checkout). To connect payments & delivery:
  - Replace the buy button behavior to call your backend endpoint (/api/checkout_sessions)
  - Implement Stripe Checkout and a webhook endpoint to deliver files (see the full Next.js example provided previously)
- You can customize products directly in index.html or implement dynamic product loading.

Enjoy your demo site!
