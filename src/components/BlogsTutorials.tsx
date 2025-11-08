import { useState, React } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  BookOpen,
  Video,
  ExternalLink,
  Calendar,
  Clock,
  Play,
} from "lucide-react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";



const articles = [
  {
    id: 1,
    title: "Kosovo's Energy Transition: Progress and Challenges",
    excerpt:
      "An in-depth look at Kosovo's journey towards renewable energy and the current state of the energy sector.",
    image:
      "https://images.unsplash.com/photo-1635277055420-230e79907552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3Nvdm8lMjBlbmVyZ3klMjBidWlsZGluZ3N8ZW58MXx8fHwxNzYyMjYyNjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Kosovo Energy",
    date: "Nov 3, 2025",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "5 Ways Small Businesses Can Reduce Energy Costs",
    excerpt:
      "Practical tips and strategies for small business owners to cut energy expenses without major investments.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb2ZmaWNlfGVufDF8fHx8MTc2MjI2MjY0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Energy Tips",
    date: "Nov 1, 2025",
    readTime: "4 min",
  },
  {
    id: 3,
    title: "Global Renewable Energy Trends 2025",
    excerpt:
      "Latest statistics and predictions for renewable energy adoption worldwide and what it means for businesses.",
    image:
      "https://images.unsplash.com/photo-1655300256486-4ec7251bf84e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJlbmV3YWJsZSUyMGVuZXJneXxlbnwxfHx8fDE3NjIxODc1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Global News",
    date: "Oct 28, 2025",
    readTime: "7 min",
  },
  {
    id: 4,
    title: "LED vs Traditional Lighting: The Complete Cost Analysis",
    excerpt:
      "Breaking down the real costs and savings of switching to LED lighting in commercial spaces.",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBsaWdodGluZ3xlbnwxfHx8fDE3NjIyNjI2NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Energy Tips",
    date: "Oct 25, 2025",
    readTime: "6 min",
  },
  {
    id: 5,
    title: "Solar Power Incentives in the Balkans",
    excerpt:
      "Overview of government programs and incentives for solar panel installation across the Balkan region.",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NjIyNjI2NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Kosovo Energy",
    date: "Oct 22, 2025",
    readTime: "8 min",
  },
  {
    id: 6,
    title: "Understanding Your Energy Bill: A Complete Guide",
    excerpt:
      "Learn how to read and interpret your electricity bill to identify saving opportunities.",
    image:
      "https://images.unsplash.com/photo-1554224311-beee460c201f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2l0eSUyMGJpbGx8ZW58MXx8fHwxNzYyMjYyNjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Energy Tips",
    date: "Oct 20, 2025",
    readTime: "5 min",
  },
];

const tutorials = [
  {
    id: 1,
    title: "How to Conduct an Energy Audit for Your Business",
    videoId: "dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBhdWRpdHxlbnwxfHx8fDE3NjIyNjI2NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "12:34",
    category: "Tutorial",
  },
  {
    id: 2,
    title: "Installing Smart Thermostats: A Step-by-Step Guide",
    videoId: "dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHRoZXJtb3N0YXR8ZW58MXx8fHwxNzYyMjYyNjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "8:45",
    category: "Tutorial",
  },
  {
    id: 3,
    title: "Solar Panel Basics: What Every Business Owner Should Know",
    videoId: "dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1655300256486-4ec7251bf84e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJlbmV3YWJsZSUyMGVuZXJneXxlbnwxfHx8fDE3NjIxODc1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "15:22",
    category: "Renewable Energy",
  },
  {
    id: 4,
    title: "Optimizing HVAC Systems for Maximum Efficiency",
    videoId: "dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1631545806609-4c036c7ccd29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIVkFDJTIwc3lzdGVtfGVufDF8fHx8MTc2MjI2MjY1MHww&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "10:18",
    category: "Tutorial",
  },
  {
    id: 5,
    title: "LED Lighting Retrofit: Before and After Results",
    videoId: "dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBsaWdodGluZ3xlbnwxfHx8fDE3NjIyNjI2NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "6:55",
    category: "Case Study",
  },
  {
    id: 6,
    title: "Understanding Net Metering and Feed-in Tariffs",
    videoId: "dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2l0eSUyMG1ldGVyfGVufDF8fHx8MTc2MjI2MjY1MHww&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "11:40",
    category: "Renewable Energy",
  },
];

export function BlogsTutorials() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", "Kosovo Energy", "Energy Tips", "Global News"];

  const filteredArticles =
    selectedCategory === "all"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Blogs & Tutorials</h1>
          <p className="text-gray-600">
            Stay updated with the latest energy news and learn new ways to save
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="articles" className="gap-2">
              <BookOpen className="w-4 h-4" />
              Articles
            </TabsTrigger>
            <TabsTrigger value="tutorials" className="gap-2">
              <Video className="w-4 h-4" />
              Video Tutorials
            </TabsTrigger>
          </TabsList>

          {/* Articles Tab */}
          <TabsContent value="articles">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-emerald-500 hover:bg-emerald-600"
                      : ""
                  }
                >
                  {category === "all" ? "All Articles" : category}
                </Button>
              ))}
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <Card
                  key={article.id}
                  className="border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden group cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-emerald-500">
                      {article.category}
                    </Badge>
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {article.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-emerald-600" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Tutorials Tab */}
          <TabsContent value="tutorials">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutorials.map((tutorial) => (
                <Card
                  key={tutorial.id}
                  className="border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden group cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={tutorial.thumbnail}
                      alt={tutorial.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-emerald-600 ml-1" />
                      </div>
                    </div>
                    <Badge className="absolute top-4 left-4 bg-red-500">
                      Video
                    </Badge>
                    <Badge className="absolute bottom-4 right-4 bg-black bg-opacity-75">
                      {tutorial.duration}
                    </Badge>
                  </div>
                  <CardContent className="pt-4">
                    <Badge variant="secondary" className="mb-2">
                      {tutorial.category}
                    </Badge>
                    <h3 className="text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {tutorial.title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
