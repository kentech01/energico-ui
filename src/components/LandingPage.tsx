import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {React} from "react";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";
import {
  Upload,
  Lightbulb,
  TrendingDown,
  Star,
  Users,
  Target,
  Award,
  Zap,
  Sun,
  Calculator,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Sparkles,
  Clock,
  Calendar,
  BookOpen,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export interface LandingPageProps{
  modalInteract: ()=>void;
}

export function LandingPage({modalInteract}: LandingPageProps) {
  const navigation = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Blog preview data (latest 3 posts)
  const latestBlogs = [
    {
      id: 1,
      title: "Kosovo's Energy Transition: Progress and Challenges",
      excerpt: "An in-depth look at Kosovo's journey towards renewable energy...",
      image:
        "https://images.unsplash.com/photo-1635277055420-230e79907552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3Nvdm8lMjBlbmVyZ3klMjBidWlsZGluZ3N8ZW58MXx8fHwxNzYyMjYyNjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Kosovo Energy",
      date: "Nov 3, 2025",
      readTime: "5 min",
    },
    {
      id: 2,
      title: "5 Ways Small Businesses Can Reduce Energy Costs",
      excerpt: "Practical tips and strategies for small business owners...",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb2ZmaWNlfGVufDF8fHx8MTc2MjI2MjY0OXww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Energy Tips",
      date: "Nov 1, 2025",
      readTime: "4 min",
    },
    {
      id: 3,
      title: "Global Renewable Energy Trends 2025",
      excerpt: "Latest statistics and predictions for renewable energy adoption...",
      image:
        "https://images.unsplash.com/photo-1723177548474-b58ada59986b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJlbmV3YWJsZSUyMGVuZXJneSUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NjIyNjQ0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Global News",
      date: "Oct 28, 2025",
      readTime: "7 min",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-emerald-100 via-transparent to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-blue-100 via-transparent to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
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
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-gray-900">Energico</span>
              <p className="text-xs text-gray-500">AI Energy Coach</p>
            </div>
          </motion.div>
          <div className="flex items-center gap-3">
              <Button variant="ghost" onClick={()=>navigation("/blog")}>
                Blog
              </Button>
            <Button variant="outline" onClick={modalInteract}>
              Sign In
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Badge className="bg-emerald-100 text-emerald-700 mb-6 px-4 py-2">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI-Powered Energy Optimization
                </Badge>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-6"
                variants={fadeInUp}
              >
                Save Energy.
                <br />
                Save Money.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500">
                  Power the Future.
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                variants={fadeInUp}
              >
                Your AI Energy Coach for Small Businesses. Get personalized
                recommendations, track savings in real-time, and reduce your
                carbon footprint with intelligent insights.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                variants={fadeInUp}
              >
                <Button
                  onClick={()=> navigation('/auth')}
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Start Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                  <Button
                    onClick={()=>navigation('/blog')}
                    variant="outline"
                    className="px-8 py-6 text-lg border-2 hover:bg-gray-50"
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    Explore Blog & Tutorials
                  </Button>
              </motion.div>

              <motion.p
                className="text-gray-500 mt-6"
                variants={fadeInUp}
              >
                ✓ No credit card required • ✓ 2-minute setup • ✓ Free forever
              </motion.p>
            </motion.div>

            {/* Interactive Illustration */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759536588260-e708d399a2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjB0ZWNobm9sb2d5JTIwZ3JlZW4lMjBlbmVyZ3l8ZW58MXx8fHwxNzYyMjY0NDM5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Smart city powered by green AI energy"
                  className="rounded-3xl shadow-2xl w-full"
                />

                {/* Floating Energy Wave Animations */}
                <motion.div
                  className="absolute -top-6 -left-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-6 rounded-2xl shadow-2xl"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [-2, 2, -2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <p className="text-sm mb-1 opacity-90">Average Savings</p>
                  <p className="text-3xl">€350/mo</p>
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl"
                  animate={{
                    y: [0, 10, 0],
                    rotate: [2, -2, 2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <p className="text-sm text-gray-500 mb-1">CO₂ Reduced</p>
                  <p className="text-3xl text-green-600">1,200 tons</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Curved Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="#F9FAFB"
            />
          </svg>
        </div>
      </section>

      {/* 3 Feature Cards */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={scaleIn}>
              <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <CardContent className="pt-8 pb-8">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Upload className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-gray-900 mb-3">Upload Your Bill</h3>
                  <p className="text-gray-600">
                    Simply upload your energy bill or snap a photo. Our AI
                    analyzes your usage patterns and identifies savings
                    opportunities instantly.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <CardContent className="pt-8 pb-8">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Lightbulb className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-gray-900 mb-3">Get AI Insights</h3>
                  <p className="text-gray-600">
                    Receive personalized, actionable recommendations tailored to
                    your business type, equipment, and energy consumption
                    patterns.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <CardContent className="pt-8 pb-8">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Sun className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-gray-900 mb-3">Simulate Solar Savings</h3>
                  <p className="text-gray-600">
                    Use our interactive simulator to estimate solar panel ROI,
                    savings potential, and environmental impact for your
                    location.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-gray-900 mb-4">How Energico Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to start saving energy and money
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 relative"
          >
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200" />

            <motion.div variants={fadeInUp} className="relative">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white shadow-xl relative z-10">
                    <Upload className="w-12 h-12" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-200 rounded-full -z-10 animate-pulse" />
                </div>
                <h3 className="text-gray-900 mb-3">1. Upload & Analyze</h3>
                <p className="text-gray-600">
                  Upload your energy bill. Our AI instantly analyzes your usage
                  patterns, costs, and inefficiencies.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white shadow-xl relative z-10">
                    <Sparkles className="w-12 h-12" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-200 rounded-full -z-10 animate-pulse" />
                </div>
                <h3 className="text-gray-900 mb-3">2. Get Smart Recommendations</h3>
                <p className="text-gray-600">
                  Receive personalized, AI-powered recommendations with
                  estimated savings and implementation steps.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white shadow-xl relative z-10">
                    <TrendingDown className="w-12 h-12" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-200 rounded-full -z-10 animate-pulse" />
                </div>
                <h3 className="text-gray-900 mb-3">3. Track & Save</h3>
                <p className="text-gray-600">
                  Monitor your progress with real-time dashboards and celebrate
                  as you save money and reduce CO₂.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Energico Team Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-100 to-transparent rounded-full blur-3xl opacity-50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-emerald-100 text-emerald-700 mb-6 px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                About Our Team
              </Badge>
              <h2 className="text-gray-900 mb-6">
                Meet the Energico Team
              </h2>
              <p className="text-gray-600 mb-4 text-lg">
                We're a passionate team of energy experts, data scientists, and
                sustainability advocates committed to helping small businesses
                reduce their environmental impact while cutting costs.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Founded in Kosovo, Energico combines local energy market
                expertise with cutting-edge AI technology to deliver
                personalized energy-saving solutions that work for your
                business.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 mb-1">Expert Team</p>
                    <p className="text-gray-600 text-sm">
                      15+ years combined experience
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 mb-1">Local Focus</p>
                    <p className="text-gray-600 text-sm">
                      Kosovo market specialists
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZSUyMGRpdmVyc2V8ZW58MXx8fHwxNzYyMjY0NDQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Energico team collaboration"
                className="rounded-3xl shadow-2xl w-full"
              />
              {/* Floating Stats */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <p className="text-gray-500 text-sm mb-1">Businesses Helped</p>
                <p className="text-2xl text-emerald-600">500+</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="bg-green-100 text-green-700 mb-6 px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              Our Impact
            </Badge>
            <h2 className="text-gray-900 mb-4">Making a Real Difference</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Together with our community of businesses, we're creating
              measurable impact on energy consumption and environmental
              sustainability.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <motion.div variants={scaleIn}>
              <Card className="border-none shadow-lg text-center hover:shadow-2xl transition-all">
                <CardContent className="pt-8 pb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-4xl text-gray-900 mb-2">2.5M kWh</p>
                  <p className="text-gray-600">Total Energy Saved</p>
                  <p className="text-sm text-emerald-600 mt-2">
                    ↑ 35% from last quarter
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="border-none shadow-lg text-center hover:shadow-2xl transition-all">
                <CardContent className="pt-8 pb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <TrendingDown className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-4xl text-gray-900 mb-2">€420K</p>
                  <p className="text-gray-600">Total Cost Savings</p>
                  <p className="text-sm text-blue-600 mt-2">
                    Average €350/mo per business
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="border-none shadow-lg text-center hover:shadow-2xl transition-all">
                <CardContent className="pt-8 pb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-4xl text-gray-900 mb-2">1,200 tons</p>
                  <p className="text-gray-600">CO₂ Emissions Reduced</p>
                  <p className="text-sm text-green-600 mt-2">
                    Equal to 260 cars off the road
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1597737413237-57dffb6f6b6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJpbGl0eSUyMGltcGFjdCUyMGdyZWVufGVufDF8fHx8MTc2MjI2MjY0OHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Sustainability impact"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-3xl mb-2">Sustainability is Our Mission</h3>
                <p className="text-gray-200 text-lg">
                  Every business we help contributes to a greener, more
                  sustainable future for everyone.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog & Tutorials Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <Badge className="bg-purple-100 text-purple-700 mb-6 px-4 py-2">
              <BookOpen className="w-4 h-4 mr-2" />
              Learn & Grow
            </Badge>
            <h2 className="text-gray-900 mb-4">Latest from Our Blog</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with energy news, tutorials, and tips
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 mb-8"
          >
            {latestBlogs.map((blog, index) => (
              <motion.div key={blog.id} variants={scaleIn}>
                <Card className="border-none shadow-lg hover:shadow-2xl transition-all overflow-hidden group cursor-pointer h-full">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-emerald-500">
                      {blog.category}
                    </Badge>
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">{blog.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {blog.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {blog.readTime}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Button
                onClick={()=>navigation('/blog')}
                className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-6 text-lg shadow-lg"
              >
                View All Articles & Tutorials
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Trusted by small businesses across Kosovo
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={scaleIn}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 text-lg italic">
                    "Energico helped us reduce our energy costs by 35% in just 3
                    months. The AI recommendations were spot-on and easy to
                    implement!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600">SC</span>
                    </div>
                    <div>
                      <p className="text-gray-900">Sarah Chen</p>
                      <p className="text-gray-500 text-sm">
                        Owner, Green Café
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 text-lg italic">
                    "The renewable energy simulator was a game-changer. It helped
                    us plan our solar installation and we're now saving €400 per
                    month!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600">MB</span>
                    </div>
                    <div>
                      <p className="text-gray-900">Marcus Brown</p>
                      <p className="text-gray-500 text-sm">
                        Manager, City Retail Store
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-emerald-600 to-blue-600" />
        <motion.div
          className="absolute inset-0 opacity-30"
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
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)",
            backgroundSize: "100% 100%",
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6">Ready to Start Saving?</h2>
            <p className="text-emerald-50 mb-8 text-xl">
              Join 500+ small businesses already saving energy and money with
              Energico's AI-powered platform.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={()=> navigation("/auth")}
                className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-6 text-lg shadow-xl"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
                <Button
                  onClick={()=>navigation('/blog')}
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
                >
                  Learn More
                </Button>
            </div>
            <p className="text-emerald-100 mt-6">
              ✓ Free forever • ✓ No credit card • ✓ Setup in 2 minutes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-white">Energico</span>
                  <p className="text-xs text-gray-400">AI Energy Coach</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Helping small businesses save energy, reduce costs, and build a
                sustainable future.
              </p>
            </div>

            <div>
              <h4 className="text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={()=>navigation("/auth")}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    Get Started
                  </button>
                </li>
                  <li>
                    <button
                      onClick={()=>navigation("/blog")}
                      className="text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      Blog & Tutorials
                    </button>
                  </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4">Connect With Us</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
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
            <p className="text-gray-500">
              © 2025 Energico. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
