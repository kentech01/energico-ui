import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  ArrowLeft,
  Search,
  Filter,
  Lightbulb,
  Zap,
  Wind,
  Thermometer,
  Sun,
  Laptop,
  Coffee,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  DollarSign,
  Leaf,
} from "lucide-react";

interface InsightsLibraryProps {
  onBack: () => void;
  onViewDetail: (id: number) => void;
}

const allRecommendations = [
  {
    id: 1,
    title: "Switch to LED Lighting",
    category: "Lighting",
    description: "Replace all halogen bulbs with LED alternatives",
    savings: "€45/month",
    co2: "12kg CO₂",
    difficulty: "Easy",
    timeToImplement: "2-3 hours",
    icon: Lightbulb,
    status: "recommended",
    priority: "high",
  },
  {
    id: 2,
    title: "Optimize AC Schedule",
    category: "HVAC",
    description: "Set thermostat to 22°C during work hours, 18°C off-hours",
    savings: "€78/month",
    co2: "25kg CO₂",
    difficulty: "Easy",
    timeToImplement: "30 minutes",
    icon: Wind,
    status: "recommended",
    priority: "high",
  },
  {
    id: 3,
    title: "Enable PC Power Saving",
    category: "Equipment",
    description: "Configure all computers to sleep mode after 15 minutes",
    savings: "€32/month",
    co2: "8kg CO₂",
    difficulty: "Medium",
    timeToImplement: "1 hour",
    icon: Laptop,
    status: "completed",
    priority: "medium",
  },
  {
    id: 4,
    title: "Install Smart Power Strips",
    category: "Equipment",
    description: "Eliminate phantom power draw from devices in standby mode",
    savings: "€28/month",
    co2: "7kg CO₂",
    difficulty: "Easy",
    timeToImplement: "1 hour",
    icon: Zap,
    status: "recommended",
    priority: "medium",
  },
  {
    id: 5,
    title: "Solar Panel Assessment",
    category: "Renewable",
    description: "Get a free solar panel installation assessment",
    savings: "€200/month",
    co2: "65kg CO₂",
    difficulty: "Hard",
    timeToImplement: "3-6 months",
    icon: Sun,
    status: "new",
    priority: "high",
  },
  {
    id: 6,
    title: "Upgrade to Energy Star Refrigerator",
    category: "Appliances",
    description: "Replace old refrigerator with Energy Star certified model",
    savings: "€55/month",
    co2: "18kg CO₂",
    difficulty: "Medium",
    timeToImplement: "1 day",
    icon: Coffee,
    status: "recommended",
    priority: "medium",
  },
  {
    id: 7,
    title: "Seal Air Leaks",
    category: "HVAC",
    description: "Weatherstrip doors and windows to prevent heat loss",
    savings: "€42/month",
    co2: "14kg CO₂",
    difficulty: "Easy",
    timeToImplement: "2-3 hours",
    icon: Wind,
    status: "in-progress",
    priority: "medium",
  },
  {
    id: 8,
    title: "Install Motion Sensor Lights",
    category: "Lighting",
    description: "Automatically turn off lights in unoccupied areas",
    savings: "€35/month",
    co2: "10kg CO₂",
    difficulty: "Medium",
    timeToImplement: "2-4 hours",
    icon: Lightbulb,
    status: "recommended",
    priority: "low",
  },
  {
    id: 9,
    title: "Smart Thermostat Installation",
    category: "HVAC",
    description: "Install programmable smart thermostat for optimal control",
    savings: "€85/month",
    co2: "28kg CO₂",
    difficulty: "Medium",
    timeToImplement: "1-2 hours",
    icon: Thermometer,
    status: "new",
    priority: "high",
  },
];

