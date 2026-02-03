import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ShieldCheck, BarChart3, Globe, Truck, Building2, ArrowRight } from 'lucide-react';

export default function Enterprise() {
  const features = [
    {
      title: "Bulk Waste Logistics",
      desc: "Custom fleet scheduling for factories and large-scale manufacturing plants.",
      icon: Truck
    },
    {
      title: "Compliance Reporting",
      desc: "Automated generation of NEMA-standard disposal and recycling certificates.",
      icon: ShieldCheck
    },
    {
      title: "Real-time ESG Analytics",
      desc: "Track your scope 3 emission reductions for your annual sustainability report.",
      icon: BarChart3
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-green-500 font-bold tracking-widest uppercase text-sm">Matra for Business</span>
            <h1 className="text-5xl md:text-7xl font-black mt-4 mb-6 leading-tight">
              Circular Economy <br /> 
              <span className="text-slate-400">at Scale.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              We provide the infrastructure for large enterprises to digitize their waste streams, 
              ensuring 100% traceability and maximizing byproduct revenue.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2">
                Request a Demo <ArrowRight size={20} />
              </button>
              <button className="border border-slate-700 hover:bg-slate-800 px-8 py-4 rounded-full font-bold transition-all">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-green-600/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
      </section>

      {/* Enterprise Features */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all"
            >
              <div className="bg-white w-14 h-14 rounded-2xl shadow-sm flex items-center justify-center mb-6 text-green-600">
                <f.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Section / Stats */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-black text-slate-900">500+</div>
            <p className="text-slate-500 font-medium uppercase text-xs tracking-widest mt-2">Factories Joined</p>
          </div>
          <div>
            <div className="text-4xl font-black text-slate-900">12K Tons</div>
            <p className="text-slate-500 font-medium uppercase text-xs tracking-widest mt-2">Monthly Volume</p>
          </div>
          <div>
            <div className="text-4xl font-black text-slate-900">98%</div>
            <p className="text-slate-500 font-medium uppercase text-xs tracking-widest mt-2">Compliance Rate</p>
          </div>
          <div>
            <div className="text-4xl font-black text-slate-900">KES 20M</div>
            <p className="text-slate-500 font-medium uppercase text-xs tracking-widest mt-2">Revenue Generated</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 max-w-4xl mx-auto px-6 text-center">
        <Building2 size={48} className="mx-auto text-slate-300 mb-6" />
        <h2 className="text-3xl font-bold mb-4">Ready to optimize your supply chain?</h2>
        <p className="text-slate-500 mb-10">Our enterprise team will help you set up custom integrations for your waste management system.</p>
        <div className="bg-white border border-slate-200 p-2 rounded-full flex max-w-md mx-auto shadow-lg">
          <input type="email" placeholder="francisbaya00@gmail.com" className="flex-1 px-6 outline-none bg-transparent" />
          <button className="bg-slate-900 text-white px-6 py-3 rounded-full font-bold">Get Started</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}