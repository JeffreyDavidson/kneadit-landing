---
name: KneadIt
description: A working bakery journal in butter yellow, cocoa, and Manrope.
colors:
  ink: "#342019"
  muted: "#6d574a"
  paper: "#fffaf1"
  surface: "#ffffff"
  butter: "#f7ce69"
  soft: "#f7eedf"
  line: "#dfd1bf"
  control-border: "#907966"
  accent: "#8b3e25"
  button-bg: "#342019"
  button-text: "#fffaf1"
  error: "#b12e25"
  dark-ink: "#f5ead6"
  dark-muted: "#c8b8a6"
  dark-paper: "#241c17"
  dark-surface: "#30261f"
  dark-soft: "#2d231c"
  dark-line: "#594537"
  dark-butter: "#493921"
  dark-accent: "#f7ce69"
  dark-button-bg: "#f7ce69"
  dark-button-text: "#302014"
  dark-button-hover: "#ffe09a"
  dark-featured-border: "#7e6437"
  dark-error: "#ed8a78"
typography:
  display:
    fontFamily: "Manrope, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2.8rem, 5.35vw, 4.8rem)"
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: "-.04em"
  headline:
    fontFamily: "Manrope, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2rem, 3.65vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-.03em"
  body:
    fontFamily: "Manrope, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  button:
    fontFamily: "Manrope, 'Helvetica Neue', Arial, sans-serif"
    fontSize: ".9rem"
    fontWeight: 700
    lineHeight: 1.4
rounded:
  control: "8px"
  field: "5px"
  panel: "12px"
components:
  button-primary:
    backgroundColor: "{colors.button-bg}"
    textColor: "{colors.button-text}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "14px 24px"
  button-small:
    backgroundColor: "{colors.button-bg}"
    textColor: "{colors.button-text}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "10px 18px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "14px 24px"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "10px 12px"
  price-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "32px"
  calculator:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "32px"
---

# Design System: KneadIt

## Overview

**Creative North Star: "A working bakery journal"**

Butter-yellow fields, cocoa ink, generous Manrope type, simple rounded controls, and tactile bakery photography make the business side of home baking feel manageable. The original KneadIt logo anchors an open, editorial page with a working illustrative calculator. Positioning is integrated into the hero's introductory paragraph.

This draft records the code-led, one-page Jigsaw implementation in `source/index.blade.php`, `source/css/marketing.css`, and `source/js/marketing.mjs`, including refinements to the user's accepted visual direction, informed by `PRODUCT.md`. It supersedes the stale paper-and-forest / DM Sans description without introducing a new direction. Status: **refinement ready for review; not deployed**. No comp exists; acceptance of the visual direction does not imply final refinement approval. Plan prices and entitlements are intentionally excluded pending reconciliation with application configuration.

**Key Characteristics:**

- Warm tonal sections and restrained borders.
- One self-hosted type family with bold, tightly spaced headings.
- Original branding, generated illustrative bakery photos, and a usable costing example.

## Colors

Butter is the broad expressive field for the hero and closing CTA bookends, calculator results, and featured Growth plan. Cocoa ink carries headings and primary actions; rust accent provides link hover and keyboard focus. Paper, white surface, and soft cream separate sections and forms, with muted brown for supporting copy and distinct divider/control borders.

Frontmatter records the light custom properties and observed dark overrides; `dark-button-hover` and `dark-featured-border` name literal component colors. In dark appearance, each `dark-` token replaces its matching light role; control borders stay unchanged, while the error border becomes a lighter coral. System appearance is the default. The footer selector applies System, Light, or Dark for the current page only, without persistence.

## Typography

Manrope is self-hosted from `source/fonts/manrope-latin.woff2`, preloaded, and declared at weights 200–800 with `font-display: swap`. Display and body share the family; there is no DM Sans pairing.

Frontmatter captures the base display, section headline, body, and button roles. Headings use weight 800 and balanced wrapping. General third-level headings start at 1.25rem with 1.12 line height and -.025em tracking; local headings vary by component. Form labels use .875rem/600 on desktop and 1rem (16px at the default root size) at 760px and below. Inputs and textarea use 1rem (16px) throughout. Calculator outputs use tabular numerals, 2rem/800, 1.3 line height, and -.04em tracking; outputs reduce to 1.8rem at 760px and 1.5rem at 380px. Result labels use .875rem on desktop and 1rem on mobile.

The hero lede reads: “Business software for home bakers. Bring your orders, recipes, customers, and payments together in KneadIt.” It uses 1.03rem body type (1rem on mobile), cocoa ink, and a 430px maximum width. Price typography uses 3.3rem/800, 1.2 line height, and -.035em tracking; those presentation values do not establish plan prices.

## Layout

The default centered wrapper is `min(100% - 96px, 1200px)`. Section padding is `clamp(64px, 7.5vw, 112px)`; the implementation uses contextual gaps rather than a formal spacing scale. Hero columns are 1.08fr/.92fr; pricing uses three columns. Workflow pairs an introduction with three vertical rows in a 1fr/1.1fr split. Features, costing, and contact pair copy with imagery or a form. The FAQ pairs introductory copy and a contact link with disclosure rows in a 1fr/1.1fr split. Workflow and FAQ gaps begin at 80px.

