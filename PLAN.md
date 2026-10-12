# OneTapGo retention plan
Statuses: todo / in progress / done. An in-progress task has one owner and a branch/PR in Notes. Each agent reads this before work and updates it after finishing.
The user authorized local implementation and first-trial preparation on 2026-10-12. EYN and new-platform production release remain gated by real provider/device validation; local synthetic work proceeds now.

| ID | Task | Owner | Status | Notes |
|---|---|---|---|---|
| SETUP-1 | Audit EYN and create coordination docs | Codex | done | Original EYN snapshot 9bc1f48: 46 cases; latest local continuation: 69 cases. See docs/eyn-summary.md for provenance; bootstrap PR #1 |
| EYN-1 | Finish EYN release readiness | Codex | in progress | Local continuation checkpoint b0eecf7 has 88 passing cases, signed Apple pass/update code and a local preview. Await approved reward/policies, real SMS/Wallet accounts, hosted APNs relay, physical device/camera tests and release approval. v94 was saved without deployment when inspected; no production change. |
| SETUP-5 | Reconcile coordination docs with latest local EYN checkpoint | Codex | done | codex/retention-coordination; PR #1; verified logs/provenance and corrected Apple/test status; documentation only, no backend import |
| SETUP-2 | Review bootstrap and architecture | Claude | todo | Review docs and confirm design/API needs; do not assume platform source is imported |
| SETUP-3 | Resolve durable repo/source destination | Codex | todo | Public onetapgo- has legacy static source; private onetapgo is empty. See HANDOFF Q1 before transferring core |
| SETUP-4 | Import sanitized reusable core under platform/ | Codex | todo | After EYN gate and source-destination decision; retain lineage; omit data/secrets/generated output; fresh runtime config |
| CONTRACT-1 | Tenant/branch/link/review/demo API contracts | Codex | todo | Proposed interface in docs/contracts.md, Claude review before coupled work |
| A-1 | Brand and product specifications | Claude | todo | Arabic/Hebrew defaults; original assets; proposed prices require owner decision |
| A-2 | Editable per-branch links and direct Google Reviews pages | Claude | todo | First sellable product; existing NFC destination stays unchanged until release |
| A-3 | Tenant/branch configuration and links APIs | Codex | todo | Authorized owner edit; no client-controlled tenant authorization |
| A-4 | Marketing pages and personalized /d/<code> demos | Claude | todo | All six product pages; synthetic demo logo/offer; no real issuance or lead send without authorization |
| B-1 | Reusable join and punch-card engine | Codex | in progress | Local first-trial store verified registration/QR/3 purchases/one redemption in real Worker+D1 browser. Checkpoint b0eecf7; not imported or production-ready |
| B-2 | Staff web app and owner dashboard | Codex | in progress | Local first-trial staff flow and owner totals verified; added owner Wallet diagnostics. Backend/UI ownership stays Codex; Claude review and source destination remain pending |
| B-3 | Production Google and Apple Wallet passes/update pipeline | Codex | in progress | Local codex/wallet-first-trial checkpoint b0eecf7 implements per-store readiness, owner class setup and protected independent retry endpoint/caller; 88 passing local tests and Worker build. See docs/wallet-first-trial.md. Real credentials, hosted APNs relay/scheduler and device save/update tests remain pending; no public runtime import |
| B-4 | Review B implementation and design integration | Claude | todo | Cross-tenant/replay tests and mobile/RTL review |
| C-1 | Wheel specs and demo interaction | Claude | todo | Specify probabilities, exhausted quantities, expiry, eligibility, redemption |
| C-2 | Atomic wheel allocations and prize verification | Codex | todo | Server RNG; no client-decided result; replay/concurrency/expiry tests |
| D-1 | Gift-card and bonus rules/specification | Claude | todo | Payment/refund/partial redemption semantics |
| D-2 | Payment-confirmed stored-balance ledger | Codex | todo | Integer minor units; verified webhooks; atomic redemption; no invented provider credentials |
| E-1 | AI WhatsApp follow-up specification | Claude | todo | Later; consent/optout/human escalation; no automated live messaging during development |
| E-2 | Approved-provider follow-up service | Codex | todo | Later; no inferred marketing permission from membership |
| RELEASE-1 | Review, regression and approved release per phase | Codex | todo | Claude review required; owner approval for concrete production change |

## MVP order
0. Close EYN readiness and agree integration contracts.
(a) Links + direct reviews, alongside marketing and synthetic demos.
(b) Punch card + staff web app + owner dashboard + real Google/Apple Wallet.
(c) Wheel with stock/probability/expiry and staff redemption.
(d) Gift cards with payment-confirmed balances.
(e) AI WhatsApp.
Do not postpone staff authorization/audit until after customer-facing launch. Optional marketing consent remains separate throughout.
