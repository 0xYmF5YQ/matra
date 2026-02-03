import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WasteHeatmap from '../components/WasteHeatmap';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import MaterialMarquee from '../components/MaterialMarquee';

 

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <MaterialMarquee />
      <WasteHeatmap /> 
      <Footer />
    </div>
  );
}