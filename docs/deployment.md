# Deployment

KneadIt's marketing site is a Jigsaw build deployed by Laravel Forge and
served through Cloudflare.

## Forge

The Forge deployment script is [deployment/forge.sh](../deployment/forge.sh).
Copy its contents into the deployment script for both landing-site Forge sites:

- Production: `getkneadit.app` (`kneadit-landing-rh87zbrg.on-forge.com`)
- Staging: `staging.getkneadit.app`

The script uses Forge's zero-downtime release helpers. It creates a release,
installs the locked Composer dependencies, selects the application URL for the
target site, builds the production Jigsaw output inside
`$FORGE_RELEASE_DIRECTORY`, and activates the release. Keep both Forge sites on
this exact script:

```bash
$CREATE_RELEASE()

cd $FORGE_RELEASE_DIRECTORY

composer install --no-dev --no-interaction --prefer-dist --optimize-autoloader

if [[ "$FORGE_SITE_PATH" == *"/staging.getkneadit.app" ]]; then
    export APPLICATION_URL=https://app.staging.getkneadit.app
else
    export APPLICATION_URL=https://app.getkneadit.app
fi

vendor/bin/jigsaw build production --quiet

$ACTIVATE_RELEASE()
```

No application migrations, queue workers, or runtime services are needed for
this static site.

The landing configuration also derives the staging URL from `FORGE_SITE_PATH`,
so a staging deployment remains safe if the dashboard script temporarily lacks
the export above. After updating either Forge script, deploy that site and
verify the deployment log contains both the Composer installation and the
Jigsaw production build before treating it as configured.

## Cloudflare

Cloudflare owns the `getkneadit.app` DNS zone. Keep these records proxied and
serve the landing site through the corresponding Forge hosts:

- `getkneadit.app` → the production landing Forge site
- `staging.getkneadit.app` → the staging landing Forge site

Use Cloudflare SSL/TLS `Full (strict)` with the active Forge certificates. Do
not place the production tenant wildcard (`*.getkneadit.app`) on the landing
site; it belongs to `app.getkneadit.app`.

## Smoke checks

```bash
curl --fail --silent --show-error --location --max-time 20 https://getkneadit.app/ >/dev/null
curl --fail --silent --show-error --location --max-time 20 https://staging.getkneadit.app/ >/dev/null

curl --fail --silent --show-error --location --max-time 20 https://getkneadit.app/ \
    | grep -F 'https://app.getkneadit.app/register' >/dev/null
curl --fail --silent --show-error --location --max-time 20 https://staging.getkneadit.app/ \
    | grep -F 'https://app.staging.getkneadit.app/register' >/dev/null
```
