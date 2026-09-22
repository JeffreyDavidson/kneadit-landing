#!/usr/bin/env bash

set -euo pipefail

cd "$FORGE_SITE_PATH"

"$FORGE_COMPOSER" install \
    --no-dev \
    --no-interaction \
    --prefer-dist \
    --optimize-autoloader
