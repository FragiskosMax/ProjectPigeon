'use client'

import { Clock, User, AlertCircle, CheckCircle, Circle } from 'lucide-react'

interface Task {
  id: string
  title: string
  project: string
  priority: string
  status: string
  assignee: string
  dueDate: string
}

interface TaskListProps {
  tasks: Task[]
}

export function TaskList({ tasks }: TaskListProps) {
  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return <AlertCircle className="h-4 w-4 text-error-500" />
      case 'high':
        return <AlertCircle className="h-4 w-4 text-warning-500" />
      default:
        return <Circle className="h-4 w-4 text-secondary-400" />
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'done':
        return <CheckCircle className="h-4 w-4 text-success-500" />
      case 'in-progress':
        return <Clock className="h-4 w-4 text-primary-500" />
      case 'review':
        return <Clock className="h-4 w-4 text-warning-500" />
      default:
        return <Circle className="h-4 w-4 text-secondary-400" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'bg-error-100 text-error-800'
      case 'high':
        return 'bg-warning-100 text-warning-800'
      case 'medium':
        return 'bg-primary-100 text-primary-800'
      default:
        return 'bg-secondary-100 text-secondary-800'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'done':
        return 'bg-success-100 text-success-800'
      case 'in-progress':
        return 'bg-primary-100 text-primary-800'
      case 'review':
        return 'bg-warning-100 text-warning-800'
      default:
        return 'bg-secondary-100 text-secondary-800'
    }
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div key={task.id} className="flex items-center space-x-4 p-4 border border-secondary-200 rounded-lg hover:bg-secondary-50 transition-colors">
          {/* Priority Icon */}
          <div className="flex-shrink-0">
            {getPriorityIcon(task.priority)}
          </div>

          {/* Task Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium text-secondary-900 truncate">
                {task.title}
              </h4>
              <div className="flex items-center space-x-2 ml-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                  {task.priority}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                  {task.status.replace('-', ' ')}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center space-x-4 text-xs text-secondary-500">
                <span>{task.project}</span>
                <div className="flex items-center">
                  <User className="h-3 w-3 mr-1" />
                  <span>{task.assignee}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>Due {new Date(task.dueDate).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {getStatusIcon(task.status)}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center space-x-2">
            <button className="btn-ghost text-xs px-2 py-1">
              Edit
            </button>
            <button className="btn-ghost text-xs px-2 py-1">
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  )
} 