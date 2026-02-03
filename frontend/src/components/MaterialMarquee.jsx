// src/components/MaterialMarquee.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Pickaxe, Droplets, Leaf, Construction, 
  Box, Refrigerator, Zap, FlaskConical 
} from 'lucide-react';

const materialTypes = [
  { name: "Scrap Metal", icon: <Pickaxe />, color: "bg-blue-50 text-blue-600" },
  { name: "Used Oil", icon: <Droplets />, color: "bg-amber-50 text-amber-600" },
  { name: "Organic Waste", icon: <Leaf />, color: "bg-green-50 text-green-600" },
  { name: "Aggregates", icon: <Construction />, color: "bg-orange-50 text-orange-600" },
  { name: "Cardboard", icon: <Box />, color: "bg-slate-50 text-slate-600" },
  { name: "E-Waste", icon: <Refrigerator />, color: "bg-purple-50 text-purple-600" },
  { name: "Plastic Resins", icon: <FlaskConical />, color: "bg-cyan-50 text-cyan-600" },
  { name: "Bio-Fuel", icon: <Zap />, color: "bg-yellow-50 text-yellow-600" },
];

export default function MaterialMarquee() {
  const loopItems = [...materialTypes, ...materialTypes];

  return (
    <section className="py-12 bg-white overflow-hidden border-y border-slate-100 relative group/marquee">
      {/* Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          ease: "linear", 
          duration: 30, // Slower speed for better readability
          repeat: Infinity 
        }}
        // THIS IS THE PAUSE FEATURE
        whileHover={{ animationPlayState: "paused" }}
      >
        {loopItems.map((item, idx) => (
          <div 
            key={idx} 
            className="flex items-center gap-6 mx-10 group cursor-pointer"
          >
            <div className={`p-5 rounded-[1.5rem] ${item.color} group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:-rotate-6`}>
              {React.cloneElement(item.icon, { size: 32, strokeWidth: 2.5 })}
            </div>
            <span className="text-2xl font-black text-slate-800 uppercase tracking-tighter group-hover:text-green-600 transition-colors">
              {item.name}
            </span>
            <div className="ml-10 w-3 h-3 rounded-full bg-slate-100 group-hover:bg-green-500 transition-colors" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}