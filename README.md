# Next.js 15 Multi-Tenant CMS with Turborepo

A modern, full-stack multi-tenant content management system built with Next.js 15, featuring a public storefront and comprehensive admin dashboard. Organized as a monorepo using Turborepo for optimal development workflow.

## 🚀 Live Demo

> **Note**: This application is actively being developed
> https://turborepo-nextjs.vercel.app/

## ✨ Key Features

### 🏢 Multi-Tenant Architecture
- **Isolated Workspaces**: Each user can create and manage multiple spaces
- **Tenant-Scoped Data**: All content is isolated within spaces
- **Public Configuration**: Designate one space for public display

### 🎨 Content Management System
- **Billboards**: Hero banners with images and promotional content
- **Categories**: Organize content with billboard associations
- **Items**: Multi-image content with featured/archived states
- **Analytics**: Real-time insights and monthly trends

### 🔐 Authentication & Security
- **Clerk Integration**: Secure user authentication
- **Protected Routes**: Admin dashboard requires authentication
- **User-Scoped Access**: Users only see their own content

### 🌐 Public Storefront
- **Homepage**: Featured items and hero billboards
- **Category Pages**: Filtered content displays
- **Item Details**: Individual item pages with galleries
- **Responsive Design**: Mobile-first approach

## 🏗️ Architecture

### Monorepo Structure
```
├── apps/
│   ├── web/           # Next.js 15 main application
│   └── storybook/     # Component documentation
├── packages/
│   ├── ui/            # Shared component library (27+ components)
│   ├── eslint-config/ # Centralized ESLint rules
│   ├── ts-config/     # TypeScript configurations
│   └── tailwind-config/ # Tailwind CSS setup
```

### Technology Stack

#### Core Framework
- **Next.js 15** with App Router and Server Components
- **React 19** with latest features
- **TypeScript** for type safety

#### Database & Storage
- **MongoDB** with Mongoose ODM
- **Cloudinary** for image storage and optimization

#### UI & Styling
- **Tailwind CSS** for utility-first styling
- **Radix UI** primitives for accessibility
- **shadcn/ui** design system
- **Recharts** for analytics visualization

#### Development Tools
- **Turborepo** for monorepo management
- **pnpm** for package management
- **ESLint** & **Prettier** for code quality
- **Storybook** for component development

#### Form & Validation
- **React Hook Form** for form management
- **Zod** for schema validation
- **T3 Env** for environment variable validation

#### State Management
- **Zustand** for client state
- **React Server Components** for server state

## 🚦 Getting Started

### Prerequisites
- Node.js 22.0.0 or higher
- pnpm 10.11.0 or higher
- MongoDB database
- Cloudinary account
- Clerk account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd 2601010000-nextjs-turborepo-app
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Setup**
   ```bash
   # Copy environment template
   cp apps/web/.env.example apps/web/.env.local
   
   # Configure required variables:
   # - NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
   # - CLERK_SECRET_KEY
   # - MONGODB_URI
   # - NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
   # - SPACE_ID (for public site)
   ```

4. **Run Development**
   ```bash
   # Start all apps
   pnpm dev
   
   # Or start specific apps
   pnpm dev --filter=web    # Web app (localhost:3000)
   pnpm dev --filter=sb     # Storybook (localhost:6006)
   ```

## 📝 Available Scripts

### Development
```bash
pnpm dev              # Start all apps in development
pnpm dev --filter=web # Start only web app
pnpm dev --filter=sb  # Start only Storybook
```

### Building & Testing
```bash
pnpm build     # Build all apps and packages
pnpm lint      # Run ESLint across all workspaces
pnpm typecheck # Run TypeScript type checking
pnpm format    # Format code with Prettier
```

### Maintenance
```bash
pnpm clean     # Remove build artifacts
pnpm clean:all # Remove all node_modules and lock files
```

## 📊 Application Features

### Admin Dashboard (`/dashboard`)
- **Space Management**: Create and switch between workspaces
- **Content Creation**: Manage billboards, categories, and items
- **Analytics**: View content metrics and trends
- **User Settings**: Configure workspace preferences

### Public Site
- **Homepage**: Featured items and promotional content
- **Explore**: Browse all items with filtering
- **Categories**: View items by category
- **Blog**: Content marketing section
- **Documentation**: Feature guides and API docs

### API Routes
RESTful API design with full CRUD operations:
- `/api/spaces` - Workspace management
- `/api/spaces/{id}/billboards` - Billboard management
- `/api/spaces/{id}/categories` - Category management
- `/api/spaces/{id}/items` - Item management

## 🎨 Component Library

The `@shared/ui` package includes 27+ production-ready components:

### Layout & Navigation
- Button, Card, Dialog, Sheet
- Command, Dropdown Menu, Popover
- Table, Data Table

### Forms & Inputs
- Input, Label, Checkbox, Select
- Form (with React Hook Form integration)

### Feedback & Display
- Alert, Badge, Toast
- Avatar, Separator, Skeleton

### Complex Components
- Alert Dialog, Modal
- Heading with variants

## 🔧 Development Workflow

### Component Development
1. Create components in `packages/ui/components/ui/`
2. Export from `packages/ui/index.tsx`
3. Document in Storybook
4. Use across apps with `@shared/ui`

### Feature Development
1. Follow feature-based folder structure
2. Separate UI, schemas, and utilities
3. Use shared components and configurations
4. Maintain type safety throughout

### Code Quality
- **ESLint**: Enforced across all workspaces
- **TypeScript**: Strict mode enabled
- **Prettier**: Consistent formatting
- **Husky**: Pre-commit hooks

## 🌍 Deployment

### Environment Variables
```bash
# Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Database
MONGODB_URI=

# Storage
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

# Public Site
SPACE_ID=your_public_space_id
```

### Build Process
```bash
pnpm build
```

The application is optimized for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- **Docker** containers

## 📚 Documentation

- **[Application Features](./FEATURES.md)**: Detailed feature workflows
- **[Claude Instructions](./CLAUDE.md)**: Development guidelines
- **Storybook**: Component documentation at `localhost:6006`

## 🤝 Contributing

1. Follow the established folder structure
2. Use workspace packages for shared code
3. Maintain TypeScript types
4. Document components in Storybook
5. Test thoroughly before commits

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Vercel** for hosting and deployment
- **Clerk** for authentication services
- **Radix UI** for accessible components
- **shadcn** for the design system
- **Turborepo** for monorepo tooling

---

**Built with ❤️ using Next.js 15, Turborepo, and modern web technologies**