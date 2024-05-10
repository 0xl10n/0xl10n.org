- Fix Turborepo / Docusauras build being stuck on Github Actions (but not
  locally). Note that because of this `"@repo/docs": "workspace:*"` is removed
  from dependencies on `apps/landing/package.json`.
  Potentially relevant issues:
  - https://github.com/facebook/docusaurus/issues/9754
  - https://github.com/vercel/turbo/issues/1186
