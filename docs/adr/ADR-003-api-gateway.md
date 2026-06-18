# ADR-003 — API Gateway Strategy

## Status

Accepted

## Context

All external requests must pass through a centralized gateway.

## Decision

Adopt Kong Gateway.

Responsibilities:

* Routing
* Authentication
* Rate Limiting
* Request Logging
* Service Discovery

## Consequences

### Positive

* Centralized control
* Security enforcement
* Traffic visibility

### Negative

* Additional infrastructure layer

## Approved By

Platform Architecture Team
