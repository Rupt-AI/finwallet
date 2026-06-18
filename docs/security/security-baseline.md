# FinWallet Security Baseline

## Identity Security

Required:

* GitHub MFA Enabled
* AWS MFA Enabled
* Grafana MFA Enabled (when available)
* Neon MFA Enabled (when available)

## Secret Management

Never commit:

* .env
* .pem
* .key
* credentials.json

## Access Policy

Principle of Least Privilege

## Source Control

Protected Main Branch Required

## CI/CD

Secrets must be stored in GitHub Actions Secrets.

## Infrastructure

All infrastructure must be provisioned through Terraform.

## Logging

Security-relevant actions must be logged.

## Compliance Goal

SOC2-aligned engineering practices.
