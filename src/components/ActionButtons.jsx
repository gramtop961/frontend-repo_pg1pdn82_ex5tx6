import React from 'react';
import { Play, Pause, AlertTriangle, ShieldCheck } from 'lucide-react';

const ActionButtons = ({ role, onTrigger }) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button onClick={() => onTrigger('start_stream')} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-500 hover:bg-emerald-400 text-black text-sm font-medium">
        <Play className="h-4 w-4" /> Start Stream
      </button>
      <button onClick={() => onTrigger('pause_stream')} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white text-sm border border-white/15">
        <Pause className="h-4 w-4" /> Pause
      </button>
      {role === 'admin' ? (
        <>
          <button onClick={() => onTrigger('simulate_incident')} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-amber-500/90 hover:bg-amber-500 text-black text-sm font-medium">
            <AlertTriangle className="h-4 w-4" /> Simulate Incident
          </button>
          <button onClick={() => onTrigger('apply_policy')} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-sm">
            <ShieldCheck className="h-4 w-4" /> Apply Policy
          </button>
        </>
      ) : null}
    </div>
  );
};

export default ActionButtons;
