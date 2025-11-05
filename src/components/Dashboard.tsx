import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  CheckCircle2,
  ChevronRight,
  Zap,
  DollarSign,
  Leaf,
  Lightbulb,
  Settings,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface DashboardProps {
  onNavigate: (view: string) => void;
}

const usageData = [
  { day: "Mon", usage: 145, target: 120 },
  { day: "Tue", usage: 132, target: 120 },
  { day: "Wed", usage: 128, target: 120 },
  { day: "Thu", usage: 115, target: 120 },
  { day: "Fri", usage: 108, target: 120 },
  { day: "Sat", usage: 95, target: 120 },
  { day: "Sun", usage: 90, target: 120 },
];

const recommendations = [
  {
    id: 1,
    title: "Switch to LED Lighting",
    description: "Replace all halogen bulbs with LED alternatives",
    savings: "€45/month",
    co2: "12kg CO₂",
    difficulty: "Easy",
    icon: Lightbulb,
    completed: false,
  },
  {
    id: 2,
    title: "Optimize AC Schedule",
    description: "Set thermostat to 22°C during work hours, 18°C off-hours",
    savings: "€78/month",
    co2: "25kg CO₂",
    difficulty: "Easy",
    icon: Zap,
    completed: false,
  },
  {
    id: 3,
    title: "Enable PC Power Saving",
    description: "Configure all computers to sleep mode after 15 minutes",
    savings: "€32/month",
    co2: "8kg CO₂",
    difficulty: "Medium",
    icon: Settings,
    completed: true,
  },
];

export function Dashboard({ onNavigate }: DashboardProps) {
  const [completedTasks, setCompletedTasks] = useState([3]);

  const userStats = {
    energySaved: 23,
    moneySaved: 156,
    co2Reduced: 45,
    streak: 7,
  };

  const handleMarkComplete = (id: number) => {
    if (completedTasks.includes(id)) {
      setCompletedTasks(completedTasks.filter((taskId) => taskId !== id));
    } else {
      setCompletedTasks([...completedTasks, id]);
    }
  };

  const activeRecommendations = recommendations.filter(
    (r) => !completedTasks.includes(r.id)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2 text-2xl font-medium">Welcome back, Sarah 👋</h1>
          <p className="text-gray-600">
            You're on a {userStats.streak}-day streak! Keep up the great work.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-none shadow-sm">
            <CardContent className="pt-6 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-600 mb-1">Energy Saved</p>
                  <p className="text-gray-900">{userStats.energySaved}%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardContent className="pt-6 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-600 mb-1">Money Saved</p>
                  <p className="text-gray-900">€{userStats.moneySaved}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardContent className="pt-6 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-600 mb-1">CO₂ Reduced</p>
                  <p className="text-gray-900">{userStats.co2Reduced} kg</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Recommendations */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-gray-900 mb-1 text-xl font-medium">Your Recommendations</h2>
                <p className="text-gray-600">
                  AI-powered tips to save energy and money
                </p>
              </div>
              <Button
                variant="ghost"
                onClick={() => onNavigate("insights")}
                className="hidden sm:flex"
              >
                View All
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            {/* Recommendations List */}
            <div className="space-y-4">
              {activeRecommendations.slice(0, 3).map((rec) => {
                const Icon = rec.icon;
                const isCompleted = completedTasks.includes(rec.id);

                return (
                  <Card
                    key={rec.id}
                    className="border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                    onClick={() => onNavigate(`recommendation-${rec.id}`)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 transition-colors">
                          <Icon className="w-7 h-7 text-emerald-600" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <h3 className="text-gray-900">{rec.title}</h3>
                            <Badge
                              variant="secondary"
                              className="flex-shrink-0 bg-custom-grayish rounded-lg"
                            >
                              {rec.difficulty}
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-4">{rec.description}</p>

                          {/* Stats */}
                          <div className="flex items-center gap-6 mb-4">
                            <div>
                              <p className="text-gray-500">Save</p>
                              <p className="text-emerald-600">{rec.savings}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Reduce</p>
                              <p className="text-green-600">{rec.co2}</p>
                            </div>
                          </div>

                          {/* Action Button */}
                          <Button
                            variant={isCompleted ? "outline" : "default"}
                            className={
                              isCompleted
                                ? ""
                                : "bg-emerald-500 hover:bg-emerald-600"
                            }
                            onClick={(e) => {
                              e.stopPropagation();
                              handleMarkComplete(rec.id);
                            }}
                          >
                            {isCompleted ? (
                              <>
                                <CheckCircle2 className="w-4 h-4 mr-2" />
                                Completed
                              </>
                            ) : (
                              <>
                                Start Now
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* View All on Mobile */}
            <Button
              variant="outline"
              onClick={() => onNavigate("insights")}
              className="w-full sm:hidden "
            >
              View All Recommendations
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Sidebar - Energy Usage */}
          <div className="lg:col-span-1">
            <Card className="border-none shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between">
                  <span>This Week</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onNavigate("reports")}
                  >
                    <TrendingUp className="w-4 h-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                  <LineChart data={usageData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                      dataKey="day"
                      stroke="#999"
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis stroke="#999" tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="usage"
                      stroke="#10B981"
                      strokeWidth={2}
                      dot={{ fill: "#10B981", r: 3 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="target"
                      stroke="#D1D5DB"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Current usage</span>
                    <span className="text-gray-900">90 kWh</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="text-gray-600">Target</span>
                    <span className="text-gray-500">120 kWh</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-emerald-600">
                      <TrendingUp className="w-4 h-4" />
                      <span>38% below target</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
