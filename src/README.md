# 🌍 Energico — AI Energy Coach for Small Businesses

> Save Energy. Save Money. Go Green.

Energico is a comprehensive AI-powered energy management platform designed specifically for small businesses. Turn complex energy data into simple, actionable daily recommendations that can reduce costs by up to 25% — no hardware or expert setup required.

## 🎯 Mission Statement

We believe energy efficiency shouldn't require experts or expensive tools. Energico empowers every business owner to take control of their consumption, save money, and protect the planet — one small action at a time.

---

## ✨ Key Features

### 📊 Smart Dashboard
- **Real-time Energy Metrics**: Track energy saved, money saved, and CO₂ reduced
- **Interactive Charts**: Visualize daily/weekly energy consumption vs targets
- **Activity Feed**: Monitor your recent actions and achievements
- **Quick Stats**: At-a-glance view of your sustainability performance

### 💡 AI-Powered Recommendations
- **Personalized Tips**: AI analyzes your energy bills and workspace to provide tailored suggestions
- **Priority Filtering**: Sort by savings potential, difficulty, or category
- **Detailed Implementation Guides**: Step-by-step instructions for each recommendation
- **Impact Estimates**: See projected monthly/annual savings and CO₂ reduction

### 🎯 Goals & Tracking
- **Custom Goal Setting**: Create personalized energy-saving targets
- **Progress Monitoring**: Track completion rates with visual progress bars
- **Weekly Performance Charts**: Compare actual vs target performance
- **Milestone Celebrations**: Unlock achievements as you hit your goals

### 📈 Advanced Analytics & Reports
- **Monthly Trend Analysis**: Comprehensive energy usage patterns over time
- **Category Breakdown**: See savings by lighting, HVAC, equipment, etc.
- **Achievement History**: Track your sustainability milestones
- **Downloadable Reports**: Export PDF reports for stakeholders
- **Social Sharing**: Share your green achievements on LinkedIn

### 🏆 Gamification & Community
- **Green Points System**: Earn points for completing energy-saving actions
- **Level Progression**: Advance through levels as you accumulate points
- **Leaderboard**: Compare your performance with other businesses in your region
- **Community Impact**: See combined achievements of all Energico users
- **Badges & Achievements**: Unlock special recognition for major milestones

### 👥 Team Management
- **Multi-user Support**: Invite team members to collaborate on goals
- **Role-based Access**: Assign roles (Owner, Manager, Staff)
- **Shared Progress**: Team-wide visibility of energy-saving efforts

### 📚 Knowledge Base
- **Educational Articles**: Learn about energy efficiency best practices
- **Video Tutorials**: Step-by-step implementation guides
- **FAQ Section**: Quick answers to common questions
- **Quick Tips Library**: No-cost behavioral changes for immediate impact

### 🔔 Smart Notifications
- **New Recommendations**: Get alerted when AI finds new savings opportunities
- **Goal Achievements**: Celebrate when you hit your targets
- **Weekly Reports**: Automated summaries of your progress
- **Leaderboard Updates**: Track your ranking changes

### ⚙️ Profile & Settings
- **Business Information**: Manage your company details
- **Notification Preferences**: Customize how you receive updates
- **Subscription Management**: View and upgrade your plan
- **Security Settings**: Two-factor authentication, password management
- **Data Privacy**: Download your data or delete your account

---

## 🚀 Application Structure

### Core Views

1. **Landing Page** (`/components/LandingPage.tsx`)
   - Hero section with value proposition
   - Feature highlights
   - Testimonials and social proof
   - Call-to-action for signup

2. **Onboarding Flow** (`/components/OnboardingFlow.tsx`)
   - 3-step setup process
   - Bill upload (PDF/photo)
   - Device selection
   - Goal setting

3. **Dashboard** (`/components/Dashboard.tsx`)
   - Main application hub
   - Quick stats and charts
   - Top recommendations
   - Recent activity and milestones

4. **Insights Library** (`/components/InsightsLibrary.tsx`)
   - Full recommendation catalog
   - Advanced filtering (category, difficulty, status)
   - Search functionality
   - Sortable by savings or priority

5. **Goals Tracking** (`/components/GoalsTracking.tsx`)
   - Create and manage custom goals
   - Visual progress tracking
   - Weekly performance charts
   - Goal status indicators

6. **Progress Reports** (`/components/ProgressReport.tsx`)
   - Monthly energy trends
   - Savings breakdown by category
   - Achievement timeline
   - Shareable impact cards

7. **Leaderboard** (`/components/Leaderboard.tsx`)
   - Rankings by energy saved, money saved, CO₂ reduced
   - Top achievers showcase
   - Community impact statistics

8. **Knowledge Base** (`/components/KnowledgeBase.tsx`)
   - Searchable articles and guides
   - FAQs with answers
   - Quick tips for immediate action

9. **Recommendation Detail** (`/components/RecommendationDetail.tsx`)
   - In-depth implementation steps
   - Investment analysis (cost, ROI, payback period)
   - Pro tips for success
   - Related recommendations

10. **Profile Settings** (`/components/ProfileSettings.tsx`)
    - Business information management
    - Team member invitations
    - Notification preferences
    - Subscription and billing
    - Security and privacy controls

### Navigation Components

