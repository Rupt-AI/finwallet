# Git Access Policy — FinWallet

## Authentication Method

All Git operations must use SSH only.

HTTPS is prohibited for development workflows.

---

## SSH Key Requirements

* ED25519 key type required
* One key per machine
* Keys must not be shared

---

## SSH Agent Policy

SSH agent must be active for all sessions.

---

## Security Rules

* Never commit private keys
* Never store keys in repository
* Rotate keys every 12–24 months

---

## CI/CD

GitHub Actions must use:

* Deploy keys OR
* GitHub OIDC authentication

Never hardcode credentials.

---

## Enforcement

All repositories must enforce SSH-only access.
