import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus } from "lucide-react"

export default function UpcomingPage() {
  // This would fetch actual upcoming tasks
  const upcomingTasks = [
    {
      id: "1",
      title: "Team meeting",
      completed: false,
      priority: "HIGH",
      dueDate: "Tomorrow",
      daysFromNow: 1
    },
    {
      id: "2", 
      title: "Project deadline",
      completed: false,
      priority: "HIGH",
      dueDate: "Friday",
      daysFromNow: 3
    },
    {
      id: "3",
      title: "Code review",
      completed: false,
      priority: "MEDIUM",
      dueDate: "Next Monday",
      daysFromNow: 7
    },
    {
      id: "4",
      title: "Update dependencies",
      completed: false,
      priority: "LOW",
      dueDate: "Next Wednesday",
      daysFromNow: 9
    }
  ]

  const groupedTasks = upcomingTasks.reduce((acc, task) => {
    const key = task.daysFromNow <= 1 ? 'Today' : 
                task.daysFromNow <= 7 ? 'This Week' : 
                'Next Week'
    if (!acc[key]) acc[key] = []
    acc[key].push(task)
    return acc
  }, {} as Record<string, typeof upcomingTasks>)

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Upcoming Tasks</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Task
        </Button>
      </div>

      <div className="space-y-6">
        {Object.entries(groupedTasks).map(([group, tasks]) => (
          <div key={group}>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">{group}</h2>
            <div className="space-y-3">
              {tasks.map((task) => (
                <Card key={task.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <Checkbox checked={task.completed} />
                      <div className="flex-1">
                        <h3 className="font-medium">{task.title}</h3>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className={`text-xs px-2 py-1 rounded ${
                            task.priority === 'HIGH' ? 'bg-red-100 text-red-800' :
                            task.priority === 'MEDIUM' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {task.priority}
                          </span>
                          <span className="text-sm text-gray-600">{task.dueDate}</span>
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
        ))}
      </div>
    </div>
  )
}
