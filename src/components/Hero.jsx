import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] w-full bg-black overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/40 via-black/40 to-black" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col items-start">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white tracking-tight"
        >
          ScaleShield
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-lg md:text-xl text-emerald-200/90 max-w-2xl"
        >
          Real-Time Security Monitoring and Management System. Visualize threats, monitor logs, and act with confidence.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 flex gap-3"
        >
          <a href="#demo" className="pointer-events-auto inline-flex items-center px-5 py-2 rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-medium transition-colors">Live Demo</a>
          <a href="#features" className="pointer-events-auto inline-flex items-center px-5 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium border border-white/15 transition-colors">Features</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
