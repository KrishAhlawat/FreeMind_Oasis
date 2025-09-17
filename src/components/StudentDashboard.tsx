import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  MessageCircle,
  Settings,
  HelpCircle,
  LogOut,
  Home,
  UserCheck,
  Plus,
  CalendarDays,
  FileText,
} from "lucide-react";

export default function FreeMindDashboard() {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Sidebar */}
      <div className="w-72 bg-[#fa793f] text-white flex flex-col">
        {/* Header */}
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#23262f] rounded transform rotate-45"></div>
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </div>
        </div>

        {/* Navigation */}
        <div className="px-6 mb-8">
          <p className="text-sm font-medium mb-4 opacity-90">OVERVIEW</p>
          <div className="space-y-2">
            <Button
              variant="secondary"
              className="w-full justify-start bg-white/20 text-white hover:bg-white/30"
            >
              <Home className="w-4 h-4 mr-3" />
              Dashboard
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-white hover:bg-white/10"
            >
              <Home className="w-4 h-4 mr-3" />
              Return Back To Home Page
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-white hover:bg-white/10"
            >
              <UserCheck className="w-4 h-4 mr-3" />
              Change Role
            </Button>
          </div>
        </div>

        {/* Your Peers */}
        <div className="px-6 mb-8">
          <p className="text-sm font-medium mb-4 opacity-90">YOUR PEERS</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/diverse-group.png" />
                <AvatarFallback>R</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Rishab</p>
                <p className="text-xs opacity-75">Software Developer</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/diverse-group.png" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Amlan</p>
                <p className="text-xs opacity-75">Software Developer</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/diverse-group.png" />
                <AvatarFallback>K</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Krish</p>
                <p className="text-xs opacity-75">Software Developer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Support Card */}
        <div className="mx-6 mb-8">
          <Card className="bg-[#e0e8e5] border-0">
            <CardContent className="p-4">
              <h3 className="font-semibold text-[#23262f] mb-2">
                24/7 Student Support Available
              </h3>
              <p className="text-sm text-[#23262f] mb-4">
                Have query? Not able to book appointment? Contact Us!
              </p>
              <Button className="w-full bg-[#23262f] text-white hover:bg-[#23262f]/90">
                Chat Now
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-auto p-6 space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-white/10"
          >
            <Settings className="w-4 h-4 mr-3" />
            Settings
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-white/10"
          >
            <HelpCircle className="w-4 h-4 mr-3" />
            FAQ
          </Button>
          <Separator className="my-4 bg-white/20" />
          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-white/10"
          >
            <LogOut className="w-4 h-4 mr-3" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#23262f] mb-2">
            Welcome To FreeMind Oasis
          </h1>
          <p className="text-[#708099]">
            Hope you are healthy and happy today!
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Upcoming Appointment */}
          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-[#fa793f] font-medium mb-1">
                    Today 12:00 PM IST
                  </p>
                  <h3 className="font-semibold text-[#23262f] mb-1">
                    Upcoming Appointment
                  </h3>
                  <p className="text-sm text-[#708099]">
                    You have an upcoming video Consultation with{" "}
                    <span className="font-medium">
                      Counsellor Nainika Anish
                    </span>
                  </p>
                </div>
                <div className="w-40 h-14 bg-[#fa793f] rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
              </div>
              <Button className="w-full bg-[#23262f] text-white hover:bg-[#23262f]/90">
                Join
              </Button>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-[#23262f]">
                  Notifications
                </CardTitle>
                <div className="w-10 h-10 bg-[#fa793f] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#f8f9fb] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-[#708099]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#23262f]">
                    You have 2 unread messages - Nainika Anish
                  </p>
                  <p className="text-xs text-[#708099]">
                    15 Sep, 2025 | 04:39 PM
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#f8f9fb] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-[#708099]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#23262f]">
                    You have 2 unread messages - Suhani Singh
                  </p>
                  <p className="text-xs text-[#708099]">
                    16 Sep, 2025 | 2:03 PM
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* New Counselling Reports */}
          <Card className="bg-[#fa793f] border-0 shadow-sm text-white">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold mb-2">
                    New Counselling Reports Available Now!
                  </h3>
                  <p className="text-sm opacity-90">
                    Your reports from last counselling session with Nainika
                    Anish are available now.
                  </p>
                </div>
              </div>
              <Button
                variant="secondary"
                className="w-full bg-[#23262f] text-white hover:bg-[#23262f]/90"
              >
                View
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Mood Tracker and Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Mood Tracker */}
          <div className="space-y-6">
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-[#23262f] mb-4">
                  What's your mood like today?
                </h3>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-center">
                    <div className="text-2xl mb-1">😫</div>
                    <p className="text-xs text-[#708099]">Worst</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-1">😔</div>
                    <p className="text-xs text-[#708099]">Not Good</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-1">😐</div>
                    <p className="text-xs text-[#708099]">Fine</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-1">🙂</div>
                    <p className="text-xs text-[#708099]">Good</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-1">😊</div>
                    <p className="text-xs text-[#708099]">Very Good</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-full h-2 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 rounded-full"></div>
                  <div className="absolute top-0 left-1/4 w-4 h-4 bg-white border-2 border-[#50b8e4] rounded-full transform -translate-y-1"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-[#23262f] mb-4">
                  We'd love to know how you feel
                </h3>
                <textarea
                  className="w-full h-24 p-3 border border-[#e4e4e4] rounded-lg resize-none text-sm"
                  placeholder="Share your thoughts..."
                />
              </CardContent>
            </Card>
          </div>

          {/* Weekly Mood Trend */}
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#23262f]">
                Weekly Mood Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 mb-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs bg-transparent"
                >
                  All
                </Button>
                <Button variant="ghost" size="sm" className="text-xs">
                  1d
                </Button>
                <Button variant="ghost" size="sm" className="text-xs">
                  1w
                </Button>
                <Button variant="ghost" size="sm" className="text-xs">
                  1m
                </Button>
                <Button variant="ghost" size="sm" className="text-xs">
                  1y
                </Button>
                <Button variant="ghost" size="sm" className="text-xs">
                  5y
                </Button>
              </div>
              <div className="h-48 bg-gradient-to-b from-[#f8f9fb] to-white rounded-lg p-4 relative">
                <svg className="w-full h-full" viewBox="0 0 300 150">
                  <polyline
                    fill="none"
                    stroke="#50b8e4"
                    strokeWidth="2"
                    points="20,120 60,100 100,80 140,90 180,70 220,60 260,40"
                  />
                  <circle cx="260" cy="40" r="3" fill="#50b8e4" />
                </svg>
                <div className="absolute left-4 top-4 text-xs text-[#708099]">
                  Very Good
                </div>
                <div className="absolute left-4 top-1/3 text-xs text-[#708099]">
                  Good
                </div>
                <div className="absolute left-4 top-2/3 text-xs text-[#708099]">
                  Fine
                </div>
                <div className="absolute left-4 bottom-8 text-xs text-[#708099]">
                  Not Good
                </div>
                <div className="absolute left-4 bottom-4 text-xs text-[#708099]">
                  Worst
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Happiness Scale */}
          <Card className="bg-[#faf3e0] border-0 shadow-sm">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-[#23262f] mb-4">
                Your Happiness Scale
              </h3>
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#e4e4e4"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#702dff"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray="251"
                    strokeDashoffset="75"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-2xl">
                  😊
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Book Appointment */}
          <Card className="bg-[#fa793f] border-0 shadow-sm text-white">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                  <CalendarDays className="w-8 h-8" />
                  <div>
                    <p className="font-medium">Book an Appointment</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Request New Counsellor */}
          <Card className="bg-[#faf3e0] border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 p-3 rounded-lg">
                <FileText className="w-8 h-8 text-[#fa793f]" />
                <div>
                  <p className="font-medium text-[#23262f]">
                    Request New Counsellor
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 bg-[#1f263e] text-white p-6">
        {/* User Profile */}
        <div className="text-center mb-8">
          <Avatar className="w-20 h-20 mx-auto mb-4">
            <AvatarImage src="/professional-person.jpg" />
            <AvatarFallback>K</AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-semibold mb-1">Good Morning Keyur</h2>
          <p className="text-sm opacity-75">
            Continue Your Journey & Achieve Your Target
          </p>
        </div>

        {/* Your Counsellors */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Your Counsellors</h3>
            <Button size="sm" className="bg-[#fa793f] hover:bg-[#fa793f]/90">
              <Plus className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/counsellor.jpg" />
                <AvatarFallback>RP</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium">Ravi Prakash</p>
                <p className="text-sm opacity-75">Counsellor</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/counsellor.jpg" />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium">Akshat Sinha</p>
                <p className="text-sm opacity-75">Counsellor</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/counsellor.jpg" />
                <AvatarFallback>KU</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium">Khushi Upadhyaya</p>
                <p className="text-sm opacity-75">Counsellor</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/counsellor.jpg" />
                <AvatarFallback>PC</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium">Pranshi Chaubey</p>
                <p className="text-sm opacity-75">Counsellor</p>
              </div>
            </div>
          </div>

          <Button className="w-full mt-6 bg-[#fa793f] hover:bg-[#fa793f]/90">
            See All
          </Button>
        </div>
      </div>
    </div>
  );
}
