# KneadIt Landing

Standalone marketing site for KneadIt, modeled on the Ringside landing project.

This project is a standalone Jigsaw site. It contains the public marketing
homepage, its stylesheet, and the brand assets needed to deploy the landing
site without Laravel or the KneadIt application runtime.

The current design uses self-hosted Manrope, responsive WebP bakery imagery,
and a small dependency-free JavaScript module. Visual rules are documented in
[`DESIGN.md`](DESIGN.md).

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
output. The generated `public/` output is committed, and Forge rebuilds the
production output during each zero-downtime release with Jigsaw.

For a production rebuild when `public/` already exists, explicitly confirm the
Jigsaw overwrite prompt:

```bash
printf 'yes\n' | vendor/bin/jigsaw build production --no-ansi
```

## Verification

The illustrative batch-costing calculator has tests using Node's built-in runner:

```bash
node --test tests/costing.test.mjs
node --check source/js/marketing.mjs
git diff --check
```

Check the rendered page at desktop and mobile widths, including the navigation,
FAQ, calculator invalid inputs, and both appearances. Do not submit real contact
messages or create accounts as a smoke test.

## Presentation behavior

- `source/js/marketing.mjs` owns the mobile menu, per-page appearance selector,
  illustrative calculator, and existing application contact submission.
- The calculator runs entirely in the browser. It is a labeled demonstration,
  not an embedded product interface or a claim about actual bakery earnings.
- System appearance is the default; the footer selector changes only the current
  page view. There is no theme cookie or persistent storage.
- With JavaScript disabled, navigation links and FAQ remain usable. The calculator
  shows its initial example, and contact uses the visible email alternative.
- Contact processing remains at the application endpoint. Requests time out after
  15 seconds; failures preserve the visitor's message.
- New bakery photographs are AI-generated editorial imagery, not customer photos
  or product screenshots. Generation prompts accompany the source image assets.

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
