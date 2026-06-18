# Environment Parity Standard — FinWallet

## Objective

Ensure all environments behave identically.

## Environments

* Local (WSL2)
* CI/CD (GitHub Actions)
* Production (AWS)

## Rules

* Node.js must be identical across all environments
* PNPM must be locked via Corepack
* Docker images must use fixed versions
* No use of "latest" tags

## Build Consistency

All builds must be reproducible using:

pnpm install --frozen-lockfile

## Compliance

Any drift between environments is a critical failure.
