'use client'

import { Brain, TrendingUp, AlertTriangle, Lightbulb, ArrowRight } from 'lucide-react'

export function AIInsights() {
  const insights = [
    {
      id: '1',
      type: 'optimization',
      title: 'Resource Optimization',
      description: 'Your team is 15% more productive in the morning. Consider scheduling important tasks before 2 PM.',
      icon: TrendingUp,
      color: 'text-success-600',
      bgColor: 'bg-success-100'
    },
    {
      id: '2',
      type: 'warning',
      title: 'Potential Delay',
      description: 'The "Mobile App Development" project is at risk of missing its deadline. Consider reallocating resources.',
      icon: AlertTriangle,
      color: 'text-warning-600',
      bgColor: 'bg-warning-100'
    },
    {
      id: '3',
      type: 'suggestion',
      title: 'Team Collaboration',
      description: 'Sarah and Mike work well together. Consider pairing them on the upcoming API integration task.',
      icon: Lightbulb,
      color: 'text-primary-600',
      bgColor: 'bg-primary-100'
    }
  ]

  return (
    <div className="card">
      <div className="card-header">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Brain className="h-5 w-5 text-primary-600 mr-2" />
            <h3 className="text-lg font-semibold text-secondary-900">AI Insights</h3>
          </div>
          <button className="btn-ghost text-sm">
            View All
          </button>
        </div>
      </div>
      <div className="card-content">
        <div className="space-y-4">
          {insights.map((insight) => (
            <div key={insight.id} className="p-4 border border-secondary-200 rounded-lg hover:bg-secondary-50 transition-colors">
              <div className="flex items-start space-x-3">
                <div className={`flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg ${insight.bgColor}`}>
                  <insight.icon className={`h-4 w-4 ${insight.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-secondary-900 mb-1">
                    {insight.title}
                  </h4>
                  <p className="text-xs text-secondary-600 leading-relaxed">
                    {insight.description}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-secondary-500">
                      {insight.type === 'optimization' ? 'Optimization' :
                       insight.type === 'warning' ? 'Warning' : 'Suggestion'}
                    </span>
                    <button className="btn-ghost text-xs px-2 py-1">
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Assistant Chat */}
        <div className="mt-6 pt-6 border-t border-secondary-200">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium text-secondary-900">AI Assistant</h4>
            <div className="flex h-2 w-2 rounded-full bg-success-500"></div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-secondary-50 rounded-lg">
            <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary-100">
              <Brain className="h-4 w-4 text-primary-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-secondary-700">
                How can I help you today? I can assist with project planning, task prioritization, or team optimization.
              </p>
            </div>
            <button className="btn-ghost text-xs px-3 py-1">
              Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 