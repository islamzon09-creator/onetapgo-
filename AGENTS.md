# Shared agent rules
## Start and finish
Read AGENTS.md, PLAN.md, HANDOFF.md and docs/eyn-summary.md before work. Read docs/viby-study.md as product research, not verified backend architecture.
Claim a PLAN task on your branch before implementation; update status and notes on completion. Add a dated HANDOFF entry at the top with commit/PR, validation, next step and questions. Questions for the user and other agent go there.
## Branches and reviews
Codex: codex/<task>; Claude: claude/<task>. Never push directly to main. Open a PR; do not merge your own implementation without the other agent's review. Bootstrap PR is also unmerged until reviewed. Fetch latest main, use separate worktrees, never overwrite another agent's edits. Resolve PLAN/HANDOFF conflicts preserving both entries.
Do not change repository visibility/access or production deployment. No live SQL, migrations, SMS, billing, public activation or domain changes without the user's applicable release authorization. No direct messaging between agents; GitHub PRs and these files are the shared channel.
## Ownership
Codex owns backend, schema/migrations, joining, loyalty, wheel, Wallet, staff and owner interfaces.
Claude owns specifications, branding, marketing/product pages, business demos, links/reviews pages and reviews Codex PRs. Codex reviews Claude PRs.
Shared contracts, dependencies, lockfiles, routing and translations: propose in docs/contracts.md via PR before implementing incompatible changes. Coordinate migration numbers; never rewrite an applied migration.
## Stack and structure
Reuse EYN: TypeScript 5.9, React 19, Next-compatible App Router on Vinext/Vite, Tailwind 4, Cloudflare Workers, D1 SQLite + Drizzle, R2 assets. Do not silently switch to Vercel/Firebase/Supabase because the reference uses them.
Current repository contains a legacy static site, NOT the EYN app. Preserve root legacy files.
Planned framework root: platform/ (not yet imported).
platform/app/(marketing)/, platform/components/marketing/: Claude.
platform/app/d/[code]/ and platform/components/demo/: Claude.
platform/app/links/[slug]/, platform/app/reviews/[slug]/: Claude; Codex supplies tenant-safe data APIs.
platform/app/club/[store]/ and platform/app/admin/: Codex.
platform/app/api/, platform/lib/club-*, platform/db/, platform/drizzle/, platform/tests/: Codex.
platform/components/ui/ and shared brand assets: coordinate changes.
docs/: specs, contracts, decisions, source research. docs/eyn-summary.md describes audited baseline.
Route groups do not change URLs; agree root route ownership before import. /d/<code> is a synthetic demonstration, not a live reward issuer.
## Conventions
Arabic/Hebrew RTL, English LTR. Accessible mobile-first UI; no end-customer app installation. No copied Viby logos/client logos/images/text. Customer and staff browser apps remain separate from Wallet passes.
Tenant scope every read/write. QR identifies membership, never authentication or authorization. Preserve atomic ledger/idempotency/unique receipts/one-use confirmations, auditable reversals, session revocation and optional separate marketing consent.
Keep secrets server-only; never commit env files, signing keys, personal customer data, databases, provider tokens, generated runtime/build outputs. Store currency as integer minor units. Gift balances and wheel allocations require atomic transactions and replay protection.
Never represent mock Wallet, unsigned .pkpass, provider acceptance or a generated save link as installed/device-tested.
## Run and validate
Today: documentation/legacy only; no framework commands at repository root.
After platform import (Node >=22.13.0), from platform/: npm run install:ci; npm run dev (portable profile); npm run build; node tests/club.integration.mjs; npx tsc --noEmit (record existing unrelated errors distinctly).
Use imported runtime profile instructions in README; configure ignored local profile for the host before execution. Managed browser QA only via the supported control-browser capability. Do not improvise deployment commands.
Run relevant tests, then one build for runtime changes. Record actual results and limits in PR/HANDOFF. No tests required for this documentation-only bootstrap.
EYN production readiness is a separate release gate; bootstrap does not assert it is finished.