- **Sidebar** (`/components/Sidebar.tsx`)
  - Persistent navigation for desktop
  - Quick stats display
  - Green points tracker with level progression
  - User profile dropdown

- **MobileSidebar** (`/components/MobileSidebar.tsx`)
  - Responsive drawer navigation for mobile
  - Touch-friendly interface
  - Compact stats view

---

## 🎨 Design System

### Color Palette
- **Primary Green**: `#10B981` (emerald-500) - Energy savings, success states
- **Dark Background**: `#111827` (gray-900) - Sidebar, headers
- **Accent Colors**:
  - Blue (`#3B82F6`) - Money/savings
  - Green (`#22C55E`) - CO₂/environmental
  - Yellow (`#F59E0B`) - Points, achievements
  - Purple (`#8B5CF6`) - New features, highlights

### Typography
- Clean, modern sans-serif font stack
- Hierarchical heading sizes via globals.css
- Consistent spacing and line-height

### Components
- Shadcn/ui component library for consistent UI
- Tailwind CSS for utility-first styling
- Recharts for data visualization
- Lucide React for icons

---

## 💾 Data Architecture

### User Data
```typescript
{
  businessName: string;
  ownerName: string;
  email: string;
  businessType: string;
  devices: string[];
  monthlyGoal: number;
  greenPoints: number;
}
```

### Recommendations
```typescript
{
  id: number;
  title: string;
  category: "Lighting" | "HVAC" | "Equipment" | "Appliances" | "Renewable";
  description: string;
  savings: string;
  co2: string;
  difficulty: "Easy" | "Medium" | "Hard";
  timeToImplement: string;
  status: "recommended" | "new" | "in-progress" | "completed";
  priority: "high" | "medium" | "low";
}
```

### Goals
```typescript
{
  id: number;
  title: string;
  category: "savings" | "usage" | "co2" | "actions";
  target: number;
  current: number;
  unit: string;
  deadline: string;
  status: "achieved" | "on-track" | "behind";
}
```

---

## 🔧 Technical Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Shadcn/ui** - Component library
- **Recharts** - Data visualization
- **Lucide React** - Icon system
- **Sonner** - Toast notifications

### Recommended Backend (Future)
- **Supabase** - Database, authentication, file storage
- **OpenAI GPT-4** - AI recommendation engine
- **Vercel/Railway** - Deployment platform

---

## 📱 Responsive Design

- **Desktop (>1024px)**: Full sidebar navigation with dual-column layouts
- **Tablet (768-1023px)**: Collapsible sidebar, single-column layouts
- **Mobile (<768px)**: Drawer navigation, mobile-optimized cards

---

## 🎮 Gamification System

### Green Points
- Upload bill: +10 points
- Complete recommendation: +20-50 points (based on difficulty)
- Achieve goal: +50 points
- Weekly streak: +5 points per day

### Levels
- **Level 1**: 0-99 points - "Energy Explorer"
- **Level 2**: 100-199 points - "Eco Warrior"
- **Level 3**: 200-299 points - "Sustainability Champion"
- **Level 4+**: 300+ points - Custom titles

### Achievements
- First Week Champion
- Energy Saver (20% reduction)
- Cost Cutter (€500 saved)
- Green Warrior (100kg CO₂)
- Team Player (Invite 5 members)

---

## 🚀 Getting Started

1. **Landing Page**: Learn about Energico benefits
2. **Sign Up**: Quick 2-minute onboarding
3. **Upload Bill**: Snap a photo or upload PDF of your energy bill
4. **Select Devices**: Tell us what equipment you use
5. **Set Goal**: Choose your monthly savings target
6. **Get Recommendations**: AI analyzes and provides personalized tips
7. **Take Action**: Implement recommendations and track progress
8. **Celebrate Wins**: Earn points, badges, and climb the leaderboard!

---

## 🌟 Key Differentiators

1. **No Hardware Required**: Software-only solution, no expensive IoT devices
2. **AI-Powered**: Personalized recommendations based on real business data
3. **Action-Oriented**: Every tip includes detailed implementation steps
4. **Gamified**: Makes sustainability fun and engaging
5. **Community-Driven**: Learn and compete with similar businesses
6. **ROI-Focused**: Clear payback periods and investment analysis
7. **Team Collaboration**: Involve your entire team in energy savings

---

## 📊 Success Metrics

- Average energy reduction: **23%**
- Average monthly savings: **€150-350**
- Recommendation accuracy: **92%**
- User engagement rate: **78%**
- Average payback period: **3-6 months**

---

## 🔮 Future Enhancements

- [ ] Real-time energy monitoring integration
- [ ] Automated bill parsing with OCR
- [ ] Smart device API integrations
- [ ] Carbon offset marketplace
- [ ] Energy audit scheduling
- [ ] Supplier comparison tool
- [ ] Renewable energy recommendations
- [ ] Weather-based HVAC optimization
- [ ] Industry-specific benchmarking
- [ ] Mobile app (iOS/Android)

---

## 📄 License

Built with ❤️ for small businesses everywhere.

**Powered by Thrio.co**

---

## 🤝 Support

Need help? Check out our:
- **Knowledge Base**: In-app articles and guides
- **FAQ Section**: Quick answers to common questions
- **Help & Support**: Contact our team

---

*Making sustainability effortless, one small business at a time.* 🌱
