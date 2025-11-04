import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Switch } from "./ui/switch";
import { Separator } from "./ui/separator";
import {
  ArrowLeft,
  Building2,
  Mail,
  Phone,
  MapPin,
  Users,
  Crown,
  Edit,
  Bell,
  Shield,
  CreditCard,
  Calendar,
  Check,
} from "lucide-react";
import { toast } from "sonner@2.0.3";

interface ProfileSettingsProps {
  onBack: () => void;
}

export function ProfileSettings({ onBack }: ProfileSettingsProps) {
  const [businessName, setBusinessName] = useState("Green Café");
  const [ownerName, setOwnerName] = useState("Sarah Chen");
  const [email, setEmail] = useState("sarah@greencafe.com");
  const [phone, setPhone] = useState("+1 (555) 123-4567");
  const [address, setAddress] = useState("123 Eco Street, Portland, OR 97201");
  const [businessType, setBusinessType] = useState("Café / Restaurant");
  const [description, setDescription] = useState(
    "A sustainable café focused on organic, locally-sourced ingredients and eco-friendly practices."
  );

  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    weekly: true,
    recommendations: true,
    achievements: true,
  });

  const handleSave = () => {
    toast.success("Profile updated successfully!");
  };

  const teamMembers = [
    { name: "Sarah Chen", role: "Owner", email: "sarah@greencafe.com", status: "Active" },
    { name: "Mike Johnson", role: "Manager", email: "mike@greencafe.com", status: "Active" },
    { name: "Emma Davis", role: "Staff", email: "emma@greencafe.com", status: "Pending" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Profile & Settings</h1>
          <p className="text-gray-600">
            Manage your business information, team, and preferences
          </p>
        </div>

        <Tabs defaultValue="business" className="space-y-6">
          <TabsList>
            <TabsTrigger value="business">Business Info</TabsTrigger>
            <TabsTrigger value="team">Team Management</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="subscription">Subscription</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          {/* Business Info Tab */}
          <TabsContent value="business" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Profile Picture */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>Profile Picture</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <Avatar className="w-32 h-32 mb-4">
                    <AvatarImage src="https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjIwNTY5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <Button variant="outline">
                    <Edit className="w-4 h-4 mr-2" />
                    Change Photo
                  </Button>
                </CardContent>
              </Card>

              {/* Business Details */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Business Details</CardTitle>
                  <CardDescription>
                    Update your business information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="business-name">Business Name</Label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          id="business-name"
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="owner-name">Owner Name</Label>
                      <Input
                        id="owner-name"
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="business-type">Business Type</Label>
                    <Input
                      id="business-type"
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={4}
                    />
                  </div>

                  <Button onClick={handleSave} className="bg-emerald-500 hover:bg-emerald-600">
                    Save Changes
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Team Management Tab */}
          <TabsContent value="team" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Team Members</CardTitle>
                    <CardDescription>
                      Invite team members to collaborate on energy-saving goals
                    </CardDescription>
                  </div>
                  <Button className="bg-emerald-500 hover:bg-emerald-600">
                    <Users className="w-4 h-4 mr-2" />
                    Invite Member
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamMembers.map((member, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarFallback>
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-gray-900">{member.name}</p>
                          <p className="text-gray-500">{member.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary">{member.role}</Badge>
                        <Badge
                          className={
                            member.status === "Active"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-yellow-100 text-yellow-700"
                          }
                        >
                          {member.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Choose how you want to receive updates from Energico
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="text-gray-900">Email Notifications</p>
                      <p className="text-gray-500">Receive updates via email</p>
                    </div>
                  </div>
                  <Switch
                    checked={notifications.email}
                    onCheckedChange={(checked) =>
                      setNotifications({ ...notifications, email: checked })
                    }
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Bell className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="text-gray-900">Push Notifications</p>
                      <p className="text-gray-500">Get push notifications on your device</p>
                    </div>
                  </div>
                  <Switch
                    checked={notifications.push}
                    onCheckedChange={(checked) =>
                      setNotifications({ ...notifications, push: checked })
                    }
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="text-gray-900">Weekly Reports</p>
                      <p className="text-gray-500">Receive weekly energy savings summary</p>
                    </div>
                  </div>
                  <Switch
                    checked={notifications.weekly}
                    onCheckedChange={(checked) =>
                      setNotifications({ ...notifications, weekly: checked })
                    }
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="text-gray-900">New Recommendations</p>
                      <p className="text-gray-500">
                        Get notified when AI finds new savings opportunities
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={notifications.recommendations}
                    onCheckedChange={(checked) =>
                      setNotifications({ ...notifications, recommendations: checked })
                    }
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Crown className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="text-gray-900">Achievement Unlocked</p>
                      <p className="text-gray-500">Celebrate your milestones and badges</p>
                    </div>
                  </div>
                  <Switch
                    checked={notifications.achievements}
                    onCheckedChange={(checked) =>
                      setNotifications({ ...notifications, achievements: checked })
                    }
                  />
                </div>

                <Button onClick={handleSave} className="bg-emerald-500 hover:bg-emerald-600">
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Subscription Tab */}
          <TabsContent value="subscription" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Current Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-gray-900 mb-1">Free Plan</p>
                      <p className="text-gray-500">Perfect for getting started</p>
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-700">Active</Badge>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Up to 15 recommendations</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Basic analytics</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>1 team member</span>
                    </div>
                  </div>

                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
                    <Crown className="w-4 h-4 mr-2" />
                    Upgrade to Pro
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pro Plan Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <p className="text-gray-900 mb-4">€29/month</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Unlimited recommendations</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Advanced AI insights</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Up to 10 team members</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Priority support</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Custom reports</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>API access</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>
                  Manage your account security and privacy
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-gray-900 mb-4">Change Password</h3>
                  <div className="space-y-4 max-w-md">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                    <Button className="bg-emerald-500 hover:bg-emerald-600">
                      Update Password
                    </Button>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-gray-900 mb-4">Two-Factor Authentication</h3>
                  <div className="flex items-center justify-between max-w-md">
                    <div>
                      <p className="text-gray-900 mb-1">Enable 2FA</p>
                      <p className="text-gray-500">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-gray-900 mb-4">Data & Privacy</h3>
                  <div className="space-y-3 max-w-md">
                    <Button variant="outline" className="w-full justify-start">
                      <Shield className="w-4 h-4 mr-2" />
                      Download My Data
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                      Delete Account
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
