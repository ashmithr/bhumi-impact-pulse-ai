import Navbar from "@/components/Navbar";
import SocialProofBanner from "@/components/SocialProofBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, User } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How AI is Revolutionizing NGO Impact Measurement",
      excerpt: "Discover how artificial intelligence helps us track and optimize our social impact in real-time, ensuring every donation creates maximum change.",
      author: "Priya Sharma",
      date: "December 15, 2024",
      image: "/images/ai-impact.jpg",
      category: "Technology"
    },
    {
      id: 2,
      title: "Success Story: From Street Child to Software Engineer",
      excerpt: "Meet Rahul, whose journey from the streets of Mumbai to becoming a successful software engineer showcases the transformative power of education.",
      author: "Amit Patel",
      date: "December 12, 2024",
      image: "/images/success-story.jpg",
      category: "Success Stories"
    },
    {
      id: 3,
      title: "The Psychology Behind Effective Giving",
      excerpt: "Understanding behavioral psychology helps us create more meaningful connections between donors and beneficiaries, increasing long-term engagement.",
      author: "Dr. Meera Krishnan",
      date: "December 10, 2024",
      image: "/images/psychology.jpg",
      category: "Research"
    },
    {
      id: 4,
      title: "Building Sustainable Communities Through Education",
      excerpt: "Our holistic approach to education doesn't just teach reading and writing - it builds entire communities and creates lasting social change.",
      author: "Vikash Singh",
      date: "December 8, 2024",
      image: "/images/sustainable-education.jpg",
      category: "Impact"
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      <Navbar />
      <SocialProofBanner />

      <main className="container mx-auto px-4 py-12">
        {/* Hero */}
        <section className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-serif font-bold mb-4">
            Stories That Inspire
          </h1>
          <p className="text-lg text-slate-600">
            Explore how compassion and innovation are changing lives every day. Real stories from real people creating real impact.
          </p>
        </section>

        {/* Featured Article */}
        <section className="grid md:grid-cols-2 gap-8 mb-16 items-center">
          <div className="aspect-video overflow-hidden rounded-lg shadow-md">
            <img src={blogPosts[0].image} alt={blogPosts[0].title} className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">Featured</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">{blogPosts[0].title}</h2>
            <p className="text-slate-700 mb-4">{blogPosts[0].excerpt}</p>
            <div className="text-sm text-slate-500 flex space-x-6">
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> {blogPosts[0].author}</span>
              <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" /> {blogPosts[0].date}</span>
            </div>
          </div>
        </section>

        {/* Other Blog Cards */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="overflow-hidden transition-shadow hover:shadow-xl">
              <CardHeader className="p-0 h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </CardHeader>
              <CardContent className="p-4">
                <span className="text-xs uppercase font-medium text-sky-600">{post.category}</span>
                <CardTitle className="text-lg font-semibold mt-2 mb-2 hover:text-sky-700 transition-colors">
                  {post.title}
                </CardTitle>
                <p className="text-slate-600 text-sm mb-3 line-clamp-3">{post.excerpt}</p>
                <div className="text-xs text-slate-500 flex justify-between">
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                  <span className="flex items-center gap-1"><CalendarDays className="w-3 h-3" /> {post.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Newsletter Signup */}
      <section className="mt-20 bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-12 text-center shadow-md">
  <h3 className="text-3xl font-bold mb-4 text-blue-900">Subscribe to Impact Updates</h3>
  <p className="mb-6 text-blue-700 text-base">
    Weekly insights, success stories, and opportunities — directly in your inbox.
  </p>
  <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
    <input 
      type="email" 
      placeholder="Your email address" 
      className="px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
    />
    <button className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors">
      Get Updates
    </button>
  </form>
</section>
      </main>
    </div>
  );
};

export default Blog;
