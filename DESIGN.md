---
name: KneadIt
description: Chalk-white space, bold Bricolage, precise Manrope, and selective yellow for a practical bakery identity.
colors:
  yellow: "#f7c844"
  yellow-ink: "#252918"
  yellow-hover: "#ffda6f"
  accent: "#775a00"
  paper: "#f8f9f7"
  surface: "#fff"
  soft: "#eef0eb"
  ink: "#202923"
  muted: "#59615b"
  line: "#d8ded6"
  control: "#758078"
  error: "#a32925"
  dark-paper: "#181e1a"
  dark-surface: "#202822"
  dark-soft: "#242e27"
  dark-ink: "#f0f3ee"
  dark-muted: "#b7c2b9"
  dark-line: "#3e4b41"
  dark-control: "#839688"
  dark-accent: "#f7c844"
  dark-error: "#ffaaa0"
typography:
  display:
    fontFamily: "Bricolage, Manrope, sans-serif"
    fontSize: "clamp(3rem, 5.5vw, 4.8rem)"
    fontWeight: 800
    lineHeight: 1.03
    letterSpacing: "-.04em"
  headline:
    fontFamily: "Bricolage, Manrope, sans-serif"
    fontSize: "clamp(2.1rem, 4vw, 3.65rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-.035em"
  title:
    fontFamily: "Bricolage, Manrope, sans-serif"
    fontSize: "1.8rem"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-.035em"
  panel-title:
    fontFamily: "Bricolage, Manrope, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 800
    lineHeight: 1.08
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  body-small:
    fontFamily: "Manrope, sans-serif"
    fontSize: ".9rem"
    lineHeight: 1.65
  mobile-copy:
    fontFamily: "Manrope, sans-serif"
    fontSize: ".95rem"
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: ".875rem"
    fontWeight: 600
    lineHeight: 1.65
  button:
    fontFamily: "Manrope, sans-serif"
    fontSize: ".875rem"
    fontWeight: 800
    lineHeight: 1.4
  compact:
    fontFamily: "Manrope, sans-serif"
    fontSize: ".8rem"
  caption:
    fontFamily: "Manrope, sans-serif"
    fontSize: ".75rem"
  metadata:
    fontFamily: "Manrope, sans-serif"
    fontSize: ".7rem"
  fine-print:
    fontFamily: "Manrope, sans-serif"
    fontSize: ".65rem"
rounded:
  field: "6px"
  control: "8px"
  panel: "16px"
  payment: "5px"
components:
  button-primary:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.yellow-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "14px 22px"
  button-primary-hover:
    backgroundColor: "{colors.yellow-hover}"
  button-small:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.yellow-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "11px 18px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "14px 22px"
  button-outline-hover:
    backgroundColor: "{colors.soft}"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "10px 12px"
  payment-paid:
    backgroundColor: "{colors.soft}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.payment}"
    padding: "4px 8px"
  calculator:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "28px"
---

# Design System: KneadIt

## Overview

**Creative North Star: "A baker's working week"**

Chalk-white space, near-black Bricolage lettering, precise Manrope data, and selective yellow make bakery administration feel clear and approachable. The original KneadIt logo and bakery photography keep the identity recognizable; borders and practical controls give the work structure.

This record describes the implemented source, not a proposed comp: `source/index.blade.php`, `source/css/marketing.css`, and `source/js/marketing.mjs`, informed by `PRODUCT.md`. The user delegated the redesign and accepted its direction; there is no approved raster comp or claim of final user approval or production deployment. The finish review's five material findings were fixed and received a SHIP verdict on those fixes, not a new whole-surface review. Page strategy and composition remain in `.impeccable/surfaces/source-index-blade-php.md`.

**Key Characteristics:**

- Clear neutral surfaces with yellow reserved for actions, selection, and results.
- Expressive self-hosted headings paired with compact, readable working data.
- Original branding, labeled illustrations, flat panels, and visible keyboard feedback.

## Colors

### Primary

