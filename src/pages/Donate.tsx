import { useState } from "react";
import Navbar from "@/components/Navbar";
import ImpactTracker from "@/components/ImpactTracker";
import DonationFlow from "@/components/DonationFlow";
import SocialProofBanner from "@/components/SocialProofBanner";
import { Button } from "@/components/ui/button";
import { Heart, Users, BookOpen, Utensils } from "lucide-react";

const Donate = () => {
  const [showTracker, setShowTracker] = useState(false);
  const [donationAmount, setDonationAmount] = useState(0);

  const handleDonate = (amount: number) => {
    setDonationAmount(amount);
    setShowTracker(true);
  };

  const impactAreas = [
    { icon: BookOpen, title: "Education", description: "Fund books, supplies, and tutoring for underprivileged children", color: "text-primary" },
    { icon: Utensils, title: "Nutrition", description: "Provide healthy meals and nutrition programs", color: "text-accent" },
    { icon: Users, title: "Community", description: "Build community centers and support networks", color: "text-trust" },
    { icon: Heart, title: "Healthcare", description: "Medical support and health awareness programs", color: "text-heart" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SocialProofBanner />
      
      {showTracker ? (
        <ImpactTracker amount={donationAmount} onClose={() => setShowTracker(false)} />
      ) : (
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Make a Real Impact Today
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Every donation creates measurable change. See exactly how your contribution transforms lives in real-time.
            </p>
            <div className="bg-gradient-impact text-white p-6 rounded-lg inline-block shadow-impact">
              <div className="text-3xl font-bold">₹2,50,000</div>
              <div className="text-sm opacity-90">raised this month</div>
            </div>
          </div>

          {/* Quick Donation Amounts */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Choose Your Impact Level</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { amount: 100, impact: "1 day of education", students: 2 },
                { amount: 500, impact: "1 week of meals", students: 5 },
                { amount: 1000, impact: "1 month of books", students: 10 },
                { amount: 2000, impact: "Health checkups", students: 20 }
              ].map((option) => (
                <div key={option.amount} className="bg-card border rounded-lg p-6 text-center hover:shadow-warm transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-primary mb-2">₹{option.amount}</div>
                  <div className="text-sm text-muted-foreground mb-4">{option.impact}</div>
                  <div className="text-xs text-accent font-semibold mb-4">Helps {option.students} children</div>
                  <Button 
                    variant="donate" 
                    className="w-full"
                    onClick={() => handleDonate(option.amount)}
                  >
                    Donate Now
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Areas */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Where Your Money Goes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {impactAreas.map((area) => (
                <div key={area.title} className="text-center group">
                  <div className="bg-gradient-to-br from-background to-muted rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <area.icon className={`h-8 w-8 ${area.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                  <p className="text-muted-foreground text-sm">{area.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Amount */}
          <DonationFlow onDonate={handleDonate} />

          {/* Trust Indicators */}
          <div className="bg-gradient-trust text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">100% Transparency Guaranteed</h3>
            <p className="mb-6">Track every rupee with our real-time impact dashboard. See photos, videos, and updates from the communities you're helping.</p>
            <div className="flex justify-center space-x-8 text-sm">
              <div><span className="font-bold">₹10L+</span> donated this year</div>
              <div><span className="font-bold">500+</span> children helped</div>
              <div><span className="font-bold">25+</span> schools supported</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donate;