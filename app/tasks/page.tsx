'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus, Search, Filter, Calendar, User, AlertCircle, CheckCircle, Clock, BarChart3 } from 'lucide-react'

interface Task {
  id: string
  title: string
  description: string
  status: 'todo' | 'in-progress' | 'review' | 'done'
  priority: 'low' | 'medium' | 'high'
  assignee: string
  dueDate: string
  project: string
  tags: string[]
}

export default function TasksPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [priorityFilter, setPriorityFilter] = useState<string>('all')

  const tasks: Task[] = [
    {
      id: '1',
      title: 'Design homepage layout',
      description: 'Create wireframes and mockups for the new homepage design',
      status: 'in-progress',
      priority: 'high',
      assignee: 'Sarah Johnson',
      dueDate: '2024-02-10',
      project: 'Website Redesign',
      tags: ['design', 'frontend']
    },
    {
      id: '2',
      title: 'Implement user authentication',
      description: 'Set up JWT authentication with refresh tokens',
      status: 'todo',
      priority: 'high',
      assignee: 'Mike Chen',
      dueDate: '2024-02-15',
      project: 'Mobile App Development',
      tags: ['backend', 'security']
    },
    {
      id: '3',
      title: 'Write API documentation',
      description: 'Create comprehensive API documentation for developers',
      status: 'review',
      priority: 'medium',
      assignee: 'Alex Rodriguez',
      dueDate: '2024-02-08',
      project: 'Website Redesign',
      tags: ['documentation']
    },
    {
      id: '4',
      title: 'Setup CI/CD pipeline',
      description: 'Configure automated testing and deployment pipeline',
      status: 'done',
      priority: 'medium',
      assignee: 'David Kim',
      dueDate: '2024-02-05',
      project: 'Mobile App Development',
      tags: ['devops', 'automation']
    },
    {
      id: '5',
      title: 'Create marketing materials',
      description: 'Design brochures and social media graphics',
      status: 'todo',
      priority: 'low',
      assignee: 'Emma Wilson',
      dueDate: '2024-02-20',
      project: 'Marketing Campaign Q1',
      tags: ['marketing', 'design']
    },
    {
      id: '6',
      title: 'Database optimization',
      description: 'Optimize database queries and add indexes',
      status: 'in-progress',
      priority: 'high',
      assignee: 'Tom Anderson',
      dueDate: '2024-02-12',
      project: 'Database Migration',
      tags: ['backend', 'performance']
    }
  ]

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         task.project.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === 'all' || task.status === statusFilter
    const matchesPriority = priorityFilter === 'all' || task.priority === priorityFilter
    return matchesSearch && matchesStatus && matchesPriority
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'todo': return 'bg-secondary-100 text-secondary-800'
      case 'in-progress': return 'bg-primary-100 text-primary-800'
      case 'review': return 'bg-warning-100 text-warning-800'
      case 'done': return 'bg-success-100 text-success-800'
      default: return 'bg-secondary-100 text-secondary-800'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-error-100 text-error-800'
      case 'medium': return 'bg-warning-100 text-warning-800'
      case 'low': return 'bg-success-100 text-success-800'
      default: return 'bg-secondary-100 text-secondary-800'
    }
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return <AlertCircle className="w-4 h-4" />
      case 'medium': return <Clock className="w-4 h-4" />
      case 'low': return <CheckCircle className="w-4 h-4" />
      default: return <Clock className="w-4 h-4" />
    }
  }

  const groupedTasks = {
    todo: filteredTasks.filter(task => task.status === 'todo'),
    'in-progress': filteredTasks.filter(task => task.status === 'in-progress'),
    review: filteredTasks.filter(task => task.status === 'review'),
    done: filteredTasks.filter(task => task.status === 'done')
  }

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Header */}
      <header className="bg-white border-b border-secondary-200">
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-secondary-900">Tasks</h1>
              <p className="text-secondary-600 mt-1">Manage and track your tasks</p>
            </div>
            <Link
              href="/tasks/new"
              className="btn btn-primary"
            >
              <Plus className="w-4 h-4" />
              New Task
            </Link>
          </div>
        </div>
      </header>

      <div className="px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search tasks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input pl-10 w-full"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="select"
            >
              <option value="all">All Status</option>
              <option value="todo">To Do</option>
              <option value="in-progress">In Progress</option>
              <option value="review">Review</option>
              <option value="done">Done</option>
            </select>
            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="select"
            >
              <option value="all">All Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* To Do */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-secondary-900">To Do</h3>
              <span className="bg-secondary-100 text-secondary-800 text-xs font-medium px-2 py-1 rounded-full">
                {groupedTasks.todo.length}
              </span>
            </div>
            <div className="space-y-3">
              {groupedTasks.todo.map((task) => (
                <div key={task.id} className="card p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-secondary-900 text-sm">{task.title}</h4>
                    <div className="flex gap-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </span>
                    </div>
                  </div>
                  <p className="text-secondary-600 text-xs mb-3 line-clamp-2">{task.description}</p>
                  <div className="flex items-center justify-between text-xs text-secondary-600">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{task.assignee}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(task.dueDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-secondary-200">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-secondary-500">{task.project}</span>
                      <div className="flex gap-1">
                        {task.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="bg-secondary-100 text-secondary-700 text-xs px-1 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                        {task.tags.length > 2 && (
                          <span className="text-xs text-secondary-500">+{task.tags.length - 2}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* In Progress */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-secondary-900">In Progress</h3>
              <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded-full">
                {groupedTasks['in-progress'].length}
              </span>
            </div>
            <div className="space-y-3">
              {groupedTasks['in-progress'].map((task) => (
                <div key={task.id} className="card p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-secondary-900 text-sm">{task.title}</h4>
                    <div className="flex gap-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </span>
                    </div>
                  </div>
                  <p className="text-secondary-600 text-xs mb-3 line-clamp-2">{task.description}</p>
                  <div className="flex items-center justify-between text-xs text-secondary-600">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{task.assignee}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(task.dueDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-secondary-200">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-secondary-500">{task.project}</span>
                      <div className="flex gap-1">
                        {task.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="bg-secondary-100 text-secondary-700 text-xs px-1 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                        {task.tags.length > 2 && (
                          <span className="text-xs text-secondary-500">+{task.tags.length - 2}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Review */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-secondary-900">Review</h3>
              <span className="bg-warning-100 text-warning-800 text-xs font-medium px-2 py-1 rounded-full">
                {groupedTasks.review.length}
              </span>
            </div>
            <div className="space-y-3">
              {groupedTasks.review.map((task) => (
                <div key={task.id} className="card p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-secondary-900 text-sm">{task.title}</h4>
                    <div className="flex gap-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </span>
                    </div>
                  </div>
                  <p className="text-secondary-600 text-xs mb-3 line-clamp-2">{task.description}</p>
                  <div className="flex items-center justify-between text-xs text-secondary-600">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{task.assignee}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(task.dueDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-secondary-200">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-secondary-500">{task.project}</span>
                      <div className="flex gap-1">
                        {task.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="bg-secondary-100 text-secondary-700 text-xs px-1 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                        {task.tags.length > 2 && (
                          <span className="text-xs text-secondary-500">+{task.tags.length - 2}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Done */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-secondary-900">Done</h3>
              <span className="bg-success-100 text-success-800 text-xs font-medium px-2 py-1 rounded-full">
                {groupedTasks.done.length}
              </span>
            </div>
            <div className="space-y-3">
              {groupedTasks.done.map((task) => (
                <div key={task.id} className="card p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-secondary-900 text-sm">{task.title}</h4>
                    <div className="flex gap-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </span>
                    </div>
                  </div>
                  <p className="text-secondary-600 text-xs mb-3 line-clamp-2">{task.description}</p>
                  <div className="flex items-center justify-between text-xs text-secondary-600">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{task.assignee}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(task.dueDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-secondary-200">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-secondary-500">{task.project}</span>
                      <div className="flex gap-1">
                        {task.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="bg-secondary-100 text-secondary-700 text-xs px-1 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                        {task.tags.length > 2 && (
                          <span className="text-xs text-secondary-500">+{task.tags.length - 2}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {filteredTasks.length === 0 && (
          <div className="text-center py-12">
            <div className="text-secondary-400 mb-4">
              <Search className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-secondary-900 mb-2">No tasks found</h3>
            <p className="text-secondary-600">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  )
} 