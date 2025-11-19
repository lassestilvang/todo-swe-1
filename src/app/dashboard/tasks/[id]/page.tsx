import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface TaskPageProps {
  params: {
    id: string
  }
}

export default function TaskPage({ params }: TaskPageProps) {
  // This would fetch the actual task data
  const task = {
    id: params.id,
    title: "Sample Task",
    description: "This is a sample task description",
    completed: false,
    priority: "HIGH",
    dueDate: new Date(),
    subTasks: [
      { id: "1", title: "Subtask 1", completed: true },
      { id: "2", title: "Subtask 2", completed: false },
    ]
  }

  return (
    <div>
      <div className="mb-6">
        <Link href="/dashboard">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{task.title}</h1>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span className={`px-2 py-1 rounded ${
            task.priority === 'HIGH' ? 'bg-red-100 text-red-800' :
            task.priority === 'MEDIUM' ? 'bg-yellow-100 text-yellow-800' :
            task.priority === 'LOW' ? 'bg-green-100 text-green-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {task.priority}
          </span>
          <span>Due: {task.dueDate?.toLocaleDateString()}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{task.description}</p>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Subtasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {task.subTasks.map((subTask) => (
                  <div key={subTask.id} className="flex items-center space-x-3">
                    <Checkbox checked={subTask.completed} />
                    <span className={subTask.completed ? 'line-through text-gray-500' : ''}>
                      {subTask.title}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full">Edit Task</Button>
              <Button variant="outline" className="w-full">Add Subtask</Button>
              <Button variant="destructive" className="w-full">Delete Task</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
