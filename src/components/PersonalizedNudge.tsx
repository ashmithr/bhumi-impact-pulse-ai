import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Heart, Users, BookOpen, Target, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface PersonalizedNudgeProps {
  segment: string;
  onClose: () => void;
}

const PersonalizedNudge = ({ segment, onClose }: PersonalizedNudgeProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Auto-hide after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, 10000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const getNudgeContent = (segment: string) => {
    switch (segment) {
      case "parent-donor":
        return {
          icon: Heart,
          title: "Help Children Like Your Own",
          message: "Thousands of children are waiting for love and education. Your support can give them the same opportunities you want for your children.",
          cta: "Sponsor a Child's Education",
          color: "bg-gradient-to-r from-heart to-heart/80",
          amount: "₹500"
        };
      
      case "student-volunteer":
        return {
          icon: Users,
          title: "Join Our Youth Force!",
          message: "Be part of a generation transforming lives. Your energy and passion can directly impact children's futures.",
          cta: "Start Volunteering Today",
          color: "bg-gradient-impact",
          amount: "2hrs/week"
        };
      
      case "professional-donor":
        return {
          icon: Target,
          title: "Maximize Your Impact",
          message: "Your professional success can create exponential change. See exactly how your strategic giving transforms communities.",
          cta: "View Impact Dashboard",
          color: "bg-gradient-trust",
          amount: "₹1000"
        };
      
      case "general-volunteer":
        return {
          icon: BookOpen,
          title: "Share Your Skills",
          message: "Your unique talents can unlock potential in underprivileged children. Every skill you share plants seeds of hope.",
          cta: "Find Volunteer Opportunities",
          color: "bg-gradient-to-r from-accent to-primary",
          amount: "Skills"
        };
      
      case "explorer":
        return {
          icon: Star,
          title: "Discover Real Impact",
          message: "Explore how Bhumi is revolutionizing social impact with AI and transparent giving. See change happen in real-time.",
          cta: "Explore Our Impact",
          color: "bg-gradient-hero",
          amount: "Free"
        };
      
      default:
        return {
          icon: Heart,
          title: "Start Your Impact Journey",
          message: "Your ₹100 today can send a child to school for a week. Small actions create big transformations.",
          cta: "Make Your First Donation",
          color: "bg-gradient-hero",
          amount: "₹100"
        };
    }
  };

  const nudge = getNudgeContent(segment);
  const Icon = nudge.icon;

  const handleAction = () => {
    if (segment === "student-volunteer" || segment === "general-volunteer") {
      // Track volunteer interest
      localStorage.setItem("interestedInVolunteering", "true");
    }
    onClose();
  };

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 transform transition-all duration-500 ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <Card className={`max-w-sm shadow-glow border-0 ${nudge.color} text-white overflow-hidden`}>
        <CardContent className="p-0">
          <div className="relative p-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setIsVisible(false);
                setTimeout(onClose, 300);
              }}
              className="absolute right-2 top-2 text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
            
            <div className="flex items-start space-x-4 mb-4">
              <div className="bg-white/20 p-3 rounded-full">
                <Icon className="h-6 w-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg mb-2">{nudge.title}</h3>
                <p className="text-sm opacity-90 leading-relaxed mb-4">
                  {nudge.message}
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-xs opacity-80">
                Starting from <span className="font-bold text-lg">{nudge.amount}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="bg-white text-foreground hover:bg-white/90 border-0"
                onClick={handleAction}
                asChild
              >
                <Link to="/donate">
                  {nudge.cta}
                </Link>
              </Button>
            </div>
            
            {/* Psychological elements */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/20 text-xs">
              <div className="flex items-center space-x-1 opacity-80">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span>47 people helped today</span>
              </div>
              <div className="opacity-80">
                🌟 Trending now
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PersonalizedNudge;