# FinWallet Secrets Policy

## Rule 1: No Secrets in Git

Never commit:

* API keys
* Passwords
* Tokens
* Certificates

## Rule 2: Environment Separation

* Local: .env files
* CI/CD: GitHub Secrets
* Production: AWS Secrets Manager

## Rule 3: Service Isolation

Each service must maintain independent secrets.

## Rule 4: Rotation Policy

Secrets must be rotated every 90–180 days.

## Rule 5: Least Privilege

Each service receives only the permissions it requires.

## Rule 6: Incident Response

If a secret is exposed:

1. Revoke immediately
2. Rotate
3. Audit logs
4. Redeploy services
