import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { QueryProvider } from '@/components/providers/query-provider'
import { AuthProvider } from '@/components/providers/auth-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ProjectPigeon - AI-Powered Project Management',
  description: 'The next generation of project management with AI assistance, real-time collaboration, and intelligent automation.',
  keywords: ['project management', 'ai', 'collaboration', 'productivity', 'team management'],
  authors: [{ name: 'ProjectPigeon Team' }],
  creator: 'ProjectPigeon',
  publisher: 'ProjectPigeon',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://projectpigeon.com'),
  openGraph: {
    title: 'ProjectPigeon - AI-Powered Project Management',
    description: 'The next generation of project management with AI assistance, real-time collaboration, and intelligent automation.',
    url: 'https://projectpigeon.com',
    siteName: 'ProjectPigeon',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ProjectPigeon - AI-Powered Project Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProjectPigeon - AI-Powered Project Management',
    description: 'The next generation of project management with AI assistance, real-time collaboration, and intelligent automation.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full antialiased`}>
        <QueryProvider>
          <AuthProvider>
            {children}
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#fff',
                  color: '#374151',
                  border: '1px solid #e5e7eb',
                },
                success: {
                  iconTheme: {
                    primary: '#22c55e',
                    secondary: '#fff',
                  },
                },
                error: {
                  iconTheme: {
                    primary: '#ef4444',
                    secondary: '#fff',
                  },
                },
              }}
            />
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  )
} 