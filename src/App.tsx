import { useState, React } from "react";
import { LandingPage } from "./components/LandingPage";
import { PublicBlog } from "./components/PublicBlog";
import { OnboardingFlow } from "./components/OnboardingFlow";
import { AppLayout } from "./components/AppLayout";
import { Dashboard } from "./components/Dashboard";
import { RecommendationDetail } from "./components/RecommendationDetail";
import { ProgressReport } from "./components/ProgressReport";
import { ProfileSettings } from "./components/ProfileSettings";
import { InsightsLibrary } from "./components/InsightsLibrary";
import { Calculator } from "./components/Calculator";
import { RenewableSimulator } from "./components/RenewableSimulator";
import { BlogsTutorials } from "./components/BlogsTutorials";
import { KnowledgeBase } from "./components/KnowledgeBase";
import { NotificationsPanel } from "./components/NotificationsPanel";
import { HelpSupport } from "./components/HelpSupport";
import { Chatbot } from "./components/Chatbot";
import { Toaster } from "./components/ui/sonner";

type View =
  | "landing"
  | "publicBlog"
  | "onboarding"
  | "dashboard"
  | "recommendation"
  | "reports"
  | "profile"
  | "insights"
  | "calculator"
  | "simulator"
  | "blogs"
  | "knowledge"
  | "settings"
  | "help"
  | "notifications";

export default function App() {
  const [currentView, setCurrentView] = useState<View>("landing");
  const [greenPoints, setGreenPoints] = useState(320);
  const [notificationCount] = useState(3);

  const handleNavigation = (view: string) => {
    const viewMap: Record<string, View> = {
      dashboard: "dashboard",
      insights: "insights",
      calculator: "calculator",
      simulator: "simulator",
      blogs: "blogs",
      reports: "reports",
      profile: "profile",
      knowledge: "knowledge",
      settings: "profile", // settings redirects to profile
      help: "help",
      notifications: "notifications",
      upload: "insights", // upload redirects to insights
    };

    if (view.startsWith("recommendation-")) {
      setCurrentView("recommendation");
    } else {
      setCurrentView((viewMap[view] as View) || "dashboard");
    }
  };

  const handleCompleteRecommendation = () => {
    setGreenPoints((prev) => prev + 25); // Award points for completing recommendations
  };

  const handleSignOut = () => {
    setCurrentView("landing");
    setGreenPoints(320); // Reset to default
  };

  // Pages that don't need the sidebar layout
  const isAuthPage = currentView === "landing" || currentView === "onboarding" || currentView === "publicBlog";

  return (
    <div className="min-h-screen">
      <Toaster position="top-right" richColors />

      {currentView === "landing" && (
        <LandingPage 
          onGetStarted={() => setCurrentView("onboarding")}
          onViewBlog={() => setCurrentView("publicBlog")}
        />
      )}

      {currentView === "publicBlog" && (
        <PublicBlog onBack={() => setCurrentView("landing")} />
      )}

      {currentView === "onboarding" && (
        <OnboardingFlow onComplete={() => setCurrentView("dashboard")} />
      )}

      {!isAuthPage && (
        <AppLayout
          currentView={currentView}
          onNavigate={handleNavigation}
          greenPoints={greenPoints}
          notificationCount={notificationCount}
          onSignOut={handleSignOut}
        >
          {currentView === "dashboard" && (
            <Dashboard onNavigate={handleNavigation} />
          )}

          {currentView === "insights" && (
            <InsightsLibrary
              onBack={() => setCurrentView("dashboard")}
              onViewDetail={(id) => setCurrentView("recommendation")}
            />
          )}

          {currentView === "recommendation" && (
            <RecommendationDetail
              onBack={() => setCurrentView("dashboard")}
              onComplete={handleCompleteRecommendation}
            />
          )}

          {currentView === "reports" && (
            <ProgressReport onBack={() => setCurrentView("dashboard")} />
          )}

          {currentView === "profile" && (
            <ProfileSettings onBack={() => setCurrentView("dashboard")} />
          )}

          {currentView === "calculator" && (
            <Calculator onBack={() => setCurrentView("dashboard")} />
          )}

          {currentView === "simulator" && (
            <RenewableSimulator onBack={() => setCurrentView("dashboard")} />
          )}

          {currentView === "blogs" && (
            <BlogsTutorials onBack={() => setCurrentView("dashboard")} />
          )}

          {currentView === "knowledge" && (
            <KnowledgeBase onBack={() => setCurrentView("dashboard")} />
          )}

          {currentView === "notifications" && (
            <NotificationsPanel onBack={() => setCurrentView("dashboard")} />
          )}

          {currentView === "help" && (
            <HelpSupport onBack={() => setCurrentView("dashboard")} />
          )}
        </AppLayout>
      )}

      {/* Chatbot - available on all authenticated pages */}
      {!isAuthPage && <Chatbot />}
    </div>
  );
}
