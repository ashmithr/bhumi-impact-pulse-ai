import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, BookOpen, Utensils, Heart, Users, ArrowRight } from "lucide-react";

interface ImpactTrackerProps {
  amount: number;
  onClose: () => void;
}

const ImpactTracker = ({ amount, onClose }: ImpactTrackerProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [animationValues, setAnimationValues] = useState({
    education: 0,
    meals: 0,
    healthcare: 0,
    admin: 0
  });

  // Calculate breakdown percentages
  const breakdown = {
    education: Math.round(amount * 0.5),
    meals: Math.round(amount * 0.3),
    healthcare: Math.round(amount * 0.15),
    admin: Math.round(amount * 0.05)
  };

  // Calculate impact metrics
  const impact = {
    books: Math.floor(breakdown.education / 50),
    meals: Math.floor(breakdown.meals / 25),
    checkups: Math.floor(breakdown.healthcare / 100),
    children: Math.floor(amount / 100)
  };

  const steps = [
    {
      title: "Processing Your Donation",
      description: "Your ₹" + amount + " is being allocated for maximum impact...",
      icon: Heart
    },
    {
      title: "Funding Education",
      description: `₹${breakdown.education} → ${impact.books} books for children`,
      icon: BookOpen,
      color: "text-primary"
    },
    {
      title: "Providing Nutrition",
      description: `₹${breakdown.meals} → ${impact.meals} nutritious meals`,
      icon: Utensils,
      color: "text-accent"
    },
    {
      title: "Healthcare Support",
      description: `₹${breakdown.healthcare} → Health checkups for ${impact.checkups} children`,
      icon: Heart,
      color: "text-heart"
    },
    {
      title: "Impact Complete!",
      description: `Your donation is now helping ${impact.children} children`,
      icon: Users,
      color: "text-trust"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(prev => prev + 1);
        
        // Animate counters
        if (currentStep === 1) {
          animateCounter('education', breakdown.education);
        } else if (currentStep === 2) {
          animateCounter('meals', breakdown.meals);
        } else if (currentStep === 3) {
          animateCounter('healthcare', breakdown.healthcare);
        }
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [currentStep]);

  const animateCounter = (key: keyof typeof animationValues, target: number) => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setAnimationValues(prev => ({ ...prev, [key]: Math.round(current) }));
    }, 30);
  };

  const currentStepData = steps[currentStep];
  const Icon = currentStepData.icon;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl shadow-glow">
        <CardHeader className="text-center relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute right-0 top-0"
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="bg-gradient-hero text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-in">
            <Icon className={`h-8 w-8 ${currentStepData.color || 'text-white'}`} />
          </div>
          <CardTitle className="text-2xl font-bold">{currentStepData.title}</CardTitle>
          <p className="text-muted-foreground">{currentStepData.description}</p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Progress Steps */}
          <div className="flex justify-center space-x-2 mb-6">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index <= currentStep ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>

          {/* Money Flow Animation */}
          {currentStep > 0 && (
            <div className="bg-gradient-to-r from-impact-light to-accent/10 p-6 rounded-lg">
              <h3 className="font-semibold mb-4 text-center">Real-Time Impact Breakdown</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-between p-3 bg-white rounded border">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span className="text-sm">Education</span>
                  </div>
                  <span className="font-bold text-primary animate-counter-up">
                    ₹{animationValues.education}
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white rounded border">
                  <div className="flex items-center space-x-2">
                    <Utensils className="h-4 w-4 text-accent" />
                    <span className="text-sm">Nutrition</span>
                  </div>
                  <span className="font-bold text-accent animate-counter-up">
                    ₹{animationValues.meals}
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white rounded border">
                  <div className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-heart" />
                    <span className="text-sm">Healthcare</span>
                  </div>
                  <span className="font-bold text-heart animate-counter-up">
                    ₹{animationValues.healthcare}
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white rounded border">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Admin</span>
                  </div>
                  <span className="font-bold text-muted-foreground">
                    ₹{breakdown.admin}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Impact Visualization */}
          {currentStep === steps.length - 1 && (
            <div className="bg-gradient-trust text-white p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Your Impact Receipt</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <div className="text-2xl font-bold">{impact.books}</div>
                  <div className="opacity-80">Books</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{impact.meals}</div>
                  <div className="opacity-80">Meals</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{impact.checkups}</div>
                  <div className="opacity-80">Checkups</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{impact.children}</div>
                  <div className="opacity-80">Children Helped</div>
                </div>
              </div>
            </div>
          )}

          {/* Close Button */}
          {currentStep === steps.length - 1 && (
            <div className="text-center">
              <Button variant="hero" onClick={onClose}>
                Continue Exploring
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ImpactTracker;