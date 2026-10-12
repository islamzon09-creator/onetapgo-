# Agent handoff — newest first
## 2026-10-12 — Codex — owner selected private runtime and EYN trial; accounts absent
Owner has both iPhone and Galaxy, no Apple Developer/Google Wallet/Twilio accounts, and accepted the recommended existing private onetapgo runtime repository; first trial is EYN (عين). This resolves source destination and trial brand; real reward/policy approval and provider setup remain separate.

Prepared local OneTapGo-private-import.zip: 88 selected source files under a root with AGENTS/PLAN/HANDOFF and platform/. Contains club, staff, owner, storefront and Wallet core from b0eecf7, plus temporary EYN test entry/admin redirect. Excludes customer records, env, node_modules/runtime folders, old Site project_id and unrelated legacy marketing/pages/assets. Fresh hosting.json has only DB binding and r2:null. Manifest was checked. This extraction has not yet had a fresh dependency install/build; the 88 passing runtime tests and successful build refer to its b0eecf7 source checkpoint, not a rebuilt imported project. No GitHub runtime transfer or deployment occurred.

Private repository is still empty. Connector commit/branch creation requires an existing parent SHA; no initial commit exists. Root rule says never push directly to main. Owner should initialize README through GitHub UI; then Codex can bulk-create a tree/commit on codex/private-core-import and open a PR. Do not repeatedly ask whether to use private repo; that choice is accepted.

Next owner action: sign in at https://pay.google.com/business/console/ and create the Wallet API issuer account using the correct public business/platform name. Owner accepts provider terms directly. New issuer starts in demo mode; eligible test accounts can receive test cards before public publishing approval. Add Galaxy's Google account as tester if different from issuer admin. Never place tester email or credentials in this PUBLIC log.

Next for Codex: after README exists, transfer the sanitized package through a private PR, configure fresh isolated HTTPS test hosting, guide service-account setup and private secret provisioning, then test EYN on Galaxy. Apple enrollment/certificate setup follows for iPhone; Apple publishes a US$99 annual Developer Program fee, with local pricing shown during enrollment. No purchase, enrollment, live SMS or acceptance of provider terms was performed by Codex.

Next for Claude Code: source destination now settled: PRIVATE islamzon09-creator/onetapgo. Continue specs/design in your current shared branch while initial source PR is pending. Review Wallet implementation on the private PR once available; prepare EYN-branded phone-test instructions. Write your branch/PR and progress at top of HANDOFF. No acknowledgement or completed Claude review is assumed.

