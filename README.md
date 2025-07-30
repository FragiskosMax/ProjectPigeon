# ProjectPigeon 🚀

An AI-powered project management and collaboration platform that combines intelligent automation, real-time collaboration, and advanced analytics to help teams work smarter, not harder.

## ✨ Features

### 🎯 Core Project Management
- **Project Creation & Management**: Create, organize, and track projects with comprehensive details
- **Task Management**: Kanban board with drag-and-drop functionality, task assignments, and progress tracking
- **Team Collaboration**: Real-time updates, comments, and team member management
- **Time Tracking**: Built-in time tracking with detailed analytics

### 🤖 AI-Powered Intelligence
- **AI Assistant**: Intelligent chat interface for project insights and recommendations
- **Smart Analytics**: AI-driven performance analysis and optimization suggestions
- **Automated Insights**: Real-time project health monitoring and risk assessment
- **Predictive Analytics**: Timeline optimization and resource allocation suggestions

### 📊 Advanced Analytics
- **Performance Dashboards**: Comprehensive project and team performance metrics
- **Real-time Reporting**: Dynamic reports and customizable analytics
- **Progress Tracking**: Visual progress indicators and milestone management
- **Resource Optimization**: Team workload balancing and capacity planning

### 🔐 Security & Authentication
- **Multi-Provider Auth**: Support for GitHub, Google, and email/password authentication
- **Role-Based Access**: Granular permissions and team member roles
- **Secure Data**: Enterprise-grade security with encrypted data transmission

## 🛠 Tech Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **React Query**: Data fetching and state management
- **Framer Motion**: Smooth animations and transitions

### Backend
- **Prisma**: Type-safe database ORM
- **PostgreSQL**: Robust relational database
- **NextAuth.js**: Authentication and session management
- **OpenAI API**: AI-powered features and insights

### Development Tools
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting
- **TypeScript**: Static type checking

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- OpenAI API key (for AI features)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/FragiskosMax/project-pigeon.git
   cd project-pigeon
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure the following variables:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/project_pigeon"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   OPENAI_API_KEY="your-openai-api-key"
   GITHUB_ID="your-github-oauth-id"
   GITHUB_SECRET="your-github-oauth-secret"
   GOOGLE_ID="your-google-oauth-id"
   GOOGLE_SECRET="your-google-oauth-secret"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
project-pigeon/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Dashboard page
│   ├── projects/          # Project management pages
│   ├── tasks/             # Task management pages
│   └── ai-assistant/      # AI assistant page
├── components/            # Reusable React components
│   ├── dashboard/         # Dashboard-specific components
│   ├── layout/            # Layout components
│   └── providers/         # Context providers
├── lib/                   # Utility libraries
├── prisma/               # Database schema and migrations
├── public/               # Static assets
└── types/                # TypeScript type definitions
```

## 🎨 Design System

ProjectPigeon uses a custom design system built with Tailwind CSS:

### Color Palette
- **Primary**: Blue-based colors for main actions and branding
- **Secondary**: Gray-based colors for text and backgrounds
- **Success**: Green for positive states and completions
- **Warning**: Orange for caution and pending states
- **Error**: Red for errors and critical states

### Components
- **Cards**: Consistent container styling with headers and content
- **Buttons**: Multiple variants (primary, secondary, outline, ghost)
- **Forms**: Styled inputs, selects, and form elements
- **Navigation**: Responsive sidebar and top navigation

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [docs.projectpigeon.com](https://docs.projectpigeon.com)
- **Issues**: [GitHub Issues](https://github.com/your-username/project-pigeon/issues)
- **Discord**: [Join our community](https://discord.gg/projectpigeon)

## 🚀 Roadmap

### Phase 1 (Current)
- ✅ Core project management features
- ✅ AI assistant integration
- ✅ Authentication system
- ✅ Basic analytics

### Phase 2 (Q2 2024)
- 🔄 Advanced reporting and analytics
- 🔄 Mobile app development
- 🔄 API integrations (Slack, GitHub, etc.)
- 🔄 Advanced AI features

### Phase 3 (Q3 2024)
- 📋 Enterprise features
- 📋 Advanced security and compliance
- 📋 White-label solutions
- 📋 Marketplace for plugins

---

Built with ❤️ by the ProjectPigeon team 
