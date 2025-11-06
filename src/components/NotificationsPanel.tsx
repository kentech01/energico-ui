import { Button } from "./ui/button";
import {React} from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Bell,
  Lightbulb,
  Award,
  TrendingUp,
  CheckCircle2,
  X,
} from "lucide-react";



const notifications = [
  {
    id: 1,
    type: "recommendation",
    title: "New Energy Tip Available",
    message: "Smart Thermostat Installation could save you €85/month",
    time: "2 hours ago",
    read: false,
    icon: Lightbulb,
    color: "blue",
  },
  {
    id: 2,
    type: "achievement",
    title: "Goal Achievement Unlocked!",
    message: "You've reached your monthly savings goal of €150!",
    time: "1 day ago",
    read: false,
    icon: Award,
    color: "emerald",
  },
  {
    id: 3,
    type: "leaderboard",
    title: "Leaderboard Update",
    message: "You moved up to #7 in your region! Keep going!",
    time: "2 days ago",
    read: false,
    icon: TrendingUp,
    color: "purple",
  },
  {
    id: 4,
    type: "system",
    title: "Weekly Report Ready",
    message: "Your weekly energy report is ready to view",
    time: "3 days ago",
    read: true,
    icon: Bell,
    color: "gray",
  },
  {
    id: 5,
    type: "achievement",
    title: "Milestone Reached",
    message: "You've saved 100kg of CO₂ this month!",
    time: "5 days ago",
    read: true,
    icon: CheckCircle2,
    color: "green",
  },
];

export function NotificationsPanel() {
  const navigate = useNavigate();
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" onClick={()=>navigate("/app/")} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-gray-900 mb-2">Notifications</h1>
              <p className="text-gray-600">
                {unreadCount} unread notification{unreadCount !== 1 ? "s" : ""}
              </p>
            </div>
            <Button variant="outline">Mark All as Read</Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">
              All ({notifications.length})
            </TabsTrigger>
            <TabsTrigger value="unread">
              Unread ({unreadCount})
            </TabsTrigger>
            <TabsTrigger value="recommendations">
              Recommendations
            </TabsTrigger>
            <TabsTrigger value="achievements">
              Achievements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {notifications.map((notification) => {
              const Icon = notification.icon;
              const colorClasses = {
                blue: "bg-blue-50 border-blue-200",
                emerald: "bg-emerald-50 border-emerald-200",
                purple: "bg-purple-50 border-purple-200",
                green: "bg-green-50 border-green-200",
                gray: "bg-gray-50 border-gray-200",
              };

              return (
                <Card
                  key={notification.id}
                  className={`${
                    !notification.read ? "border-l-4 border-l-emerald-500" : ""
                  }`}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          colorClasses[
                            notification.color as keyof typeof colorClasses
                          ]
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 text-${notification.color}-600`}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-gray-900">
                            {notification.title}
                          </h3>
                          <Button variant="ghost" size="icon">
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                        <p className="text-gray-600 mb-2">
                          {notification.message}
                        </p>
                        <div className="flex items-center gap-3">
                          <p className="text-gray-500">{notification.time}</p>
                          {!notification.read && (
                            <Badge className="bg-emerald-100 text-emerald-700">
                              New
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>

          <TabsContent value="unread">
            <div className="space-y-4">
              {notifications
                .filter((n) => !n.read)
                .map((notification) => {
                  const Icon = notification.icon;
                  return (
                    <Card
                      key={notification.id}
                      className="border-l-4 border-l-emerald-500"
                    >
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-gray-900 mb-2">
                              {notification.title}
                            </h3>
                            <p className="text-gray-600 mb-2">
                              {notification.message}
                            </p>
                            <p className="text-gray-500">{notification.time}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
            </div>
          </TabsContent>

          <TabsContent value="recommendations">
            <div className="space-y-4">
              {notifications
                .filter((n) => n.type === "recommendation")
                .map((notification) => {
                  const Icon = notification.icon;
                  return (
                    <Card key={notification.id}>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-gray-900 mb-2">
                              {notification.title}
                            </h3>
                            <p className="text-gray-600 mb-2">
                              {notification.message}
                            </p>
                            <p className="text-gray-500">{notification.time}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
            </div>
          </TabsContent>

          <TabsContent value="achievements">
            <div className="space-y-4">
              {notifications
                .filter((n) => n.type === "achievement")
                .map((notification) => {
                  const Icon = notification.icon;
                  return (
                    <Card key={notification.id}>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-emerald-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-gray-900 mb-2">
                              {notification.title}
                            </h3>
                            <p className="text-gray-600 mb-2">
                              {notification.message}
                            </p>
                            <p className="text-gray-500">{notification.time}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
