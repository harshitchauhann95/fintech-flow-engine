import { BookOpen, Clock, ChevronRight } from "lucide-react";
import Image from "next/image";

const POSTS = [
  {
    id: 1,
    title: "Top 5 AI Tools for Indian Investors 2026",
    excerpt: "From automated portfolio rebalancing to real-time sentiment analysis, discover the AI tools reshaping the modern retail investor's strategy.",
    date: "May 12, 2026",
    readTime: "5 min read",
    category: "Investing",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "The Rise of Agentic Coding in Fintech",
    excerpt: "How autonomous AI agents are revolutionizing secure financial software development, reducing deployment times by 40%.",
    date: "May 10, 2026",
    readTime: "8 min read",
    category: "Development",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Navigating Crypto Regulations Post-2025",
    excerpt: "A comprehensive guide to the latest compliance standards for building decentralized applications in the current market.",
    date: "May 05, 2026",
    readTime: "6 min read",
    category: "Regulation",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800",
  }
];

export function ContentEngine() {
  return (
    <section id="blog" className="py-12">
      <div className="flex items-center gap-3 mb-8">
        <BookOpen className="w-8 h-8 text-foreground" />
        <h2 className="text-3xl font-bold">SEO Content Engine</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {POSTS.map((post, index) => (
            <article key={post.id} className={`glass-card overflow-hidden flex flex-col group ${index === 0 ? 'md:col-span-2' : ''}`}>
              <div className={`relative ${index === 0 ? 'h-64' : 'h-48'} w-full overflow-hidden`}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-bold text-white">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <span>{post.date}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className={`font-bold mb-3 group-hover:text-electric-green transition-colors ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <a href="#" className="inline-flex items-center text-sm font-bold text-electric-green hover:underline">
                    Read Article <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </article>
          ))}
          
          {/* Ad In-Feed */}
          <div className="glass-card flex items-center justify-center p-8 border-dashed border-gray-600 bg-charcoal-800/50">
            <span className="text-gray-500 font-mono text-sm tracking-widest">[AD-IN-FEED]</span>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-1/4 space-y-6">
          <div className="glass-card p-6 sticky top-28">
            <h3 className="font-bold text-lg mb-4 text-white">Trending Now</h3>
            <ul className="space-y-4">
              <li className="pb-4 border-b border-gray-800">
                <a href="#" className="text-sm font-semibold hover:text-electric-blue transition-colors line-clamp-2">
                  10 Must-Have VS Code Extensions for Smart Contracts
                </a>
              </li>
              <li className="pb-4 border-b border-gray-800">
                <a href="#" className="text-sm font-semibold hover:text-electric-blue transition-colors line-clamp-2">
                  Why Rust is the Future of High-Frequency Trading Systems
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-semibold hover:text-electric-blue transition-colors line-clamp-2">
                  The Ethics of AI-Driven Wealth Management
                </a>
              </li>
            </ul>
            
            <div className="mt-8 h-64 border border-dashed border-gray-700 bg-charcoal-800/30 flex items-center justify-center text-gray-500 rounded text-sm font-mono text-center">
              [AD-SIDEBAR]<br/>Sticky Ad Slot
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
