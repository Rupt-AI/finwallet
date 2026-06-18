# Docker Baseline Standard — FinWallet

## Engine Requirements

* Docker Engine must run on WSL2 backend
* Minimum version: Docker 24+

## Resource Allocation

* CPU: 4–8 cores
* Memory: 8–16 GB
* Swap: 2 GB
* Disk: 60–100 GB

## Required Validation

* hello-world container must succeed
* PostgreSQL container must start successfully
* docker compose must be functional

## Networking

* Default bridge network must be active

## Security

* No containers should run in privileged mode unless explicitly required
