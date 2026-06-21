#!/usr/bin/env bash

set -euo pipefail

NETWORK_NAME="finwallet-platform-network"

echo "========================================="
echo "FinWallet Infrastructure Cleanup"
echo "========================================="

echo ""
echo "Removing network..."

if docker network inspect "$NETWORK_NAME" >/dev/null 2>&1; then
  docker network rm "$NETWORK_NAME"
  echo "Network removed."
else
  echo "Network not found."
fi

echo ""
echo "Cleanup completed."

echo ""
echo "NOTE:"
echo "Volumes intentionally preserved."
echo "No application data removed."