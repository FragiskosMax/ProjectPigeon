'use client'

import { Users, Calendar, TrendingUp } from 'lucide-react'

interface Project {
  id: string
  name: string
  description: string
  progress: number
  status: string
  members: number
  dueDate: string
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-success-500'
    if (progress >= 60) return 'bg-primary-500'
    if (progress >= 40) return 'bg-warning-500'
    return 'bg-error-500'
  }

  return (
    <div className="card p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-secondary-900 mb-1">
            {project.name}
          </h3>
          <p className="text-sm text-secondary-600 line-clamp-2">
            {project.description}
          </p>
        </div>
        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
          project.status === 'active' ? 'bg-success-100 text-success-800' :
          project.status === 'paused' ? 'bg-warning-100 text-warning-800' :
          'bg-secondary-100 text-secondary-800'
        }`}>
          {project.status}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-secondary-700">Progress</span>
          <span className="text-sm font-medium text-secondary-900">{project.progress}%</span>
        </div>
        <div className="w-full bg-secondary-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(project.progress)}`}
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>

      {/* Project Stats */}
      <div className="flex items-center justify-between text-sm text-secondary-600">
        <div className="flex items-center">
          <Users className="h-4 w-4 mr-1" />
          <span>{project.members} members</span>
        </div>
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          <span>Due {new Date(project.dueDate).toLocaleDateString()}</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-4 pt-4 border-t border-secondary-200">
        <div className="flex space-x-2">
          <button className="btn-ghost text-xs px-3 py-1">
            View Details
          </button>
          <button className="btn-ghost text-xs px-3 py-1">
            Edit
          </button>
          <button className="btn-ghost text-xs px-3 py-1">
            Share
          </button>
        </div>
      </div>
    </div>
  )
} 