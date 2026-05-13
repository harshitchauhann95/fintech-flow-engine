"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";

const MOCK_DATA = [
  { name: "Reliance Ind.", price: "₹2,954.20", change: "+1.2%", isUp: true },
  { name: "TCS", price: "₹4,120.50", change: "-0.5%", isUp: false },
  { name: "HDFC Bank", price: "₹1,450.80", change: "+0.8%", isUp: true },
  { name: "Bitcoin (BTC)", price: "$64,230.00", change: "+4.5%", isUp: true },
  { name: "Ethereum (ETH)", price: "$3,450.20", change: "+2.1%", isUp: true },
];

export function MarketPulse() {
  return (
    <section id="market" className="py-12 relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-green/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="flex items-center gap-3 mb-8">
        <Activity className="w-8 h-8 text-electric-green" />
        <h2 className="text-3xl font-bold text-glow">Live Market Pulse</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {MOCK_DATA.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6 flex flex-col justify-between hover:border-electric-green/30 transition-colors"
          >
            <h3 className="text-gray-400 text-sm font-medium">{item.name}</h3>
            <div className="mt-4 flex items-end justify-between">
              <span className="text-xl font-bold text-foreground">{item.price}</span>
              <div className={`flex items-center text-sm font-bold ${item.isUp ? 'text-electric-green' : 'text-red-500'}`}>
                {item.isUp ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                {item.change}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
