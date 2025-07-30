import Link from 'next/link'
import { ArrowRight, CheckCircle, Zap, Users, Shield, Brain, Clock, BarChart3 } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Navigation */}
      <nav className="border-b border-secondary-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold gradient-text">ProjectPigeon</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="#features" className="text-secondary-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
                  Features
                </Link>
                <Link href="#pricing" className="text-secondary-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
                  Pricing
                </Link>
                <Link href="#about" className="text-secondary-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
                  About
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/auth/signin" className="btn-outline">
                Sign In
              </Link>
              <Link href="/auth/signup" className="btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              The Future of
              <span className="gradient-text"> Project Management</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600 max-w-3xl mx-auto">
              ProjectPigeon combines AI-powered insights, real-time collaboration, and intelligent automation 
              to revolutionize how teams work together. Boost productivity by 300% with our cutting-edge platform.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/auth/signup" className="btn-primary text-lg px-8 py-4">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="#demo" className="btn-ghost text-lg">
                Watch Demo
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-secondary-500">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-success-500 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-success-500 mr-2" />
                14-day free trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-success-500 mr-2" />
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Everything you need to build amazing projects
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Powerful features that scale with your team and grow with your business.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                <Brain className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-secondary-900">AI-Powered Insights</h3>
              <p className="mt-2 text-secondary-600">
                Get intelligent suggestions for task prioritization, resource allocation, and project optimization.
              </p>
            </div>

            <div className="card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success-100">
                <Users className="h-6 w-6 text-success-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-secondary-900">Real-time Collaboration</h3>
              <p className="mt-2 text-secondary-600">
                Work together seamlessly with live updates, comments, and instant notifications.
              </p>
            </div>

            <div className="card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-warning-100">
                <Zap className="h-6 w-6 text-warning-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-secondary-900">Smart Automation</h3>
              <p className="mt-2 text-secondary-600">
                Automate repetitive tasks, generate reports, and streamline your workflow.
              </p>
            </div>

            <div className="card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-error-100">
                <Clock className="h-6 w-6 text-error-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-secondary-900">Time Tracking</h3>
              <p className="mt-2 text-secondary-600">
                Track time spent on tasks, generate detailed reports, and optimize productivity.
              </p>
            </div>

            <div className="card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-100">
                <BarChart3 className="h-6 w-6 text-secondary-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-secondary-900">Advanced Analytics</h3>
              <p className="mt-2 text-secondary-600">
                Get deep insights into team performance, project progress, and resource utilization.
              </p>
            </div>

            <div className="card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                <Shield className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-secondary-900">Enterprise Security</h3>
              <p className="mt-2 text-secondary-600">
                Bank-level security with SSO, 2FA, and compliance with industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your project management?
            </h2>
            <p className="mt-4 text-lg text-primary-100">
              Join thousands of teams already using ProjectPigeon to ship faster and better.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Link href="/auth/signup" className="bg-white text-primary-600 hover:bg-primary-50 btn text-lg px-8 py-4">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white">ProjectPigeon</h3>
              <p className="mt-4 text-secondary-400">
                The next generation of project management with AI assistance.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Product</h4>
              <ul className="mt-4 space-y-2 text-secondary-400">
                <li><Link href="#" className="hover:text-white">Features</Link></li>
                <li><Link href="#" className="hover:text-white">Pricing</Link></li>
                <li><Link href="#" className="hover:text-white">Integrations</Link></li>
                <li><Link href="#" className="hover:text-white">API</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Company</h4>
              <ul className="mt-4 space-y-2 text-secondary-400">
                <li><Link href="#" className="hover:text-white">About</Link></li>
                <li><Link href="#" className="hover:text-white">Blog</Link></li>
                <li><Link href="#" className="hover:text-white">Careers</Link></li>
                <li><Link href="#" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Support</h4>
              <ul className="mt-4 space-y-2 text-secondary-400">
                <li><Link href="#" className="hover:text-white">Help Center</Link></li>
                <li><Link href="#" className="hover:text-white">Documentation</Link></li>
                <li><Link href="#" className="hover:text-white">Status</Link></li>
                <li><Link href="#" className="hover:text-white">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-secondary-800 pt-8">
            <p className="text-center text-secondary-400">
              © 2024 ProjectPigeon. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 