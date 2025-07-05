import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Settings,
  Shield,
  Globe,
  Users,
  Database,
  Bell,
  Eye,
  Save,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Lock,
  User,
  Mail,
  Smartphone,
} from "lucide-react";

export default function Index() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [saveStatus, setSaveStatus] = useState<
    "idle" | "saving" | "saved" | "error"
  >("idle");

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [settings, setSettings] = useState({
    siteName: "My Website",
    siteDescription: "A modern website built with care",
    maintenanceMode: false,
    userRegistration: true,
    emailNotifications: true,
    twoFactorAuth: false,
    sslEnabled: true,
    apiAccess: true,
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication
    setTimeout(() => {
      if (
        credentials.username === "admin" &&
        credentials.password === "admin"
      ) {
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleSave = async () => {
    setSaveStatus("saving");

    // Simulate save operation
    setTimeout(() => {
      setSaveStatus("saved");
      setTimeout(() => setSaveStatus("idle"), 2000);
    }, 1500);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="space-y-4 text-center">
            <div className="mx-auto w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-slate-800">
                Website Admin
              </CardTitle>
              <CardDescription className="text-slate-600 mt-2">
                Sign in to access the admin dashboard
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="username"
                  className="text-sm font-medium text-slate-700"
                >
                  Username
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={credentials.username}
                  onChange={(e) =>
                    setCredentials((prev) => ({
                      ...prev,
                      username: e.target.value,
                    }))
                  }
                  className="h-11"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-slate-700"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  className="h-11"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full h-11 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4 mr-2" />
                    Sign In
                  </>
                )}
              </Button>
            </form>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800 font-medium mb-1">
                Demo Credentials
              </p>
              <p className="text-xs text-blue-600">
                Username: admin | Password: admin
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Settings className="w-4 h-4 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">
                  Website Admin
                </h1>
                <p className="text-xs text-slate-600">
                  Configuration Dashboard
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge
                variant="outline"
                className="bg-green-50 text-green-700 border-green-200"
              >
                <CheckCircle className="w-3 h-3 mr-1" />
                Online
              </Badge>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsAuthenticated(false)}
                className="text-slate-600 hover:text-slate-800"
              >
                <User className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            Website Settings
          </h2>
          <p className="text-slate-600">
            Configure your website settings and user authentication
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Quick Stats */}
          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm font-medium">
                      Total Users
                    </p>
                    <p className="text-2xl font-bold">2,547</p>
                  </div>
                  <Users className="w-8 h-8 text-blue-200" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm font-medium">
                      Active Sessions
                    </p>
                    <p className="text-2xl font-bold">1,234</p>
                  </div>
                  <Globe className="w-8 h-8 text-green-200" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100 text-sm font-medium">
                      Database Size
                    </p>
                    <p className="text-2xl font-bold">45.2 GB</p>
                  </div>
                  <Database className="w-8 h-8 text-purple-200" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-100 text-sm font-medium">
                      Notifications
                    </p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                  <Bell className="w-8 h-8 text-orange-200" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Settings Panel */}
          <div className="lg:col-span-3">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Configuration Settings
                </CardTitle>
                <CardDescription>
                  Manage your website's core settings and security preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="general" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="general">General</TabsTrigger>
                    <TabsTrigger value="security">Security</TabsTrigger>
                    <TabsTrigger value="notifications">
                      Notifications
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="general" className="space-y-6 mt-6">
                    <div className="space-y-4">
                      <div>
                        <Label
                          htmlFor="siteName"
                          className="text-sm font-medium text-slate-700"
                        >
                          Site Name
                        </Label>
                        <Input
                          id="siteName"
                          value={settings.siteName}
                          onChange={(e) =>
                            setSettings((prev) => ({
                              ...prev,
                              siteName: e.target.value,
                            }))
                          }
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="siteDescription"
                          className="text-sm font-medium text-slate-700"
                        >
                          Site Description
                        </Label>
                        <Input
                          id="siteDescription"
                          value={settings.siteDescription}
                          onChange={(e) =>
                            setSettings((prev) => ({
                              ...prev,
                              siteDescription: e.target.value,
                            }))
                          }
                          className="mt-1"
                        />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label className="text-sm font-medium text-slate-700">
                            Maintenance Mode
                          </Label>
                          <p className="text-xs text-slate-500">
                            Temporarily disable site access for maintenance
                          </p>
                        </div>
                        <Switch
                          checked={settings.maintenanceMode}
                          onCheckedChange={(checked) =>
                            setSettings((prev) => ({
                              ...prev,
                              maintenanceMode: checked,
                            }))
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label className="text-sm font-medium text-slate-700">
                            User Registration
                          </Label>
                          <p className="text-xs text-slate-500">
                            Allow new users to register accounts
                          </p>
                        </div>
                        <Switch
                          checked={settings.userRegistration}
                          onCheckedChange={(checked) =>
                            setSettings((prev) => ({
                              ...prev,
                              userRegistration: checked,
                            }))
                          }
                        />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="security" className="space-y-6 mt-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label className="text-sm font-medium text-slate-700">
                            Two-Factor Authentication
                          </Label>
                          <p className="text-xs text-slate-500">
                            Require 2FA for admin accounts
                          </p>
                        </div>
                        <Switch
                          checked={settings.twoFactorAuth}
                          onCheckedChange={(checked) =>
                            setSettings((prev) => ({
                              ...prev,
                              twoFactorAuth: checked,
                            }))
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label className="text-sm font-medium text-slate-700">
                            SSL Encryption
                          </Label>
                          <p className="text-xs text-slate-500">
                            Force HTTPS connections
                          </p>
                        </div>
                        <Switch
                          checked={settings.sslEnabled}
                          onCheckedChange={(checked) =>
                            setSettings((prev) => ({
                              ...prev,
                              sslEnabled: checked,
                            }))
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label className="text-sm font-medium text-slate-700">
                            API Access
                          </Label>
                          <p className="text-xs text-slate-500">
                            Enable external API access
                          </p>
                        </div>
                        <Switch
                          checked={settings.apiAccess}
                          onCheckedChange={(checked) =>
                            setSettings((prev) => ({
                              ...prev,
                              apiAccess: checked,
                            }))
                          }
                        />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="notifications" className="space-y-6 mt-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label className="text-sm font-medium text-slate-700">
                            Email Notifications
                          </Label>
                          <p className="text-xs text-slate-500">
                            Receive important updates via email
                          </p>
                        </div>
                        <Switch
                          checked={settings.emailNotifications}
                          onCheckedChange={(checked) =>
                            setSettings((prev) => ({
                              ...prev,
                              emailNotifications: checked,
                            }))
                          }
                        />
                      </div>
                      <div className="p-4 bg-slate-50 rounded-lg">
                        <h4 className="text-sm font-medium text-slate-700 mb-2">
                          Notification Types
                        </h4>
                        <div className="space-y-2 text-xs text-slate-600">
                          <div className="flex items-center gap-2">
                            <Mail className="w-3 h-3" />
                            Security alerts and login attempts
                          </div>
                          <div className="flex items-center gap-2">
                            <Bell className="w-3 h-3" />
                            System maintenance and updates
                          </div>
                          <div className="flex items-center gap-2">
                            <AlertCircle className="w-3 h-3" />
                            Error reports and performance issues
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Action Panel */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={handleSave}
                  disabled={saveStatus === "saving"}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  {saveStatus === "saving" ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Saving...
                    </>
                  ) : saveStatus === "saved" ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Saved!
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </>
                  )}
                </Button>

                <Button variant="outline" className="w-full">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview Site
                </Button>

                <Button variant="outline" className="w-full">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Restart Services
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-lg">System Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Database</span>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-700"
                    >
                      Online
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Cache</span>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-700"
                    >
                      Healthy
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Storage</span>
                    <Badge
                      variant="secondary"
                      className="bg-yellow-100 text-yellow-700"
                    >
                      85% Full
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      SSL Certificate
                    </span>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-700"
                    >
                      Valid
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
