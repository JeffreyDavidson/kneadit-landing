---
version: 1
slug: "source-index-blade-php"
primary_target: "source/index.blade.php"
related_targets: ["source/css/marketing.css","source/js/marketing.mjs"]
---

# Landing page: a baker's working week

Primary target: `source/index.blade.php`
Related targets: `source/css/marketing.css`, `source/js/marketing.mjs`

## Intent and authority

The user requested a substantial redesign after rejecting the previous page as generic. They delegated the proposed answers and authorized implementation with “Make it happen.” The selected direction is “Your bakery, ready for the week”: bright, confident, bakery-specific, and led by the work rather than decoration. Preserve the existing logo and familiar yellow accent.

This is a code-led implementation with no approved raster comp. The accepted direction overrides exploratory seed `a03accbd`. Final aesthetic acceptance remains with the user; this is not a production deployment.

## First viewport and signature behavior

A broad Bricolage headline sits beside succinct explanatory copy and the signup action, above a full-width interactive pickup-week illustration. Friday, Saturday, and Sunday buttons update orders, payment labels, and aggregate preparation quantities. Sunday is an honest empty state. A short change animation supports the action and is disabled for reduced motion.

Mobile stacks headline, copy, and illustration; the three day buttons form a horizontal selector. Keep the order data legible and the page free of horizontal overflow.

## Narrative and conversion

Promise → working week → order/preparation/money workflow → bakery photograph and feature disclosures → usable costing example → plan comparison → practical FAQ → contact → signup.

Use “Start free trial” consistently. The calculator is an illustrative local interaction, not the live app. Avoid invented testimonials, customer counts, revenue claims, or endorsements.

## Evidence and limits

Application widgets and plan configuration were inspected locally. Plan pricing and entitlements reflect `kneadit/config/kneadit.php` as inspected on 2026-09-22; deployed billing remains unverified. Local seeded demo routes returned 404, so the week is explicitly labeled an illustration, not an app screenshot. Replace or supplement it with genuine product captures when the demo workspace is available.

The dispatch photograph is AI-generated editorial imagery with prompt provenance; it does not depict a claimed customer. Keep existing logo and cookie thumbnail provenance intact.

## Verification boundary

Review the complete page in desktop, tablet, narrow mobile, and dark appearance. Exercise all day states, calculator loss/invalid/reset states, keyboard menu dismissal, and native disclosures. Do not submit real contact messages or create accounts for a smoke test. Preserve Forge/Cloudflare deployment architecture.
