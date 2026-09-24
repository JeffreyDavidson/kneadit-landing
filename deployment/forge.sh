#!/usr/bin/env bash

set -euo pipefail

$CREATE_RELEASE()

cd $FORGE_RELEASE_DIRECTORY

composer install --no-dev --no-interaction --prefer-dist --optimize-autoloader

if [[ "$FORGE_SITE_PATH" == *"/staging.getkneadit.app" ]]; then
    export APPLICATION_URL=https://app-staging.getkneadit.app
else
    export APPLICATION_URL=https://app.getkneadit.app
fi

vendor/bin/jigsaw build production --quiet

$ACTIVATE_RELEASE()
