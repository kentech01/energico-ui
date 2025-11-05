import { useState, React, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  BookOpen,
  Video,
  Calendar,
  Clock,
  Play,
  Lightbulb,
  ArrowLeft,
  Search,
  TrendingUp,
  Globe,
  Newspaper,
  Youtube,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { Input } from "./ui/input";

interface PublicBlogProps {
  onBack: () => void;
}

const articles = [
  {
    id: 1,
    title: "Kosovo's Energy Transition: Progress and Challenges",
    excerpt:
      "An in-depth look at Kosovo's journey towards renewable energy and the current state of the energy sector. Discover government initiatives, infrastructure developments, and opportunities for businesses.",
    image:
      "https://images.unsplash.com/photo-1635277055420-230e79907552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3Nvdm8lMjBlbmVyZ3klMjBidWlsZGluZ3N8ZW58MXx8fHwxNzYyMjYyNjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "News in Kosovo",
    date: "Nov 3, 2025",
    readTime: "5 min",
    author: "Energico Team",
  },
  {
    id: 2,
    title: "5 Ways Small Businesses Can Reduce Energy Costs",
    excerpt:
      "Practical tips and strategies for small business owners to cut energy expenses without major investments. Learn simple changes that deliver big results.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb2ZmaWNlfGVufDF8fHx8MTc2MjI2MjY0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Tutorials & Videos",
    date: "Nov 1, 2025",
    readTime: "4 min",
    author: "Sarah Chen",
  },
  {
    id: 3,
    title: "Global Renewable Energy Trends 2025",
    excerpt:
      "Latest statistics and predictions for renewable energy adoption worldwide and what it means for businesses. Stay ahead of the curve.",
    image:
      "https://images.unsplash.com/photo-1723177548474-b58ada59986b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJlbmV3YWJsZSUyMGVuZXJneSUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NjIyNjQ0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Global Energy",
    date: "Oct 28, 2025",
    readTime: "7 min",
    author: "Marcus Brown",
  },
  {
    id: 4,
    title: "LED vs Traditional Lighting: The Complete Cost Analysis",
    excerpt:
      "Breaking down the real costs and savings of switching to LED lighting in commercial spaces. See actual case studies and ROI timelines.",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBsaWdodGluZ3xlbnwxfHx8fDE3NjIyNjI2NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Tutorials & Videos",
    date: "Oct 25, 2025",
    readTime: "6 min",
    author: "Energico Team",
  },
  {
    id: 5,
    title: "Solar Power Incentives in the Balkans",
    excerpt:
      "Overview of government programs and incentives for solar panel installation across the Balkan region. Learn how to maximize your benefits.",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NjIyNjI2NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "News in Kosovo",
    date: "Oct 22, 2025",
    readTime: "8 min",
    author: "Sarah Chen",
  },
  {
    id: 6,
    title: "Understanding Your Energy Bill: A Complete Guide",
    excerpt:
      "Learn how to read and interpret your electricity bill to identify saving opportunities. Decode complex charges and fees.",
    image:
      "https://images.unsplash.com/photo-1554224311-beee460c201f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2l0eSUyMGJpbGx8ZW58MXx8fHwxNzYyMjYyNjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Tutorials & Videos",
    date: "Oct 20, 2025",
    readTime: "5 min",
    author: "Marcus Brown",
  },
  {
    id: 7,
    title: "How Kosovo Can Achieve Carbon Neutrality by 2050",
    excerpt:
      "Exploring pathways and policies that could lead Kosovo to carbon neutrality. Expert analysis and realistic scenarios.",
    image:
      "https://images.unsplash.com/photo-1597737413237-57dffb6f6b6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJpbGl0eSUyMGltcGFjdCUyMGdyZWVufGVufDF8fHx8MTc2MjI2MjY0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "News in Kosovo",
    date: "Oct 18, 2025",
    readTime: "10 min",
    author: "Energico Team",
  },
  {
    id: 8,
    title: "Smart Thermostats: Worth the Investment?",
    excerpt:
      "Comprehensive review of smart thermostat options, installation costs, and real-world savings data from businesses.",
    image:
      "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHRoZXJtb3N0YXR8ZW58MXx8fHwxNzYyMjYyNjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Tutorials & Videos",
    date: "Oct 15, 2025",
    readTime: "6 min",
    author: "Sarah Chen",
  },
  {
    id: 9,
    title: "Wind Energy Potential in the Western Balkans",
    excerpt:
      "Analysis of wind energy resources and development opportunities across the region. Future outlook and investment trends.",
    image:
      "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kJTIwdHVyYmluZXMlMjBlbmVyZ3l8ZW58MXx8fHwxNzYyMjY0NDQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Global Energy",
    date: "Oct 12, 2025",
    readTime: "8 min",
    author: "Marcus Brown",
  },
];

const tutorials = [
  {
    id: 1,
    title: "How to Conduct an Energy Audit for Your Business",
    description:
      "Step-by-step guide to performing a comprehensive energy audit. Learn what to measure, how to analyze data, and identify opportunities.",
    videoId: "dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBhdWRpdHxlbnwxfHx8fDE3NjIyNjI2NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "12:34",
    category: "Tutorial",
    views: "15K",
  },
  {
    id: 2,
    title: "Installing Smart Thermostats: A Step-by-Step Guide",
    description:
      "Complete installation tutorial for smart thermostats. Includes wiring diagrams, app setup, and optimization tips.",
    videoId: "dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHRoZXJtb3N0YXR8ZW58MXx8fHwxNzYyMjYyNjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "8:45",
    category: "Tutorial",
    views: "23K",
  },
  {
    id: 3,
    title: "Solar Panel Basics: What Every Business Owner Should Know",
    description:
      "Everything you need to know before investing in solar. Cost breakdowns, maintenance requirements, and ROI calculations.",
    videoId: "dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1723177548474-b58ada59986b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJlbmV3YWJsZSUyMGVuZXJneSUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NjIyNjQ0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "15:22",
    category: "Renewable Energy",
    views: "31K",
  },
  {
    id: 4,
    title: "Optimizing HVAC Systems for Maximum Efficiency",
    description:
      "Professional tips for maintaining and optimizing your HVAC system. Save up to 30% on heating and cooling costs.",
    videoId: "dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1631545806609-4c036c7ccd29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIVkFDJTIwc3lzdGVtfGVufDF8fHx8MTc2MjI2MjY1MHww&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "10:18",
    category: "Tutorial",
    views: "18K",
  },
  {
    id: 5,
    title: "LED Lighting Retrofit: Before and After Results",
    description:
      "Real case study showing LED retrofit results. Includes cost analysis, energy savings, and payback period.",
    videoId: "dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBsaWdodGluZ3xlbnwxfHx8fDE3NjIyNjI2NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "6:55",
    category: "Case Study",
    views: "12K",
  },
  {
    id: 6,
    title: "Understanding Net Metering and Feed-in Tariffs",
    description:
      "Demystifying energy policies and compensation schemes. Learn how to maximize your solar investment returns.",
    videoId: "dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2l0eSUyMG1ldGVyfGVufDF8fHx8MTc2MjI2MjY1MHww&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "11:40",
    category: "Renewable Energy",
    views: "9K",
  },
];

export function PublicBlog({ onBack }: PublicBlogProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  // useEffect(()=>{
  //   console.log(filteredArticles);
  // }, [selectedCategory])
  const categories = [
    { id: "all", label: "All Content", icon: Sparkles },
    { id: "News in Kosovo", label: "News in Kosovo", icon: Newspaper },
    { id: "Global Energy", label: "Global Energy", icon: Globe },
    { id: "Tutorials & Videos", label: "Tutorials & Videos", icon: Video },
  ];
  const filteredArticles= articles.filter((article) => {
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-100 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Header */}
      <motion.header
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={onBack}
              className="hover:bg-gray-100"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </div>
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-gray-900">Energico</span>
              <p className="text-xs text-gray-500">Blog & Tutorials</p>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="bg-emerald-100 text-emerald-700 mb-6 px-4 py-2">
              <BookOpen className="w-4 h-4 mr-2" />
              Knowledge Hub
            </Badge>
            <h1 className="text-5xl md:text-6xl text-gray-900 mb-6">
              Learn, Save, and Grow
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500">
                with Energico
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Stay updated with the latest energy news from Kosovo and around the
              world. Learn practical tips and watch expert tutorials to maximize
              your energy savings.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search articles and tutorials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg border-2 focus:border-emerald-500 rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 0L60 8C120 16 240 32 360 37.3C480 43 600 37 720 34.7C840 32 960 32 1080 37.3C1200 43 1320 53 1380 58.7L1440 64V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V0Z"
              fill="#F9FAFB"
            />
          </svg>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.div key={category.id} variants={fadeInUp}>
                  <Button
                    variant={
                      selectedCategory === category.id ? "default" : "outline"
                    }
                    onClick={() => setSelectedCategory(category.id)}
                    className={
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white"
                        : "hover:bg-gray-100"
                    }
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {category.label}
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Tabs - Articles & Videos */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="articles" className="w-full">
            <TabsList className="mb-8 bg-white border border-gray-200 p-1">
              <TabsTrigger value="articles" className="gap-2 px-6 py-3">
                <BookOpen className="w-5 h-5" />
                Articles & News
              </TabsTrigger>
              <TabsTrigger value="videos" className="gap-2 px-6 py-3">
                <Youtube className="w-5 h-5" />
                Video Tutorials
              </TabsTrigger>
            </TabsList>

            {/* Articles Tab */}
            <TabsContent value="articles">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredArticles.length === 0 ? (
                  <div className="col-span-full text-center py-12">
                    <p className="text-gray-500 text-lg">
                      No articles found matching your search.
                    </p>
                  </div>
                ) : (
                  filteredArticles.map((article) => (
                    <motion.div key={article.id} variants={fadeInUp}>
                      <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer h-full">
                        <div className="relative h-56 overflow-hidden">
                          <ImageWithFallback
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <Badge className="absolute top-4 left-4 bg-emerald-500 shadow-lg">
                            {article.category}
                          </Badge>
                        </div>
                        <CardContent className="pt-6 pb-6">
                          <h3 className="text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {article.date}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {article.readTime}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-500">
                              By {article.author}
                            </p>
                            <Button
                              variant="ghost"
                              className="text-emerald-600 hover:text-emerald-700 p-0"
                            >
                              Read More
                              <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))
                )}
              </motion.div>
            </TabsContent>

            {/* Videos Tab */}
            <TabsContent value="videos">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {tutorials.map((tutorial) => (
                  <motion.div key={tutorial.id} variants={fadeInUp}>
                    <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer h-full">
                      <div className="relative h-56 overflow-hidden">
                        <ImageWithFallback
                          src={tutorial.thumbnail}
                          alt={tutorial.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center group-hover:bg-black/40 transition-all">
                          <motion.div
                            className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Play className="w-10 h-10 text-emerald-600 ml-1" />
                          </motion.div>
                        </div>
                        <Badge className="absolute top-4 left-4 bg-red-500 shadow-lg">
                          <Video className="w-3 h-3 mr-1" />
                          Video
                        </Badge>
                        <div className="absolute bottom-4 right-4 flex items-center gap-2">
                          <Badge className="bg-black/75 text-white">
                            {tutorial.duration}
                          </Badge>
                          <Badge className="bg-black/75 text-white">
                            {tutorial.views} views
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="pt-6 pb-6">
                        <Badge variant="secondary" className="mb-3">
                          {tutorial.category}
                        </Badge>
                        <h3 className="text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                          {tutorial.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {tutorial.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-emerald-600 to-blue-600" />
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6">
              Ready to Transform Your Energy Usage?
            </h2>
            <p className="text-emerald-50 mb-8 text-xl">
              Join our platform and get personalized AI recommendations to start
              saving today.
            </p>
            <Button
              onClick={onBack}
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-6 text-lg shadow-xl"
            >
              Get Started Free
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-2">
            Powered by{" "}
            <a
              href="https://thrio.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Thrio.co
            </a>
          </p>
          <p className="text-gray-500">© 2025 Energico. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
