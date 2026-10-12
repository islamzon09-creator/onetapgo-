# Proposed integration contracts — pending Claude review
These are proposals; no new API is implemented by this PR.
Tenant and branch IDs are server-resolved from approved slug/code; owner edit APIs derive permissions from authenticated identity.
Public branch display: {slug, businessName, branchName, logoUrl, brandColor, locale, links:[{type,label,url,enabled}], googleReviewUrl, clubJoinUrl?}. Return approved public fields only.
Demo: /d/<code> resolves an explicitly enabled demo, public brand and offer metadata, sample rewards and synthetic progress; never returns real members, credentials or redeemable tokens. Mark demonstrations clearly.
Links: /links/<slug> renders enabled targets. Reviews: /reviews/<slug> provides direct Google Reviews access for all customers; feedback collection is a separate action.
Club remains /club/<store>, with staff/admin subroutes, until both agents agree migration. API remains /api/club/<store>/<action>; preserve existing responses during source reuse.
Amounts: integer minor units + currency ISO code. Expiry: UTC server timestamp; display user locale. Responses and errors must be schema-validated; authorization is enforced server-side.
Claude proposes UI/component contracts; Codex owns schema/server API changes. Agree contract changes through PR before coupled implementation.
