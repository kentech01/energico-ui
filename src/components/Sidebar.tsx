import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";
import {
  Home,
  Lightbulb,
  TrendingUp,
  Settings,
  Award,
  Users,
  Target,
  Bell,
  HelpCircle,
  LogOut,
  ChevronDown,
  Zap,
  DollarSign,
  Leaf,
  BookOpen,
  Trophy,
  Upload,
} from "lucide-react";

interface SidebarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  greenPoints: number;
  notificationCount: number;
  onSignOut: () => void;
}

export function Sidebar({
  currentView,
  onNavigate,
  greenPoints,
  notificationCount,
  onSignOut,
}: SidebarProps) {
  const [userStats] = useState({
    energySaved: 23,
    moneySaved: 156,
    co2Reduced: 45,
  });

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "insights", label: "Recommendations", icon: Lightbulb },
    { id: "calculator", label: "Calculator", icon: Zap },
    { id: "simulator", label: "Solar Simulator", icon: Leaf },
    { id: "blogs", label: "Blogs & Tutorials", icon: BookOpen },
    { id: "reports", label: "Reports", icon: TrendingUp },
  ];

  const bottomNavItems = [
    { id: "profile", label: "Profile", icon: Users },
    { id: "help", label: "Help", icon: HelpCircle },
  ];

  return (
    <aside className="hidden lg:flex lg:flex-col w-72 bg-gray-900 text-white">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
            <Lightbulb className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="text-lg">Energico</span>
            <p className="text-gray-400 text-xs">AI Energy Platform</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="p-4 border-b border-gray-800">
        <div className="bg-gray-800 rounded-lg p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span className="text-gray-400 text-sm">Energy Saved</span>
            </div>
            <span className="text-emerald-400">{userStats.energySaved}%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-blue-400" />
              <span className="text-gray-400 text-sm">Money Saved</span>
            </div>
            <span className="text-blue-400">€{userStats.moneySaved}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-green-400" />
              <span className="text-gray-400 text-sm">CO₂ Reduced</span>
            </div>
            <span className="text-green-400">{userStats.co2Reduced}kg</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;

          return (
            <button
              key={item.id}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-emerald-500 text-white"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
              onClick={() => onNavigate(item.id)}
            >
              <Icon className="w-5 h-5" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.id === "insights" && notificationCount > 0 && (
                <Badge className="bg-red-500 text-white h-5 min-w-5 p-0 flex items-center justify-center">
                  {notificationCount}
                </Badge>
              )}
            </button>
          );
        })}

        <Separator className="my-4 bg-gray-800" />

        {bottomNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;

          return (
            <button
              key={item.id}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-emerald-500 text-white"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
              onClick={() => onNavigate(item.id)}
            >
              <Icon className="w-5 h-5" />
              <span className="flex-1 text-left">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Quick Actions */}
      <div className="p-4 border-t border-gray-800 space-y-2">
        <Button
          onClick={() => onNavigate("upload")}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
        >
          <Upload className="w-4 h-4 mr-2" />
          Upload New Bill
        </Button>
      </div>

      {/* Green Points */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-500" />
            <span className="text-gray-400">Green Points</span>
          </div>
          <span className="text-emerald-400">{greenPoints}</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-2">
          <div
            className="bg-emerald-500 h-2 rounded-full transition-all"
            style={{ width: `${(greenPoints % 100)}%` }}
          />
        </div>
        <p className="text-gray-500 text-xs mt-2">
          {100 - (greenPoints % 100)} points to next level
        </p>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-800">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
              <Avatar className="w-10 h-10">
                <AvatarImage src="https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjIwNTY5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-left">
                <p className="text-white">Sarah Chen</p>
                <p className="text-gray-400 text-xs">Green Café</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => onNavigate("profile")}>
                <Users className="mr-2 h-4 w-4" />
                <span>Profile & Business</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onNavigate("settings")}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onNavigate("notifications")}>
                <Bell className="mr-2 h-4 w-4" />
                <span>Notifications</span>
                {notificationCount > 0 && (
                  <Badge className="ml-auto bg-red-500 text-white h-5 min-w-5 p-0 flex items-center justify-center">
                    {notificationCount}
                  </Badge>
                )}
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => onNavigate("help")}>
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>Help & Support</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600" onClick={onSignOut}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  );
}
