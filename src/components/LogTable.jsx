import React from 'react';

const levelColors = {
  info: 'text-emerald-300',
  warn: 'text-amber-300',
  error: 'text-red-400',
};

function randPick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

export const generateMockLogs = (count = 20) => {
  const sources = ['Gateway', 'Auth', 'Firewall', 'Agent-12', 'Agent-27', 'API'];
  const actions = ['ALLOW', 'DENY', 'ELEVATE', 'SCAN', 'BLOCK', 'QUARANTINE'];
  const levels = ['info', 'warn', 'error'];
  const rules = ['R-104', 'R-221', 'R-312', 'R-403'];
  return Array.from({ length: count }, (_, i) => ({
    id: `${Date.now()}-${i}`,
    ts: new Date(Date.now() - Math.random() * 3_600_000).toISOString(),
    source: randPick(sources),
    action: randPick(actions),
    level: randPick(levels),
    rule: randPick(rules),
    details: 'Synthetic event generated for demo',
  }));
};

const LogTable = ({ rows }) => {
  return (
    <div className="w-full overflow-auto rounded-xl border border-white/10">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-white/5 text-white/70">
          <tr>
            <th className="px-3 py-2 font-medium">Time</th>
            <th className="px-3 py-2 font-medium">Source</th>
            <th className="px-3 py-2 font-medium">Action</th>
            <th className="px-3 py-2 font-medium">Rule</th>
            <th className="px-3 py-2 font-medium">Details</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="border-t border-white/10 hover:bg-white/5">
              <td className="px-3 py-2 text-white/80">{new Date(r.ts).toLocaleTimeString()}</td>
              <td className="px-3 py-2 text-white/80">{r.source}</td>
              <td className={`px-3 py-2 font-medium ${levelColors[r.level]}`}>{r.action}</td>
              <td className="px-3 py-2 text-white/70">{r.rule}</td>
              <td className="px-3 py-2 text-white/60">{r.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogTable;
