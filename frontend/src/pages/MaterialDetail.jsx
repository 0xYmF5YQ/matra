import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { 
  MapPin, ShieldCheck, FileText, Truck, 
  Calendar, Weight, ChevronRight, MessageCircle, 
  Download, Info 
} from 'lucide-react';

export default function MaterialDetail() {
  const [selectedImg, setSelectedImg] = useState(0);
  
  // Mock Data (In real app, fetch this using the ID from the URL)
  const product = {
    name: "Industrial Grade PET Flakes",
    price: "KES 45,000",
    unit: "per Tonne",
    location: "Mombasa, Port Reitz",
    quantity: "15 Tons Available",
    posted: "2 days ago",
    images: ["https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=800&q=80"],
    docs: [
      { name: "NEMA Waste License", status: "Verified" },
      { name: "Material Safety Data (MSDS)", status: "Available" }
    ],
    logistics: ["Flatbed Truck (10-20T)", "Self Pick-up", "Standard Delivery"]
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* LEFT: IMAGE GALLERY (Sticky) */}
          <div className="space-y-4">
            <motion.div 
              layoutId="main-img"
              className="aspect-square rounded-[2.5rem] bg-slate-100 overflow-hidden border border-slate-100 shadow-2xl"
            >
              <img src={product.images[selectedImg]} alt="Waste Material" className="w-full h-full object-cover" />
            </motion.div>
            <div className="flex gap-4">
              {product.images.map((img, i) => (
                <button 
                  key={i}
                  onClick={() => setSelectedImg(i)}
                  className={`w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all ${selectedImg === i ? 'border-green-500 scale-105' : 'border-transparent'}`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: DETAILS & BUYING OPTIONS */}
          <div className="space-y-8">
            <div className="border-b border-slate-100 pb-6">
              <div className="flex items-center gap-2 text-green-600 font-bold text-sm uppercase tracking-widest mb-2">
                <ShieldCheck size={16} /> Verified Resource
              </div>
              <h1 className="text-4xl font-black text-slate-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 text-slate-500">
                <span className="flex items-center gap-1 text-sm"><MapPin size={14}/> {product.location}</span>
                <span className="flex items-center gap-1 text-sm"><Calendar size={14}/> Posted {product.posted}</span>
              </div>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-slate-900">{product.price}</span>
              <span className="text-slate-500 font-medium">{product.unit}</span>
            </div>

            {/* KEY METRICS GRID */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <Weight className="text-slate-400 mb-2" size={20} />
                <p className="text-xs font-bold text-slate-400 uppercase">Availability</p>
                <p className="font-bold text-slate-900">{product.quantity}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <Truck className="text-slate-400 mb-2" size={20} />
                <p className="text-xs font-bold text-slate-400 uppercase">Logistics</p>
                <p className="font-bold text-slate-900">3 Options Available</p>
              </div>
            </div>

            {/* COMPLIANCE SECTION */}
            <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <FileText className="text-green-400" size={20} /> Compliance Documents
              </h3>
              <div className="space-y-3">
                {product.docs.map((doc, i) => (
                  <div key={i} className="flex items-center justify-between bg-white/10 p-4 rounded-xl">
                    <span className="text-sm font-medium">{doc.name}</span>
                    <button className="flex items-center gap-1 text-xs font-bold text-green-400 hover:text-white transition">
                      <Download size={14} /> Download
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-start gap-2 bg-white/5 p-4 rounded-xl border border-white/10">
                <Info size={16} className="text-slate-400 shrink-0 mt-0.5" />
                <p className="text-[10px] text-slate-400 leading-relaxed">
                  Matra verifies all NEMA licenses via the Integrated Environment Information Management System (ENVIS) to ensure legal transboundary waste movement.
                </p>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-4">
              <button className="flex-1 bg-green-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-green-700 transition shadow-lg shadow-green-100">
                Make an Offer
              </button>
              <button className="w-16 h-16 flex items-center justify-center rounded-2xl border-2 border-slate-200 text-slate-900 hover:border-green-600 hover:text-green-600 transition">
                <MessageCircle size={24} />
              </button>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}