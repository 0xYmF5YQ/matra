import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, MapPin, Filter, ChevronRight, ChevronLeft, Zap, ShoppingBag } from 'lucide-react';

const categories = ["Construction", "Organic", "Plastic", "Metal", "Textiles", "Chemicals"];
const counties = ["Nairobi", "Mombasa", "Kiambu", "Nakuru", "Kisumu", "Uasin Gishu"];

const products = [
  {
    id: "pet-flakes-001",
    name: "Recycled PET Flakes",
    price: "KES 45,000",
    location: "Mombasa",
    quantity: "1.5 Tons",
    category: "Plastic",
    description: "Industrial grade clear flakes, washed and sorted...",
    urgent: true,
    timeLeft: "4h 20m"
  },
  {
    id: "wood-pallets-002",
    name: "Premium Wood Pallets",
    price: "KES 8,500",
    location: "Ruiru, Kiambu",
    quantity: "50 Units",
    category: "Construction",
    description: "Treated pine wood pallets, standard size 1200x1000mm.",
    urgent: true,
    timeLeft: "2h 15m"
  },
  {
    id: "sawdust-003",
    name: "Dry Pine Sawdust",
    price: "KES 12,000",
    location: "Nairobi",
    quantity: "5 Tons",
    category: "Organic",
    description: "Fine sawdust suitable for briquette production.",
    urgent: false
  },
];

export default function Marketplace() {
  const [activeCounty, setActiveCounty] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const carouselRef = useRef(null);

  // Filter Logic: County + Search Term + Categories
  const filteredProducts = products.filter(product => {
    const matchesCounty = activeCounty === 'All' || product.location.includes(activeCounty);
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    
    return matchesCounty && matchesSearch && matchesCategory;
  });

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      carouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const toggleCategory = (cat) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Search Header Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-20 z-40 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-3.5 text-slate-400" size={18} />
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for sawdust, HDPE, scrap metal..." 
              className="w-full pl-12 pr-4 py-3 bg-slate-100 border-none rounded-2xl focus:ring-2 focus:ring-green-500 transition outline-none"
            />
          </div>
          <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold hover:bg-green-600 transition">
            <Filter size={18} /> Filters
          </button>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* SIDE NAV - REINSTATED CATEGORIES */}
          <aside className="lg:w-64 space-y-8 flex-shrink-0 hidden lg:block">
            <div>
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Counties</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => setActiveCounty('All')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition ${activeCounty === 'All' ? 'bg-green-100 text-green-700' : 'text-slate-500 hover:bg-slate-100'}`}
                >
                  All Kenya
                </button>
                {counties.map(c => (
                  <button key={c} onClick={() => setActiveCounty(c)} className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition ${activeCounty === c ? 'bg-green-100 text-green-700' : 'text-slate-500 hover:bg-slate-100'}`}>{c}</button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="w-4 h-4 rounded border-slate-300 text-green-600 focus:ring-green-500" 
                    />
                    <span className={`text-sm transition ${selectedCategories.includes(cat) ? 'text-green-700 font-bold' : 'text-slate-600 group-hover:text-slate-900'}`}>{cat}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          <div className="flex-1 min-w-0">
            {/* URGENT LISTINGS CAROUSEL */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                  <Zap className="text-amber-500 fill-amber-500" size={20} />
                  Urgent Listings
                </h2>
                <div className="flex gap-2">
                  <button onClick={() => scroll('left')} className="p-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition"><ChevronLeft size={20}/></button>
                  <button onClick={() => scroll('right')} className="p-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition"><ChevronRight size={20}/></button>
                </div>
              </div>

              <div ref={carouselRef} className="flex gap-6 overflow-x-auto no-scrollbar pb-4" style={{ scrollSnapType: 'x mandatory' }}>
                {filteredProducts.filter(p => p.urgent).map((product) => (
                  <motion.div 
                    key={product.id}
                    whileHover={{ y: -5 }}
                    className="min-w-[300px] md:min-w-[350px] bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden flex-shrink-0"
                    style={{ scrollSnapAlign: 'start' }}
                  >
                    <div className="h-40 bg-slate-200 relative">
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter text-red-600">
                        Ends in {product.timeLeft}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-slate-900">{product.name}</h3>
                      <div className="flex items-center gap-2 text-slate-500 text-xs mt-1">
                        <MapPin size={12} /> {product.location}
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase">Best Offer</p>
                          <p className="text-green-600 font-black text-xl">{product.price}</p>
                        </div>
                        <Link to={`/material/${product.id}`} className="bg-green-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-slate-900 transition shadow-md shadow-green-100">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ALL RESOURCES GRID */}
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-6">All Resources</h2>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                <AnimatePresence mode='popLayout'>
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <motion.div 
                        key={product.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white rounded-[2rem] p-5 shadow-sm border border-slate-100 hover:shadow-xl hover:border-green-200 transition-all group"
                      >
                        <div className="h-44 bg-slate-50 rounded-2xl mb-4 overflow-hidden relative">
                           <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md">
                              <ShoppingBag size={14} className="text-slate-400" />
                           </div>
                           <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur text-white text-[10px] px-2 py-1 rounded-md font-bold">
                              {product.quantity} Available
                           </div>
                        </div>
                        <h3 className="font-bold text-slate-900 group-hover:text-green-600 transition">{product.name}</h3>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-1">{product.description}</p>
                        
                        <div className="mt-4 pt-4 border-t border-slate-50 flex flex-col gap-4">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1 text-slate-400">
                              <MapPin size={12} />
                              <span className="text-[10px] font-bold">{product.location}</span>
                            </div>
                            <span className="text-slate-900 font-black">{product.price}</span>
                          </div>
                          {/* VIEW DETAILS ADDED HERE */}
                          <Link 
                            to={`/material/${product.id}`} 
                            className="w-full text-center bg-slate-50 py-3 rounded-xl text-xs font-bold text-slate-900 group-hover:bg-green-600 group-hover:text-white transition-colors"
                          >
                            View Details
                          </Link>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="col-span-full py-20 text-center">
                      <p className="text-slate-400 font-bold">No materials found matching your search.</p>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <style dangerouslySetInnerHTML={{ __html: `.no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }` }} />
    </div>
  );
}