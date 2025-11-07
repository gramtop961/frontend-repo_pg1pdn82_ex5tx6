import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ActionButtons from './ActionButtons';
import LogTable, { generateMockLogs } from './LogTable';

const AdminDashboard = () => {
  const role = 'admin';
  const [rows, setRows] = React.useState(() => generateMockLogs(18));
  const streamRef = React.useRef(null);

  const logout = () => {
    localStorage.removeItem('scaleshield_role');
    window.location.href = '/';
  };

  const onTrigger = (cmd) => {
    if (cmd === 'start_stream') {
      if (streamRef.current) return;
      streamRef.current = setInterval(() => {
        setRows((prev) => {
          const next = [generateMockLogs(1)[0], ...prev];
          return next.slice(0, 100);
        });
      }, 1200);
    }
    if (cmd === 'pause_stream') {
      clearInterval(streamRef.current);
      streamRef.current = null;
    }
    if (cmd === 'simulate_incident') {
      setRows((prev) => [
        {
          id: `${Date.now()}-incident`,
          ts: new Date().toISOString(),
          source: 'Firewall',
          action: 'QUARANTINE',
          level: 'error',
          rule: 'R-911',
          details: 'High-severity anomaly detected and quarantined',
        },
        ...prev,
      ]);
    }
    if (cmd === 'apply_policy') {
      setRows((prev) => [
        {
          id: `${Date.now()}-policy`,
          ts: new Date().toISOString(),
          source: 'PolicyEngine',
          action: 'APPLY',
          level: 'info',
          rule: 'R-200',
          details: 'New hardening policy applied to fleet',
        },
        ...prev,
      ]);
    }
  };

  React.useEffect(() => {
    return () => {
      clearInterval(streamRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar role={role} />
      <div className="flex">
        <Sidebar role={role} onLogout={logout} />
        <main className="flex-1 p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Admin Dashboard</h1>
            <ActionButtons role={role} onTrigger={onTrigger} />
          </div>
          <LogTable rows={rows} />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
