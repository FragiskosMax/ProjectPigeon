'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Brain, Lightbulb, TrendingUp, AlertTriangle, Clock, Users, BarChart3, Sparkles } from 'lucide-react'

interface Message {
  id: string
  type: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface AIInsight {
  id: string
  type: 'optimization' | 'warning' | 'suggestion'
  title: string
  description: string
  priority: 'low' | 'medium' | 'high'
}

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Hello! I\'m your AI assistant. I can help you with project management, task optimization, team collaboration, and more. What would you like to work on today?',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const insights: AIInsight[] = [
    {
      id: '1',
      type: 'optimization',
      title: 'Task Distribution Optimization',
      description: 'Sarah Johnson has 8 high-priority tasks this week. Consider redistributing some tasks to balance workload.',
      priority: 'high'
    },
    {
      id: '2',
      type: 'warning',
      title: 'Potential Deadline Risk',
      description: 'The "Website Redesign" project is 3 days behind schedule. Consider adding more resources or adjusting scope.',
      priority: 'high'
    },
    {
      id: '3',
      type: 'suggestion',
      title: 'Team Collaboration Opportunity',
      description: 'Mike Chen and Alex Rodriguez have similar skill sets. They could collaborate on the authentication implementation.',
      priority: 'medium'
    },
    {
      id: '4',
      type: 'optimization',
      title: 'Resource Allocation',
      description: 'Your development team is 70% utilized. Consider taking on additional projects or upskilling opportunities.',
      priority: 'low'
    }
  ]

