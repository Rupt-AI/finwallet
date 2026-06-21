#!/usr/bin/env bash

set -euo pipefail

echo "========================================="
echo "FinWallet Infrastructure Bootstrap"
echo "========================================="

NETWORK_NAME="finwallet-platform-network"

POSTGRES_VOLUME="finwallet-postgres-data"
REDIS_VOLUME="finwallet-redis-data"
KAFKA_VOLUME="finwallet-kafka-data"

echo ""
echo "[1/4] Creating Docker Network..."

if docker network inspect "$NETWORK_NAME" >/dev/null 2>&1; then
  echo "Network already exists."
else
  docker network create "$NETWORK_NAME"
  echo "Network created."
fi

echo ""
echo "[2/4] Creating Docker Volumes..."

for volume in \
  "$POSTGRES_VOLUME" \
  "$REDIS_VOLUME" \
  "$KAFKA_VOLUME"
do
  if docker volume inspect "$volume" >/dev/null 2>&1; then
    echo "Volume exists: $volume"
  else
    docker volume create "$volume"
    echo "Volume created: $volume"
  fi
done

echo ""
echo "[3/4] Validating Network..."

docker network inspect "$NETWORK_NAME" >/dev/null

echo "Network validation passed."

echo ""
echo "[4/4] Validating Volumes..."

docker volume inspect "$POSTGRES_VOLUME" >/dev/null
docker volume inspect "$REDIS_VOLUME" >/dev/null
docker volume inspect "$KAFKA_VOLUME" >/dev/null

echo "Volume validation passed."

echo ""
echo "Bootstrap completed successfully."