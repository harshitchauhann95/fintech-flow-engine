"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Activity, AlertCircle, RefreshCw } from "lucide-react";
import { fetchMarketData, MarketData } from "@/lib/marketData";

const SYMBOLS = ["RELIANCE.BSE", "TCS.NSE", "HDFCBANK.NSE", "BTC-USD", "ETH-USD"];

export function MarketPulse() {
  const [data, setData] = useState<MarketData[]>([]);
  const [loading, setLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const loadData = async () => {
    try {
      const result = await fetchMarketData(SYMBOLS);
      setData(result);
      setIsPaused(false);
      setLastUpdated(new Date());
    } catch (error: any) {
      if (error.message === "API_LIMIT_REACHED") {
        setIsPaused(true);
      } else {
        // Fallback to previous data or handle standard error
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();

    // Refresher: Update every 60 seconds without reloading
    const interval = setInterval(() => {
      if (!isPaused) {
        loadData();
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Format currency
  const formatPrice = (price: number, symbol: string) => {
    if (symbol.includes("USD") || symbol.includes("BTC") || symbol.includes("ETH")) {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
    }
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);
  };

  return (
    <section id="market" className="py-12 relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00ff88]/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-[#00ff88]" />
          <h2 className="text-3xl font-bold text-white tracking-tight">Live Market Pulse</h2>
        </div>
        
        {/* Status Indicator */}
        <div className="flex items-center gap-2 text-sm">
          {isPaused ? (
            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 font-bold">
              <AlertCircle className="w-4 h-4" />
              Market Data Paused
            </span>
          ) : (
            <span className="flex items-center gap-2 text-gray-400">
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-[#00ff88]' : ''}`} />
              {lastUpdated ? `Updated ${lastUpdated.toLocaleTimeString()}` : 'Updating...'}
            </span>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {loading && data.length === 0 ? (
          // Skeletons
          Array.from({ length: 5 }).map((_, idx) => (
            <div key={idx} className="glass-card p-6 h-32 animate-pulse bg-white/5 border border-white/5 rounded-2xl" />
          ))
        ) : (
          data.map((item, index) => (
            <motion.div
              key={item.symbol}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col justify-between hover:border-[#00ff88]/30 transition-colors bg-[#12141a]/80 border border-white/5 rounded-2xl shadow-glass relative overflow-hidden"
            >
              {/* Subtle background glow based on performance */}
              <div className={`absolute -right-10 -bottom-10 w-32 h-32 rounded-full blur-[50px] opacity-20 pointer-events-none ${item.isUp ? 'bg-[#00ff88]' : 'bg-red-500'}`} />
              
              <h3 className="text-gray-400 text-sm font-bold tracking-wide">{item.name}</h3>
              <div className="mt-4 flex items-end justify-between relative z-10">
                <span className="text-xl font-black text-white tracking-tight">
                  {formatPrice(item.price, item.symbol)}
                </span>
                <div className={`flex items-center px-2 py-1 rounded-md text-xs font-black ${item.isUp ? 'bg-[#00ff88]/10 text-[#00ff88]' : 'bg-red-500/10 text-red-400'}`}>
                  {item.isUp ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                  {item.isUp ? '+' : ''}{item.changePercent.toFixed(2)}%
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
}
