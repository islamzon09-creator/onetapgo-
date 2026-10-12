# EYN audit and reuse summary
Audited source: 9bc1f4838049c203dc20c66828e0227ae0e380fc, 2026-10-12. Existing EYN project remains separate from this GitHub static repository.
## Stack
React 19.2.6, TypeScript 5.9.3, Next-compatible App Router (Next 16.2.6 dependency) executed through Vinext 1.0.0-beta.5/Vite 8, Tailwind 4.2, Cloudflare Workers, D1 SQLite via Drizzle 0.45.2, R2 asset storage. Not Supabase or Vercel/Firebase.
## Data model
Existing shops, dynamic_cards, page_access and loyalty_programs provide store identity/access; legacy loyalty_* tables coexist with club_* extension.
club_settings: store-scoped threshold/reward/brand/policies/enabled/subscription metadata.
club_people: normalized phone identity, verified state and password credentials.
club_members: per-store membership/consent/activity.
club_employees + club_sessions: individual role-based staff and revocable sessions.
club_challenges + club_limits: OTP/reset/rate controls.
club_qr + club_barcodes + club_scans: expiring lookup, persistent identity token and one-use staff confirmation.
club_ledger: purchase/redeem/reversal deltas; derived balance; unique receipt/idempotency/reversal; composite tenant FKs.
club_audit: attributed operations.
club_campaigns/deliveries/unsubscribe: opt-in offer drafts, explicitly confirmed processing, withdrawal.
club_wallet_jobs: revisioned outbox with lease/backoff and truthful provider states.
club_coupons: store-defined single-use coupons.
D1 has application-scoped reads and database write constraints; no PostgreSQL RLS and no raw-DB enforced immutability claim.
## Reusable files and behavior
lib/club-core.ts, club-server.ts, club-copy.ts, club-sms.ts, club-wallet.ts, club-preview.ts; app/api/club/[store]/[action]/route.ts; app/club/[store]/; club admin registry; db/schema.ts and incremental drizzle migrations; tests/club.integration.mjs.
Reuse tenant isolation, verified joining, phone/password returning login/reset, translations AR/HE/EN, staff scan/receipt confirmation, atomic stamp/redeem, reasoned reversal, consent/optout, reports, employee revocation, coupon flow and Wallet outbox.
Known active EYN starter entry is /eyn-optic-tinto-demo, linking /club/eyn-optic. Preserve its links and other shops. Do not activate inactive destinations as part of bootstrap.
## Completion limits
46 real-route/native-SQLite integration cases rerun and passed 2026-10-12; auth/SMS/Wallet transport mocked. Earlier full Worker build passed according to source checkpoint, not rerun for this docs-only PR. Existing whole-project TypeScript errors are recorded outside new club files.
Google: signed save URL and provider patch/create adapter implemented; real credentials/approved class and handset save/update not tested. Apple: draft only; signing, pkpass issuance, device web service and APNs not implemented. Preview refuses real provider calls and requires separate CLUB_TEST_DB.
Current EYN reward remains owner-defined after ten points; actual reward/policies/provider provisioning/device QA and release approval are gates. Never label EYN complete merely because tests pass.
## Reuse approach
Extend the architecture, not the legacy static code. Import sanitized source under platform/ via a later reviewed PR, after repository privacy choice and EYN completion. Keep marketing/demo/links page ownership with Claude and backend/staff/dashboard with Codex. Introduce branch config, wheel stock/allocations, gift balance/payment ledgers and AI follow-up incrementally; do not force new semantics into purchase stamps.
