import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SocialProofBanner from "@/components/SocialProofBanner";
import QuizPopup from "@/components/QuizPopup";
import PersonalizedNudge from "@/components/PersonalizedNudge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, BookOpen, TrendingUp, Star, CheckCircle } from "lucide-react";

const Index = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [userSegment, setUserSegment] = useState<string | null>(null);
  const [showNudge, setShowNudge] = useState(false);

  useEffect(() => {
    // Check if user has already taken the quiz
    const savedSegment = localStorage.getItem("userSegment");
    if (savedSegment) {
      setUserSegment(savedSegment);
    } else {
      // Show quiz popup after 2 seconds for first-time visitors
      const timer = setTimeout(() => {
        setShowQuiz(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleQuizComplete = (segment: string) => {
    setUserSegment(segment);
    localStorage.setItem("userSegment", segment);
    setShowQuiz(false);
    // Show personalized nudge after quiz
    setTimeout(() => setShowNudge(true), 1000);
  };

  const impactStats = [
    { icon: Users, label: "Children Helped", value: "2,500+", color: "text-primary" },
    { icon: BookOpen, label: "Books Distributed", value: "15,000+", color: "text-accent" },
    { icon: Heart, label: "Meals Served", value: "50,000+", color: "text-heart" },
    { icon: TrendingUp, label: "Lives Transformed", value: "1,200+", color: "text-trust" }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Teacher & Volunteer",
      content: "Bhumi's AI-driven approach helps us understand exactly where our efforts create the most impact. It's revolutionary!",
      rating: 5
    },
    {
      name: "Rohit Patel", 
      role: "Monthly Donor",
      content: "I love seeing real-time updates on how my donations help children. The transparency is incredible.",
      rating: 5
    },
    {
      name: "Dr. Meera Singh",
      role: "Program Director",
      content: "The behavioral insights help us create more meaningful connections with our community. Game-changing technology.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SocialProofBanner />
      
      {/* Quiz Popup */}
      {showQuiz && <QuizPopup onComplete={handleQuizComplete} onClose={() => setShowQuiz(false)} />}
      
      {/* Personalized Nudge */}
      {showNudge && userSegment && (
        <PersonalizedNudge 
          segment={userSegment} 
          onClose={() => setShowNudge(false)} 
        />
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Smart Engagement.<br />Real Impact.
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto animate-fade-in">
            Bhumi uses AI and behavioral psychology to create meaningful connections between donors and the children they help. See your impact in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button variant="hero" size="lg" asChild>
              <Link to="/donate">Start Your Impact Journey</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Watch Our Story
            </Button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 opacity-20 animate-bounce-gentle">
          <Heart className="h-12 w-12" />
        </div>
        <div className="absolute top-1/3 right-10 opacity-20 animate-bounce-gentle" style={{ animationDelay: '1s' }}>
          <BookOpen className="h-12 w-12" />
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact So Far</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every number tells a story of transformation. See how technology and compassion create lasting change.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat) => (
              <Card key={stat.label} className="text-center hover:shadow-warm transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-br from-background to-muted mb-4 ${stat.color}`}>
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Bhumi Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform creates personalized experiences that drive deeper engagement and measurable impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-impact text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Personalized Matching</h3>
              <p className="text-muted-foreground">
                Our AI analyzes your preferences to match you with causes and children that resonate with your values and interests.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-trust text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Real-Time Impact</h3>
              <p className="text-muted-foreground">
                See exactly how your donations flow in real-time - from your account to books, meals, and educational programs.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-hero text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Continuous Updates</h3>
              <p className="text-muted-foreground">
                Receive photos, videos, and progress updates from the children and communities your contributions are helping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Community Says</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real stories from donors, volunteers, and program beneficiaries who are part of the Bhumi family.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-warm transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-trust text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Lives?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of donors using AI-powered giving to create measurable, lasting impact in children's lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/donate">Start Donating</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Become a Volunteer
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold mb-1">100%</div>
              <div className="text-sm opacity-80">Transparency</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">Real-time</div>
              <div className="text-sm opacity-80">Impact Tracking</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">AI-Powered</div>
              <div className="text-sm opacity-80">Personalization</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className="text-sm opacity-80">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-hero p-2 rounded-full">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Bhumi</span>
              </div>
              <p className="text-sm opacity-80">
                Transforming lives through AI-powered social impact and transparent giving.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <Link to="/" className="block opacity-80 hover:opacity-100">Home</Link>
                <Link to="/donate" className="block opacity-80 hover:opacity-100">Donate</Link>
                <Link to="/blog" className="block opacity-80 hover:opacity-100">Blog</Link>
                <a href="#" className="block opacity-80 hover:opacity-100">About Us</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block opacity-80 hover:opacity-100">Education</a>
                <a href="#" className="block opacity-80 hover:opacity-100">Nutrition</a>
                <a href="#" className="block opacity-80 hover:opacity-100">Healthcare</a>
                <a href="#" className="block opacity-80 hover:opacity-100">Volunteering</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm">
                <p className="opacity-80">Email: impact@bhumi.org</p>
                <p className="opacity-80">Phone: +91 80 4040 4040</p>
                <p className="opacity-80">Address: Bangalore, India</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2024 Bhumi NGO. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;