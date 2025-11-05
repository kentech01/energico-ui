# 📦 Energico Component Architecture Guide

Complete reference for all React components in the Energico application.

---

## 🏗️ Application Structure

```
/App.tsx (Root)
├── /components/
│   ├── 🏠 Landing & Onboarding
│   │   ├── LandingPage.tsx
│   │   └── OnboardingFlow.tsx
│   │
│   ├── 📊 Main Application
│   │   ├── Dashboard.tsx
│   │   ├── Sidebar.tsx
│   │   └── MobileSidebar.tsx
│   │
│   ├── 💡 Insights & Recommendations
│   │   ├── InsightsLibrary.tsx
│   │   └── RecommendationDetail.tsx
│   │
│   ├── 🎯 Goals & Analytics
│   │   ├── GoalsTracking.tsx
│   │   └── ProgressReport.tsx
│   │
│   ├── 🏆 Community
│   │   ├── Leaderboard.tsx
│   │   └── KnowledgeBase.tsx
│   │
│   ├── 👤 User Management
│   │   ├── ProfileSettings.tsx
│   │   ├── NotificationsPanel.tsx
│   │   └── HelpSupport.tsx
│   │
│   └── 🎨 UI Components (Shadcn)
│       └── ui/*.tsx
```

---

## 🏠 Landing & Onboarding Components

### LandingPage.tsx
**Purpose**: Marketing and sign-up page

**Props**:
```typescript
{
  onGetStarted: () => void;  // Navigate to onboarding
}
```

**Key Features**:
- Hero section with value proposition
- "How It Works" feature cards
- Customer testimonials
- Responsive design
- CTA buttons

**Sections**:
1. Header with logo and sign-in
2. Hero with main CTA
3. Feature cards (3 steps)
4. Testimonials (2 cards)
5. Final CTA section
6. Footer with branding

---

### OnboardingFlow.tsx
**Purpose**: 3-step user setup wizard

**Props**:
```typescript
{
  onComplete: () => void;  // Navigate to dashboard
}
```

**State Management**:
- `step` (1-3): Current onboarding step
- `billFile`: Uploaded file
- `selectedDevices`: Array of device IDs
- `savingsGoal`: Monthly target amount

**Steps**:
1. **Upload Bill**: File input with preview
2. **Select Devices**: Checkbox list
3. **Set Goal**: Number input with presets

**Validation**:
- Step 1: File must be selected
- Step 2: At least 1 device
- Step 3: Goal must be > 0

---

## 📊 Main Application Components

### Dashboard.tsx
**Purpose**: Main application hub

**Props**:
```typescript
{
  onNavigate: (view: string) => void;
  greenPoints: number;
  notificationCount: number;
}
```

**Key Sections**:
1. **Header**:
   - Hamburger menu (mobile)
   - Greeting with streak
   - Notification bell
   - Green points badge

2. **Stats Grid** (3 cards):
   - Energy saved %
   - Money saved €
   - CO₂ reduced kg

3. **Quick Actions** (4 buttons):
   - Upload bill
   - View tips
   - Check leaderboard
   - Track goals

4. **Usage Chart**:
   - 7-day line chart
   - Actual vs target

5. **Recommendations** (3 cards):
   - Top priority tips
   - Mark as complete
   - View details

**Data**:
- `usageData`: 7-day energy consumption
- `recommendations`: Top 3 tips
- `userStats`: Energy, money, CO₂, streak

---

### Sidebar.tsx
**Purpose**: Desktop navigation and stats

**Props**:
```typescript
{
  currentView: string;        // Active page
  onNavigate: (view: string) => void;
  greenPoints: number;
  notificationCount: number;
}
```

**Structure**:
1. **Logo Section**: Brand and tagline
2. **Quick Stats**: Energy, money, CO₂
3. **Navigation**: Main menu items
4. **Secondary Nav**: Help, Settings
5. **Upload Button**: Quick action
6. **Green Points**: Progress tracker
7. **User Profile**: Dropdown menu

**Features**:
- Active state highlighting
- Notification badges
- Level progression
- Hover states
- Profile dropdown

---

### MobileSidebar.tsx
**Purpose**: Mobile drawer navigation

**Props**:
```typescript
{
  isOpen: boolean;
  onClose: () => void;
  currentView: string;
  onNavigate: (view: string) => void;
  greenPoints: number;
  notificationCount: number;
  userStats: {
    energySaved: number;
    moneySaved: number;
    co2Reduced: number;
    streak: number;
  };
}
```

**Features**:
- Slide-in from left
- Auto-close on navigate
- Touch-optimized
- Compact stats display
- Level progress bar

