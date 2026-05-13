import { Calculator } from "@/components/Calculator";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="pt-10 pb-8 flex flex-col items-start relative">
        <span className="px-4 py-1.5 rounded-full border border-[#00ff88]/30 bg-[#00ff88]/10 text-[#00ff88] text-xs font-bold mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
          The New Standard for Cyber-Wealth
        </span>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight text-white leading-tight">
          Navigate the Future of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00b8ff]">Finance & AI</span>
        </h1>
        
        <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
          Real-time market intelligence, career impact analysis, and an elite vault of AI prompts for the modern professional.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 rounded-xl bg-[#00ff88] text-[#0b0c10] font-black text-lg hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1">
            Explore Vault <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-lg font-bold text-white flex items-center justify-center">
            Analyze Risk
          </button>
        </div>
      </section>

      {/* In-Feed Ad Slot (Leaderboard) */}
      <div className="ad-container w-full h-32 border border-dashed border-gray-700 bg-[#12141a]/50 rounded-2xl flex flex-col items-center justify-center text-gray-500 overflow-hidden relative group">
        <span className="text-xs font-mono font-bold tracking-widest text-[#00b8ff] mb-1">[AD-SLOT]</span>
        <span className="text-sm font-bold">In-Feed Leaderboard (728x90)</span>
      </div>

      {/* AI Career Risk Calculator */}
      <Calculator />

      {/* Additional content sections like MarketPulse, PromptVault would go here */}
      
    </div>
  );
}
