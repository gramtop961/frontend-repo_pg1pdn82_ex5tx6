import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-black">
      <Navbar role={null} />
      <main>
        <Hero />
        <FeatureGrid />
        <section id="demo" className="bg-black py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-2xl border border-white/10 p-6 bg-gradient-to-b from-white/5 to-transparent">
              <h3 className="text-xl md:text-2xl font-semibold text-white">Explore the Dashboards</h3>
              <p className="mt-2 text-white/70">Choose a role on the next screen and jump into a live, mock dashboard experience with streaming logs and role-based controls.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="/login" className="inline-flex items-center justify-center px-5 py-2 rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-medium transition-colors">Login as Admin</a>
                <a href="/login" className="inline-flex items-center justify-center px-5 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium border border-white/15 transition-colors">Login as Employee</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
