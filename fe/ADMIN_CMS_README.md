# Admin CMS Setup Guide

This project includes a headless CMS admin panel built with Refine, Next.js 16, shadcn/ui, and Supabase.

## Features

- Full-featured admin dashboard
- Authentication with Supabase
- CRUD operations for Posts and Categories
- Beautiful UI components from shadcn/ui
- Real-time data updates with Supabase
- Type-safe with TypeScript
- Form validation with react-hook-form
- Data tables with TanStack Table

## Setup Instructions

### 1. Supabase Setup

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Create the required database tables:

#### Posts Table

```sql
create table posts (
  id bigserial primary key,
  title text not null,
  content text not null,
  status text not null default 'draft',
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Enable RLS (Row Level Security)
alter table posts enable row level security;

-- Create policies (adjust based on your needs)
create policy "Enable read access for all users" on posts
  for select using (true);

create policy "Enable insert for authenticated users only" on posts
  for insert with check (auth.role() = 'authenticated');

create policy "Enable update for authenticated users only" on posts
  for update using (auth.role() = 'authenticated');

create policy "Enable delete for authenticated users only" on posts
  for delete using (auth.role() = 'authenticated');
```

#### Categories Table

```sql
create table categories (
  id bigserial primary key,
  name text not null,
  description text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Enable RLS (Row Level Security)
alter table categories enable row level security;

-- Create policies (adjust based on your needs)
create policy "Enable read access for all users" on categories
  for select using (true);

create policy "Enable insert for authenticated users only" on categories
  for insert with check (auth.role() = 'authenticated');

create policy "Enable update for authenticated users only" on categories
  for update using (auth.role() = 'authenticated');

create policy "Enable delete for authenticated users only" on categories
  for delete using (auth.role() = 'authenticated');
```

3. Create an admin user in Supabase Authentication

### 2. Environment Variables

1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Update the Supabase credentials in `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

Get these values from your Supabase project settings: https://app.supabase.com/project/_/settings/api

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

### 5. Access the Admin Panel

Navigate to `http://localhost:3000/admin` in your browser.

## Admin Routes

- `/admin` - Dashboard
- `/admin/login` - Login page
- `/admin/posts` - Posts list
- `/admin/posts/create` - Create new post
- `/admin/posts/edit/[id]` - Edit post
- `/admin/posts/show/[id]` - View post
- `/admin/categories` - Categories list
- `/admin/categories/create` - Create new category
- `/admin/categories/edit/[id]` - Edit category
- `/admin/categories/show/[id]` - View category

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Admin Framework**: Refine
- **Database & Auth**: Supabase
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Forms**: react-hook-form
- **Tables**: TanStack Table
- **Type Safety**: TypeScript

## Customization

### Adding New Resources

To add a new resource (e.g., "Products"):

1. Add the resource to the Refine config in `src/app/admin/layout.tsx`:

```tsx
{
  name: "products",
  list: "/admin/products",
  create: "/admin/products/create",
  edit: "/admin/products/edit/:id",
  show: "/admin/products/show/:id",
  meta: {
    canDelete: true,
  },
}
```

2. Create the necessary pages following the same structure as posts/categories
3. Create the corresponding table in Supabase

### Customizing UI Components

All UI components are located in `src/components/ui/` and can be customized to match your brand.

## Security Notes

- Always enable Row Level Security (RLS) on your Supabase tables
- Create appropriate policies for your use case
- Never commit `.env.local` to version control
- Consider implementing role-based access control for production use

## Support

For issues or questions:
- Check the [Refine documentation](https://refine.dev/docs/)
- Check the [Supabase documentation](https://supabase.com/docs)
- Check the [shadcn/ui documentation](https://ui.shadcn.com/)
