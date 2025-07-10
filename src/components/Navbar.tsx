import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-hero p-2 rounded-full group-hover:scale-110 transition-transform">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Bhumi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/donate" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/donate') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Donate
            </Link>
            <Link 
              to="/blog" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/blog') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Blog
            </Link>
            <Button variant="volunteer" size="sm">
              Volunteer
            </Button>
            <Button variant="donate" size="sm">
              Donate Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`font-medium transition-colors hover:text-primary ${
                  isActive('/') ? 'text-primary' : 'text-foreground'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/donate" 
                className={`font-medium transition-colors hover:text-primary ${
                  isActive('/donate') ? 'text-primary' : 'text-foreground'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Donate
              </Link>
              <Link 
                to="/blog" 
                className={`font-medium transition-colors hover:text-primary ${
                  isActive('/blog') ? 'text-primary' : 'text-foreground'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="volunteer" size="sm">
                  Volunteer
                </Button>
                <Button variant="donate" size="sm">
                  Donate Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;