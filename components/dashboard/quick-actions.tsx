'use client'

import { Plus, Clock, Users, FileText, Calendar, MessageSquare } from 'lucide-react'

export function QuickActions() {
  const actions = [
    {
      id: '1',
      title: 'New Project',
      description: 'Create a new project',
      icon: Plus,
      color: 'text-primary-600',
      bgColor: 'bg-primary-100'
    },
    {
      id: '2',
      title: 'Start Timer',
      description: 'Track time on current task',
      icon: Clock,
      color: 'text-success-600',
      bgColor: 'bg-success-100'
    },
    {
      id: '3',
      title: 'Invite Team',
      description: 'Add new team members',
      icon: Users,
      color: 'text-warning-600',
      bgColor: 'bg-warning-100'
    },
    {
      id: '4',
      title: 'Create Report',
      description: 'Generate project report',
      icon: FileText,
      color: 'text-secondary-600',
      bgColor: 'bg-secondary-100'
    },
    {
      id: '5',
      title: 'Schedule Meeting',
      description: 'Book team meeting',
      icon: Calendar,
      color: 'text-error-600',
      bgColor: 'bg-error-100'
    },
    {
      id: '6',
      title: 'Send Message',
      description: 'Message team members',
      icon: MessageSquare,
      color: 'text-primary-600',
      bgColor: 'bg-primary-100'
    }
  ]

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="text-lg font-semibold text-secondary-900">Quick Actions</h3>
      </div>
      <div className="card-content">
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action) => (
            <button
              key={action.id}
              className="flex flex-col items-center p-4 border border-secondary-200 rounded-lg hover:bg-secondary-50 transition-colors text-center"
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${action.bgColor} mb-3`}>
                <action.icon className={`h-5 w-5 ${action.color}`} />
              </div>
              <h4 className="text-sm font-medium text-secondary-900 mb-1">
                {action.title}
              </h4>
              <p className="text-xs text-secondary-600">
                {action.description}
              </p>
            </button>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="mt-6 pt-6 border-t border-secondary-200">
          <h4 className="text-sm font-medium text-secondary-900 mb-3">Recent Activity</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-xs text-secondary-600">
              <div className="w-2 h-2 rounded-full bg-success-500"></div>
              <span>Project "Website Redesign" updated</span>
              <span className="text-secondary-400">2m ago</span>
            </div>
            <div className="flex items-center space-x-3 text-xs text-secondary-600">
              <div className="w-2 h-2 rounded-full bg-primary-500"></div>
              <span>New task assigned to Sarah</span>
              <span className="text-secondary-400">5m ago</span>
            </div>
            <div className="flex items-center space-x-3 text-xs text-secondary-600">
              <div className="w-2 h-2 rounded-full bg-warning-500"></div>
              <span>Team meeting scheduled</span>
              <span className="text-secondary-400">10m ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 