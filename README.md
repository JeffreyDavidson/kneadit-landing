# KneadIt Landing

Standalone marketing site for KneadIt, modeled on the Ringside landing project.

This project is a standalone Jigsaw site. It contains the public marketing
homepage, its stylesheet, and the brand assets needed to deploy the landing
site without Laravel or the KneadIt application runtime.

## Local preview

Build the site with Jigsaw, then serve `public/` with any static file server:

```bash
./vendor/bin/jigsaw build
```

For a quick local preview, use:

```bash
php -S localhost:8080 -t public
```

Jigsaw source files live in `source/`; `public/` contains the deployable build
output. The generated `public/` output is committed so Forge can deploy it with
the same Composer-only deployment flow used by the Ringside landing site.

## Deployment

Laravel Forge deploys the production and staging sites through Cloudflare.
The versioned deployment script and DNS/SSL expectations are documented in
[`docs/deployment.md`](docs/deployment.md).

The production marketing site is published at
https://getkneadit.app/.

## Application links

The current static page points registration, resources, directory, legal pages,
and contact submission to `https://app.getkneadit.app`. Update those URLs when the
production application and landing-site domains are finalized.

## Source boundary

The page was extracted from KneadIt's clean marketing redesign branch. Dynamic
blog, bakery-directory, registration, referral, and contact-processing behavior
still belongs to the KneadIt application and is linked as an external surface.
