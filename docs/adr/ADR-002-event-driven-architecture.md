# ADR-002 — Event Driven Architecture

## Status

Accepted

## Context

FinWallet services must remain loosely coupled.

Direct service-to-service communication increases dependencies and deployment risk.

## Decision

Use Apache Kafka as the event backbone.

Communication patterns:

* Publish Events
* Consume Events
* Event Replay
* Consumer Groups

## Consequences

### Positive

* Scalability
* Decoupling
* Replay capability
* Auditability

### Negative

* Increased operational complexity
* Additional monitoring requirements

## Approved By

Platform Architecture Team