export function InsightsLibrary({ onBack, onViewDetail }: InsightsLibraryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [sortBy, setSortBy] = useState("savings");
  const [activeTab, setActiveTab] = useState("all");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-emerald-100 text-emerald-700">Completed</Badge>;
      case "in-progress":
        return <Badge className="bg-blue-100 text-blue-700">In Progress</Badge>;
      case "new":
        return <Badge className="bg-purple-100 text-purple-700">New</Badge>;
      default:
        return <Badge variant="secondary">Recommended</Badge>;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-emerald-600";
      case "Medium":
        return "text-yellow-600";
      case "Hard":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const filteredRecommendations = allRecommendations
    .filter((rec) => {
      // Tab filter
      if (activeTab !== "all" && rec.status !== activeTab) return false;

      // Search filter
      if (
        searchQuery &&
        !rec.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !rec.description.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Category filter
      if (categoryFilter !== "all" && rec.category !== categoryFilter) return false;

      // Difficulty filter
      if (difficultyFilter !== "all" && rec.difficulty !== difficultyFilter) return false;

      return true;
    })
    .sort((a, b) => {
      if (sortBy === "savings") {
        return (
          parseInt(b.savings.replace(/[^0-9]/g, "")) -
          parseInt(a.savings.replace(/[^0-9]/g, ""))
        );
      } else if (sortBy === "priority") {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority as keyof typeof priorityOrder] - priorityOrder[a.priority as keyof typeof priorityOrder];
      }
      return 0;
    });

  const stats = {
    total: allRecommendations.length,
    completed: allRecommendations.filter((r) => r.status === "completed").length,
    inProgress: allRecommendations.filter((r) => r.status === "in-progress").length,
    new: allRecommendations.filter((r) => r.status === "new").length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-gray-900 mb-2">All Recommendations</h1>
              <p className="text-gray-600">
                Browse and filter all energy-saving recommendations
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-1">Total Tips</p>
              <p className="text-gray-900">{stats.total}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-1">Completed</p>
              <p className="text-emerald-600">{stats.completed}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-1">In Progress</p>
              <p className="text-blue-600">{stats.inProgress}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-1">New</p>
              <p className="text-purple-600">{stats.new}</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search recommendations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Lighting">Lighting</SelectItem>
                  <SelectItem value="HVAC">HVAC</SelectItem>
                  <SelectItem value="Equipment">Equipment</SelectItem>
                  <SelectItem value="Appliances">Appliances</SelectItem>
                  <SelectItem value="Renewable">Renewable</SelectItem>
                </SelectContent>
              </Select>

              <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Difficulties</SelectItem>
                  <SelectItem value="Easy">Easy</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Hard">Hard</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="savings">Highest Savings</SelectItem>
                  <SelectItem value="priority">Priority</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="all">All ({stats.total})</TabsTrigger>
            <TabsTrigger value="recommended">
              Recommended ({stats.total - stats.completed - stats.inProgress - stats.new})
            </TabsTrigger>
            <TabsTrigger value="new">New ({stats.new})</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress ({stats.inProgress})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({stats.completed})</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab}>
            {filteredRecommendations.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <Filter className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No recommendations found</p>
                  <p className="text-gray-500 mt-2">Try adjusting your filters</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRecommendations.map((rec) => {
                  const Icon = rec.icon;

                  return (
                    <Card
                      key={rec.id}
                      className="cursor-pointer hover:shadow-lg transition-all"
                      onClick={() => onViewDetail(rec.id)}
                    >
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-emerald-600" />
                          </div>
                          {getStatusBadge(rec.status)}
                        </div>

                        <h3 className="text-gray-900 mb-2">{rec.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {rec.description}
                        </p>

                        <div className="flex items-center gap-2 mb-4">
                          <Badge variant="outline">{rec.category}</Badge>
                          <Badge variant="outline" className={getDifficultyColor(rec.difficulty)}>
                            {rec.difficulty}
                          </Badge>
                        </div>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-1 text-gray-600">
                              <DollarSign className="w-4 h-4" />
                              <span>Savings</span>
                            </div>
                            <span className="text-emerald-600">{rec.savings}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-1 text-gray-600">
                              <Leaf className="w-4 h-4" />
                              <span>CO₂ Impact</span>
                            </div>
                            <span className="text-green-600">{rec.co2}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-1 text-gray-600">
                              <Clock className="w-4 h-4" />
                              <span>Time</span>
                            </div>
                            <span className="text-gray-600">{rec.timeToImplement}</span>
                          </div>
                        </div>

                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={(e) => {
                            e.stopPropagation();
                            onViewDetail(rec.id);
                          }}
                        >
                          View Details
                          <ArrowUpRight className="w-4 h-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
