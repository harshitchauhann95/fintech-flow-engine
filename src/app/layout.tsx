import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FinTech-Flow | Advanced Cyber-Wealth Utility Hub",
  description: "The premier utility hub for modern investors and tech professionals. Real-time market pulse, AI career risks, and premium prompt vaults targeting 2026 market trends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-[#0b0c10] text-[#f8f9fa] antialiased selection:bg-[#00ff88] selection:text-[#0b0c10] flex flex-col relative overflow-x-hidden`}>
        {/* Navigation Bar */}
        <header className="fixed top-0 w-full z-50 bg-[#0b0c10]/80 backdrop-blur-xl border-b border-white/5">
          <div className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00ff88] to-[#00b8ff] shadow-[0_0_15px_rgba(0,255,136,0.3)] flex items-center justify-center font-black text-[#0b0c10] text-xl">
                FF
              </div>
              <span className="text-2xl font-black tracking-tight">FinTech<span className="text-[#00ff88]">Flow</span></span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-400">
              <a href="#market" className="hover:text-[#00ff88] transition-colors">Market Pulse</a>
              <a href="#ai-risk-calculator" className="hover:text-[#00b8ff] transition-colors">AI Risk Calc</a>
              <a href="#prompts" className="hover:text-[#9d4edd] transition-colors">Prompt Vault</a>
              <a href="#blog" className="hover:text-white transition-colors">Content Engine</a>
            </nav>
            <button className="px-6 py-2.5 rounded-full bg-[#00ff88] text-[#0b0c10] font-black text-sm hover:shadow-[0_0_15px_rgba(0,255,136,0.4)] transition-all transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </header>

        {/* Main Application Layout */}
        <div className="flex-1 container mx-auto px-6 lg:px-12 pt-28 pb-20 flex flex-col xl:flex-row gap-8 lg:gap-12">
          {/* Main Content Area */}
          <main className="flex-1 flex flex-col min-w-0">
            {children}
          </main>

          {/* Global Sidebar with Ad Placements */}
          <aside className="w-full xl:w-80 shrink-0 space-y-8 xl:sticky xl:top-28 xl:h-[calc(100vh-8rem)] xl:overflow-y-auto no-scrollbar pb-8">
            {/* Global Sidebar Ad Container */}
            <div className="ad-container w-full h-[600px] border border-dashed border-gray-700 bg-[#12141a]/50 rounded-2xl flex flex-col items-center justify-center text-gray-500 overflow-hidden relative group">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#00ff88] mb-2">[AD-SLOT]</span>
              <span className="text-sm font-bold">Global Sidebar (300x600)</span>
              <p className="text-xs text-gray-600 mt-2 text-center px-4">Inject Google AdSense script here</p>
            </div>
          </aside>
        </div>
      </body>
    </html>
  );
}
