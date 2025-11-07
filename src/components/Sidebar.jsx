import React from 'react';
import { Home, Activity, Shield, Settings, LogOut } from 'lucide-react';

const Sidebar = ({ role, onLogout }) => {
  const links = [
    { label: 'Overview', icon: Home },
    { label: 'Activity', icon: Activity },
    { label: 'Policies', icon: Shield },
    { label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-full sm:w-64 shrink-0 border-r border-white/10 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/50">
      <div className="px-4 py-4 border-b border-white/10 flex items-center justify-between">
        <span className="text-white/80 text-sm">{role === 'admin' ? 'Admin' : 'Employee'} Panel</span>
        <button onClick={onLogout} className="inline-flex items-center gap-1 text-xs text-white/70 hover:text-white">
          <LogOut className="h-4 w-4" /> Logout
        </button>
      </div>
      <nav className="p-3 grid gap-1">
        {links.map((l) => (
          <button key={l.label} className="flex items-center gap-2 px-3 py-2 rounded-md text-white/80 hover:text-white hover:bg-white/10">
            <l.icon className="h-4 w-4 text-emerald-300" />
            <span className="text-sm">{l.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
