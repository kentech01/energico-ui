import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import {React} from "react"
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import { useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import {
  Home,
  Lightbulb,
  TrendingUp,
  Settings,
  Award,
  Target,
  HelpCircle,
  Zap,
  DollarSign,
  Leaf,
  BookOpen,
  Trophy,
  Upload,
  Sparkles,
  X,
  LogOut,
} from "lucide-react";

interface MobileSidebarProps {
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
  onSignOut: () => void;
}

export function MobileSidebar({
  isOpen,
  onClose,
  currentView,
  onNavigate,
  greenPoints,
  notificationCount,
  userStats,
  onSignOut,
}: MobileSidebarProps) {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: Home, badge: null },
    { id: "insights", label: "Recommendations", icon: Lightbulb, badge: notificationCount },
    { id: "calculator", label: "Calculator", icon: Zap, badge: null },
    { id: "simulator", label: "Solar Simulator", icon: Leaf, badge: null },
    { id: "blogs", label: "Blogs & Tutorials", icon: BookOpen, badge: null },
    { id: "reports", label: "Reports", icon: TrendingUp, badge: null },
  ];
  const navigate = useNavigate();

  const bottomNavItems = [
    { id: "profile", label: "Profile", icon: Settings },
    { id: "help", label: "Help", icon: HelpCircle },
  ];

  const currentLevel = Math.floor(greenPoints / 100) + 1;
  const pointsToNextLevel = 100 - (greenPoints % 100);
  const progressToNextLevel = greenPoints % 100;


  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-80 bg-gray-900 text-white border-gray-800 p-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <SheetHeader className="p-6 border-b border-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <SheetTitle className="text-white">Energico</SheetTitle>
                  <p className="text-gray-400 text-xs">AI Energy Platform</p>
                </div>
              </div>
            </div>
          </SheetHeader>

          {/* User Profile */}
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <Avatar className="w-12 h-12 border-2 border-emerald-500">
                <AvatarImage src="https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjIwNTY5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080" />
                <AvatarFallback className="bg-emerald-600 text-white">SC</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-white">Sarah Chen</p>
                <p className="text-gray-400 text-sm">Green Café</p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="p-4 border-b border-gray-800">
            <div className="bg-gray-800 rounded-lg p-3 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span className="text-gray-300">Energy</span>
                </div>
                <span className="text-emerald-400">{userStats.energySaved}%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300">Saved</span>
                </div>
                <span className="text-blue-400">€{userStats.moneySaved}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">CO₂</span>
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
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-emerald-500 text-white"
                      : "text-gray-400 hover:bg-gray-800 hover:text-white"
                  }`}
                  onClick={() => {navigate(item.id=== "dashboard" ? "" :item.id); onClose()}}
                >
                  <Icon className="w-5 h-5" />
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.badge && item.badge > 0 && (
                    <Badge className="bg-red-500 text-white h-5 min-w-5 px-2">
                      {item.badge}
                    </Badge>
                  )}
                </button>
              );
            })}

            <Separator className="my-3 bg-gray-800" />

            {bottomNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;

              return (
                <button
                  key={item.id}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-emerald-500 text-white"
                      : "text-gray-400 hover:bg-gray-800 hover:text-white"
                  }`}
                  onClick={() => {navigate(item.id); onClose()}}
                >
                  <Icon className="w-5 h-5" />
                  <span className="flex-1 text-left">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Upload Button */}
          <div className="p-4 border-t border-gray-800">
            <Button
              onClick={() => {navigate("insights"); onClose()}}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload New Bill
            </Button>
          </div>

          {/* Green Points */}
          <div className="p-4 border-t border-gray-800">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <div>
                    <p className="text-white">Level {currentLevel}</p>
                    <p className="text-gray-400 text-xs">{greenPoints} points</p>
                  </div>
                </div>
                <Badge className="bg-yellow-500/20 text-yellow-400">
                  {pointsToNextLevel} to next
                </Badge>
              </div>
              <Progress value={progressToNextLevel} className="h-2 bg-gray-800" />
            </div>
          </div>

          {/* Sign Out */}
          <div className="p-4 border-t border-gray-800">
            <Button
              onClick={() => {
                onSignOut();
                onClose();
              }}
              variant="outline"
              className="w-full text-red-600 border-red-600 hover:bg-red-50 hover:text-red-700"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
