# KneadIt Landing

Standalone marketing site for KneadIt, modeled on the Ringside landing project.

This project is intentionally static. It contains the public marketing homepage,
its stylesheet, and the brand assets needed to deploy the landing site without
Laravel, Composer, or the KneadIt application runtime.

## Local preview

From this directory, serve `public/` with any static file server, for example:

```bash
php -S localhost:8080 -t public
```

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
