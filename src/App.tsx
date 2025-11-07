import { useState, React, useEffect } from "react";
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
import { AuthModal } from "./components/AuthModal";
import { Routes, Route } from "react-router-dom";
// import { Route } from "lucide-react";

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
  const [isModalOpen, setModalOpen]= useState(false)
  const [greenPoints, setGreenPoints] = useState(320);
  const [notificationCount] = useState(3);

  const handleCompleteRecommendation = () => {
    setGreenPoints((prev) => prev + 25); // Award points for completing recommendations
  };
  useEffect(() => {
    if (isModalOpen) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling
      document.body.style.overflow = "auto";
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);
  const openCloseModal= ()=>{
   setModalOpen(!isModalOpen);
  }

  const handleSignOut = () => {
    setGreenPoints(320); // Reset to default
  };

  // Pages that don't need the sidebar layout

  return (
    <div className="min-h-screen">
      <Toaster position="top-right" richColors />
      {isModalOpen && <AuthModal modalInteract={openCloseModal}></AuthModal>}
      <Routes>
        <Route
          path="/"
          
          element={
            <LandingPage  modalInteract={openCloseModal} />
          }
        />
        <Route path="/blog" element={<PublicBlog  />} />

        <Route
          path="/auth"
          element={<OnboardingFlow  />}
        />

        <Route
          path="/app"
          element={
            <AppLayout
              children=""
              currentView=""
              onNavigate={() => {}}
              greenPoints={greenPoints}
              notificationCount={notificationCount}
              onSignOut={handleSignOut}
            />
          }
        >
          <Route index element={<Dashboard onNavigate={() => {}} />} />
          <Route
            path="insights"
            element={
              <InsightsLibrary  onViewDetail={() => {}} />
            }
          />
          <Route
            path="recomendation"
            element={
              <RecommendationDetail
                
                onComplete={handleCompleteRecommendation}
              />
            }
          />
          <Route
            path="simulator"
            element={<RenewableSimulator  />}
          />
          <Route
            path="reports"
            element={<ProgressReport  />}
          />

          <Route
            path="profile"
            element={<ProfileSettings  />}
          />
          <Route path="calculator" element={<Calculator  />} />
          <Route path="blogs" element={<BlogsTutorials  />} />
          
          <Route
            path="notifications"
            element={<NotificationsPanel  />}
          />
          <Route path="help" element={<HelpSupport  />} />
        </Route>
      </Routes>

      {/* Chatbot - available on all authenticated pages */}
      <Chatbot />
    </div>
  );
}


