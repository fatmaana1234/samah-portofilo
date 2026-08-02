import React from 'react';
import { Language, Theme } from '../types';
import { translations } from '../data/translations';
import { generateVCardDownload } from '../utils/vcard';
import { 
  Smartphone, 
  X, 
  Download, 
  QrCode, 
  CheckCircle2, 
  Share2, 
  PlusSquare, 
  Sparkles,
  WifiOff
} from 'lucide-react';

interface AppConvertModalProps {
  lang: Language;
  theme: Theme;
  onClose: () => void;
}

export const AppConvertModal: React.FC<AppConvertModalProps> = ({ lang, theme, onClose }) => {
  const t = translations[lang];
  const isDark = theme === 'dark';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className={`w-full max-w-xl rounded-3xl border p-6 sm:p-8 relative shadow-2xl my-8 ${
        isDark ? 'bg-slate-900 border-purple-800/60 text-slate-100' : 'bg-white border-purple-200 text-slate-800'
      }`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 end-6 p-2 rounded-full hover:bg-purple-900/40 text-slate-400 hover:text-white transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-500 text-white flex items-center justify-center font-bold shadow-lg shadow-purple-600/30">
            <Smartphone className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-black">{t.appModalTitle}</h3>
            <p className="text-xs text-purple-400 font-medium">
              {lang === 'ar' ? 'تطبيق ويب تقدمي (PWA) قابل للتثبيت السريع' : 'Progressive Web App Setup'}
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm leading-relaxed mb-6 text-slate-300">
          {t.appModalDesc}
        </p>

        {/* Installation Steps Box */}
        <div className={`p-5 rounded-2xl border mb-6 space-y-3 ${
          isDark ? 'bg-purple-950/40 border-purple-800/40' : 'bg-purple-50 border-purple-200'
        }`}>
          <div className="flex items-start gap-3 text-xs sm:text-sm">
            <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xs shrink-0">1</div>
            <div>
              <span className="font-bold">{t.appModalStep1}</span>
            </div>
          </div>
          <div className="flex items-start gap-3 text-xs sm:text-sm">
            <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0">2</div>
            <div>
              <span className="font-bold">{t.appModalStep2}</span>
            </div>
          </div>
          <div className="flex items-start gap-3 text-xs sm:text-sm">
            <div className="w-6 h-6 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold text-xs shrink-0">3</div>
            <div>
              <span className="font-bold">{t.appModalStep3}</span>
            </div>
          </div>
        </div>

        {/* App Advantages & vCard CTAs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-purple-800/30 flex items-center gap-3">
            <WifiOff className="w-6 h-6 text-cyan-400 shrink-0" />
            <div className="text-xs">
              <div className="font-bold text-slate-200">{lang === 'ar' ? 'عمل بدون إنترنت' : 'Offline Mode'}</div>
              <div className="text-[10px] text-slate-400">{lang === 'ar' ? 'تصفح السيرة الذاتية دائماً' : 'Cache ready'}</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/60 border border-purple-800/30 flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-purple-400 shrink-0" />
            <div className="text-xs">
              <div className="font-bold text-slate-200">{lang === 'ar' ? 'أداء فائق السرعة' : 'Instant Loading'}</div>
              <div className="text-[10px] text-slate-400">{lang === 'ar' ? 'تصميم سلس ومبهج' : 'Sleek experience'}</div>
            </div>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={generateVCardDownload}
            className="w-full sm:flex-1 py-3 px-4 rounded-2xl text-xs font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 text-white shadow-lg shadow-purple-600/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>{t.appModalVcardBtn}</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto py-3 px-6 rounded-2xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700"
          >
            {t.appModalClose}
          </button>
        </div>

      </div>
    </div>
  );
};