| CSS condition | Observed adaptation |
| --- | --- |
| `max-width: 1050px` | Wrapper becomes `calc(100% - 64px)`; paired-section gaps reduce to 40px, pricing padding to 24px; hero type caps at 4rem. |
| `max-width: 760px` | Wrapper becomes `calc(100% - 40px)`; major grids stack, feature copy precedes its image, and contact fields stack. Hero type becomes `clamp(2.6rem, 10.5vw, 4.7rem)`. Calculator cost rows pair labels with inputs while batch inputs/results retain two columns until the narrower adaptation below. Labels, result captions, and buttons use 1rem. Pricing headings align left. |
| `max-width: 380px` | Calculator padding becomes 20px; its photo becomes 56px × 64px with a 12px heading gap. Batch inputs stack; results stay in two columns with 16px padding, a 12px gap, and 1.5rem outputs. Result-label minimum height is 3.3em to align output baselines. |

## Elevation & Depth

Depth comes from tonal section changes and fine borders. Calculator and pricing panels are flat, without shadows. The opaque sticky header uses a bottom divider and z-index 2; the keyboard skip link sits above it at z-index 3. There are no entrance or scroll-reveal animations.

**The Reduced Motion Rule.** When reduced motion is requested, disable transitions and use automatic scrolling instead of smooth scrolling.

## Shapes

Controls, result panels, and the feature photograph use the control radius; inputs, textarea, and appearance select use the field radius; calculator and pricing panels use the panel radius. Boundaries use 1px rules, including separators between vertical workflow entries; the first workflow entry has no top rule.

The hero photograph has an arched crop: 160px top corners on desktop and 110px on mobile, with control-radius bottom corners. Its height is `clamp(420px, 39vw, 520px)`, becoming 350px at the mobile breakpoint. This is the built treatment, despite the direction contract's description of an unadorned photo.

## Components

- **Buttons and links:** Filled primary, compact navigation, and outlined pricing variants share rounded geometry. Minimum heights are 52px and 44px for compact buttons; text links are underlined with a 44px minimum height. Hover changes fill/border to accent (the dedicated pale-yellow hover in dark appearance); press translates 1px. Background and transform transition over .18s using default CSS easing. Disabled contact submission uses a wait cursor and .65 opacity.
- **Navigation:** Original `logo-transparent.png`, displayed at 136px wide (120px on mobile), sits in a sticky header. The desktop navigation has an 80px minimum height; mobile uses 68px. The menu button updates `aria-expanded`; choosing a link, Escape, or crossing the 760px breakpoint closes it. Escape restores toggle focus. Without JavaScript, mobile links remain visible.
- **Fields and contact:** Persistent labels, paper backgrounds, control borders, 1rem (16px) input/textarea type, and 48px minimum field height. Focus changes the border to accent; `:user-invalid` uses the theme-aware error token. The shared keyboard outline is 3px accent with 5px offset; inputs, textarea, and select use a tighter 2px offset. Contact exposes sending, success, and failure status; failure preserves entered text. Without JavaScript, the visible email alternative handles contact.
- **Feature disclosures:** Native `details`/`summary` rows use browser markers, accent hover, and 1px separators. The first row opens initially; each remains independently expandable without JavaScript. The recipe row links to the calculator.
- **Calculator:** A flat white surface panel with butter results and a `cookie-batch.webp` photo beside the heading; its padding drops from 32px to 24px at 760px and 20px at 380px. Browser-side input updates compute unit cost and batch profit from ingredients, labor, packaging, quantity, and unit price, rounding monetary inputs to cents. Initial example: $34 costs, 24 cookies, $2.50 each, $1.42 unit cost, $26 profit. Negative profit changes the label to “Batch loss” and displays the absolute currency amount; non-negative results use “Batch profit.” “Reset example” restores the original input values and recalculates results; this 44px-minimum button appears only when JavaScript is enabled. Invalid inputs show N/A and explanatory text. Results use a polite, atomic live region. It is explicitly illustrative, excludes taxes/fees/other overhead, and is not a product screenshot or earnings claim. Without JavaScript, the initial example remains.
- **Pricing and FAQ:** Three bordered plan panels; Growth uses butter fill. Cards use flex columns with auto top margins on their CTAs, aligning actions at the bottom across the desktop row. Card padding is 32px, 24px at 1050px, and 28px at 760px. Native `details`/`summary` and browser disclosure markers provide independently expandable FAQ rows, initially opening the first item, including without JavaScript. FAQ introductory copy and rows sit side by side on desktop and stack on mobile.
- **Closing CTA:** A butter-yellow field echoes the hero, with a centered heading and signup action; padding is 90px vertically, reducing to 64px on mobile.
- **Imagery:** `baker-packing.webp` (with a 640px responsive alternative) leads; `sourdough-table.webp` supports the feature story; `cookie-batch.webp` identifies the illustrative calculator batch. These are generated illustrative baking photos with prompts accompanying the source assets, not customer evidence. The hero loads eagerly at high priority; the feature and calculator photos load lazily.

The compact schemaVersion 2 sidecar records observed motion, breakpoints, and representative component snippets. Snippets are visual samples; the source module owns page behavior. No synthesized tonal ramps or spacing scale is added.

## Do's and Don'ts

- Do preserve the original KneadIt logo and the self-hosted Manrope family.
- Do keep focus indicators, visible field labels, reduced-motion handling, and non-JavaScript fallbacks.
- Do label generated imagery and calculator examples honestly; keep application behavior outside the static landing page.
- Don't reintroduce the stale paper-and-forest / DM Sans direction as the current system.
- Don't imply customer endorsement, verified earnings, comp approval, or deployment from this documentation.

Not canonized: unresolved plan prices and entitlements; design documentation cannot verify those product claims.
