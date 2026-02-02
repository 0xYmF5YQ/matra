import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Recycle, Menu, X, ArrowUpRight, LayoutDashboard } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  // Change style on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Marketplace', href: '/materials' },
    { name: 'AI Analyzer', href: '/analyze' },
    { name: 'Impact Tracker', href: '/impact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200' 
            : 'py-6 bg-transparent'
        }`}
      >
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-green-500 origin-left"
          style={{ scaleX: scrollYProgress }}
        />

        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo Section */}
          <motion.a 
            href="/"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 group"
          >
            <div className="bg-green-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
              <Recycle className="text-white w-5 h-5" />
            </div>
            <span className="text-2xl font-black text-slate-900 tracking-tighter">
              MATRA<span className="text-green-600">.</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ backgroundColor: 'rgba(241, 245, 249, 1)' }}
                className="px-4 py-2 rounded-full text-sm font-semibold text-slate-600 hover:text-green-600 transition-colors relative group"
              >
                {link.name}
                <motion.span 
                  className="absolute bottom-1 left-4 right-4 h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform"
                />
              </motion.a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-bold text-slate-900 hover:opacity-70 transition">
              Sign In
            </button>
            <motion.a
              href="/add"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-slate-200 hover:bg-green-600 transition-colors"
            >
              Post Material <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} className="text-lg font-bold text-slate-800">
                    {link.name}
                  </a>
                ))}
                <hr className="border-slate-100" />
                <button className="flex items-center justify-center gap-2 bg-slate-900 text-white p-4 rounded-xl font-bold">
                  <LayoutDashboard className="w-5 h-5" /> Dashboard
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      
      {/* Spacer to prevent content from jumping under fixed header */}
      <div className="h-20 md:h-24" />
    </>
  );
}