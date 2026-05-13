"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, AlertTriangle, ShieldCheck, ArrowRight, TrendingUp } from "lucide-react";

export function Calculator() {
  const [jobTitle, setJobTitle] = useState("");
  const [result, setResult] = useState<{ score: number; risk: string; steps: string[] } | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateRisk = (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobTitle) return;
    
    setIsCalculating(true);

    // Simulate API call and calculation delay
    setTimeout(() => {
      const title = jobTitle.toLowerCase();
      let score = 45;
      
      if (title.includes("writer") || title.includes("data entry") || title.includes("support")) score = 88;
      if (title.includes("engineer") || title.includes("developer") || title.includes("programmer")) score = 25;
      if (title.includes("manager") || title.includes("director") || title.includes("executive")) score = 35;
      if (title.includes("analyst") || title.includes("accountant")) score = 65;

      let risk = "Moderate";
      if (score > 70) risk = "High";
      if (score <= 35) risk = "Low";

      setResult({
        score,
        risk,
        steps: [
          "Master specialized AI agents (e.g., GitHub Copilot, Advanced Data Analysis).",
          "Pivot towards strategic decision-making and cross-functional leadership.",
          "Develop 'Human-in-the-Loop' workflows to review and validate AI outputs."
        ]
      });
      setIsCalculating(false);
    }, 1200);
  };

  return (
    <section id="ai-risk-calculator" className="w-full relative py-10">
      <div className="glass-card p-8 md:p-12 relative overflow-hidden bg-charcoal-900/80 border border-white/10 backdrop-blur-xl rounded-3xl shadow-glass">
        {/* Glow Effects */}
        <div className="absolute -right-32 -top-32 w-96 h-96 bg-electric-blue/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-electric-green/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="flex items-center gap-4 mb-6 relative z-10">
          <div className="p-3 bg-electric-blue/10 rounded-2xl border border-electric-blue/20">
            <Bot className="w-8 h-8 text-electric-blue" />
          </div>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-white">AI-Impact Calculator</h2>
            <p className="text-gray-400 mt-1">2026 Career Risk Assessment Tool</p>
          </div>
        </div>

        <form onSubmit={calculateRisk} className="flex flex-col sm:flex-row gap-4 mb-8 relative z-10">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Enter your job title (e.g., Financial Analyst)"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="w-full bg-black/40 border border-gray-700 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-all"
            />
          </div>
          <button
            type="submit"
            disabled={isCalculating}
            className="bg-electric-blue text-charcoal-900 font-bold px-8 py-4 rounded-xl hover:shadow-[0_0_20px_rgba(0,184,255,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isCalculating ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-charcoal-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analyzing...
              </span>
            ) : (
              <>Calculate Risk <ArrowRight className="w-5 h-5" /></>
            )}
          </button>
        </form>

        <AnimatePresence>
          {result && !isCalculating && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8 pt-8 border-t border-white/5"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                {/* Score Panel */}
                <div className="col-span-1 bg-black/40 rounded-2xl p-8 border border-white/5 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className={`absolute inset-0 opacity-10 bg-gradient-to-b ${result.risk === 'High' ? 'from-red-500' : result.risk === 'Low' ? 'from-electric-green' : 'from-yellow-500'} to-transparent`} />
                  <span className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-4">Automation Risk</span>
                  <div className="text-7xl font-black text-white mb-2 tracking-tighter">
                    {result.score}<span className="text-4xl text-gray-500">%</span>
                  </div>
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm ${
                    result.risk === 'High' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 
                    result.risk === 'Low' ? 'bg-electric-green/20 text-electric-green border border-electric-green/30' : 
                    'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {result.risk === 'High' ? <AlertTriangle className="w-4 h-4" /> : <ShieldCheck className="w-4 h-4" />}
                    {result.risk} Exposure
                  </div>
                </div>
                
                {/* Action Plan */}
                <div className="col-span-1 lg:col-span-2">
                  <div className="flex items-center gap-3 mb-6">
                    <TrendingUp className="w-6 h-6 text-electric-blue" />
                    <h3 className="text-xl font-bold text-white">Recommended Pivot Strategy</h3>
                  </div>
                  <div className="space-y-4">
                    {result.steps.map((step, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        key={idx} 
                        className="flex gap-4 items-start bg-white/5 p-4 rounded-xl border border-white/5 hover:border-electric-blue/30 transition-colors"
                      >
                        <div className="w-8 h-8 shrink-0 rounded-lg bg-electric-blue/20 text-electric-blue flex items-center justify-center font-black text-sm border border-electric-blue/20">
                          {idx + 1}
                        </div>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base pt-1">
                          {step}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
