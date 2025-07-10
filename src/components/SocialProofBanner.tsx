import { useState, useEffect } from "react";
import { Heart, Users, BookOpen, Utensils } from "lucide-react";

const SocialProofBanner = () => {
  const [currentNotification, setCurrentNotification] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const notifications = [
    {
      icon: Heart,
      name: "Anjali from Chennai",
      action: "just donated ₹500",
      impact: "to sponsor a child's education!",
      color: "text-heart"
    },
    {
      icon: Users,
      name: "Rohit from Delhi",
      action: "joined as a volunteer",
      impact: "to teach underprivileged kids!",
      color: "text-primary"
    },
    {
      icon: BookOpen,
      name: "Priya from Bangalore",
      action: "donated ₹1000",
      impact: "for educational materials!",
      color: "text-accent"
    },
    {
      icon: Utensils,
      name: "Vikram from Mumbai",
      action: "sponsored meals",
      impact: "for 20 children today!",
      color: "text-trust"
    },
    {
      icon: Heart,
      name: "Meera from Pune",
      action: "just donated ₹300",
      impact: "for healthcare programs!",
      color: "text-heart"
    }
  ];

  useEffect(() => {
    const showNotification = () => {
      setIsVisible(true);
      setCurrentNotification((prev) => (prev + 1) % notifications.length);
      
      setTimeout(() => {
        setIsVisible(false);
      }, 5000); // Show for 5 seconds
    };

    // Show first notification after 3 seconds
    const firstTimeout = setTimeout(showNotification, 3000);

    // Then show every 15 seconds
    const interval = setInterval(() => {
      showNotification();
    }, 15000);

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, []);

  const notification = notifications[currentNotification];
  const Icon = notification.icon;

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 transform transition-all duration-500 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div className="bg-white border border-border rounded-lg shadow-warm p-4 max-w-sm animate-slide-in-right">
        <div className="flex items-start space-x-3">
          <div className={`p-2 rounded-full bg-gradient-to-br from-background to-muted ${notification.color}`}>
            <Icon className="h-4 w-4" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground">
              <span className="font-semibold text-primary">{notification.name}</span>{" "}
              {notification.action}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {notification.impact}
            </p>
            <div className="flex items-center mt-2 text-xs text-muted-foreground">
              <div className="w-2 h-2 bg-impact rounded-full mr-2 animate-pulse"></div>
              Just now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofBanner;