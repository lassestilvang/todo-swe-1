import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { z } from 'zod'

const createTaskSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  priority: z.enum(['NONE', 'LOW', 'MEDIUM', 'HIGH']).default('NONE'),
  dueDate: z.string().optional().transform(val => val ? new Date(val) : null),
  listId: z.string().optional(),
})

export async function GET(request: NextRequest) {
  try {
    const tasks = await prisma.task.findMany({
      include: {
        subtasks: true,
        labels: {
          include: {
            label: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(tasks)
  } catch (error) {
    console.error('Error fetching tasks:', error)
    return NextResponse.json(
      { error: 'Failed to fetch tasks' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, description, priority, dueDate, listId } = createTaskSchema.parse(body)

    // For demo purposes, we'll use a default user ID
    // In a real app, this would come from the authenticated session
    const task = await prisma.task.create({
      data: {
        title,
        description,
        priority,
        dueDate,
        listId: listId || 'default-list-id',
        userId: 'default-user-id',
      },
      include: {
        subtasks: true,
        labels: {
          include: {
            label: true
          }
        }
      }
    })

    return NextResponse.json(task, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      )
    }

    console.error('Error creating task:', error)
    return NextResponse.json(
      { error: 'Failed to create task' },
      { status: 500 }
    )
  }
}
