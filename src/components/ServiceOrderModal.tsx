import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Language, Theme } from '../types';
import { initialServices } from '../data/portfolioData';
import { translations } from '../data/translations';
import { 
  Sparkles, 
  X, 
  Send, 
  CheckCircle2, 
  Presentation
} from 'lucide-react';

interface ServiceOrderModalProps {
  lang: Language;
  theme: Theme;
  selectedServiceId?: string;
  onClose: () => void;
}

export const ServiceOrderModal: React.FC<ServiceOrderModalProps> = ({
  lang,
  theme,
  selectedServiceId,
  onClose
}) => {
  const selectedService = initialServices.find(s => s.id === selectedServiceId) || initialServices[0];
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceId, setServiceId] = useState(selectedService.id);
  const [details, setDetails] = useState('');
  const [isSent, setIsSent] = useState(false);

  const t = translations[lang];
  const isDark = theme === 'dark';

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerConfetti();
    setIsSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className={`w-full max-w-xl rounded-3xl border p-6 sm:p-8 relative shadow-2xl my-8 ${
        isDark ? 'bg-slate-900 border-emerald-800/60 text-slate-100' : 'bg-white border-emerald-200 text-slate-800'
      }`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 end-6 p-2 rounded-full hover:bg-emerald-900/40 text-slate-400 hover:text-white transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-sky-500 text-white flex items-center justify-center font-bold shadow-lg shadow-emerald-600/30">
            <Presentation className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-black">
              {lang === 'ar' ? 'طلب خدمة / مشروع جديد' : 'Request Service / Project'}
            </h3>
            <p className="text-xs text-emerald-400 font-medium">
              {lang === 'ar' ? 'مع منى كامل (المنصورة، مصر)' : 'With Mona Kamel (Mansoura, Egypt)'}
            </p>
          </div>
        </div>

        {isSent ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold">{t.successMsg}</h4>
            <p className="text-xs text-slate-400">
              {lang === 'ar'
                ? 'تم استلام الطلب بنجاح، وسأقوم بالرد عليك عبر الإيميل أو لينكدان في أقرب وقت.'
                : 'Your request has been received! I will get back to you shortly.'}
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 text-white shadow-md hover:bg-emerald-500"
            >
              {t.appModalClose}
            </button>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold mb-1">{t.formName}</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="اسمك الكريم / دكتور / مؤسسة"
                className={`w-full px-4 py-2.5 rounded-xl text-xs border outline-none ${
                  isDark ? 'bg-slate-950 border-emerald-900/50 text-white focus:border-emerald-500' : 'bg-slate-50 border-emerald-200'
                }`}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold mb-1">{t.formEmail}</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="monakamel@gmail.com"
                  className={`w-full px-4 py-2.5 rounded-xl text-xs border outline-none ${
                    isDark ? 'bg-slate-950 border-emerald-900/50 text-white focus:border-emerald-500' : 'bg-slate-50 border-emerald-200'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-bold mb-1">{t.formPhone}</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="رقم الهاتف (اختياري)"
                  className={`w-full px-4 py-2.5 rounded-xl text-xs border outline-none ${
                    isDark ? 'bg-slate-950 border-emerald-900/50 text-white focus:border-emerald-500' : 'bg-slate-50 border-emerald-200'
                  }`}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold mb-1">{t.formSubject}</label>
              <select
                value={serviceId}
                onChange={(e) => setServiceId(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-xl text-xs border outline-none ${
                  isDark ? 'bg-slate-950 border-emerald-900/50 text-white focus:border-emerald-500' : 'bg-slate-50 border-emerald-200'
                }`}
              >
                {initialServices.map((srv) => (
                  <option key={srv.id} value={srv.id}>
                    {lang === 'ar' ? srv.titleAr : srv.titleEn}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold mb-1">{t.formMessage}</label>
              <textarea
                rows={4}
                required
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="يرجى كتابة تفاصيل العمل: عدد السلايدات المطلوبة، موضوع البحث، الموعد المحدد للتسليم..."
                className={`w-full px-4 py-2.5 rounded-xl text-xs border outline-none ${
                  isDark ? 'bg-slate-950 border-emerald-900/50 text-white focus:border-emerald-500' : 'bg-slate-50 border-emerald-200'
                }`}
              />
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-emerald-900/30">
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 text-white shadow-md hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{t.btnSendMessage}</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
