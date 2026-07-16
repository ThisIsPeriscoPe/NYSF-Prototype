# DEV NOTES — NYSF Website Prototype

Reference for the development team. Four categories: placeholder content, custom dev required, plugin-dependent, and content NYSF must be able to edit easily in the CMS.

---

## 1. Placeholder content (not final)

| Where | What |
|---|---|
| Donate page | **Entire donation payment module is a visual placeholder** — amounts UI, frequency toggle and button are non-functional and subject to change pending dev parameters / available payment plugins. |
| Supporters & donors page | "Supporter voices / Why people give" testimonial quotes are placeholders — NYSF to supply real quotes (flagged TBD in their copy doc). |
| Resources / News + article page | All story cards, the article itself, categories and images are placeholders. Three real story *titles* are used on homepage/hub Outlook cards but link to the placeholder article. |
| Impact page | Stats and "read the full report" link partially placeholder — NYSF supplied some figures (15k+ alumni, 750+/yr, 46% regional, 61% female & gender diverse, 74% financial assistance, $91,130 scholarships 2026) but no full impact-page copy doc. |
| Contact page | Address/phone/email/map and form are placeholders — pull real details from NYSF (registered office is at ANU Campus, Leonard Huxley Building, 56 Mills Rd Acton ACT, per the T&Cs doc). |
| Partner logos | Text-only logo placeholders in the partner strips (homepage, program pages, partners page). Replace with real logo files. Client copy requests a **rolling/marquee ticker** — see §2. |
| Team NYSF | Andrew Giumelli has no supplied headshot — placeholder image in place. |
| Board photos | Three supplied photo files had ambiguous names (`photo…`, `picture-1…`, `image003…`). Simon Cubitt and Tanya Monro confirmed by client (16 Jul 2026); **Subho Banerjee (`picture-1…`) still to be verified by NYSF.** |
| Form/link stand-ins | "Stay in touch" (alumni mailing list), STEM Hubs "Register interest" EOI, SSLP "Apply now", alumni submission form — all currently point to contact.html until real form URLs exist. |
| Year 12 "Apply now" | Points to how-to-apply.html; the actual application portal URL is TBD. |
| Hero/section photography | Drawn from the supplied photo set but crops/choices are illustrative; NYSF may re-select per page. |

## 2. Requires custom development

- **Donation payment flow** — checkout, receipts, recurring giving, tax statements. Build against chosen gateway/platform (see §3).
- **"Find your path" guided-entry tool** (homepage) — custom component (approved exception to the module-library rule). Audience/intent state machine with per-intent routing; routes currently map to prototype pages and must be re-pointed at CMS URLs.
- **Partner logo marquee** — client copy asks for a "rolling logo ticker"; current build is a static native logo strip. If the ticker is wanted, it's a small custom CSS animation over the existing `.partners` module.
- **Form handling** — partnership enquiry (partners page), contact form, newsletter signup (footer, all pages). Wire to CRM/email per stack.
- **Search** — header search icon is non-functional.
- **Carousels / counters / tabs** — already implemented in vanilla JS (testimonial carousel, animated stat counters, summit day-tabs); no library needed, port as-is.

## 3. Subject to plugin / platform choice

- **Donations**: gateway or platform TBD (e.g. Stripe, Raisely, GiveNow, Grassrootz). The donate module's preset amounts ($50 / $350 / $3,180 / other; one-off vs monthly) come from NYSF's copy doc and should carry over regardless of vendor.
- **Newsletter (NYSF Outlook)**: footer signup on every page — depends on email platform (existing Outlook system / Mailchimp / Campaign Monitor).
- **Events & registration**: Summit registration currently links out to Eventbrite (real 2026 URL is wired in). Could be embedded via Eventbrite widget instead.
- **Forms**: enquiry/contact/EOI forms depend on the CMS form plugin of choice.
- **Policy PDFs**: currently static files in `assets/policies/`; move to the CMS media library so NYSF can update policies without a deploy.

## 4. NYSF must be able to edit easily (CMS fields, not code)

- **Program facts**: dates, sessions, locations, fees ($3,180 program fee, $70 application fee, $80 Hub ticket, $250 Summit ticket), application open/close dates (currently "close Thursday 23 July 2026"), and the "Applications are open" CTA band text. These change every cycle.
- **Stats everywhere**: all stat-band numbers (years, alumni, students/year, percentages, scholarship dollars).
- **FAQ accordions** on all program pages and how-to-apply.
- **Testimonials**: student, summit-delegate, scholarship and (future) supporter quotes.
- **Board & Team grids** (who-we-are): names, roles, photos, ordering — people change.
- **Values cards** (who-we-are).
- **Story/news cards**: homepage + hub "Outlook" cards and the resources listing.
- **Partner logos** and their ordering.
- **Policy document list** (policies page).
- **Donate tier amounts and impact lines**.
- **Hero copy** per page (headline, subhead, button labels/URLs).

---

*Build rule reminder (see BUILD-RULES.md in the parent project folder): pages are assembled only from the theme-native module library in `nysf-component-library/` — don't introduce bespoke components; the guided-entry tool and donation selector are the two approved exceptions.*
