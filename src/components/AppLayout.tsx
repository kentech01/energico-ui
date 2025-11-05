import { useState, React } from "react";
import { Sidebar } from "./Sidebar";
import { MobileSidebar } from "./MobileSidebar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {Outlet} from "react-router-dom"
import { Menu, Bell, Award } from "lucide-react";
import { useLocation } from "react-router-dom";

interface AppLayoutProps {
  children: React.ReactNode;
  currentView: string;
  onNavigate: (view: string) => void;
  greenPoints: number;
  notificationCount: number;
  onSignOut: () => void;
}

export function AppLayout({
  children,
  currentView,
  onNavigate,
  greenPoints,
  notificationCount,
  onSignOut,
}: AppLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const locationSlice = location.pathname.slice(5)

  const userStats = {
    energySaved: 23,
    moneySaved: 156,
    co2Reduced: 45,
    streak: 7,
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Desktop Sidebar - Always Visible */}
      <Sidebar
        currentView={currentView}
        greenPoints={greenPoints}
        notificationCount={notificationCount}
        onSignOut={onSignOut}
        locationName={locationSlice}
      />

      {/* Mobile Sidebar - Drawer */}
      <MobileSidebar
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        currentView={currentView}
        onNavigate={onNavigate}
        greenPoints={greenPoints}
        notificationCount={notificationCount}
        userStats={userStats}
        onSignOut={onSignOut}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header - Only visible on mobile */}
        <header className="lg:hidden bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="px-4 py-3 flex items-center justify-between">
            <button onClick={() => setMenuOpen(true)}>
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => onNavigate("notifications")}
              >
                <Bell className="w-5 h-5" />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">
                    {notificationCount}
                  </span>
                )}
              </Button>
              <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                <Award className="w-4 h-4 mr-1" />
                {greenPoints}
              </Badge>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
}
