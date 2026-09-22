# Deployment

KneadIt's marketing site is a Jigsaw build deployed by Laravel Forge and
served through Cloudflare.

## Forge

The Forge deployment script is [deployment/forge.sh](../deployment/forge.sh).
Copy its contents into the deployment script for both landing-site Forge sites:

- Production: `getkneadit.app` (`kneadit-landing-rh87zbrg.on-forge.com`)
- Staging: `staging.getkneadit.app`

The script uses Forge's `$FORGE_SITE_PATH` and `$FORGE_COMPOSER` variables to
install the locked Composer dependencies. Like Ringside, this site commits its
generated `public/` output, so Forge does not rebuild or delete public files
during deployment. Run `./vendor/bin/jigsaw build production` locally before
committing a source change. No application migrations, queue workers, or
runtime services are needed for this static site.

After updating either Forge script, deploy that site and verify the deployment
log contains the Composer installation before treating it as configured.

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
