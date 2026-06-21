# Infrastructure Configuration

Purpose:

Centralized configuration for all local infrastructure.

Loaded by:

- Docker Compose
- Infrastructure Scripts
- Future CI/CD Pipelines

Rules:

1. Never hardcode credentials.
2. Read from environment variables.
3. Keep naming consistent.
4. Use FINWALLET_ prefix.

Future:

- AWS Secrets Manager
- Kubernetes Secrets
- Vault