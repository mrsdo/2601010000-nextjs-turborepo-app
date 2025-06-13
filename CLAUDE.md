# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `pnpm dev` - Start all apps in development mode (web app on port 3000, Storybook on port 6006)
- `pnpm dev --filter=web` - Start only the web app
- `pnpm dev --filter=sb` - Start only Storybook

### Building & Testing
- `pnpm build` - Build all apps and packages
- `pnpm lint` - Run ESLint across all apps and packages
- `pnpm typecheck` - Run TypeScript type checking across all apps and packages
- `pnpm format` - Format code with Prettier

### Cleaning
- `pnpm clean` - Remove build artifacts and .turbo cache
- `pnpm clean:all` - Remove all node_modules and lock files

## Architecture

This is a **Turborepo monorepo** with:

### Apps
- **`apps/web`**: Next.js 14 app with app directory, Server Components, MongoDB, Clerk auth
- **`apps/storybook`**: Component documentation and testing

### Shared Packages
- **`@shared/ui`**: shadcn/ui-based component library with 27+ components (Button, Card, Dialog, Form, etc.)
- **`@shared/eslint-config`**: Centralized ESLint rules for all apps
- **`@shared/ts-config`**: TypeScript configurations (base, Next.js, React library)
- **`@shared/tailwind-config`**: Tailwind CSS configuration with shadcn preset

### Key Technologies
- **Authentication**: Clerk (protects `/dashboard` routes)
- **Database**: MongoDB with Mongoose ODM
- **Styling**: Tailwind CSS + shadcn/ui design system
- **Forms**: React Hook Form + Zod validation
- **State**: Zustand for client state
- **Package Manager**: pnpm with workspaces

### Application Structure (Web App)
- **Public routes**: `/`, `/blog`, `/docs`, `/explore`, `/terms`, `/privacy`
- **Protected routes**: `/dashboard` (requires Clerk authentication)
- **API routes**: RESTful APIs for spaces, billboards, categories, items in `/api`
- **Features**: Organized by domain (admin, public) with UI, schemas, utilities separation
- **Environment**: T3 Env for type-safe environment variables

### UI Component System
- Built on **Radix UI** primitives for accessibility
- **Class Variance Authority (CVA)** for component variants
- Components organized by atomic design (atoms/molecules/organisms in Storybook)

When working with this codebase:
- Use workspace protocol (`workspace:*`) for internal package references
- Follow the established feature-based folder structure in the web app
- Leverage shared packages to maintain consistency across apps
- Ensure protected routes use Clerk authentication patterns
- **Next.js 15 Migration**: 
  - All params in pages and API routes are now async and must be awaited (e.g., `const { slug } = await params`)
  - All Clerk `auth()` calls must be awaited (e.g., `const { userId } = await auth()`)
  - Dynamic APIs like `headers()`, `cookies()` must be awaited