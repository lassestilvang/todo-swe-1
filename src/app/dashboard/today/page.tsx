import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, Calendar } from "lucide-react"

export default function TodayPage() {
  // This would fetch actual today's tasks
  const todayTasks = [
    {
      id: "1",
      title: "Morning standup meeting",
      completed: true,
      priority: "HIGH",
      dueTime: "09:00 AM"
    },
    {
      id: "2", 
      title: "Review project proposal",
      completed: false,
      priority: "HIGH",
      dueTime: "02:00 PM"
    },
    {
      id: "3",
      title: "Update documentation",
      completed: false,
      priority: "MEDIUM",
      dueTime: "04:00 PM"
    }
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Today's Tasks</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Task
        </Button>
      </div>

      <div className="mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-600">
              {todayTasks.filter(t => t.completed).length} of {todayTasks.length} tasks completed
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {todayTasks.map((task) => (
          <Card key={task.id} className={task.completed ? 'opacity-60' : ''}>
            <CardContent className="p-6">
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
                    <span className="text-sm text-gray-600">{task.dueTime}</span>
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