Yellow supplies primary actions, selected day controls, and calculator results; yellow-ink keeps their text dark in both appearances. Yellow-hover brightens filled actions. Accent is the darker yellow-brown used for link hover, step numbers, caret, and focus in light appearance.

**The Selective Yellow Rule.** Use yellow for actions, selection, and results; keep large surrounding surfaces neutral.

### Neutral

Paper is the page and field background; surface is the panel and highlighted plan background; soft separates supporting regions. Ink carries headings and primary text, muted supports descriptions, and line separates content. Control is the stronger boundary for fields, outline buttons, and the mobile menu.

**The Control Boundary Rule.** Use control for interactive boundaries and line for content dividers.

The light control border (`#758078`) measures approximately 3.58:1 against soft and 3.89:1 against paper. These are boundary contrast measurements, not a whole-page accessibility certification. Error identifies invalid fields; it is a semantic state, not another decorative accent.

### Dark appearance

Each `dark-` entry replaces its matching CSS role. Yellow, yellow-ink, and yellow-hover remain unchanged, so actions and results stay bright with dark text. Dark accent becomes yellow; dark control and error become lighter. System preference is the default; the footer's System/Light/Dark selector affects only the current page, with no storage or cookie.

## Typography

**Display Font:** Bricolage Grotesque, registered locally as `Bricolage`, with Manrope and sans-serif fallbacks.
**Body Font:** Manrope, with sans-serif fallback.

Both fonts are self-hosted, preloaded, and use `font-display: swap`. Bricolage is weight 800; Manrope supports 200–800. Headings are tightly tracked and generally balance their wrapping; the hero uses normal wrapping. There is no modular ratio: the frontmatter records actual roles and recurrent sizes, not a generated type scale.

- Display and section headline use the fluid sizes above. Display changes to `clamp(2.8rem, 5.5vw, 4.3rem)` at 1120px, `clamp(2.65rem, 8.3vw, 3.9rem)` at 760px with 1.07 line height, and 2.4rem at 380px.
- Title is shared by workflow and plan names; workflow titles become 1.7rem on mobile. Panel-title covers the week and calculator headings; their tracking differs (-.025em and -.035em). The week title becomes 1.25rem on mobile; selected-day titles use 1.3rem.
- Body-small serves supporting paragraphs; mobile-copy serves the introduction, section copy, and FAQ summaries. Label size is also used by order rows, disclosures, and text links with role-specific weights. Compact covers navigation, legends, and plan details; caption covers notes, payment labels, and totals. Metadata and fine-print are reserved for secondary example/status/legal text, not body copy.
- Labels become .8rem at 760px. Inputs and textarea retain 1rem throughout. Disclosure paragraphs cap at 65ch.
- Numeric outputs use Bricolage 800 and tabular numerals: calculator `clamp(2rem, 3vw, 2.7rem)/1.3`, then 2rem at 760px and 1.8rem at 380px; plan prices use 2.65rem/1.2. Both use -.035em tracking.

**The Two Voices Rule.** Use Bricolage for headings and prominent totals; use Manrope for explanations, controls, and working data.

## Layout

The centered wrapper is `min(100% - 96px, 1280px)`; standard sections use 108px vertical padding. Recurrent inner gaps include 12, 16, 18, 20, 24, 28, 32, 36, and 48px, with 90px between several paired sections. These are contextual measurements, not a declared spacing-token scale. Rows and thin rules organize dense information; panels contain interactive examples.

| Maximum width | Shared adaptation |
| --- | --- |
| 1120px | Wrapper subtracts 64px; paired-section gaps shrink to 48px; navigation and data columns tighten. |
| 760px | Wrapper subtracts 40px; standard sections use 68px padding; major grids stack, feature copy precedes imagery, contact fields stack, and navigation becomes a disclosure. |
| 380px | Wrapper subtracts 32px; batch fields stack; calculator padding becomes 18px and results keep two columns with 16px padding and a 12px gap. |

Anchor scrolling accounts for the sticky header with 104px scroll padding, reduced to 88px at 760px.

## Elevation & Depth

