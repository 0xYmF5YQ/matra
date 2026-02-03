import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Search, BarChart, Leaf, DollarSign, Factory, ShieldCheck } from 'lucide-react';

export default function WasteAnalyzer() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const simulateAnalysis = () => {
    setIsAnalyzing(true);
    setResult(null);
    
    setTimeout(() => {
      setIsAnalyzing(false);
      setResult({
        material: "High-Density Polyethylene (HDPE)",
        value: "KES 45,000 - 60,000",
        unit: "per Tonne",
        industries: ["Packaging", "Construction", "Consumer Goods"],
        co2Saved: "1.4 Tons",
        grade: "A+"
      });
    }, 3000);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      <div className="p-8 border-b border-slate-100 bg-slate-50/50">
        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Search className="text-green-600" size={20} />
          AI Waste-to-Profit Analyzer
        </h3>
        <p className="text-slate-500 text-sm">Upload a photo of your byproduct to see its market potential.</p>
      </div>

      <div className="p-8">
        {!result && !isAnalyzing && (
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="border-2 border-dashed border-slate-200 rounded-2xl p-12 flex flex-col items-center justify-center bg-slate-50 hover:bg-white hover:border-green-400 transition-all cursor-pointer group"
            onClick={simulateAnalysis}
          >
            <div className="bg-white p-4 rounded-full shadow-sm group-hover:scale-110 transition-transform">
              <Upload className="text-slate-400 group-hover:text-green-600" size={32} />
            </div>
            <p className="mt-4 font-bold text-slate-700">Click to upload or drag & drop</p>
            <p className="text-xs text-slate-400 mt-1">PNG, JPG up to 10MB</p>
          </motion.div>
        )}

        {/* Scanning Animation */}
        <AnimatePresence>
          {isAnalyzing && (
            <div className="py-12 flex flex-col items-center justify-center relative">
              <motion.div 
                className="w-64 h-48 bg-slate-200 rounded-xl relative overflow-hidden"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
              >
                {/* The Scanning Bar */}
                <motion.div 
                  className="absolute w-full h-1 bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)] z-10"
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent" />
              </motion.div>
              <p className="mt-6 font-bold text-slate-900 animate-pulse">AI Identifying Material Grade...</p>
            </div>
          )}
        </AnimatePresence>

        {/* Result Dashboard */}
        <AnimatePresence>
          {result && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-2xl border border-green-100">
                  <p className="text-xs font-bold text-green-700 uppercase tracking-wider">Estimated Value</p>
                  <p className="text-2xl font-black text-slate-900 flex items-center gap-1">
                    <DollarSign size={20} className="text-green-600" />
                    {result.value}
                  </p>
                  <p className="text-xs text-green-600 font-medium">{result.unit}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
                  <p className="text-xs font-bold text-blue-700 uppercase tracking-wider">Environmental Impact</p>
                  <p className="text-2xl font-black text-slate-900 flex items-center gap-1">
                    <Leaf size={20} className="text-blue-600" />
                    {result.co2Saved}
                  </p>
                  <p className="text-xs text-blue-600 font-medium">CO₂ Emissions Offset</p>
                </div>
              </div>

              <div className="bg-slate-900 text-white p-6 rounded-2xl">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Target Industries</h4>
                <div className="flex flex-wrap gap-2">
                  {result.industries.map((ind) => (
                    <span key={ind} className="bg-white/10 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Factory size={12} /> {ind}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
                  <ShieldCheck size={18} className="text-green-600" />
                  Compliance Grade: {result.grade}
                </div>
                <button className="text-green-600 text-sm font-bold hover:underline">View Full Report</button>
              </div>

              <button 
                onClick={() => setResult(null)}
                className="w-full py-4 rounded-xl bg-slate-100 text-slate-600 font-bold hover:bg-slate-200 transition"
              >
                Analyze Another Material
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}