# KneadIt Landing

Standalone marketing site for KneadIt, modeled on the Ringside landing project.

This project is a standalone Jigsaw site. It contains the public marketing
homepage, its stylesheet, and the brand assets needed to deploy the landing
site without Laravel or the KneadIt application runtime.

The design follows “Your bakery, ready for the week”: self-hosted Bricolage
Grotesque and Manrope, selective yellow, an interactive pickup-week example,
and responsive bakery imagery. Visual rules live in [`DESIGN.md`](DESIGN.md)
and [`.impeccable/design.json`](.impeccable/design.json). It has not been deployed.
Listed plan prices and features were reconciled with the local application's
`config/kneadit.php` on 2026-09-22. Confirm deployed billing before publication.

## Local preview

Build the site with Jigsaw, then serve `public/` with any static file server:

```bash
./vendor/bin/jigsaw build
```

Herd serves this checkout at `https://getkneadit.test` with trusted local TLS.
CSS and JavaScript URLs include a content-derived version from `config.php` so
changes invalidate browser caches together.

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

The calculator and pickup-week fixture use Node's built-in test runner:

```bash
node --test tests/costing.test.mjs tests/week.test.mjs
node --check source/js/marketing.mjs
git diff --check
```

The redesign verification covered 20 passing unit tests, a production Jigsaw
build, and browser checks at 360, 390, 1024, and 1280px, including dark appearance,
day selection, calculator loss/invalid/reset states, and menu dismissal. A
Lighthouse report was not produced; no supported audit runner was available in
this session. This is not a claim of a complete accessibility or performance audit.

Check the rendered page at desktop and mobile widths, including the navigation,
feature disclosures, FAQ, calculator invalid inputs, loss labeling, reset behavior,
and both appearances. Include a 380px-or-narrower check for stacked batch inputs
and aligned result output baselines. Do not submit real contact
messages or create accounts as a smoke test.

## Presentation behavior

- `source/js/marketing.mjs` owns the mobile menu, per-page appearance selector,
  pickup-week example, illustrative calculator, and application contact submission.
- The week selector updates sample orders, payment labels, and aggregated bake
  quantities. Sunday demonstrates an empty day. Native buttons expose pressed
  states and the results are announced through a polite live region.
- The week example is explicitly illustrative, not a screenshot or embedded app.
  Local demo bakery routes returned 404 during this redesign; authentic product
  screenshots remain a future improvement when the demo workspace is available.
- Workflow steps, plan rows, FAQ, and contact stack on mobile. Features and FAQ
  use native disclosures. Inputs retain 16px text and a 48px minimum height.
- The calculator runs entirely in the browser. It is a labeled demonstration,
  not an embedded product interface or a claim about actual bakery earnings.
  The supporting copy uses `cookie-batch.webp`. Negative results are labeled “Batch loss”
  with an absolute currency amount; “Reset example” restores the starting values.
  At 380px and below, the batch-quantity and selling-price fields stack.
- System appearance is the default; the footer selector changes only the current
  page view. There is no theme cookie or persistent storage.
- With JavaScript disabled, navigation links, feature disclosures, and FAQ remain
  usable. The Saturday example and initial calculator results remain visible;
  inactive day buttons and reset are hidden. Contact has a visible email alternative.
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