**Implementation**:
- Uses Shadcn Sheet component
- 80vw width
- Overlay backdrop
- Swipe-to-close

---

## 💡 Insights & Recommendations

### InsightsLibrary.tsx
**Purpose**: Browse all recommendations

**Props**:
```typescript
{
  onBack: () => void;
  onViewDetail: (id: number) => void;
}
```

**State**:
- `searchQuery`: Text search
- `categoryFilter`: Category dropdown
- `difficultyFilter`: Difficulty dropdown
- `sortBy`: Sort order
- `activeTab`: Current filter tab

**Data**:
- 9 pre-loaded recommendations
- Categories: Lighting, HVAC, Equipment, Appliances, Renewable
- Difficulties: Easy, Medium, Hard
- Statuses: recommended, new, in-progress, completed

**Features**:
1. **Stats Cards** (4): Total, Completed, In Progress, New
2. **Filters**: Search, Category, Difficulty, Sort
3. **Tabs**: All, Recommended, New, In Progress, Completed
4. **Grid**: Responsive card layout
5. **Empty State**: No results message

---

### RecommendationDetail.tsx
**Purpose**: Detailed view of single recommendation

**Props**:
```typescript
{
  onBack: () => void;
  onComplete?: () => void;  // Award points when marked complete
}
```

**Sections**:
1. **Header**:
   - Back button
   - Icon and title
   - Difficulty badge
   - Description

2. **Metrics Grid** (4 cards):
   - Monthly savings
   - Annual savings
   - CO₂/month
   - Time to implement

3. **Mark Complete**:
   - Toggle switch
   - Point award display
   - Status tracking

4. **Implementation Steps**:
   - Numbered list
   - Step-by-step guide
   - Icon indicators

5. **Pro Tips**:
   - Expert advice
   - Best practices

6. **Sidebar**:
   - Investment summary
   - Payback period
   - Next tips

---

## 🎯 Goals & Analytics

### GoalsTracking.tsx
**Purpose**: Manage custom energy goals

**Props**:
```typescript
{
  onBack: () => void;
}
```

**State**:
- `goals`: Array of goal objects
- `isDialogOpen`: Add goal modal state
- `newGoalTitle`: Form input
- `newGoalTarget`: Form input

**Goal Object**:
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

**Features**:
1. **Overall Progress**: Combined completion %
2. **Weekly Chart**: Actual vs target
3. **Goal Cards**: Individual progress
4. **Add Dialog**: Create new goals
5. **Edit/Delete**: CRUD operations
6. **Status Badges**: Visual indicators

---

### ProgressReport.tsx
**Purpose**: Analytics and reporting

**Props**:
```typescript
{
  onBack: () => void;
}
```

**Data**:
- `monthlyData`: 6-month trend
- `categoryBreakdown`: Savings by category
- `achievements`: Milestone timeline

**Sections**:
1. **Header**:
   - Date range
   - Share button
   - Download PDF

2. **Summary Stats** (4 cards):
   - Total saved
   - kWh saved
   - CO₂ reduced
   - Actions completed

3. **Trend Chart**:
   - 6-month area chart
   - Actual vs target

4. **Breakdown**:
   - Bar chart by category
   - Percentage list

5. **Achievements**:
   - Timeline cards
   - Badge icons
   - Dates

6. **Share Section**:
   - Impact card
   - LinkedIn button
   - Email button

---

## 🏆 Community Components

### Leaderboard.tsx
**Purpose**: Rankings and competition

**Props**:
```typescript
{
  onBack: () => void;
}
```

**Data**:
- `leaderboardData`: 3 ranking types (energy, savings, co2)
- `topAchievers`: Top 3 showcase
- 8 businesses per ranking

**Features**:
1. **Your Rank Card**: Highlighted position
2. **Top 3 Showcase**: Special cards
3. **Ranking Tabs**:
   - Energy Saved (%)
   - Money Saved (€)
   - CO₂ Reduced (kg)
4. **Entry Cards**: All ranked businesses
5. **Community Impact**: Aggregate stats

