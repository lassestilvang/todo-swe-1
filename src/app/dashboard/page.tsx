import { MotionContainer } from '@/components/motion/motion-container'
import { AnimatedCard, AnimatedCardHeader, AnimatedCardTitle, AnimatedCardContent } from '@/components/ui/animated-card'
import { Calendar, CheckCircle, Clock, ListTodo } from 'lucide-react'

export default function DashboardPage() {
  const stats = [
    {
      title: 'Today\'s Tasks',
      value: '3',
      icon: <Calendar className="w-6 h-6" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Completed',
      value: '12',
      icon: <CheckCircle className="w-6 h-6" />,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      title: 'In Progress',
      value: '5',
      icon: <Clock className="w-6 h-6" />,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
    },
    {
      title: 'Total Tasks',
      value: '20',
      icon: <ListTodo className="w-6 h-6" />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ]

  const recentTasks = [
    { id: 1, title: 'Review project proposal', completed: false, priority: 'HIGH' },
    { id: 2, title: 'Update documentation', completed: true, priority: 'MEDIUM' },
    { id: 3, title: 'Team meeting preparation', completed: false, priority: 'LOW' },
  ]

  return (
    <MotionContainer>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back!</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <AnimatedCard key={stat.title} delay={index * 0.1}>
              <AnimatedCardHeader>
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <div className={stat.color}>{stat.icon}</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                </div>
              </AnimatedCardHeader>
              <AnimatedCardContent>
                <p className="text-sm text-gray-600">{stat.title}</p>
              </AnimatedCardContent>
            </AnimatedCard>
          ))}
        </div>

        {/* Recent Tasks */}
        <AnimatedCard delay={0.5}>
          <AnimatedCardHeader>
            <AnimatedCardTitle>Recent Tasks</AnimatedCardTitle>
          </AnimatedCardHeader>
          <AnimatedCardContent>
            <div className="space-y-3">
              {recentTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      className="w-4 h-4 text-blue-600 rounded"
                      readOnly
                    />
                    <span className={`text-sm ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                      {task.title}
                    </span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    task.priority === 'HIGH' ? 'bg-red-100 text-red-600' :
                    task.priority === 'MEDIUM' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {task.priority}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedCardContent>
        </AnimatedCard>
      </div>
    </MotionContainer>
  )
}
