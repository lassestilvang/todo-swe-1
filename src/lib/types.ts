export interface Task {
  id: string
  title: string
  description?: string
  dueDate?: Date
  completed: boolean
  priority: 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH'
  estimate?: number // in minutes
  actualTime?: number // in minutes
  isRecurring: boolean
  recurringRule?: string
  listId: string
  userId: string
  subTasks: SubTask[]
  labels: TaskLabel[]
  logs: TaskLog[]
  createdAt: Date
  updatedAt: Date
}

export interface SubTask {
  id: string
  title: string
  completed: boolean
  taskId: string
  createdAt: Date
  updatedAt: Date
}

export interface List {
  id: string
  name: string
  emoji: string
  color: string
  isDefault: boolean
  userId: string
  tasks: Task[]
  createdAt: Date
  updatedAt: Date
}

export interface Label {
  id: string
  name: string
  color: string
  icon?: string
  userId: string
  createdAt: Date
  updatedAt: Date
}

export interface TaskLabel {
  taskId: string
  labelId: string
}

export interface TaskLog {
  id: string
  taskId: string
  action: string
  details?: any
  createdAt: Date
}

export interface User {
  id: string
  name?: string
  email: string
  emailVerified?: Date
  image?: string
  password: string
  tasks: Task[]
  lists: List[]
  createdAt: Date
  updatedAt: Date
}
