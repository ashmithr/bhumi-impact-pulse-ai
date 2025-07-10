import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AdminStats from "@/components/AdminStats";
import { LogOut, Users, Heart, TrendingUp, DollarSign } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");
    if (auth === "true") {
      setIsAuthenticated(true);
    } else {
      navigate("/admin");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin");
  };

  if (!isAuthenticated) {
    return <div className="text-center text-white mt-20">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E1E2F] to-[#2A2A40] text-white">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-md bg-white/5 p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Bhumi Admin Dashboard</h1>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black transition"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <Card className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg transition-transform hover:scale-[1.02]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Visitors</CardTitle>
              <Users className="h-5 w-5 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">2,847</div>
              <p className="text-xs text-gray-400">+12% from last week</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:scale-[1.02]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Donations</CardTitle>
              <DollarSign className="h-5 w-5 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">₹2,50,000</div>
              <p className="text-xs text-gray-400">+25% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:scale-[1.02]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Volunteers</CardTitle>
              <Heart className="h-5 w-5 text-pink-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">156</div>
              <p className="text-xs text-gray-400">+8 new this week</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-500 rounded-xl shadow-lg hover:scale-[1.02] bg-white/5 backdrop-blur-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-purple-300">Conversion Rate</CardTitle>
              <TrendingUp className="h-5 w-5 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">8.5%</div>
              <p className="text-xs text-gray-400">+2.1% from last week</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Analytics */}
        <div className="rounded-xl bg-white/5 p-6 shadow-lg backdrop-blur-md">
          <AdminStats />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
