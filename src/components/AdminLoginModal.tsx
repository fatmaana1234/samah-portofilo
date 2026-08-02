import React, { useState } from 'react';
import { Language, Theme } from '../types';
import { translations } from '../data/translations';
import { Lock, User, Key, X, ShieldCheck, AlertCircle } from 'lucide-react';

interface AdminLoginModalProps {
  lang: Language;
  theme: Theme;
  onSuccess: () => void;
  onClose: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  lang,
  theme,
  onSuccess,
  onClose
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const t = translations[lang];
  const isDark = theme === 'dark';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim().toLowerCase() === 'samah' && password.trim() === 'samah2026') {
      onSuccess();
      onClose();
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <div className={`w-full max-w-md rounded-3xl border p-6 sm:p-8 relative shadow-2xl ${
        isDark ? 'bg-slate-900 border-purple-800/60 text-slate-100' : 'bg-white border-purple-200 text-slate-800'
      }`}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 end-5 p-2 rounded-full hover:bg-purple-900/40 text-slate-400 hover:text-white transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-500 text-white flex items-center justify-center font-bold shadow-lg shadow-purple-600/30">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-black">{t.adminModalTitle}</h3>
            <p className="text-xs text-purple-400 font-medium">
              {lang === 'ar' ? 'التحقق من الهوية لإضافة وتنسيق الأعمال' : 'Identity Verification for Portfolio Upload'}
            </p>
          </div>
        </div>

        <p className="text-xs text-slate-400 mb-6 leading-relaxed">
          {t.adminModalSubtitle}
        </p>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/40 text-rose-400 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{t.loginErrorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-purple-400" />
              <span>{t.labelUsername}</span>
            </label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError(false);
              }}
              placeholder="e.g. samah"
              className={`w-full px-4 py-2.5 rounded-xl text-xs border outline-none ${
                isDark ? 'bg-slate-950 border-purple-900/50 text-white focus:border-purple-500' : 'bg-slate-50 border-purple-200 text-slate-900'
              }`}
            />
          </div>

          <div>
            <label className="block text-xs font-bold mb-1.5 flex items-center gap-1.5">
              <Key className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.labelPassword}</span>
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="••••••••"
              className={`w-full px-4 py-2.5 rounded-xl text-xs border outline-none ${
                isDark ? 'bg-slate-950 border-purple-900/50 text-white focus:border-purple-500' : 'bg-slate-50 border-purple-200 text-slate-900'
              }`}
            />
          </div>

          <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-900/40 text-[11px] text-purple-300/80">
            💡 {t.adminLoginHint}
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-purple-900/30">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl text-xs font-bold border border-slate-700 text-slate-300 hover:bg-slate-800"
            >
              {t.btnCancel}
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 text-white shadow-md hover:scale-[1.02] transition-all flex items-center justify-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{t.btnLoginSubmit}</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