**Rank Icons**:
- 🏆 Gold trophy (#1)
- 🥈 Silver medal (#2)
- 🥉 Bronze medal (#3)
- Number for 4+

---

### KnowledgeBase.tsx
**Purpose**: Educational content library

**Props**:
```typescript
{
  onBack: () => void;
}
```

**State**:
- `searchQuery`: Filter content

**Data**:
- `articles`: 4 articles/videos
- `faqs`: 6 Q&A pairs

**Tabs**:
1. **Articles & Guides**:
   - Text articles
   - Video tutorials
   - Read time
   - Category tags

2. **FAQs**:
   - Accordion component
   - Expandable answers
   - Common questions

3. **Quick Tips**:
   - Energy saving tips (5)
   - Cost reduction strategies (5)
   - Bullet point format

---

## 👤 User Management

### ProfileSettings.tsx
**Purpose**: Account and business management

**Props**:
```typescript
{
  onBack: () => void;
}
```

**State**:
- Business information fields
- Team members array
- Notification preferences
- Security settings

**Tabs**:

#### 1. Business Info
- Profile picture upload
- Business name, owner, email, phone, address
- Business type and description
- Save button with toast

#### 2. Team Management
- Team member list
- Role badges (Owner, Manager, Staff)
- Status indicators (Active, Pending)
- Invite button
- Edit/remove controls

#### 3. Notifications
- Email notifications toggle
- Push notifications toggle
- Weekly reports toggle
- Recommendations toggle
- Achievements toggle
- Save preferences

#### 4. Subscription
- Current plan display (Free)
- Feature list
- Pro plan comparison (€29/month)
- Upgrade CTA

#### 5. Security
- Change password form
- 2FA toggle
- Download data button
- Delete account button

---

### NotificationsPanel.tsx
**Purpose**: Notification center

**Props**:
```typescript
{
  onBack: () => void;
}
```

**Data**:
- 5 sample notifications
- Types: recommendation, achievement, leaderboard, system

**Tabs**:
1. **All**: All notifications
2. **Unread**: Unread only
3. **Recommendations**: Tips only
4. **Achievements**: Milestones only

**Card Features**:
- Color-coded icons
- Status badges
- Timestamps
- Dismiss button
- Left border for unread

---

### HelpSupport.tsx
**Purpose**: Customer support hub

**Props**:
```typescript
{
  onBack: () => void;
}
```

**Sections**:

#### Contact Options (3 cards)
1. **Live Chat**: Real-time support
2. **Email**: support@energico.com
3. **Phone**: +1 (555) 123-4567

#### Tabs
1. **Contact Us**:
   - Support form
   - Name, email, subject, message
   - Submit button

2. **My Tickets**:
   - Ticket history
   - Status tracking
   - Click to view

3. **Resources**:
   - Knowledge Base link
   - Video tutorials
   - FAQ access
   - Community forum

---

## 🎨 UI Component Library

### Shadcn Components Used

#### Layout
- `Card`, `CardHeader`, `CardTitle`, `CardContent`, `CardDescription`
- `Separator`
- `Sheet`, `SheetContent`, `SheetHeader`, `SheetTitle`
- `Dialog`, `DialogContent`, `DialogHeader`, `DialogTitle`
- `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`
- `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent`

#### Form
- `Input`
- `Textarea`
- `Label`
- `Button` (variants: default, outline, ghost)
- `Switch`
- `Checkbox`
- `Select`, `SelectTrigger`, `SelectValue`, `SelectContent`, `SelectItem`

#### Feedback
- `Badge` (variants: default, secondary, outline)
- `Progress`
- `Avatar`, `AvatarImage`, `AvatarFallback`
- `toast` from Sonner
- `Toaster` component

#### Navigation
- `DropdownMenu`, `DropdownMenuTrigger`, `DropdownMenuContent`, etc.

---

## 📊 Chart Components (Recharts)

### LineChart
**Used in**: Dashboard, GoalsTracking

**Props**:
- `data`: Array of data points
- `dataKey`: Field to plot
- `stroke`: Line color
- `strokeWidth`: Line thickness
- `dot`: Dot configuration

**Features**:
- Tooltips
- Grid lines
- Multiple lines (actual vs target)
- Responsive container

### AreaChart
**Used in**: ProgressReport

**Props**:
- `data`: Monthly data
- `fill`: Gradient fill
- `stroke`: Border color

**Features**:
- Gradient fills
- Smooth curves
- Legend
- Axis labels

### BarChart
**Used in**: ProgressReport

**Props**:
- `data`: Category data
- `dataKey`: Bar value field

**Features**:
- Rounded corners
- Color customization
- Horizontal/vertical
- Tooltips

---

## 🎨 Icon System (Lucide React)

### Common Icons Used
- **Navigation**: `Home`, `Lightbulb`, `TrendingUp`, `Settings`, `Award`
- **Actions**: `Upload`, `Download`, `Share2`, `Edit`, `Trash`, `Plus`
- **Metrics**: `Zap`, `DollarSign`, `Leaf`, `Target`, `Calendar`
- **Status**: `CheckCircle2`, `Clock`, `Bell`, `Trophy`, `Crown`
- **UI**: `Menu`, `X`, `ChevronRight`, `ChevronDown`, `ArrowLeft`
- **Categories**: `Wind`, `Thermometer`, `Sun`, `Laptop`, `Coffee`
- **Communication**: `Mail`, `Phone`, `MessageCircle`, `Video`

---

## 🔄 State Flow Diagram

```
App.tsx (Root State)
├── currentView (string)
├── greenPoints (number)
└── notificationCount (number)
    │
    ├─→ LandingPage
    │   └─→ onGetStarted() → setView("onboarding")
    │
    ├─→ OnboardingFlow
    │   └─→ onComplete() → setView("dashboard")
    │
    ├─→ Dashboard
    │   ├─→ onNavigate(view) → setView(view)
    │   ├── Sidebar (desktop)
    │   └── MobileSidebar (mobile)
    │
    ├─→ InsightsLibrary
    │   ├─→ onBack() → setView("dashboard")
    │   └─→ onViewDetail(id) → setView("recommendation")
    │
    ├─→ RecommendationDetail
    │   ├─→ onBack() → setView("dashboard")
    │   └─→ onComplete() → addPoints(25)
    │
    ├─→ GoalsTracking
    │   └─→ onBack() → setView("dashboard")
    │
    ├─→ ProgressReport
    │   └─→ onBack() → setView("dashboard")
    │
    ├─→ Leaderboard
    │   └─→ onBack() → setView("dashboard")
    │
    ├─→ KnowledgeBase
    │   └─→ onBack() → setView("dashboard")
    │
    ├─→ ProfileSettings
    │   └─→ onBack() → setView("dashboard")
    │
    ├─→ NotificationsPanel
    │   └─→ onBack() → setView("dashboard")
    │
    └─→ HelpSupport
        └─→ onBack() → setView("dashboard")
```

---

## 🛠️ Component Best Practices

### 1. Prop Interfaces
Always define TypeScript interfaces:
```typescript
interface MyComponentProps {
  onBack: () => void;
  data: DataType;
}
```

### 2. State Management
Use useState for component-local state:
```typescript
const [isOpen, setIsOpen] = useState(false);
```

### 3. Event Handlers
Prefix with `handle`:
```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Handle submission
};
```

### 4. Responsive Design
Use Tailwind breakpoints:
```typescript
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

### 5. Accessibility
- Use semantic HTML
- Add ARIA labels
- Support keyboard navigation
- Ensure color contrast

---

## 📦 Import Patterns

### UI Components
```typescript
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
```

### Icons
```typescript
import { Home, Settings, Lightbulb } from "lucide-react";
```

### Charts
```typescript
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
```

### Toast Notifications
```typescript
import { toast } from "sonner@2.0.3";

// Usage
toast.success("Action completed!");
toast.error("Something went wrong");
```

---

## 🔍 Finding Components

### By Feature
- **Authentication**: LandingPage, OnboardingFlow
- **Navigation**: Sidebar, MobileSidebar
- **Energy Tips**: InsightsLibrary, RecommendationDetail
- **Progress Tracking**: GoalsTracking, ProgressReport
- **Community**: Leaderboard, KnowledgeBase
- **Account**: ProfileSettings, NotificationsPanel, HelpSupport

### By Type
- **Pages**: All main components
- **Layout**: Sidebar, MobileSidebar
- **Forms**: ProfileSettings, HelpSupport
- **Data Viz**: Dashboard, GoalsTracking, ProgressReport
- **Lists**: InsightsLibrary, Leaderboard, NotificationsPanel

---

## 🚀 Adding New Components

### Step 1: Create Component File
```typescript
// /components/MyNewComponent.tsx
interface MyNewComponentProps {
  onBack: () => void;
}

export function MyNewComponent({ onBack }: MyNewComponentProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Component content */}
    </div>
  );
}
```

### Step 2: Add Route in App.tsx
```typescript
import { MyNewComponent } from "./components/MyNewComponent";

// Add to type
type View = "..." | "myNewView";

// Add to navigation handler
const viewMap = {
  myView: "myNewView",
};

// Add to render
{currentView === "myNewView" && (
  <MyNewComponent onBack={() => setCurrentView("dashboard")} />
)}
```

### Step 3: Add Navigation
Add to Sidebar.tsx or MobileSidebar.tsx:
```typescript
{ id: "myView", label: "My View", icon: MyIcon }
```

---

## 📚 Component Documentation

Each component should include:
1. **Purpose**: What it does
2. **Props**: TypeScript interface
3. **State**: Local state variables
4. **Data**: Mock data structures
5. **Features**: Key functionality
6. **Usage**: How to integrate

---

**Total Components**: 13 main + 30+ UI components

*This guide provides a complete reference for understanding and working with Energico components.*
