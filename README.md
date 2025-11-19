# Todo App

A modern task management application built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- Task management with priorities and due dates
- Subtasks and labels
- Multiple views (Today, Upcoming, All Tasks)
- Modern UI with shadcn/ui components
- SQLite database with Prisma
- Authentication with NextAuth.js
- Responsive design

## Getting Started

1. Install dependencies:
   \`\`\`bash
   bun install
   \`\`\`

2. Set up environment variables:
   \`\`\`bash
   cp .env.local.example .env.local
   \`\`\`

3. Run database migrations:
   \`\`\`bash
   bun run db:migrate
   \`\`\`

4. Start the development server:
   \`\`\`bash
   bun run dev
   \`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
/src
  /app
    /(auth)
      /login
      /register
    /dashboard
      /tasks/[id]
      /today
      /upcoming
      /all
    /api
      /tasks
      /lists
      /labels
  /components
    /ui         # shadcn components
    /layout     # Layout components
    /tasks      # Task-related components
    /lists      # List-related components
    /shared     # Shared components
  /lib
    /db         # Database client and utilities
    /auth       # Authentication utilities
    /hooks      # Custom hooks
    /types      # TypeScript types
    /utils      # Utility functions
  /styles       # Global styles
  /public       # Static assets
\`\`\`

## Scripts

- \`bun run dev\` - Start development server
- \`bun run build\` - Build for production
- \`bun run start\` - Start production server
- \`bun run test\` - Run tests
- \`bun run db:studio\` - Open Prisma Studio
- \`bun run db:migrate\` - Run database migrations
- \`bun run db:generate\` - Generate Prisma client

## Tech Stack

- **Frontend**: Next.js 16 with App Router
- **Styling**: Tailwind CSS + shadcn/ui
- **Database**: SQLite with Prisma
- **Authentication**: NextAuth.js
- **Animations**: Framer Motion
- **Testing**: Bun Test
- **Form Handling**: React Hook Form + Zod
- **Date Handling**: date-fns
- **Icons**: Lucide React
