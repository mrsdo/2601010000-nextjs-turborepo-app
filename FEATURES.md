# Application Features & Workflows

This document explains how the core features work in this Next.js application - a multi-tenant content management system with public storefront capabilities.

## Overview

This application is a **multi-tenant CMS** where users can create isolated workspaces (spaces) to manage promotional content, categories, items, and analytics. The system supports both admin management and public content display.

## Core Concepts

### Data Hierarchy
```
User (Clerk Authentication)
└── Space (Isolated workspace/tenant)
    ├── Billboard (Hero banners with images)
    ├── Category → Billboard (Content groupings)
    ├── Item → Category → Billboard (Main content items)
    └── Course (Educational content - planned feature)
```

---

## 1. Space Feature

### What is a Space?
A **Space** is the top-level organizational unit representing an isolated workspace where users manage their content. Think of it as a tenant in a multi-tenant SaaS application.

### Data Model
```typescript
type Space = {
  _id: ObjectId
  name: string         // Max 30 characters
  userId: string       // Owner (Clerk user ID)
  createdAt: Date
  updatedAt: Date
}
```

### Key Features
- **Multi-tenant**: Each user can own multiple spaces
- **Isolation**: All content is scoped within a space
- **Switching**: Users can switch between spaces via SpaceSwitcher component
- **Public Configuration**: One space is designated for public display via `SPACE_ID` environment variable

### Workflows

#### Admin Workflow
1. **Create Space**: User creates a new workspace
2. **Space Selection**: User selects active space from sidebar
3. **Content Management**: All subsequent operations are scoped to selected space
4. **Space Settings**: Update name or delete space

#### API Routes
- `POST /api/spaces` - Create new space
- `GET /api/spaces/{spaceId}` - Get space details
- `PATCH /api/spaces/{spaceId}` - Update space name
- `DELETE /api/spaces/{spaceId}` - Delete space and all content

---

## 2. Billboard Feature

### What is a Billboard?
A **Billboard** is a promotional banner/hero section with an image and text label, used for featured content or promotions.

### Data Model
```typescript
type Billboard = {
  _id: ObjectId
  spaceId: string      // Parent space
  label: string        // Max 70 characters
  imageUrl: string     // Cloudinary image URL
  createdAt: Date
  updatedAt: Date
}
```

### Key Features
- **Image Upload**: Integration with Cloudinary for image storage
- **Space Scoped**: Each billboard belongs to a specific space
- **Category Link**: Categories are linked to billboards for thematic grouping
- **Public Display**: Used as hero banners on public site

### Workflows

#### Admin Workflow
1. **Create Billboard**: Admin uploads image and adds label text
2. **Manage Billboards**: View list, edit, or delete existing billboards
3. **Link to Categories**: When creating categories, select which billboard to associate

#### Public Workflow
- **Homepage Display**: Featured as hero banners
- **Category Pages**: Billboard displays when viewing category items

#### API Routes
- `POST /api/spaces/{spaceId}/billboards` - Create billboard
- `GET /api/spaces/{spaceId}/billboards` - List billboards
- `PATCH /api/spaces/{spaceId}/billboards/{billboardId}` - Update billboard
- `DELETE /api/spaces/{spaceId}/billboards/{billboardId}` - Delete billboard

#### Dependencies
- **Cannot Delete**: Billboard cannot be deleted if linked to categories
- **Cascade Protection**: System prevents orphaned categories

---

## 3. Category Feature

### What is a Category?
A **Category** groups related items together and is visually associated with a specific billboard for thematic consistency.

### Data Model
```typescript
type Category = {
  _id: ObjectId
  spaceId: string      // Parent space
  billboardId: string  // Associated billboard
  name: string         // Max 70 characters
  createdAt: Date
  updatedAt: Date
}
```

### Key Features
- **Billboard Association**: Each category links to a billboard for visual theming
- **Item Grouping**: Categories contain multiple items
- **Public Navigation**: Categories appear in public navigation

### Workflows

#### Admin Workflow
1. **Create Category**: Select name and associated billboard
2. **Manage Items**: Add/remove items within the category
3. **Update Category**: Change name or billboard association
4. **Delete Category**: Remove category and handle item relationships

#### Public Workflow
- **Browse Categories**: Users can filter items by category
- **Category Pages**: Display category items with associated billboard

#### API Routes
- `POST /api/spaces/{spaceId}/categories` - Create category
- `GET /api/spaces/{spaceId}/categories` - List categories
- `PATCH /api/spaces/{spaceId}/categories/{categoryId}` - Update category
- `DELETE /api/spaces/{spaceId}/categories/{categoryId}` - Delete category

