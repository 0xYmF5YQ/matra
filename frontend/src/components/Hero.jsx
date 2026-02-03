import React from 'react';
import { ArrowRight, BarChart3, Recycle, ShieldCheck, MapPin } from 'lucide-react';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-24 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-24 right-10 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-8 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            AI-POWERED CIRCULAR ECONOMY
          </div>
          
          <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
            Turn Your <span className="text-green-600">Industrial Waste</span> Into Revenue.
          </h1>
          
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            The world's first smart exchange for leftover materials. Connect with industries, 
            track real-time waste heatmaps, and automate your environmental compliance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-lg font-bold px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-green-200">
              Start Selling Waste <ArrowRight className="w-5 h-5" />
            </button>
            <Link 
                to="/materials" 
               className="flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-700 text-lg font-bold px-8 py-4 rounded-xl hover:bg-slate-50 transition-all">
              Browse Materials 
             </Link>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
            <div>
              <p className="text-3xl font-bold text-slate-900">$14M+</p>
              <p className="text-sm text-slate-500">Waste Traded</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">12k</p>
              <p className="text-sm text-slate-500">Active Factories</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">400t</p>
              <p className="text-sm text-slate-500">CO₂ Saved</p>
            </div>
          </div>
        </div>

        {/* Visual Element: Mockup of the "Heatmap" or AI Analyzer */}
        <div className="relative">
          <div className="bg-white p-4 rounded-3xl shadow-2xl border border-slate-100 relative z-20">
            <div className="bg-slate-900 rounded-2xl p-6 h-[400px] relative overflow-hidden">
              {/* Fake Map Grid */}
              <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
              
              {/* Floating UI Elements */}
              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-center text-white">
                  <h3 className="font-bold">Live Waste Heatmap</h3>
                  <MapPin className="text-green-400 w-5 h-5" />
                </div>
                
                {/* Mock Card */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex gap-4 items-center animate-pulse">
                  <div className="bg-orange-500 h-10 w-10 rounded-lg flex items-center justify-center">
                    <BarChart3 className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300">New Match Found</p>
                    <p className="text-sm font-bold text-white">Sawdust → Energy Briquettes</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex gap-4 items-center translate-x-8">
                  <div className="bg-blue-500 h-10 w-10 rounded-lg flex items-center justify-center">
                    <ShieldCheck className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300">Compliance Verified</p>
                    <p className="text-sm font-bold text-white">EU Bio-Waste Cert #4421</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative Ring */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-500 rounded-full -z-10 opacity-20"></div>
        </div>
      </main>
    </div>
  );
};

export default Hero;