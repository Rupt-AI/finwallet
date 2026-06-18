# ADR-001 — Monorepo Strategy

## Status

Accepted

## Context

FinWallet consists of multiple backend services:

* Auth Service
* Wallet Service
* Transaction Service
* Notification Service
* Audit Service

All services share:

* Event contracts
* Validation libraries
* Logging libraries
* Types
* Development tooling

Maintaining separate repositories would create duplication and version drift.

## Decision

Adopt a PNPM Workspace Monorepo with Turborepo.

## Consequences

### Positive

* Shared packages
* Unified CI/CD
* Faster development
* Consistent standards

### Negative

* Larger repository size
* Requires workspace management

## Approved By

Platform Architecture Team
