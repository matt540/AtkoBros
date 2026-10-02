# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### `artifacts/atko-bros` — Atko Bros Landscaping Website
- React + Vite frontend-only portfolio site
- White/light theme with dark forest green primary, black text
- Playfair Display serif + Outfit sans-serif fonts
- Sections: Hero, Services (9 services), About, Portfolio (gallery), Stats bar, Testimonials, Service Area, Contact, Footer
- Real company logo at `public/logo.png`
- Phone: (203) 253-1089
- Location: Greenwich, CT — serving Southern CT
- Packages: framer-motion, react-hook-form, @hookform/resolvers, zod, clsx, tailwind-merge

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   ├── api-server/         # Express API server
│   └── atko-bros/          # Atko Bros Landscaping website
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts
├── pnpm-workspace.yaml
├── tsconfig.base.json
├── tsconfig.json
└── package.json
```
