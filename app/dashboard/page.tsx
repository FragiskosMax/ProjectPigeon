'use client'

import { useState } from 'react'
import { 
  Plus, 
  Search, 
  Filter, 
  Calendar, 
  Clock, 
  Users, 
  TrendingUp, 
  Brain,
  CheckCircle,
  AlertCircle,
  Clock as ClockIcon,
  BarChart3
} from 'lucide-react'
import { ProjectCard } from '@/components/dashboard/project-card'
import { TaskList } from '@/components/dashboard/task-list'
import { AIInsights } from '@/components/dashboard/ai-insights'
import { QuickActions } from '@/components/dashboard/quick-actions'
import { Navigation } from '@/components/layout/navigation'

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState('')

  // Mock data - in real app this would come from API
  const projects = [
    {
      id: '1',
      name: 'Website Redesign',
      description: 'Complete overhaul of company website',
      progress: 75,
      status: 'active',
      members: 5,
      dueDate: '2024-02-15'
    },
    {
      id: '2',
      name: 'Mobile App Development',
      description: 'iOS and Android app for customer portal',
      progress: 45,
      status: 'active',
      members: 8,
      dueDate: '2024-03-20'
    },
    {
      id: '3',
      name: 'Marketing Campaign',
      description: 'Q1 digital marketing campaign',
      progress: 90,
      status: 'active',
      members: 3,
      dueDate: '2024-01-31'
    }
  ]

  const tasks = [
    {
      id: '1',
      title: 'Design homepage mockups',
      project: 'Website Redesign',
      priority: 'high',
      status: 'in-progress',
      assignee: 'Sarah Johnson',
      dueDate: '2024-01-20'
    },
    {
      id: '2',
      title: 'Set up CI/CD pipeline',
      project: 'Mobile App Development',
      priority: 'urgent',
      status: 'todo',
      assignee: 'Mike Chen',
      dueDate: '2024-01-18'
    },
    {
      id: '3',
      title: 'Review marketing copy',
      project: 'Marketing Campaign',
      priority: 'medium',
      status: 'review',
      assignee: 'Lisa Wang',
      dueDate: '2024-01-22'
    }
  ]

  const stats = [
    { label: 'Active Projects', value: '12', icon: TrendingUp, change: '+2', changeType: 'positive' },
    { label: 'Tasks Due Today', value: '8', icon: Clock, change: '-3', changeType: 'negative' },
    { label: 'Team Members', value: '24', icon: Users, change: '+1', changeType: 'positive' },
    { label: 'Hours Tracked', value: '156', icon: ClockIcon, change: '+12', changeType: 'positive' }
  ]

  return (
    <div className="min-h-screen bg-secondary-50">
      <Navigation />
      <div className="lg:pl-64">
        {/* Header */}
        <header className="bg-white border-b border-secondary-200">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-secondary-900">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary-400" />
                <input
                  type="text"
                  placeholder="Search projects, tasks..."
                  className="pl-10 pr-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="btn-outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </button>
              <button className="btn-primary">
                <Plus className="h-4 w-4 mr-2" />
                New Project
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-secondary-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-secondary-900">{stat.value}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                  <stat.icon className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className={`text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-success-600' : 'text-error-600'
                }`}>
                  {stat.change}
                </span>
                <span className="text-sm text-secondary-500 ml-1">from last week</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Projects Section */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="card-header">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-secondary-900">Active Projects</h2>
                  <button className="btn-ghost text-sm">
                    View All
                  </button>
                </div>
              </div>
              <div className="card-content">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Tasks */}
            <div className="card mt-8">
              <div className="card-header">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-secondary-900">Recent Tasks</h2>
                  <button className="btn-ghost text-sm">
                    View All
                  </button>
                </div>
              </div>
              <div className="card-content">
                <TaskList tasks={tasks} />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* AI Insights */}
            <AIInsights />

            {/* Quick Actions */}
            <QuickActions />

            {/* Upcoming Deadlines */}
            <div className="card">
              <div className="card-header">
                <h3 className="text-lg font-semibold text-secondary-900">Upcoming Deadlines</h3>
              </div>
              <div className="card-content">
                <div className="space-y-4">
                  {tasks.slice(0, 3).map((task) => (
                    <div key={task.id} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        task.priority === 'urgent' ? 'bg-error-500' :
                        task.priority === 'high' ? 'bg-warning-500' : 'bg-success-500'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-secondary-900 truncate">
                          {task.title}
                        </p>
                        <p className="text-xs text-secondary-500">
                          Due {task.dueDate}
                        </p>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        task.status === 'todo' ? 'bg-secondary-100 text-secondary-800' :
                        task.status === 'in-progress' ? 'bg-primary-100 text-primary-800' :
                        task.status === 'review' ? 'bg-warning-100 text-warning-800' :
                        'bg-success-100 text-success-800'
                      }`}>
                        {task.status.replace('-', ' ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
} 