# EYN stack data model and reuse
Updated 2026-10-12. This public GitHub repository currently contains coordination documents and the retained static site. The EYN runtime has not been imported here.

## Source provenance
- Original Sites source version 94: `9bc1f4838049c203dc20c66828e0227ae0e380fc`.
- Latest recovered and extended LOCAL EYN checkpoint: `5179aa9b3a9ecaa3d98edf91a6b79df4624cbe61`, saved with the local OneTapGo source archive.
- The local checkpoint is a separate reconstructed Git history, not a GitHub/Sites commit that collaborators can fetch from this repository. Ask the user to provide the reviewed source in the agreed private destination before importing.
- Version 94 was saved without deployment when inspected. No new production publication, migration, runtime configuration change, SMS send or billing occurred during the local continuation.
- The original 46-test checkpoint remains historical evidence. The current local continuation has 69 passing cases with the limits below.

## Stack
React 19.2.6; TypeScript 5.9.3; Next-compatible App Router with Next 16.2.6 dependency, executed through Vinext 1.0.0-beta.5 and Vite 8; Tailwind 4.2; Cloudflare Workers; D1 SQLite with Drizzle 0.45.2; R2 assets. QR generation uses qrcode, camera fallback uses jsQR, signing uses node-forge and ZIP/PNG support uses fflate. Preserve this architecture for reuse; deployment configuration for the new project is a separate decision.

## Data model
| Area | Existing tables and invariants |
|---|---|
| Business identity | shops, dynamic_cards, page_access, loyalty_programs; legacy loyalty tables coexist with club extensions |
| Configuration | club_settings: threshold, reward, policies, brand, enabled/subscription and proposed pricing metadata; no automatic billing |
| Customer | club_people: normalized phone, verified state, password hash/salt; club_members: separate per-store membership and consent |
| Reward rules | club_members includes reward_threshold and reward_snapshot: preserve current-cycle conditions until full redemption; settings changes must not reinterpret earned rewards |
| Staff/auth | club_employees, club_sessions: individual roles, revocation and tenant-bound sessions |
| Join/recovery | club_challenges, club_limits: phone OTP, password recovery and rate limits |
| Scan | club_qr, club_barcodes, club_scans: temporary QR, persistent membership identity and employee/member/store-bound one-use confirmations |
| Points | club_ledger: purchase/redemption/reversal deltas, derived balance, unique receipts/idempotency/reversals and composite tenant foreign keys |
| Audit | club_audit: actor, operation, reason and time |
| Offers | club_campaigns, club_deliveries, club_unsubscribe: separate opt-in, opt-out recheck before send and signed Twilio delivery callbacks |
| Wallet | club_wallet_jobs: revisioned update outbox, lease/backoff and honest provider states; club_apple_passes/device registrations: card identity, hashed authentication/device IDs |
| Coupons | club_coupons: member/store scope, expiry and single-use redemption |
| Starter pages | club_storefronts: configurable contact/review/map/links/hours; central creation starts clubs disabled |

D1 isolation uses server-scoped reads and composite write constraints. It is not PostgreSQL RLS or protection against an administrator with raw SQL access.

## Reusable implementation
Reuse lib/club-core.ts, club-server.ts, club-copy.ts, club-sms.ts, club-sms-status.ts, club-wallet.ts, club-apple.ts, apple-passkit.ts, club-artwork.ts, club-stores.ts and club-preview.ts; club/customer/staff/admin routes; schema/migrations; and acceptance suites.

Reusable behavior: verified joining/recovery, multilingual mobile card, permanent barcode that cannot authorize account access, guarded camera lifecycle with jsQR fallback, atomic purchase/redemption, idempotency, reasoned reversal, preserved reward rules, employee revocation, marketing consent/opt-out, coupons, signed SMS callbacks and Wallet outbox. Extend with explicit business/branch ownership rather than silently assuming the current store identifier already models both.

## Wallet implementation and remaining validation
- Google code creates RS256 Save-to-Wallet URLs and OAuth-authenticated LoyaltyObject create/PATCH, including QR, point balance and eyeglasses progress artwork. Real issuer/class and device save/update are untested.
- Apple code now implements signed .pkpass issuance with manifest/PKCS#7 validation, card authentication, device registration/unregistration and changed-pass/download service. An HTTP/2 certificate-based APNs relay is written but not hosted or tested with Apple.
- Apple signature/ZIP tests use synthetic certificates. A signed test package is not an Apple-approved or device-installable production pass.
- Point changes attempt synchronization and retain failed jobs for retry. No independent periodic retry scheduler has been provisioned.
- Preview requires a separate CLUB_TEST_DB. Local OTP accepts synthetic test numbers only on loopback; simulated accounts stay unverified and cannot become live memberships.
- Saved links, provider updates and accepted pushes do not prove handset installation/update.

## Verification and release gate
The local continuation recorded 69 passing cases: 47 actual-route/SQLite club cases, 17 provider-protocol/local-isolation/provisioning cases, and 5 signing/artwork/QR decoder cases. Auth and provider transports are mocked; these counts were checked against the local logs for this documentation reconciliation, not rerun on the GitHub documentation branch.

The local Worker build passed. Whole-project TypeScript has 49 existing errors outside the new club/Wallet/configuration files; do not call the whole repository type-clean. Local browser checks covered simulated registration, manual barcode entry, 0→1→3, one redemption, and AR/HE/EN directions. Physical camera/two-phone QA, real phone ownership verification, actual Wallet installation/update and APNs delivery remain unfinished.

Real reward, qualifying purchase rules, terms/privacy, staff identities, secure provider accounts and an approved release are still required. EYN is not production-complete. The live EYN starter is /eyn-optic-tinto-demo; /eyn-optic remains disabled. Its stand target and other stores must be preserved.

## Import boundary
Import reviewed core through a later PR after EYN acceptance and destination/access agreement. Do not transfer the whole legacy app, production hosting project ID, databases, customer records, credentials, tenant branding or secret-bearing historical seed migrations. The local recovered source excludes three historical seed files and replaces the legacy counter secret with an environment lookup; preserve the original production migration history and resolve that dependency before any rollout. Use new isolated runtime bindings; do not reuse EYN production configuration in this project.
