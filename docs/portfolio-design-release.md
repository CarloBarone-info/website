# Portfolio release candidate — design work & research

## Scope

- Homepage and project listing share one data-driven project catalogue and collection component.
- Neovici, FicSon and Sonifying Hourglass are the featured studies; GitHub has a separate engineering category and creative work stays visible.
- Shared overview, role/method/outcome facts, takeaway and adjacent navigation on selected cases.
- FicSon evaluation and reflection; Hourglass study comparison; Neovici's recurring UX-to-engineering workflow (no confidential example or invented metrics).
- Expanded KTH research and teaching overview.
- Fluid grids, responsive headings, long-word handling, theme tokens, keyboard focus, lazy video, and corrected document landmarks.
- Regression tests for discovery, catalogue, case navigation and semantic structure.
- No new dependency, route changes, CV replacements or removal of events/creative content.

## Before publishing

Run `npm ci`, `npm run lint`, `npm run typecheck`, `npm run test` and `npm run build` on Node 24. Review `npm run dev` or `npm run preview` at 320, 375, 768, 1024 and 1440 CSS pixels, in both themes. Check keyboard links, drawer, case navigation, CV downloads, images, focus, and reduced-motion settings. Existing external media remain external: verify that they render. Verify any Neovici statements against disclosure permissions before merging. Confirm the published research link and claims with the original paper and thesis.

## Follow-up: evidence still needed

- Neovici: one specific, permission-cleared design example (problem, decisions, alternatives, implementation and verified outcome). No fabricated product screenshots or unverified impact metrics.
- KTH: teaching course names, responsibilities and dates; confirm individual research contributions and add original design artifacts.
- FicSon: original sketches, touchscreen photos/screens and evaluation materials, including sufficient permission to publish.
- Education design exploration: interview teachers with consent, synthesise observations, sketch alternatives, prototype, test and document the results. Use fictional classroom data and avoid identifiable student information. Label it independent work, not work for Magma. Publish only after the work exists.
- Consider migrating external images to local assets where licensing/permissions allow. This release deliberately keeps the existing image sources.
