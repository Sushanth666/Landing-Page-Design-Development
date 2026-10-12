import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer = ({ toasts, onDismiss }) => {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-start gap-3 p-4 rounded-xl bg-[#08111d]/95 border border-emerald-900/60 shadow-2xl backdrop-blur-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-3"
          role="alert"
        >
          {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />}
          {toast.type === 'info' && <Info className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />}
          {toast.type === 'warning' && <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />}

          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold text-white font-shimmer">{toast.title}</h4>
            <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{toast.message}</p>
          </div>

          <button
            onClick={() => onDismiss(toast.id)}
            className="text-slate-400 hover:text-white transition-colors p-1 -mr-1 -mt-1 rounded-lg"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
