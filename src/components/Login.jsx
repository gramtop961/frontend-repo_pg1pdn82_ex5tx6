import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Toast from '@radix-ui/react-toast';
import { Shield, User, UserCog } from 'lucide-react';

const Login = ({ onAuth }) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [toastMsg, setToastMsg] = React.useState('');

  const handleLogin = (role) => {
    localStorage.setItem('scaleshield_role', role);
    onAuth?.(role);
    setToastMsg(`${role === 'admin' ? 'Admin' : 'Employee'} login successful`);
    setOpen(true);
    setTimeout(() => {
      navigate(role === 'admin' ? '/dashboard/admin' : '/dashboard/employee');
    }, 400);
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-black px-6 py-16">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-md bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-400/30 text-emerald-300">
            <Shield className="h-5 w-5" />
          </div>
          <h1 className="text-white text-xl font-semibold">Sign in to ScaleShield</h1>
        </div>
        <p className="mt-2 text-white/70 text-sm">Choose a role to continue. This demo uses mock authentication.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={() => handleLogin('admin')}
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-medium transition-colors"
          >
            <UserCog className="h-4 w-4" /> Admin
          </button>
          <button
            onClick={() => handleLogin('employee')}
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium border border-white/15 transition-colors"
          >
            <User className="h-4 w-4" /> Employee
          </button>
        </div>

        <p className="mt-6 text-xs text-white/60">By continuing, you agree to our Terms and Privacy Policy.</p>
      </div>

      <Toast.Provider swipeDirection="right">
        <Toast.Root open={open} onOpenChange={setOpen} className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:fade-in-80 data-[state=open]:slide-in-from-bottom-4 fixed bottom-4 right-4 z-50 rounded-md border border-emerald-400/30 bg-black px-4 py-3 text-sm text-white shadow-lg">
          <Toast.Title className="font-medium text-emerald-300">Success</Toast.Title>
          <Toast.Description className="mt-1 text-white/80">{toastMsg}</Toast.Description>
        </Toast.Root>
        <Toast.Viewport className="fixed bottom-0 right-0 flex max-h-screen w-full flex-col-reverse p-4 sm:max-w-[420px]" />
      </Toast.Provider>
    </div>
  );
};

export default Login;
