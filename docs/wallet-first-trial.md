# Wallet first trial — local implementation, not a release

## Concrete result (2026-10-12)
Local branch `codex/wallet-first-trial`, checkpoint `b0eecf72f87b6fbba18e92f2d95eb06a05e5bcf4`, extends the recovered EYN core. It is NOT present in this public repository. Runtime import still awaits the source-destination decision. No production change, real SMS, payment, NFC destination change or Wallet issuance occurred.

The isolated local `first-trial` store uses synthetic policies and a three-purchase test reward. Browser verification completed registration with a synthetic phone, permanent QR, staff manual lookup, 0→1→2→3 points, one redemption, return to zero and disabled second redemption. Owner dashboard showed 3 points added, 3 spent, 0 available rewards. This demonstrates reused core in a new store; it is not the complete six-product platform.

## Implemented Wallet changes
- Store-specific Google class readiness; missing or wrong-issuer classes cannot enable saving.
- Owner-only `GET /api/club/<store>/wallet-setup` reports statuses and missing key NAMES, never secret values.
- Owner-only, same-origin `POST /api/club/<store>/wallet-setup` with `{operation:"google-class",confirm:true}` verifies/reuses or creates a deterministic class; provider 403 is not treated as 404. Existing classes are not overwritten.
- Owner dashboard includes Wallet configuration check and class preparation.
- Server-only `POST /api/wallet/retry`, protected by a separate private token, retries the oldest due store without customer/staff sessions. Existing leases, revision tracking and backoff remain in effect.
- `scripts/wallet-retry.mjs` supplies the token from environment memory, rejects HTTP/redirects and performs one scheduler invocation. No scheduler is installed.
- Apple change tags reject invalid JSON shape; relay propagates permanent 410 unregistration; Worker removes only affected pass registrations. Transient errors retain registrations for retry.

The Google save URL, provider update and Apple push acknowledgement never claim installation on a device. Apple signed-pass generation, authenticated registrations, changed-pass feed and update download remain implemented from the EYN continuation.

## Validation
47 club + 17 provider/provisioning + 19 new Wallet cases + 5 signing/artwork/decoder cases = **88 passing local tests**. Provider and certificate tests use mocks/synthetic credentials. Worker build passed. Whole-project TypeScript still reports the same 49 older errors, with none in the changed Wallet/club files. Actual local Worker/D1 browser trial passed with manual barcode entry; physical camera, iPhone/Android save/update and APNs have not been validated.

## Required configuration for real testing
Use approved private hosting secret controls; never upload credentials to coordination files, PRs or chat.
- Google: Wallet issuer ID, an authorized service-account email and PKCS8 private key; Wallet API access, class/logo configuration and authorized tester accounts or publishing access.
- Apple: Developer account, Pass Type ID, Team ID, matching Pass Type certificate/private key and WWDR certificate; strong pass-auth secret; valid PNG assets at `/wallet/<store>/`.
- Shared: approved HTTPS application origin, live/test database separation and verified-phone memberships with approved reward/privacy policies.
- Updates: approved HTTPS Apple APNs relay and its private service token; independent scheduler calling `/api/wallet/retry` with a separate strong `WALLET_RETRY_TOKEN`. Caller uses `WALLET_RETRY_URL` and that token in its private environment.

Deploy/configure only after source review and applicable owner release authorization. Keep demo members and PREVIEW ONLY policies out of live issuance.

## First real-device acceptance
1. Confirm configured keys/certificate identity and public assets without revealing secrets; prepare/verify Google class.
2. Register one authorized test member and save on an Android phone and an iPhone.
3. Confirm the saved membership barcode matches the authenticated account and resolves only in its store.
4. With the customer page closed, add one staff-authorized purchase. Verify the scheduled retry and actual phone card both update.
5. Earn/redeem the reward, reject duplicate redemption, and verify balance on both phones.
6. Remove Apple pass and verify stale device registration handling; simulate provider outage and confirm bounded retry recovery.

## Claude handoff
Review Google class creation, retry authentication/lease/revision behavior, Apple registration/unregistration and mobile RTL owner UI. Continue original branding and link/review/demo contracts in your `claude/*` branch. Runtime review needs the agreed private/source destination and the local checkpoint package; this public docs PR does not contain the core source.

References: [Google class creation](https://developers.google.com/wallet/retail/loyalty-cards/use-cases/create), [Apple pass updates](https://developer.apple.com/documentation/WalletPasses/adding-a-web-service-to-update-passes).
