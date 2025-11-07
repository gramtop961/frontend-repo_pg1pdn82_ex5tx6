import React from 'react';
import { ShieldCheck, Activity, Bell, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: ShieldCheck, title: 'Defense-First', desc: 'Hardened, zero-trust posture with smart policies.' },
  { icon: Activity, title: 'Live Telemetry', desc: 'Continuously stream and analyze security events.' },
  { icon: Bell, title: 'Alerting', desc: 'Instant anomaly detection and actionable alerts.' },
  { icon: Lock, title: 'Access Control', desc: 'Role-based control for Admins and Employees.' },
];

const FeatureGrid = () => {
  return (
    <section id="features" className="bg-black py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Why ScaleShield</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 hover:border-emerald-400/50 transition-colors"
            >
              <div className="h-10 w-10 rounded-md bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 flex items-center justify-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-white font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
