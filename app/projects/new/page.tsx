'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Save, Users, Calendar, AlertCircle } from 'lucide-react'

export default function NewProjectPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    status: 'active',
    priority: 'medium',
    dueDate: '',
    startDate: '',
    budget: '',
    tags: '',
    members: []
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Redirect to projects page
    router.push('/projects')
  }

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Header */}
      <header className="bg-white border-b border-secondary-200">
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/projects"
                className="btn btn-outline btn-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-secondary-900">New Project</h1>
                <p className="text-secondary-600 mt-1">Create a new project</p>
              </div>
            </div>
            <button
              type="submit"
              form="project-form"
              disabled={isSubmitting}
              className="btn btn-primary"
            >
              <Save className="w-4 h-4" />
              {isSubmitting ? 'Creating...' : 'Create Project'}
            </button>
          </div>
        </div>
      </header>

      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <form id="project-form" onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <div className="card">
              <div className="card-header">
                <h2 className="text-lg font-semibold text-secondary-900">Basic Information</h2>
                <p className="text-secondary-600">Provide the essential details for your project</p>
              </div>
              <div className="card-content space-y-6">
                <div>
                  <label htmlFor="name" className="label">
                    Project Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="input"
                    placeholder="Enter project name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="description" className="label">
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className="textarea"
                    rows={4}
                    placeholder="Describe your project..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="status" className="label">
                      Status
                    </label>
                    <select
                      id="status"
                      value={formData.status}
                      onChange={(e) => handleInputChange('status', e.target.value)}
                      className="select"
                    >
                      <option value="active">Active</option>
                      <option value="on-hold">On Hold</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="priority" className="label">
                      Priority
                    </label>
                    <select
                      id="priority"
                      value={formData.priority}
                      onChange={(e) => handleInputChange('priority', e.target.value)}
                      className="select"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="card">
              <div className="card-header">
                <h2 className="text-lg font-semibold text-secondary-900">Timeline</h2>
                <p className="text-secondary-600">Set project start and end dates</p>
              </div>
              <div className="card-content">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="startDate" className="label">
                      Start Date
                    </label>
                    <input
                      type="date"
                      id="startDate"
                      value={formData.startDate}
                      onChange={(e) => handleInputChange('startDate', e.target.value)}
                      className="input"
                    />
                  </div>

                  <div>
                    <label htmlFor="dueDate" className="label">
                      Due Date
                    </label>
                    <input
                      type="date"
                      id="dueDate"
                      value={formData.dueDate}
                      onChange={(e) => handleInputChange('dueDate', e.target.value)}
                      className="input"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Budget */}
            <div className="card">
              <div className="card-header">
                <h2 className="text-lg font-semibold text-secondary-900">Budget</h2>
                <p className="text-secondary-600">Set project budget (optional)</p>
              </div>
              <div className="card-content">
                <div>
                  <label htmlFor="budget" className="label">
                    Budget Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-500">
                      $
                    </span>
                    <input
                      type="number"
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      className="input pl-8"
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="card">
              <div className="card-header">
                <h2 className="text-lg font-semibold text-secondary-900">Tags</h2>
                <p className="text-secondary-600">Add tags to categorize your project</p>
              </div>
              <div className="card-content">
                <div>
                  <label htmlFor="tags" className="label">
                    Tags
                  </label>
                  <input
                    type="text"
                    id="tags"
                    value={formData.tags}
                    onChange={(e) => handleInputChange('tags', e.target.value)}
                    className="input"
                    placeholder="Enter tags separated by commas (e.g., design, development, marketing)"
                  />
                  <p className="text-sm text-secondary-500 mt-1">
                    Use commas to separate multiple tags
                  </p>
                </div>
              </div>
            </div>

            {/* Team Members */}
            <div className="card">
              <div className="card-header">
                <h2 className="text-lg font-semibold text-secondary-900">Team Members</h2>
                <p className="text-secondary-600">Invite team members to your project</p>
              </div>
              <div className="card-content">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <input
                        type="email"
                        className="input"
                        placeholder="Enter email address"
                      />
                    </div>
                    <select className="select">
                      <option value="member">Member</option>
                      <option value="admin">Admin</option>
                      <option value="viewer">Viewer</option>
                    </select>
                    <button type="button" className="btn btn-secondary btn-sm">
                      Add
                    </button>
                  </div>
                  
                  <div className="text-sm text-secondary-600">
                    <p>You can invite team members after creating the project</p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Assistant */}
            <div className="card border-primary-200 bg-primary-50">
              <div className="card-header">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-primary-600" />
                  <h2 className="text-lg font-semibold text-primary-900">AI Assistant</h2>
                </div>
                <p className="text-primary-700">Get AI-powered suggestions for your project</p>
              </div>
              <div className="card-content">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="ai-suggestions"
                      className="checkbox"
                      defaultChecked
                    />
                    <label htmlFor="ai-suggestions" className="text-sm text-primary-800">
                      Enable AI suggestions for task breakdown and timeline optimization
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="ai-monitoring"
                      className="checkbox"
                      defaultChecked
                    />
                    <label htmlFor="ai-monitoring" className="text-sm text-primary-800">
                      Enable AI monitoring for potential delays and resource conflicts
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} 