import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import {React} from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MessageCircle,
  Mail,
  Phone,
  Video,
  BookOpen,
  HelpCircle,
  Send,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner@2.0.3";


const supportTickets = [
  {
    id: "TKT-1234",
    subject: "Question about LED recommendations",
    status: "resolved",
    date: "Oct 28, 2025",
  },
  {
    id: "TKT-1235",
    subject: "Unable to upload energy bill",
    status: "in-progress",
    date: "Nov 1, 2025",
  },
];

export function HelpSupport() {
  const navigate = useNavigate()
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Support ticket created! We'll get back to you within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" onClick={()=> navigate("/app/")} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          <div>
            <h1 className="text-gray-900 mb-2">Help & Support</h1>
            <p className="text-gray-600">
              We're here to help you succeed with Energico
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">
                Chat with our support team in real-time
              </p>
              <Badge className="bg-emerald-100 text-emerald-700">
                Available now
              </Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">
                Get help via email within 24 hours
              </p>
              <p className="text-gray-500">support@energico.com</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">
                Talk to our experts directly
              </p>
              <p className="text-gray-500">+1 (555) 123-4567</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="contact" className="space-y-6">
          <TabsList>
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
            <TabsTrigger value="tickets">My Tickets</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          {/* Contact Form */}
          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Submit a Support Request</CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Brief description of your issue"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Provide details about your request..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-emerald-500 hover:bg-emerald-600"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Support Tickets */}
          <TabsContent value="tickets">
            <Card>
              <CardHeader>
                <CardTitle>Your Support Tickets</CardTitle>
                <p className="text-gray-600">
                  Track the status of your support requests
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {supportTickets.map((ticket) => (
                    <div
                      key={ticket.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-emerald-500 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <HelpCircle className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <p className="text-gray-900 mb-1">{ticket.subject}</p>
                          <p className="text-gray-500">Ticket #{ticket.id}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right hidden sm:block">
                          <p className="text-gray-600 mb-1">
                            <Clock className="w-4 h-4 inline mr-1" />
                            {ticket.date}
                          </p>
                        </div>
                        <Badge
                          className={
                            ticket.status === "resolved"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-blue-100 text-blue-700"
                          }
                        >
                          {ticket.status === "resolved" ? (
                            <>
                              <CheckCircle2 className="w-3 h-3 mr-1" />
                              Resolved
                            </>
                          ) : (
                            "In Progress"
                          )}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Resources */}
          <TabsContent value="resources">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 mb-2">Knowledge Base</h3>
                      <p className="text-gray-600 mb-4">
                        Browse articles and guides on energy efficiency
                      </p>
                      <Button variant="outline">Browse Articles</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Video className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 mb-2">Video Tutorials</h3>
                      <p className="text-gray-600 mb-4">
                        Watch step-by-step guides on using Energico
                      </p>
                      <Button variant="outline">Watch Videos</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 mb-2">FAQs</h3>
                      <p className="text-gray-600 mb-4">
                        Find answers to commonly asked questions
                      </p>
                      <Button variant="outline">View FAQs</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 mb-2">Community Forum</h3>
                      <p className="text-gray-600 mb-4">
                        Connect with other Energico users
                      </p>
                      <Button variant="outline">Join Discussion</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Quick Help */}
        <Card className="mt-8 border-2 border-emerald-500">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900 mb-2">Need immediate help?</h3>
                <p className="text-gray-600 mb-4">
                  Our support team is available Mon-Fri, 9am-5pm EST. Start a live
                  chat for instant assistance.
                </p>
                <Button className="bg-emerald-500 hover:bg-emerald-600">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start Live Chat
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
