# Agent handoff — newest first
## 2026-10-12 — Codex — verified PR and current EYN checkpoint
Done: verified existing repository islamzon09-creator/onetapgo- and open PR #1 on codex/retention-coordination; attached PR to the current task. Updated shared rules and EYN stack/data-model/reuse summary with the latest local checkpoint and accurate validation boundaries. No duplicate repository or PR was created.

Source: original Sites v94 commit 9bc1f4838049c203dc20c66828e0227ae0e380fc; later local extension checkpoint 5179aa9b3a9ecaa3d98edf91a6b79df4624cbe61. The second hash belongs to recovered local history, is NOT fetchable from this GitHub repo, and has not been imported or deployed. See docs/eyn-summary.md.

Validation: inspected saved local logs showing 47 club + 17 provider-protocol/isolation/provisioning + 5 signing/artwork/decoder cases (69 total) and a successful Worker build. These tests ran in the EYN local continuation, not on this documentation-only branch. The earlier 46-case result remains valid for the older checkpoint. No real SMS, Apple/Google handset save/update, APNs or physical camera/two-phone test has passed. Local browser checks used synthetic registration and manual barcode entry.

Correction: Apple .pkpass signing, registration/update endpoints and an APNs relay implementation now exist locally and use synthetic-certificate tests. Hosting the relay, real certificates/accounts and device validation remain pending. Membership reward snapshots, jsQR fallback, signed SMS delivery callbacks and configurable storefront creation are also reusable local additions.

Next for Claude: review PR #1 and the revised summary; continue original branding/specifications and proposed link/review/demo contracts. Do not treat EYN as production-complete or assume a platform/ runtime is present.
Next for Codex: close the EYN real-provider/device/reward-policy release gate; import reviewed core into the agreed destination through a later PR; preserve existing static files and production migration history.
Shared MVP order remains links/reviews → punch card + staff/dashboard + Wallet → wheel → gift cards → AI WhatsApp.
Repository visibility/access, main and production are unchanged.

### Questions for the user and Claude
Q1 — User: coordination stays in this existing PUBLIC repository as instructed. Should runtime/core source later live in the existing private onetapgo repository, or do you explicitly want sanitized runtime source public here? No backend import until this is settled.
Q2 — User: provide the approved EYN reward/purchase rules/terms/privacy and secure SMS/Wallet account provisioning, then authorize specific real test recipients/devices. Do not put credentials or personal customer data in these files.
Q3 — Claude: confirm proposed route ownership and public branch/demo contracts in docs/contracts.md before coupled implementation.
Q4 — Claude/Codex: review the implemented Apple signing/update/relay approach for Worker compatibility; select approved hosting and periodic retry scheduling before live device tests.
Q5 — Claude/User: do punch-card progress and wheel eligibility pool across a business's branches, or stay branch-specific? Define this before changing the EYN store-scoped membership model.

## 2026-10-12 — Codex — coordination bootstrap
Done: read supplied Viby study; inspected EYN source 9bc1f4838049c203dc20c66828e0227ae0e380fc; verified existing GitHub repositories; prepared root AGENTS/PLAN/HANDOFF, EYN summary, source study and draft contracts.
Shared review location: islamzon09-creator/onetapgo-, branch codex/retention-coordination. Existing static root files are preserved. No runtime source imported, no deployment, no production migration, no SMS or payment executed. main is unchanged.
Validation: current EYN node tests/club.integration.mjs passed 46 cases with mocked providers; no real handset Wallet/OTP/camera test. Docs-only PR requires content review, not an application build.
Next for Claude: review bootstrap, read EYN summary and study, propose original brand/product specs and link/review/demo UI contracts. Keep implementation tasks todo until EYN completion and contract/source decision.
Next for Codex: finish EYN release gate in its existing project; reconcile Site version 94 with exact deployed source/config; then import only reviewed, sanitized reusable core into agreed destination.
### Open questions to relay
Q1 — User: this coordination PR uses existing PUBLIC onetapgo-; PRIVATE onetapgo is empty. Prefer the private repo for core/backend work? If yes, initialize it with a README using GitHub UI, so both agents can branch and use PRs without a direct push to main. Do not transfer backend source to public repo until this choice is resolved.
Q2 — User: confirm EYN reward, qualifying purchase rules, final terms/privacy, staff identities and test phones; Wallet/SMS accounts need secure provisioning outside coordination files.
Q3 — Claude: confirm proposed /links/<slug>, /reviews/<slug>, /d/<code> routes, Arabic/Hebrew-first design and shared contracts. Product prices/brand decisions are proposals, not established requirements.
Q4 — Both: choose Apple signing/APNs service compatible with Worker runtime; Google adapter exists but real issuer/class and device tests are outstanding.
### Evidence limits
Existing local EYN documentation says last known live version 93 and later saved-only changes; current Site metadata reports latest version 94. Latest saved version is not proof of the exact live source. Resolve before any deployment/activation.
Supplied study's claims about Viby framework/Firebase and exact design tokens are research observations, not our stack or proof of their full backend.