---

## 4. Item Feature

### What is an Item?
An **Item** is the core content entity representing products, articles, or any displayable content. Items support multiple images and can be featured or archived.

### Data Model
```typescript
type Item = {
  _id: ObjectId
  spaceId: string      // Parent space
  categoryId: string   // Parent category
  name: string         // Max 70 characters
  images: string[]     // Array of Cloudinary URLs
  isFeatured: boolean  // Show on homepage
  isArchived: boolean  // Hide from public
  createdAt: Date
  updatedAt: Date
}
```

### Key Features
- **Multi-Image Support**: Items can have multiple images via Cloudinary
- **Featured System**: Featured items appear prominently on homepage
- **Archive System**: Archived items are hidden from public view
- **Category Grouping**: Items belong to categories for organization

### Workflows

#### Admin Workflow
1. **Create Item**: Add name, select category, upload images
2. **Feature Item**: Toggle featured status for homepage display
3. **Archive Item**: Hide items from public without deletion
4. **Manage Images**: Add/remove multiple images per item

#### Public Workflow
- **Homepage Featured**: Featured items display on homepage
- **Category Browsing**: Items grouped by category
- **Item Details**: Individual item pages with image gallery
- **Search & Filter**: Items can be searched and filtered

#### API Routes
- `POST /api/spaces/{spaceId}/items` - Create item
- `GET /api/spaces/{spaceId}/items` - List items
- `PATCH /api/spaces/{spaceId}/items/{itemId}` - Update item
- `DELETE /api/spaces/{spaceId}/items/{itemId}` - Delete item

---

## 5. Course Feature

### What is a Course?
A **Course** represents educational content with a title and associated image. This appears to be a planned feature with basic structure in place.

### Data Model
```typescript
type Course = {
  _id: ObjectId
  spaceId: string      // Parent space
  title: string        // Max 70 characters
  imageUrl: string     // Course image
  createdAt: Date
  updatedAt: Date
}
```

### Current State
- **Basic Schema**: Only CRUD operations defined
- **Limited Integration**: Not fully integrated into main workflows
- **Future Feature**: Planned expansion for educational content

---

## 6. Analytics Feature

### What Analytics are Tracked?
The analytics system provides quantitative insights into content within each space:

#### Tracked Metrics
1. **Total Billboards** - Count of all billboards in space
2. **Total Categories** - Count of all categories in space  
3. **Total Items** - Count of all items in space
4. **Monthly Item Creation** - 12-month chart of items created per month

### Data Sources
Analytics are calculated in real-time using MongoDB aggregation:

```typescript
const getOverview = async (spaceId: string) => {
  const totalBillboards = await countAllBillboardsBySpaceId(spaceId)
  const totalCategories = await countAllCategoriesBySpaceId(spaceId)
  const totalItems = await countAllItemsBySpaceId(spaceId)
  const monthlyItems = await countAllItemsByMonthBySpaceId(spaceId)
}
```

### Dashboard Display
- **Overview Cards**: Total counts with icons
- **Monthly Chart**: Bar chart showing item creation trends
- **Real-time**: Data refreshes on each page load

---

## Public Site Integration

### Environment Configuration
The public site displays content from a single space configured via:
```bash
SPACE_ID=your_space_id_here
```

### Public Features
1. **Homepage**: 
   - Displays billboard as hero
   - Shows featured items
   - Category navigation

2. **Category Pages**:
   - Items filtered by category
   - Associated billboard display
   - Item grid layout

3. **Item Pages**:
   - Individual item details
   - Image gallery
   - Related item suggestions

---

## Technical Implementation

### Database
- **MongoDB** with Mongoose ODM
- **Aggregation Pipelines** for analytics
- **Proper Relationships** between collections

### Authentication & Authorization
- **Clerk** for user authentication
- **User-scoped** data access
- **API route protection** for admin operations

### File Storage
- **Cloudinary** for image storage
- **Environment-based** upload presets
- **Multi-image** support per item

### API Architecture
- **Next.js App Router** API routes
- **RESTful** design patterns
- **Async/await** for Next.js 15 compatibility
- **Error handling** and validation

### Frontend
- **React** with TypeScript
- **Radix UI** components
- **Tailwind CSS** styling
- **React Hook Form** with Zod validation
- **Recharts** for analytics visualization

---

This application serves as a sophisticated multi-tenant CMS with both admin management capabilities and public content display, making it suitable for businesses that need to manage promotional content, product catalogs, or content marketing materials.