import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, Github, Twitter, Linkedin, ArrowRight, Mail } from 'lucide-react';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-slate-900 pt-20 pb-10 text-slate-300 overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-green-500 p-1.5 rounded-lg">
                <Recycle className="text-slate-900 w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-white tracking-tighter">
                MATRA<span className="text-green-500">.</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Bridging the gap between industrial waste and sustainable profit. 
              Join the circular revolution today.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, color: '#22c55e' }}
                  className="bg-slate-800 p-2.5 rounded-full transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Platform</h4>
            <ul className="space-y-4">
              {['Marketplace', 'Real-time Map', 'Compliance AI', 'Reverse Bidding'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-green-400 transition-colors flex items-center group">
                    <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal / Company */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Sustainability Report', 'Privacy Policy', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-green-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Stay Updated</h4>
            <p className="text-sm text-slate-400">Get the latest waste-market valuation reports weekly.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 px-4 focus:outline-none focus:border-green-500 transition-all text-sm pr-12"
              />
              <button className="absolute right-2 top-1.5 bg-green-500 hover:bg-green-600 text-slate-900 p-1.5 rounded-lg transition-colors">
                <Mail size={18} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Matra Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              System Status: Operational
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Background Decorative Gradient */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
}