import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ActionButtons from './ActionButtons';
import LogTable, { generateMockLogs } from './LogTable';

const EmployeeDashboard = () => {
  const role = 'employee';
  const [rows, setRows] = React.useState(() => generateMockLogs(14));
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
      }, 1500);
    }
    if (cmd === 'pause_stream') {
      clearInterval(streamRef.current);
      streamRef.current = null;
    }
  };

  React.useEffect(() => {
    return () => clearInterval(streamRef.current);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar role={role} />
      <div className="flex">
        <Sidebar role={role} onLogout={logout} />
        <main className="flex-1 p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Employee Dashboard</h1>
            <ActionButtons role={role} onTrigger={onTrigger} />
          </div>
          <LogTable rows={rows} />
        </main>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
