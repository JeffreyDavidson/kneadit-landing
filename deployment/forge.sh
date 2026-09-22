#!/usr/bin/env bash

set -euo pipefail

cd "$FORGE_SITE_PATH"

"$FORGE_COMPOSER" install \
    --no-dev \
    --no-interaction \
    --prefer-dist \
    --optimize-autoloader

# Forge deploys into a release directory that already contains the tracked
# public output. Clear that release-local output so Jigsaw can rebuild it.
find public -mindepth 1 -maxdepth 1 -exec rm -rf -- {} +

"$FORGE_PHP" vendor/bin/jigsaw build production --no-interaction
