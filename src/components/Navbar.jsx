import React from 'react';
import { Shield, User } from 'lucide-react';

const Navbar = ({ role }) => {
  return (
    <nav className="w-full sticky top-0 z-20 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-md bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-400/30 text-emerald-300">
            <Shield className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-wide text-white">ScaleShield</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-white/80">
          <User className="h-4 w-4 text-emerald-300" />
          <span>{role ? (role === 'admin' ? 'Admin' : 'Employee') : 'Guest'}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
