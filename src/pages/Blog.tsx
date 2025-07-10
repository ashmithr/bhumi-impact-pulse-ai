import Navbar from "@/components/Navbar";
import SocialProofBanner from "@/components/SocialProofBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, User, Heart } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How AI is Revolutionizing NGO Impact Measurement",
      excerpt: "Discover how artificial intelligence helps us track and optimize our social impact in real-time, ensuring every donation creates maximum change.",
      author: "Priya Sharma",
      date: "December 15, 2024",
      image: "/api/placeholder/400/200",
      category: "Technology"
    },
    {
      id: 2,
      title: "Success Story: From Street Child to Software Engineer",
      excerpt: "Meet Rahul, whose journey from the streets of Mumbai to becoming a successful software engineer showcases the transformative power of education.",
      author: "Amit Patel",
      date: "December 12, 2024",
      image: "/api/placeholder/400/200",
      category: "Success Stories"
    },
    {
      id: 3,
      title: "The Psychology Behind Effective Giving",
      excerpt: "Understanding behavioral psychology helps us create more meaningful connections between donors and beneficiaries, increasing long-term engagement.",
      author: "Dr. Meera Krishnan",
      date: "December 10, 2024",
      image: "/api/placeholder/400/200",
      category: "Research"
    },
    {
      id: 4,
      title: "Building Sustainable Communities Through Education",
      excerpt: "Our holistic approach to education doesn't just teach reading and writing - it builds entire communities and creates lasting social change.",
      author: "Vikash Singh",
      date: "December 8, 2024",
      image: "/api/placeholder/400/200",
      category: "Impact"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SocialProofBanner />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Stories of Change
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories, real impact, real change. Discover how technology and compassion are transforming lives across India.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Card className="overflow-hidden bg-gradient-impact text-white">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 flex flex-col justify-center">
                <div className="text-sm opacity-80 mb-2">FEATURED STORY</div>
                <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
                <p className="mb-6 opacity-90">{blogPosts[0].excerpt}</p>
                <div className="flex items-center space-x-4 text-sm opacity-80">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CalendarDays className="h-4 w-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                </div>
              </div>
              <div className="h-64 md:h-auto bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Heart className="h-24 w-24 text-white/50" />
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="group hover:shadow-warm transition-all duration-300 hover:scale-105">
              <CardHeader className="p-0">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-t-lg flex items-center justify-center">
                  <Heart className="h-12 w-12 text-primary/50" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-xs text-primary font-semibold mb-2 uppercase tracking-wide">
                  {post.category}
                </div>
                <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CalendarDays className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-trust text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Connected with Our Impact</h3>
          <p className="mb-6 opacity-90">Get weekly updates on our programs, success stories, and how your contributions are making a difference.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-2 rounded-md text-foreground flex-1"
            />
            <button className="bg-white text-trust px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;