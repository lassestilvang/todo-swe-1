# Task Planner - Project Plan

## Project Setup
1. Initialize Next.js 16 project with TypeScript and Tailwind CSS
2. Set up shadcn/ui components
3. Configure Prisma with SQLite
4. Set up authentication (NextAuth.js)
5. Configure testing with Bun Test
6. Set up Framer Motion for animations
7. Configure View Transitions API

## Database Schema
```prisma
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String    @unique
  emailVerified DateTime?
  image         String?
  password      String
  tasks         Task[]
  lists         List[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

model List {
  id          String   @id @default(cuid())
  name        String
  emoji       String
  color       String
  isDefault   Boolean  @default(false)
  userId      String
  user        User     @relation(fields: [userId], references: [id])
  tasks       Task[]
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Task {
  id            String     @id @default(cuid())
  title         String
  description   String?
  dueDate       DateTime?
  completed     Boolean    @default(false)
  priority      Priority   @default(NONE)
  estimate      Int? // in minutes
  actualTime    Int? // in minutes
  isRecurring   Boolean    @default(false)
  recurringRule String?
  listId        String
  list          List       @relation(fields: [listId], references: [id])
  userId        String
  user          User       @relation(fields: [userId], references: [id])
  subTasks      SubTask[]
  labels        TaskLabel[]
  logs          TaskLog[]
  createdAt     DateTime   @default(now())
  updatedAt     DateTime   @updatedAt
}

model SubTask {
  id          String   @id @default(cuid())
  title       String
  completed   Boolean  @default(false)
  taskId      String
  task        Task     @relation(fields: [taskId], references: [id])
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Label {
  id        String     @id @default(cuid())
  name      String     @unique
  color     String
  icon      String?
  tasks     TaskLabel[]
  userId    String
  user      User       @relation(fields: [userId], references: [id])
  createdAt DateTime   @default(now())
  updatedAt DateTime   @updatedAt
}

model TaskLabel {
  task    Task   @relation(fields: [taskId], references: [id])
  taskId  String
  label   Label  @relation(fields: [labelId], references: [id])
  labelId String
  
  @@id([taskId, labelId])
}

model TaskLog {
  id        String   @id @default(cuid())
  taskId    String
  task      Task     @relation(fields: [taskId], references: [id])
  action    String
  details   Json?
  createdAt DateTime @default(now())
}

enum Priority {
  NONE
  LOW
  MEDIUM
  HIGH
}
```

## Feature Implementation Phases

### Phase 1: Core Infrastructure (Week 1)
- [ ] Set up project structure
- [ ] Configure database and ORM
- [ ] Implement authentication
- [ ] Set up basic routing
- [ ] Create layout components

### Phase 2: Task Management (Week 2)
- [ ] Task CRUD operations
- [ ] List management
- [ ] Subtasks implementation
- [ ] Labels and filtering
- [ ] Basic search functionality

### Phase 3: Views & Scheduling (Week 3)
- [ ] Today view
- [ ] Next 7 days view
- [ ] Upcoming view
- [ ] All tasks view
- [ ] Recurring tasks

### Phase 4: Enhanced Features (Week 4)
- [ ] Natural language processing
- [ ] Smart scheduling suggestions
- [ ] Task templates
- [ ] Export/import functionality
- [ ] Mobile responsiveness

### Phase 5: Polish & Testing (Week 5)
- [ ] Write unit tests
- [ ] Write integration tests
- [ ] Performance optimization
- [ ] Accessibility improvements
- [ ] Final UI/UX polish

## Technical Stack
- **Frontend**: Next.js 16 with App Router
- **Styling**: Tailwind CSS + shadcn/ui
- **Database**: SQLite with Prisma
- **Authentication**: NextAuth.js
- **Animations**: Framer Motion
- **Testing**: Bun Test
- **Form Handling**: React Hook Form + Zod
- **Date Handling**: date-fns
- **Icons**: Lucide React

## Project Structure
```
/src
  /app
    /(auth)
      /login
      /register
    /dashboard
      /[listId]
      /tasks/[taskId]
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
```

## Getting Started
1. Clone the repository
2. Install dependencies: `bun install`
3. Set up environment variables:
   ```
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_SECRET="your-secret-here"
   NEXTAUTH_URL="http://localhost:3000"
   ```
4. Run database migrations: `bun prisma migrate dev`
5. Start development server: `bun run dev`

## Development Workflow
- Use feature branches for new features
- Write tests for all new features
- Keep commits small and focused
- Open a pull request for code review
- Run tests before pushing changes

## Testing
Run the test suite:
```bash
bun test
```

## Deployment
1. Build the application: `bun run build`
2. Start the production server: `bun start`

## Future Improvements
- Mobile app (React Native)
- Browser extension
- Desktop app (Tauri/Electron)
- API for third-party integrations
- Team collaboration features