References: [Google issuer setup](https://developers.google.com/wallet/retail/loyalty-cards/getting-started/issuer-onboarding), [Apple enrollment/fee](https://developer.apple.com/programs/enroll/).

## 2026-10-12 — Codex — phone Wallet setup and explicit Claude handoff
User requests continued coordination and an exact owner checklist to connect Wallet and test on a phone. Re-read AGENTS/PLAN/HANDOFF, inspected PR #1 discussion, searched claude/* branches and Claude-head PRs: no results/review found at this check. No Claude execution or acknowledgement is assumed. Verified islamzon09-creator/onetapgo is private, size 0, default branch main; runtime destination remains unapproved.

### Next actions for Claude Code
1. Open/review PR #1; read docs/contracts.md and docs/wallet-first-trial.md.
2. Claim your work in PLAN on claude/<task>. Confirm /links/<slug>, /reviews/<slug>, /d/<code> ownership and contract feedback.
3. Prepare an original mobile test-pass design and clear Arabic/Hebrew save/update/error instructions. Differentiate test pass, provider acknowledgement and actual device save/update.
4. Once runtime source is accessible in the approved repository, review local checkpoint b0eecf7: Google class reuse/create, tenant scope, retry authorization/leases/backoff, Apple signatures/registration/update feed/unregistration. Do not approve runtime code solely from this docs PR.
5. Reply at the top of HANDOFF with your branch/PR, completed work, validation and blocking questions. No keys, tester emails, phone numbers or customer data in public coordination files.

### Exact owner inputs for the first phone trial
- Choose the first test device: Android/Google Wallet or iPhone/Apple Wallet, and model/OS version. We can test one provider first.
- Confirm runtime source goes into the existing PRIVATE onetapgo repo (recommended), or explicitly approve sanitized public source. If private is selected, initialize its main branch with a README through GitHub so both agents can open branches/PRs; do not transfer credentials or runtime data.
- Google path: issuer account/Issuer ID, Google Cloud project with Wallet API and authorized service account; its signing key is configured ONLY in private runtime secret controls. Add the Gmail account on the test phone to the issuer's test-account list when using demo mode. Publishing access is not required for an eligible demo-mode tester.
- Apple path: active Developer account with appropriate certificate permissions, Team ID, Pass Type ID and matching Pass Type signing certificate/private key. The private key stays in private secret controls; Codex prepares the matching WWDR chain and verifies signing. A certificate without its matching private key is insufficient.
- Confirm the test store (EYN or a dedicated test store), authorized tester and test reward/policies. For the CURRENT full join→Wallet flow, real OTP verification is required: configure Twilio Account SID/Auth Token/Verify Service SID privately and authorize the specific test recipient. Existing loopback-only simulated members are not eligible for live issuance. Do not bypass this by marking demo phones verified.
- Approve a separately reviewed HTTPS test deployment and isolated database before phone issuance. Hosted Apple update endpoints and pass images must be reachable by the device/provider; whole-site owner-login gating cannot be used to block those protocol requests. Retain pass authentication and owner/staff authorization.
- Codex handles class provisioning, assets, strong internal secrets, APNs relay setup and scheduled retries; user need not choose cryptographic values or write server code. Paid resources require concrete cost approval before purchase.

### Safe credential delivery
User signs in directly to Google/Apple/provider dashboards; never send account passwords or MFA codes to Codex/Claude. Place private keys, service JSON and provider tokens in the chosen host's private secret settings, not chat, GitHub, screenshots or source. Only non-secret IDs/account availability and approval decisions belong in the reply. If no hosting secret UI is selected yet, settle the test host before transferring any secret.

### Phone acceptance and gates
First verify actual save and membership QR on the selected phone; then add a staff-confirmed point while the customer page is closed and verify the phone card update. Apple first-save test may precede hosted APNs setup, but closed-page automatic update acceptance requires the relay and periodic retry. Repeat reward/redemption and duplicate rejection. Android+iPhone, physical camera and real-provider checks remain pending; no new runtime test/build is claimed for this docs-only follow-up.

Official references: [Google issuer onboarding](https://developers.google.com/wallet/retail/loyalty-cards/getting-started/issuer-onboarding), [Google demo-mode test accounts](https://developers.google.com/wallet/retail/loyalty-cards/test-and-go-live/request-publishing-access), [Apple Wallet identifiers/certificates](https://developer.apple.com/help/account/capabilities/create-wallet-identifiers-and-certificates).

## 2026-10-12 — Codex — actual local first trial and Wallet fixes
Done: created local branch codex/wallet-first-trial, checkpoint b0eecf72f87b6fbba18e92f2d95eb06a05e5bcf4, extending the recovered EYN core. A new synthetic first-trial store ran in the actual local Worker/D1: registration, permanent QR, staff manual lookup, three purchases, one reward redemption, zero balance and disabled second redemption. Owner totals showed 3 added / 3 redeemed / 0 rewards. This is concrete local implementation, not the complete six-product platform.

Wallet: implemented store-specific Google class readiness, owner-only diagnostics/class creation, a protected server-to-server retry endpoint and environment-only caller, and Apple malformed update-tag/permanent unregistration handling. Independent retry works in mocked provider tests without customer/staff sessions. No scheduler/relay was installed or deployed; no handset Wallet installation/update was performed.

Validation: 47 club + 17 provider/provisioning + 19 new Wallet + 5 signing/artwork = 88 passing local cases; final Worker build passed. 49 pre-existing whole-project TypeScript errors remain, none in changed Wallet/club files. No real SMS/payment/customer data or production change.

Source stays local pending Q1. Local package OneTapGo-first-trial-source.zip and screenshot were delivered to the user; this checkpoint is NOT fetchable in this GitHub repository. PR #1 still contains coordination/docs only. No direct communication with Claude has occurred and no Claude work/review completion is claimed.

Next for Claude: read docs/wallet-first-trial.md, review proposed Wallet/API changes after source access is settled, and continue branding/links/reviews/demo work in claude/* via PR. Confirm branch-scoped versus business-pooled progress before changing the data model.
Next for Codex: transfer reviewed core to approved destination; configure approved Wallet accounts/HTTPS assets/relay/scheduler and perform authorized Android+iPhone save/update tests. Other products (wheel, gift balance, AI WhatsApp) remain unimplemented in the new platform.

### Required user decisions to relay
Q1 — Source: choose existing PRIVATE onetapgo for runtime, or explicitly approve sanitized runtime source in PUBLIC onetapgo-. No visibility/access change or public source import was made.
Q2 — Wallet priority: which Google Wallet issuer/service account and Apple Developer/Pass Type certificate should we use? Provision credentials through private hosting controls, not GitHub files or chat. Confirm authorized test phones/accounts and the HTTPS test host. Without these we can test protocol/code locally but cannot save a genuine pass on your phone.
Q3 — Hosting/review: approve/select the HTTPS APNs relay host and periodic retry runner once the concrete source/config is reviewed; installation is still pending.

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
