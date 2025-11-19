import Link from 'next/link'
import { Home, Calendar, List, Settings } from 'lucide-react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">Todo App</h1>
          <p className="text-sm text-gray-600 mt-1">Welcome to your dashboard</p>
        </div>
        
        <nav className="px-4 pb-4">
          <ul className="space-y-2">
            <li>
              <Link href="/dashboard" className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
                <Home className="w-5 h-5 mr-3" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/dashboard/today" className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
                <Calendar className="w-5 h-5 mr-3" />
                Today
              </Link>
            </li>
            <li>
              <Link href="/dashboard/upcoming" className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
                <Calendar className="w-5 h-5 mr-3" />
                Upcoming
              </Link>
            </li>
            <li>
              <Link href="/dashboard/all" className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
                <List className="w-5 h-5 mr-3" />
                All Tasks
              </Link>
            </li>
            <li>
              <Link href="/dashboard/settings" className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
                <Settings className="w-5 h-5 mr-3" />
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
