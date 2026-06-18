# Tooling Version Policy — FinWallet

## Node.js

* Version: 24 LTS
* Locked via .nvmrc
* Must match CI/CD runtime

## PNPM

* Version: 10.x
* Locked via Corepack

## Docker

* Must use latest stable Docker Desktop
* Must use WSL2 backend
* All images must specify explicit tags (NO latest)

## General Rule

No developer is allowed to upgrade tooling without platform approval.

## CI/CD Rule

CI environment must mirror local environment exactly.

## Violation Handling

Any version mismatch is treated as a production incident.
