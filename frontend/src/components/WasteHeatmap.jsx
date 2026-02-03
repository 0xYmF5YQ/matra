import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import { motion } from 'framer-motion';
import { Filter, Zap } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;


const wasteLocations = [
  { id: 1, lat: -1.286389, lng: 36.817223, type: 'Organic', quantity: '800kg', material: 'Coffee Husks (Nairobi)', color: '#22c55e' },
  { id: 2, lat: -4.0435, lng: 39.6682, type: 'Plastic', quantity: '5 Tons', material: 'Ocean Plastic (Mombasa)', color: '#3b82f6' },
  { id: 3, lat: -0.0917, lng: 34.7680, type: 'Metal', quantity: '300kg', material: 'Scrap Steel (Kisumu)', color: '#f59e0b' },
  { id: 4, lat: -1.1000, lng: 37.0167, type: 'Organic', quantity: '1.2 Tons', material: 'Pineapple Waste (Thika)', color: '#22c55e' },
];

export default function WasteHeatmap() {
  const [selectedWaste, setSelectedWaste] = useState(null);

  
  const kenyaCenter = [-1.286389, 36.817223];

  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-8">
          <h2 className="text-3xl font-black text-slate-900 flex items-center gap-2">
            <Zap className="text-green-500 fill-green-500" size={28} />
            Kenya Waste Heatmap
          </h2>
          <p className="text-slate-500">Live industrial byproduct exchange across the 254.</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 h-[600px]">
          {/* Sidebar */}
          <div className="lg:col-span-1 bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
            <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
              <span className="font-bold text-sm uppercase tracking-wider text-slate-500">Regional Feed</span>
              <Filter size={16} className="text-slate-400" />
            </div>
            
            <div className="overflow-y-auto flex-1 p-4 space-y-4">
              {wasteLocations.map((waste) => (
                <motion.div
                  key={waste.id}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedWaste(waste)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    selectedWaste?.id === waste.id ? 'border-green-500 bg-green-50' : 'border-slate-100 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: waste.color }} />
                    <span className="text-xs font-bold uppercase tracking-tighter text-slate-400">{waste.type}</span>
                  </div>
                  <h4 className="font-bold text-slate-800">{waste.material}</h4>
                  <p className="text-sm text-slate-500">{waste.quantity} available</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map Area */}
          <div className="lg:col-span-3 rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative">
            <MapContainer 
              center={kenyaCenter} 
              zoom={7} 
              style={{ height: '100%', width: '100%' }}
              scrollWheelZoom={false}
            >
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                attribution='&copy; MATRA Kenya'
              />
              
              {wasteLocations.map((waste) => (
                <React.Fragment key={waste.id}>
                  <Marker position={[waste.lat, waste.lng]}>
                    <Popup>
                      <div className="p-2 min-w-[150px]">
                        <h3 className="font-bold text-slate-900">{waste.material}</h3>
                        <p className="text-xs text-slate-500 mb-2">Location: {waste.lat}, {waste.lng}</p>
                        <p className="text-sm font-semibold text-green-600 mb-3">{waste.quantity} Available</p>
                        <button className="w-full bg-slate-900 text-white text-[10px] py-2 rounded-lg font-bold uppercase hover:bg-green-600 transition">
                          Contact Logistics
                        </button>
                      </div>
                    </Popup>
                  </Marker>
                  <Circle 
                    center={[waste.lat, waste.lng]}
                    radius={15000} 
                    pathOptions={{ color: waste.color, fillColor: waste.color, fillOpacity: 0.15 }}
                  />
                </React.Fragment>
              ))}
            </MapContainer>

            {/* Legend */}
            <div className="absolute bottom-6 left-6 z-[1000] bg-white/90 backdrop-blur shadow-xl p-4 rounded-2xl border border-white">
              <div className="flex items-center gap-4 text-xs font-bold">
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-green-500" /> Organic</div>
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-blue-500" /> Plastic</div>
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-amber-500" /> Metal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}