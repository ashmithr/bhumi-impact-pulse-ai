import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Users, Heart, DollarSign, Target, Clock } from "lucide-react";

const AdminStats = () => {
  const quizData = [
    { segment: "Parents with Children", count: 856, percentage: 45, color: "bg-primary" },
    { segment: "Working Professionals", count: 624, percentage: 33, color: "bg-accent" },
    { segment: "Students", count: 312, percentage: 16, color: "bg-trust" },
    { segment: "Others", count: 118, percentage: 6, color: "bg-heart" }
  ];

  const nudgePerformance = [
    { text: "Support orphans with kindness today", clicks: 234, ctr: "12.5%" },
    { text: "Your ₹100 today can send a child to school", clicks: 189, ctr: "10.8%" },
    { text: "Join our youth force transforming lives", clicks: 156, ctr: "9.2%" },
    { text: "Explore how Bhumi is making change happen", clicks: 98, ctr: "5.6%" }
  ];

  const realtimeStats = {
    activeVisitors: 47,
    donationsToday: 23,
    amountToday: 12800,
    volunteerSignups: 8,
    conversionRate: 8.5,
    avgDonation: 556
  };

  const financeBreakdown = [
    { category: "Education", amount: 125000, percentage: 50, color: "bg-primary" },
    { category: "Nutrition", amount: 75000, percentage: 30, color: "bg-accent" },
    { category: "Healthcare", amount: 37500, percentage: 15, color: "bg-heart" },
    { category: "Administration", amount: 12500, percentage: 5, color: "bg-muted-foreground" }
  ];

  return (
    <div className="space-y-6">
      {/* Real-time Activity */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Card className="border-l-4 border-l-primary">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Active Now</p>
                <p className="text-2xl font-bold text-primary">{realtimeStats.activeVisitors}</p>
              </div>
              <Users className="h-4 w-4 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-accent">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Donations Today</p>
                <p className="text-2xl font-bold text-accent">{realtimeStats.donationsToday}</p>
              </div>
              <Heart className="h-4 w-4 text-accent" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-trust">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Amount Today 💰</p>
                <p className="text-2xl font-bold text-trust">₹{realtimeStats.amountToday.toLocaleString()}</p>
              </div>
              <DollarSign className="h-4 w-4 text-trust" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-heart">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Volunteers</p>
                <p className="text-2xl font-bold text-heart">{realtimeStats.volunteerSignups}</p>
              </div>
              <Target className="h-4 w-4 text-heart" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-primary">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Conversion Efficiency</p>
                <p className="text-2xl font-bold text-primary">{realtimeStats.conversionRate}%</p>
              </div>
              <TrendingUp className="h-4 w-4 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-accent">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Avg Donation</p>
                <p className="text-2xl font-bold text-accent">₹{realtimeStats.avgDonation}</p>
              </div>
              <Clock className="h-4 w-4 text-accent" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quiz Segments */}
        <Card>
          <CardHeader>
            <CardTitle>Audience Segments</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {quizData.map((segment) => (
              <div key={segment.segment}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{segment.segment}</span>
                  <span className="font-medium">{segment.count} ({segment.percentage}%)</span>
                </div>
                <Progress value={segment.percentage} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Nudge Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Psychological Nudge Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {nudgePerformance.map((nudge, index) => (
                <div key={index} className="border-l-4 border-l-primary pl-4">
                  <p className="text-sm font-medium mb-1">"{nudge.text}"</p>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{nudge.clicks} clicks</span>
                    <span>{nudge.ctr} CTR</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Finance Tracker View */}
        <Card>
          <CardHeader>
            <CardTitle>Donation Allocation Tracker</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {financeBreakdown.map((item) => (
              <div key={item.category}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{item.category}</span>
                  <span className="font-medium">₹{item.amount.toLocaleString()} ({item.percentage}%)</span>
                </div>
                <Progress value={item.percentage} className="h-2" />
              </div>
            ))}
            <div className="mt-4 p-3 bg-gradient-impact text-white rounded-lg text-center">
              <p className="text-sm opacity-90">Total Allocated This Month</p>
              <p className="text-xl font-bold">₹2,75,000</p>
            </div>
          </CardContent>
        </Card>

        {/* Behavioral Insights */}
        <Card>
          <CardHeader>
            <CardTitle>Behavioral Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="bg-primary/10 p-3 rounded-lg">
              <p className="text-sm font-medium text-primary">Peak Donation Time</p>
              <p className="text-xs text-muted-foreground">7-9 PM sees 3x higher conversion rates</p>
            </div>
            <div className="bg-accent/10 p-3 rounded-lg">
              <p className="text-sm font-medium text-accent">Best Performing Content</p>
              <p className="text-xs text-muted-foreground">Stories about education get 45% more engagement</p>
            </div>
            <div className="bg-trust/10 p-3 rounded-lg">
              <p className="text-sm font-medium text-trust">User Journey</p>
              <p className="text-xs text-muted-foreground">Avg. 3.2 pages before donation</p>
            </div>
            <div className="bg-heart/10 p-3 rounded-lg">
              <p className="text-sm font-medium text-heart">Return Visitors</p>
              <p className="text-xs text-muted-foreground">28% of donors become monthly contributors</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminStats;
