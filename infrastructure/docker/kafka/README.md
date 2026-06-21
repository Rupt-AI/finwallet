# FinWallet Kafka (KRaft Mode)

Purpose:

Event streaming backbone for FinWallet.

Responsibilities:

- Event-driven communication
- Decoupling services
- Async processing
- Audit logs
- Notifications

Cluster Mode:

KRaft (no ZooKeeper)

Port:

9092 (broker)
9093 (controller)

Persistence:

finwallet-kafka-data

Network:

finwallet-platform-network