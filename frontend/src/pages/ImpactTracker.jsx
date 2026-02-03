import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Leaf, Droplets, Wind, TrendingUp } from 'lucide-react';

export default function ImpactTracker() {
  const stats = [
    { label: "Carbon Offset", value: "12.4 Tons", icon: Wind, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Waste Diverted", value: "45.2 Tons", icon: Leaf, color: "text-green-500", bg: "bg-green-50" },
    { label: "Water Saved", value: "1.2M Liters", icon: Droplets, color: "text-cyan-500", bg: "bg-cyan-50" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="max-w-7xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-black text-slate-900 mb-8">Sustainability Impact</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <div className={`${s.bg} ${s.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-6`}>
                <s.icon size={24} />
              </div>
              <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">{s.label}</p>
              <h2 className="text-3xl font-black text-slate-900 mt-1">{s.value}</h2>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-3xl p-10 text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">You've reached 'Gold' Tier!</h2>
              <p className="text-slate-400">Your business is in the top 5% of sustainable companies in Kenya.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-green-500">842</div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Impact Points</p>
            </div>
          </div>
          {/* Background decoration */}
          <TrendingUp className="absolute -bottom-10 -right-10 text-white/5 w-64 h-64" />
        </div>
      </main>
      <Footer />
    </div>
  );
}