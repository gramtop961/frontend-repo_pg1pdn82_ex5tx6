import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} ScaleShield. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#privacy" className="hover:text-white/90">Privacy</a>
          <a href="#terms" className="hover:text-white/90">Terms</a>
          <a href="#contact" className="hover:text-white/90">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
