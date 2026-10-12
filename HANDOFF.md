# Agent handoff — newest first
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
