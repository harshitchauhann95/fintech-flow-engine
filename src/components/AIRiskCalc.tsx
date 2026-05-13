"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, AlertTriangle, ShieldCheck, ArrowRight } from "lucide-react";

export function AIRiskCalc() {
  const [jobTitle, setJobTitle] = useState("");
  const [result, setResult] = useState<{ score: number; risk: string; steps: string[] } | null>(null);

  const calculateRisk = (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobTitle) return;

    // Mock calculation
    const title = jobTitle.toLowerCase();
    let score = 50;
    if (title.includes("writer") || title.includes("data entry")) score = 85;
    if (title.includes("engineer") || title.includes("developer")) score = 30;
    if (title.includes("manager") || title.includes("director")) score = 40;

    let risk = "Moderate";
    if (score > 70) risk = "High";
    if (score < 40) risk = "Low";

    setResult({
      score,
      risk,
      steps: [
        "Learn prompt engineering to automate your routine tasks.",
        "Focus on high-level strategy and cross-functional communication.",
        "Master AI tools specific to your industry (e.g., Copilot, Midjourney)."
      ]
    });
  };

  return (
    <section id="ai-risk" className="py-12">
      <div className="glass-card p-8 md:p-12 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-electric-blue/20 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <Bot className="w-8 h-8 text-electric-blue" />
          <h2 className="text-3xl font-bold">AI Career Risk Calculator</h2>
        </div>
        
        <p className="text-gray-400 mb-8 max-w-2xl relative z-10">
          Find out how vulnerable your job is to AI automation in 2026 and get actionable steps to stay ahead of the curve.
        </p>

        <form onSubmit={calculateRisk} className="flex flex-col sm:flex-row gap-4 mb-8 relative z-10">
          <input
            type="text"
            placeholder="e.g. Financial Analyst"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="flex-1 bg-charcoal-900/50 border border-gray-700 rounded-lg px-6 py-4 text-foreground focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-all"
          />
          <button
            type="submit"
            className="bg-electric-blue text-charcoal-900 font-bold px-8 py-4 rounded-lg hover:shadow-[0_0_15px_rgba(0,184,255,0.4)] transition-all flex items-center justify-center gap-2"
          >
            Calculate Risk <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8 border-t border-gray-800 pt-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-1 glass-card p-6 border-electric-blue/30 text-center flex flex-col items-center justify-center">
                  <span className="text-gray-400 text-sm uppercase tracking-wider mb-2">AI-Impact Score</span>
                  <div className="text-5xl font-bold text-electric-blue mb-2">{result.score}%</div>
                  <div className={`flex items-center gap-2 font-semibold ${result.risk === 'High' ? 'text-red-500' : result.risk === 'Low' ? 'text-electric-green' : 'text-yellow-500'}`}>
                    {result.risk === 'High' ? <AlertTriangle className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
                    {result.risk} Risk
                  </div>
                </div>
                
                <div className="col-span-1 md:col-span-2 glass-card p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Upskilling Protocol</h3>
                  <ul className="space-y-4 text-gray-300">
                    {result.steps.map((step, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-electric-blue font-bold">0{idx + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
