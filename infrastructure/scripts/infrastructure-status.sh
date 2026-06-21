#!/usr/bin/env bash

set -euo pipefail

NETWORK_NAME="finwallet-platform-network"

echo "========================================="
echo "FinWallet Infrastructure Status"
echo "========================================="

echo ""
echo "NETWORK"

if docker network inspect "$NETWORK_NAME" >/dev/null 2>&1; then
  echo "STATUS: PRESENT"
else
  echo "STATUS: MISSING"
fi

echo ""
echo "VOLUMES"

docker volume ls | grep finwallet || true

echo ""
echo "DOCKER INFO"

docker version --format '{{.Server.Version}}'

echo ""
echo "RESOURCE USAGE"

docker stats --no-stream