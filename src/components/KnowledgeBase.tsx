import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  ArrowLeft,
  Search,
  BookOpen,
  Lightbulb,
  Zap,
  DollarSign,
  HelpCircle,
  Video,
  FileText,
} from "lucide-react";

interface KnowledgeBaseProps {
  onBack: () => void;
}

const articles = [
  {
    id: 1,
    title: "Understanding Your Energy Bill",
    category: "Getting Started",
    type: "article",
    readTime: "5 min",
    description: "Learn how to read and analyze your energy consumption patterns.",
  },
  {
    id: 2,
    title: "LED vs Traditional Lighting",
    category: "Energy Tips",
    type: "article",
    readTime: "8 min",
    description: "Compare the benefits and savings of different lighting technologies.",
  },
  {
    id: 3,
    title: "HVAC Optimization Guide",
    category: "Energy Tips",
    type: "video",
    readTime: "12 min",
    description: "Video tutorial on optimizing your heating and cooling systems.",
  },
  {
    id: 4,
    title: "How Energico AI Works",
    category: "Getting Started",
    type: "article",
    readTime: "6 min",
    description: "Discover the technology behind our AI recommendations.",
  },
];

const faqs = [
  {
    question: "How does Energico calculate my savings?",
    answer:
      "Energico uses machine learning algorithms to analyze your energy bills, workspace photos, and device inventory. We compare your usage patterns against similar businesses and industry benchmarks to identify specific saving opportunities. Our estimates are based on real-world data from thousands of businesses.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, absolutely. We use bank-level encryption (AES-256) to protect all your data. Your energy bills and business information are stored securely and never shared with third parties without your explicit consent. We are GDPR compliant and take data privacy seriously.",
  },
  {
    question: "How accurate are the AI recommendations?",
    answer:
      "Our AI recommendations have a 92% accuracy rate based on real business implementations. The recommendations are personalized to your specific business type, equipment, and usage patterns. Most businesses see results within 2-3 weeks of implementing our suggestions.",
  },
  {
    question: "Can I use Energico without uploading my bills?",
    answer:
      "While uploading bills gives you the most accurate recommendations, you can still benefit from Energico by manually entering your workspace details and receiving general energy-saving tips tailored to your business type.",
  },
  {
    question: "What if I don't have all the recommended equipment?",
    answer:
      "That's perfectly fine! WattWise provides recommendations across different difficulty levels and investment requirements. You can filter tips by 'Easy' to find no-cost or low-cost behavioral changes that don't require new equipment.",
  },
  {
    question: "How do Green Points work?",
    answer:
      "Green Points are earned by completing energy-saving actions and achieving milestones. Points unlock achievements, badges, and recognition on the leaderboard. They're designed to gamify sustainability and keep you motivated on your energy-saving journey.",
  },
];

export function KnowledgeBase({ onBack }: KnowledgeBaseProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          <div>
            <h1 className="text-gray-900 mb-2">Knowledge Base</h1>
            <p className="text-gray-600">
              Learn everything about energy efficiency and WattWise
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search articles, guides, and FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12"
              />
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="articles" className="space-y-6">
          <TabsList>
            <TabsTrigger value="articles">
              <BookOpen className="w-4 h-4 mr-2" />
              Articles & Guides
            </TabsTrigger>
            <TabsTrigger value="faqs">
              <HelpCircle className="w-4 h-4 mr-2" />
              FAQs
            </TabsTrigger>
            <TabsTrigger value="tips">
              <Lightbulb className="w-4 h-4 mr-2" />
              Quick Tips
            </TabsTrigger>
          </TabsList>

          {/* Articles Tab */}
          <TabsContent value="articles">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <Card key={article.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      {article.type === "video" ? (
                        <Video className="w-10 h-10 text-blue-500" />
                      ) : (
                        <FileText className="w-10 h-10 text-emerald-500" />
                      )}
                      <Badge variant="secondary">{article.readTime}</Badge>
                    </div>
                    <h3 className="text-gray-900 mb-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.description}</p>
                    <Badge variant="outline">{article.category}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* FAQs Tab */}
          <TabsContent value="faqs">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Quick Tips Tab */}
          <TabsContent value="tips">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    Energy Saving Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-emerald-600">•</span>
                      <span className="text-gray-700">
                        Turn off lights in unoccupied rooms
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-600">•</span>
                      <span className="text-gray-700">
                        Unplug devices when not in use
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-600">•</span>
                      <span className="text-gray-700">
                        Use natural light whenever possible
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-600">•</span>
                      <span className="text-gray-700">
                        Set computers to sleep mode after 15 minutes
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-600">•</span>
                      <span className="text-gray-700">
                        Maintain HVAC systems regularly
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-500" />
                    Cost Reduction Strategies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-emerald-600">•</span>
                      <span className="text-gray-700">
                        Review your energy tariff annually
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-600">•</span>
                      <span className="text-gray-700">
                        Install LED bulbs - 75% more efficient
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-600">•</span>
                      <span className="text-gray-700">
                        Use smart power strips to eliminate phantom loads
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-600">•</span>
                      <span className="text-gray-700">
                        Optimize temperature settings (22°C in summer, 20°C in winter)
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-600">•</span>
                      <span className="text-gray-700">
                        Seal air leaks around doors and windows
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
