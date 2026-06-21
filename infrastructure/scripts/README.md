# Infrastructure Scripts

## Purpose

Manage foundational Docker resources used by FinWallet.

## Scripts

### infrastructure-up.sh

Creates:

- Docker network
- Docker volumes

### infrastructure-status.sh

Shows:

- Network status
- Volume status
- Docker runtime information

### infrastructure-down.sh

Removes:

- Docker network

Preserves:

- Docker volumes
- Persistent data