Surfaces are flat, with no box shadows. Neutral fills, 1px rules, and spacing establish depth. The opaque sticky header sits at z-index 2 and the skip link at 4. Buttons lift 2px on hover and return on press, with .2s transform/background transitions. Day selection uses a .18s background transition and a .3s content change from 6px below at .6 opacity; there are no scroll-reveal effects.

**The Reduced Motion Rule.** Disable transitions and animations and use automatic scrolling when reduced motion is requested.

## Shapes

Repeated controls use 8px corners, fields use 6px, and interactive example panels use 16px. Repeated payment labels use 5px corners. The feature photograph's 12px corners, calculator results' 10px corners, and circular batch thumbnail are local treatments, not a new global radius scale. The declared `--radius: 12px` is unused in the stylesheet and is not promoted as a working token. Pricing is organized in square-edged rows.

## Components

- **Actions:** Filled, compact, and outlined variants share geometry; minimum heights are 52px or 44px for compact buttons. Outline controls use control borders and soft hover fill. Text links are underlined with a 44px minimum height. Disabled submission uses .65 opacity and a wait cursor.
- **Navigation:** Preserve `logo-transparent.png`; it renders at 142px wide, or 126px on mobile. Menu state uses `aria-expanded`; links, Escape, and crossing 760px close it. Escape returns focus to the toggle. Links remain visible without JavaScript.
- **Fields and contact:** Persistent labels, control borders, paper backgrounds, and 48px minimum input/textarea height. Focus is a 3px accent outline with 5px offset, tightened to 2px for fields/select. Invalid fields use error borders. Contact announces sending outcomes, preserves text on failure, and provides an email fallback.
- **Disclosures and icons:** Native independently expandable `details`/`summary`, with the first feature and FAQ item open. Shared inline SVG arrows and chevrons use a 24-unit viewBox, 20px dimensions, 1.5 stroke, and currentColor; decorative icons are hidden from assistive technology. The chevron rotates 180 degrees when open. No glyph icons.
- **Working data:** Day buttons expose pressed states; the polite, atomic result region includes orders, payment words, quantities, and an empty state. Payment tags communicate with text as well as fill. The initial Saturday example remains without JavaScript. This is explicitly fictional workflow illustration, not an app screenshot.
- **Calculator:** A surface panel with yellow results, visible numeric labels, and a polite, atomic live region. Bounds and decimal/integer steps are validated; invalid entries produce N/A and a specific explanation. Negative profit becomes “Batch loss” with an absolute amount. Reset restores defaults and is available only with JavaScript; initial results remain without it. Inputs retain 16px text, and large totals can wrap. The example excludes taxes, fees, and overhead; it is not an earnings claim.
- **Plan rows:** A four-column desktop comparison becomes two columns on mobile, with features and action spanning the row. Growth uses surface fill. Prices and entitlements remain product content, not design tokens.
- **Imagery and provenance:** Keep the original logo assets. `bakery-dispatch.webp` and its 768px alternative provide a labeled AI-generated editorial photograph; `cookie-batch.webp` is the existing illustrative batch thumbnail. Preserve their adjacent generation/provenance records. Both page photographs load lazily; neither is customer evidence.

The schemaVersion 2 sidecar supplies component samples, motion, breakpoints, and matching narrative. Samples use live CSS variables with light fallbacks; source JavaScript owns application behavior. No invented tonal ramps, spacing scale, or detector ignores are added.

## Do's and Don'ts

- Do preserve the original KneadIt logo and the self-hosted Bricolage/Manrope pairing.
- Do distinguish interactive control borders from quiet content dividers.
- Do retain visible labels, keyboard focus, reduced motion, and usable non-JavaScript fallbacks.
- Do identify illustrative workflows and generated photographs honestly and retain asset provenance.
- Don't restore the retired butter-and-cocoa palette or single-family heading treatment.
- Don't replace SVG icons with text glyphs or present examples as genuine product captures.
- Don't infer customer endorsement, final user approval, or deployment from this record.

Not canonized: unused CSS variables, one-off shapes as global tokens, and product pricing as visual rules; these are not reusable design-system evidence.
