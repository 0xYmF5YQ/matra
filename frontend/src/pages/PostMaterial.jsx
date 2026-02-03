import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WasteAnalyzer from '../components/WasteAnalyzer'; // Import it

export default function PostMaterial() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="max-w-6xl mx-auto py-20 px-6 grid lg:grid-cols-2 gap-12">
        {/* Left Side: Information */}
        <div className="space-y-6">
          <h1 className="text-5xl font-black text-slate-900 leading-tight">
            List Your <span className="text-green-600">Resources.</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Not sure if your waste is valuable? Use our AI analyzer to get a real-time market estimation and target buyers instantly.
          </p>
          <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
             {/* We will build the Actual Form here later */}
             <p className="font-bold text-slate-400 uppercase tracking-widest text-xs mb-4 underline">Listing Details</p>
             <div className="space-y-4">
               <div className="h-10 w-full bg-slate-100 rounded-lg" />
               <div className="h-10 w-full bg-slate-100 rounded-lg" />
               <div className="h-32 w-full bg-slate-100 rounded-lg" />
             </div>
          </div>
        </div>

        {/* Right Side: The Analyzer */}
        <div className="relative">
          <WasteAnalyzer />
        </div>
      </main>
      <Footer />
    </div>
  );
}