# NYSF website — handover

**PeriscoPe (design) → NYSF build team.** August 2026.

## What's here

```
prototype/                  the site, 26 pages, real client copy — open index.html
nysf-component-library/     brand.css (the whole design system) + 7 kit pages
assets/                     images, headshots, logos, brand icons, videos + captions, policy PDFs
                            favicon/ — full icon set (.ico, PNG sizes, apple-touch, webmanifest)
                            logo/ — NYSF lockup, white and navy versions
```

**UAT tracker** (design, dev and client all log here):
[NYSF x PeriscoPe Site Launch | Testing Results Compilation](https://docs.google.com/spreadsheets/d/1k42of9Po2vtV2a9XMJ_aQES75U6w2K4aaXBAwiwau7M/edit?usp=sharing)

## Which module is which

Open any prototype page and press **Shift+M** (or add `?modules=1` to the URL). Every section is
labelled with the module it uses and whether it's theme-native, a plugin or a custom build. The same
info is on each `<section>` in the markup as `data-module` / `data-build`, so it's there when you're
reading the code too. The kit pages in `nysf-component-library/` show each module in isolation.

## Not theme-native

| | What | Where |
|---|---|---|
| **Custom** | Guided entry tool ("Not sure where you fit?") | Homepage |
| **Custom** | Board bio modal — click a person, bio opens | Who we are |
| **Custom** | Donation amount selector (visual only, replace with the platform's own UI) | Donate |
| **Plugin** | Forms | Contact, partnership enquiry, newsletter, STEM Hubs EOI |
| **Plugin** | Payments — platform not yet chosen | Donate |
| **Plugin** | Newsletter — client's "NYSF Outlook" platform | Footer, every page |

Everything else is a theme-native module, reused across pages.

## Placeholder content

Stories (all cards and the article), contact details, supporter testimonials, the donation payment
module, and one headshot (Andrew Giumelli). The Impact page is on hold — the client wants it reduced to
an annual report download once they supply the PDF. Every "Apply now" on the site points at one URL,
currently a stand-in until the client provides the application portal link.

Placeholders are flagged inline in the markup as `<!-- DEV NOTE ... -->`.

## Also expect

- **Blog migration.** The client has asked how their existing articles move across and is waiting on an
  answer from you. Design has supplied one story template; every article uses it.
- **Updated project timeline** to the client, covering build, content load, UAT and launch.
- **CMS handover session.** They maintain the site in-house — dates, fees, stats, stories, testimonials,
  people, logos and policy PDFs all need to be editable by them, and they'll need walking through it.

## Worth knowing

- Fonts: Bricolage Grotesque (display), Figtree (body), Fraunces italic (quotes). All open-source.
- Favicon is the NYSF roundel on navy, generated from the supplied logo, wired into every page with
  `apple-touch-icon`, webmanifest and `theme-color`. Swap in the client's own icon if they have one.
- The navy logo lockup is derived from the supplied white version — fine for screen, but ask the client
  for the master artwork before it goes near print.
- Video captions are supplied as WebVTT — accessibility requirement, keep them.
- Supplied logos had white backgrounds; all have been processed to transparent. New ones will need the same.
- Colour pairs are set to the brand kit's WCAG 2.2 AA table. Gold is never used as text on cream.
- `brand.css` uses generic class names (`.split`, `.cta`, `.prog`) — namespace it if your theme has its own.

Questions: **Joey — joey@good-apples.com.au**
