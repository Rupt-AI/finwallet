# FinWallet Kong Gateway

Mode:

DB-less (Declarative Configuration)

Purpose:

API Gateway for all FinWallet services.

Responsibilities:

- Request routing
- Load balancing (future)
- Authentication (future)
- Rate limiting (future)
- Observability hooks (future)

Entry Ports:

8000 → Proxy
8001 → Admin API

Network:

finwallet-platform-network