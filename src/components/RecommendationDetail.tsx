import { useState, React } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";
import { Switch } from "./ui/switch";
import {
  ArrowLeft,
  Lightbulb,
  DollarSign,
  Leaf,
  Clock,
  ChevronRight,
  CheckCircle2,
  Zap,
  ThermometerSun,
} from "lucide-react";

interface RecommendationDetailProps {
  onComplete?: () => void;
}

const currentRecommendation = {
  id: 1,
  title: "Switch to LED Lighting",
  description:
    "Replace all halogen and incandescent bulbs with LED alternatives throughout your workspace. LED bulbs use up to 75% less energy and last 25 times longer than traditional bulbs.",
  savings: "€45/month",
  savingsAnnual: "€540/year",
  co2Monthly: "12kg CO₂",
  co2Annual: "144kg CO₂",
  difficulty: "Easy",
  timeToImplement: "2-3 hours",
  icon: Lightbulb,
  steps: [
    "Audit current lighting - count all bulbs by type and location",
    "Calculate required LED bulbs (typically 7-10W LED = 60W incandescent)",
    "Purchase quality LED bulbs from reputable supplier",
    "Replace bulbs systematically, starting with most-used areas",
    "Properly dispose of old bulbs at recycling center",
    "Monitor energy usage for 1 month to confirm savings",
  ],
  tips: [
    "Choose warm white (2700-3000K) for offices to reduce eye strain",
    "Look for LED bulbs with at least 80+ CRI for better color quality",
    "Consider smart LED bulbs for additional automation savings",
  ],
  estimatedCost: "€120-€180",
  paybackPeriod: "3-4 months",
};

const nextRecommendations = [
  {
    id: 2,
    title: "Optimize AC Schedule",
    icon: ThermometerSun,
    savings: "€78/month",
  },
  {
    id: 3,
    title: "Enable PC Power Saving",
    icon: Zap,
    savings: "€32/month",
  },
];

export function RecommendationDetail({ onComplete }: RecommendationDetailProps) {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState(false);

  const handleToggleComplete = (checked: boolean) => {
    setCompleted(checked);
    if (checked && onComplete) {
      onComplete();
    }
  };

  const Icon = currentRecommendation.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" onClick={()=>navigate("/app/")} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title & Overview */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-gray-900">{currentRecommendation.title}</h1>
                      <Badge variant="secondary">{currentRecommendation.difficulty}</Badge>
                    </div>
                    <p className="text-gray-600">{currentRecommendation.description}</p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <DollarSign className="w-4 h-4 text-emerald-600" />
                      <p className="text-gray-600">Monthly</p>
                    </div>
                    <p className="text-emerald-600">{currentRecommendation.savings}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <DollarSign className="w-4 h-4 text-blue-600" />
                      <p className="text-gray-600">Annual</p>
                    </div>
                    <p className="text-blue-600">{currentRecommendation.savingsAnnual}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Leaf className="w-4 h-4 text-green-600" />
                      <p className="text-gray-600">CO₂/month</p>
                    </div>
                    <p className="text-green-600">{currentRecommendation.co2Monthly}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-4 h-4 text-purple-600" />
                      <p className="text-gray-600">Time</p>
                    </div>
                    <p className="text-purple-600">{currentRecommendation.timeToImplement}</p>
                  </div>
                </div>

                {/* Mark as Complete */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      className={`w-6 h-6 ${
                        completed ? "text-emerald-600" : "text-gray-400"
                      }`}
                    />
                    <div>
                      <p className="text-gray-900">Mark as Completed</p>
                      <p className="text-gray-500">Track your progress and earn points</p>
                    </div>
                  </div>
                  <Switch checked={completed} onCheckedChange={handleToggleComplete} />
                </div>
              </CardContent>
            </Card>

            {/* Implementation Steps */}
            <Card>
              <CardHeader>
                <CardTitle>Implementation Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  {currentRecommendation.steps.map((step, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-emerald-600">{index + 1}</span>
                      </div>
                      <p className="text-gray-700 pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* Pro Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Pro Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {currentRecommendation.tips.map((tip, index) => (
                    <li key={index} className="flex gap-3">
                      <Lightbulb className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{tip}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Investment Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Investment Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-gray-600 mb-1">Estimated Cost</p>
                  <p className="text-gray-900">{currentRecommendation.estimatedCost}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Payback Period</p>
                  <p className="text-emerald-600">{currentRecommendation.paybackPeriod}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">ROI (First Year)</p>
                  <p className="text-emerald-600">200-300%</p>
                </div>
              </CardContent>
            </Card>

            {/* Next Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Next Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {nextRecommendations.map((rec) => {
                  const NextIcon = rec.icon;
                  return (
                    <button
                      key={rec.id}
                      className="w-full flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-emerald-500 hover:bg-emerald-50 transition-colors text-left"
                    >
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <NextIcon className="w-5 h-5 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900">{rec.title}</p>
                        <p className="text-emerald-600">{rec.savings}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </button>
                  );
                })}
              </CardContent>
            </Card>

            {/* Action Button */}
            <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
              {completed ? "Completed ✓" : "Start Implementation"}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
