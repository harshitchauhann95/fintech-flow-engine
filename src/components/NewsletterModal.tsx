"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Zap } from "lucide-react";

export function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Show modal after 5 seconds
    const timer = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="glass-card w-full max-w-md relative overflow-hidden bg-charcoal-900 border-electric-blue/30"
          >
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-electric-blue/20 blur-[60px] pointer-events-none" />
            
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 relative z-10">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-electric-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-electric-green" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">You&apos;re In.</h3>
                  <p className="text-gray-400">Welcome to the future of wealth building.</p>
                </motion.div>
              ) : (
                <>
                  <div className="flex justify-center mb-6">
                    <div className="w-12 h-12 rounded bg-electric-blue/20 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-electric-blue" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-3">Unlock Premium Insights</h3>
                  <p className="text-gray-400 text-center mb-6 text-sm">
                    Join 50,000+ professionals receiving daily AI prompts and market analysis.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-all"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-electric-blue text-charcoal-900 font-bold py-3 rounded-lg hover:shadow-[0_0_15px_rgba(0,184,255,0.4)] transition-all"
                    >
                      Subscribe Now
                    </button>
                    <p className="text-xs text-center text-gray-500 mt-4">
                      By subscribing, you agree to our Terms & Privacy Policy.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
