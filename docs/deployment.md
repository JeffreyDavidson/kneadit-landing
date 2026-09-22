# Deployment

KneadIt's marketing site is a Jigsaw build deployed by Laravel Forge and
served through Cloudflare.

## Forge

The Forge deployment script is [deployment/forge.sh](../deployment/forge.sh).
Copy its contents into the deployment script for both landing-site Forge sites:

- Production: `getkneadit.app` (`kneadit-landing-rh87zbrg.on-forge.com`)
- Staging: `staging.getkneadit.app`

The script uses Forge's `$FORGE_SITE_PATH`, `$FORGE_COMPOSER`, and `$FORGE_PHP`
variables. It installs the locked Composer dependencies, clears only the
release-local `public/` directory, and runs `jigsaw build production` before
Forge activates the release. No application migrations, queue workers, or
runtime services are needed for this static site.

After updating either Forge script, deploy that site and verify the deployment
log contains both Composer installation and the Jigsaw build before treating it
as configured.

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
```