  const quickPrompts = [
    'Analyze project timeline',
    'Optimize team workload',
    'Generate task breakdown',
    'Identify bottlenecks',
    'Suggest improvements',
    'Create project report'
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: generateAIResponse(inputValue),
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const generateAIResponse = (input: string): string => {
    const lowerInput = input.toLowerCase()
    
    if (lowerInput.includes('timeline') || lowerInput.includes('schedule')) {
      return 'Based on your current project timeline, I can see that the "Website Redesign" project is running 3 days behind schedule. Here are my recommendations:\n\n1. **Immediate Actions**:\n   - Prioritize critical path tasks\n   - Add 2 additional developers to the frontend team\n   - Reduce scope for non-critical features\n\n2. **Timeline Adjustments**:\n   - Extend deadline by 1 week\n   - Implement daily standups for better coordination\n   - Use parallel development for independent modules\n\nWould you like me to create a detailed timeline optimization plan?'
    }
    
    if (lowerInput.includes('workload') || lowerInput.includes('team')) {
      return 'I\'ve analyzed your team workload and found some optimization opportunities:\n\n**Current Workload Distribution**:\n- Sarah Johnson: 8 high-priority tasks (overloaded)\n- Mike Chen: 5 medium-priority tasks (balanced)\n- Alex Rodriguez: 3 low-priority tasks (underutilized)\n\n**Recommendations**:\n1. Redistribute 2 tasks from Sarah to Alex\n2. Pair Mike and Alex for collaborative tasks\n3. Implement skill-based task assignment\n\nWould you like me to create a detailed workload redistribution plan?'
    }
    
    if (lowerInput.includes('bottleneck') || lowerInput.includes('blocker')) {
      return 'I\'ve identified several potential bottlenecks in your current projects:\n\n**Critical Bottlenecks**:\n1. **Design Approval Process**: 3 tasks waiting for design review\n2. **API Documentation**: Blocking 2 development tasks\n3. **Testing Resources**: Limited QA capacity\n\n**Solutions**:\n- Implement parallel review processes\n- Create design system for faster approvals\n- Automate testing where possible\n\nWould you like me to create a bottleneck resolution plan?'
    }
    
    return 'I understand you\'re asking about project management. I can help you with:\n\n- **Timeline Analysis**: Review project schedules and identify delays\n- **Workload Optimization**: Balance team assignments and resource allocation\n- **Bottleneck Identification**: Find and resolve project blockers\n- **Performance Insights**: Analyze productivity and efficiency metrics\n\nWhat specific aspect would you like me to focus on?'
  }

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'optimization': return <TrendingUp className="w-4 h-4" />
      case 'warning': return <AlertTriangle className="w-4 h-4" />
      case 'suggestion': return <Lightbulb className="w-4 h-4" />
      default: return <Lightbulb className="w-4 h-4" />
    }
  }

  const getInsightColor = (type: string) => {
    switch (type) {
      case 'optimization': return 'border-primary-200 bg-primary-50'
      case 'warning': return 'border-error-200 bg-error-50'
      case 'suggestion': return 'border-warning-200 bg-warning-50'
      default: return 'border-secondary-200 bg-secondary-50'
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

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Header */}
      <header className="bg-white border-b border-secondary-200">
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary-100 rounded-lg">
                <Brain className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-secondary-900">AI Assistant</h1>
                <p className="text-secondary-600 mt-1">Your intelligent project management companion</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chat Interface */}
            <div className="lg:col-span-2">
              <div className="card h-[600px] flex flex-col">
                <div className="card-header border-b border-secondary-200">
                  <div className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-primary-600" />
                    <h2 className="text-lg font-semibold text-secondary-900">AI Chat</h2>
                  </div>
                  <p className="text-secondary-600">Ask me anything about your projects</p>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-4 ${
                          message.type === 'user'
                            ? 'bg-primary-600 text-white'
                            : 'bg-secondary-100 text-secondary-900'
                        }`}
                      >
                        <div className="whitespace-pre-wrap">{message.content}</div>
                        <div className={`text-xs mt-2 ${
                          message.type === 'user' ? 'text-primary-100' : 'text-secondary-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-secondary-100 text-secondary-900 rounded-lg p-4">
                        <div className="flex items-center gap-2">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-secondary-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-secondary-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-secondary-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                          <span className="text-sm text-secondary-600">AI is typing...</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-6 border-t border-secondary-200">
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Ask me about your projects..."
                      className="input flex-1"
                      disabled={isTyping}
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isTyping}
                      className="btn btn-primary"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Prompts */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-secondary-900 mb-3">Quick Prompts</h3>
                <div className="flex flex-wrap gap-2">
                  {quickPrompts.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => setInputValue(prompt)}
                      className="px-3 py-2 text-sm bg-white border border-secondary-200 rounded-lg hover:bg-secondary-50 transition-colors"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Insights */}
            <div className="space-y-6">
              {/* AI Insights */}
              <div className="card">
                <div className="card-header">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary-600" />
                    <h2 className="text-lg font-semibold text-secondary-900">AI Insights</h2>
                  </div>
                  <p className="text-secondary-600">Real-time project intelligence</p>
                </div>
                <div className="card-content">
                  <div className="space-y-4">
                    {insights.map((insight) => (
                      <div
                        key={insight.id}
                        className={`p-4 rounded-lg border ${getInsightColor(insight.type)}`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-1">
                            {getInsightIcon(insight.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-medium text-secondary-900">{insight.title}</h4>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(insight.priority)}`}>
                                {insight.priority}
                              </span>
                            </div>
                            <p className="text-sm text-secondary-600">{insight.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* AI Capabilities */}
              <div className="card">
                <div className="card-header">
                  <h2 className="text-lg font-semibold text-secondary-900">AI Capabilities</h2>
                  <p className="text-secondary-600">What I can help you with</p>
                </div>
                <div className="card-content">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <TrendingUp className="w-4 h-4 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-secondary-900">Timeline Optimization</h4>
                        <p className="text-sm text-secondary-600">Analyze and optimize project schedules</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-warning-100 rounded-lg">
                        <Users className="w-4 h-4 text-warning-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-secondary-900">Team Management</h4>
                        <p className="text-sm text-secondary-600">Balance workloads and resource allocation</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-success-100 rounded-lg">
                        <BarChart3 className="w-4 h-4 text-success-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-secondary-900">Performance Analytics</h4>
                        <p className="text-sm text-secondary-600">Track productivity and efficiency metrics</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-error-100 rounded-lg">
                        <AlertTriangle className="w-4 h-4 text-error-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-secondary-900">Risk Assessment</h4>
                        <p className="text-sm text-secondary-600">Identify potential issues and bottlenecks</p>
                      </div>
                    </div>
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