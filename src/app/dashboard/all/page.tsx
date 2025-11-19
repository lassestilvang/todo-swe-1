import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function AllTasksPage() {
  // This would fetch all tasks
  const allTasks = [
    {
      id: "1",
      title: "Morning standup meeting",
      completed: true,
      priority: "HIGH",
      dueDate: "Today",
      list: "Work"
    },
    {
      id: "2", 
      title: "Review project proposal",
      completed: false,
      priority: "HIGH",
      dueDate: "Today",
      list: "Work"
    },
    {
      id: "3",
      title: "Buy groceries",
      completed: false,
      priority: "MEDIUM",
      dueDate: "Tomorrow",
      list: "Personal"
    },
    {
      id: "4",
      title: "Gym workout",
      completed: false,
      priority: "LOW",
      dueDate: "Tomorrow",
      list: "Personal"
    },
    {
      id: "5",
      title: "Update documentation",
      completed: false,
      priority: "MEDIUM",
      dueDate: "Friday",
      list: "Work"
    }
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">All Tasks</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Task
        </Button>
      </div>

      <div className="flex space-x-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search tasks..." 
              className="pl-10"
            />
          </div>
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="mb-4">
        <div className="flex space-x-2 text-sm">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
            All ({allTasks.length})
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full">
            Active ({allTasks.filter(t => !t.completed).length})
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full">
            Completed ({allTasks.filter(t => t.completed).length})
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {allTasks.map((task) => (
          <Card key={task.id} className={task.completed ? 'opacity-60' : ''}>
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <Checkbox checked={task.completed} />
                <div className="flex-1">
                  <h3 className={`font-medium ${task.completed ? 'line-through text-gray-500' : ''}`}>
                    {task.title}
                  </h3>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className={`text-xs px-2 py-1 rounded ${
                      task.priority === 'HIGH' ? 'bg-red-100 text-red-800' :
                      task.priority === 'MEDIUM' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {task.priority}
                    </span>
                    <span className="text-sm text-gray-600">{task.dueDate}</span>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded">
                      {task.list}
                    </span>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Edit
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
