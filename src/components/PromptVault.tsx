"use client";

import { useState } from "react";
import { Search, Terminal, Copy, Check } from "lucide-react";

const PROMPTS = [
  { id: 1, title: "Financial Earnings Summary", category: "Financial Analysts", content: "Act as an expert financial analyst. Analyze the provided Q3 earnings report and extract the top 3 bullish and bearish points. Format as a professional executive summary." },
  { id: 2, title: "Code Refactoring Expert", category: "Software Engineers", content: "Review the following block of React code. Identify performance bottlenecks, suggest optimizations using useMemo/useCallback, and rewrite the component using clean code principles." },
  { id: 3, title: "DCF Valuation Model", category: "Financial Analysts", content: "Build a discounted cash flow (DCF) model template in markdown format with placeholders for assumptions (growth rate, WACC, terminal value) based on the target company's 10-K." },
  { id: 4, title: "API Endpoint Security Check", category: "Software Engineers", content: "Act as a DevSecOps engineer. Review this Express.js API endpoint for common OWASP Top 10 vulnerabilities. Provide a patched version of the code." },
  { id: 5, title: "Market Sentiment Analysis", category: "Financial Analysts", content: "Analyze the provided text from recent central bank minutes. Determine the overall sentiment (hawkish/dovish) and extract key quotes supporting your conclusion." },
  { id: 6, title: "Regex Generator", category: "Software Engineers", content: "Create a regular expression to match standard Indian GST numbers. Explain each part of the regex pattern clearly." },
];

export function PromptVault() {
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const filteredPrompts = PROMPTS.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const copyToClipboard = (id: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="prompts" className="py-12">
      <div className="flex items-center gap-3 mb-8">
        <Terminal className="w-8 h-8 text-electric-purple" />
        <h2 className="text-3xl font-bold">The Prompt Vault</h2>
      </div>

      <div className="relative mb-10 max-w-2xl">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search for prompts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-charcoal-800/80 border border-gray-700 rounded-full pl-12 pr-6 py-4 text-foreground focus:outline-none focus:border-electric-purple focus:ring-1 focus:ring-electric-purple transition-all"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPrompts.map((prompt) => (
          <div key={prompt.id} className="glass-card p-6 flex flex-col hover:shadow-[0_0_20px_rgba(157,78,221,0.15)] transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-electric-purple/10 text-electric-purple">
                {prompt.category}
              </span>
              <button 
                onClick={() => copyToClipboard(prompt.id, prompt.content)}
                className="text-gray-400 hover:text-white transition-colors"
                title="Copy Prompt"
              >
                {copiedId === prompt.id ? <Check className="w-5 h-5 text-electric-green" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
            <h3 className="text-lg font-bold mb-3">{prompt.title}</h3>
            <div className="bg-charcoal-900/50 p-4 rounded-lg flex-1 relative group overflow-hidden">
              <p className="text-sm text-gray-300 font-mono leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                &quot;{prompt.content}&quot;
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
