import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Language, Theme } from '../types';
import { translations } from '../data/translations';
import { 
  Sparkles, 
  Mail, 
  MapPin, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  HeartHandshake,
  ExternalLink
} from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
  theme: Theme;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang, theme }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const t = translations[lang];
  const isDark = theme === 'dark';

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerConfetti();
    setSubmitted(true);
  };

  return (
    <section id="contact" className={`py-20 relative overflow-hidden ${
      isDark ? 'bg-slate-950/90' : 'bg-emerald-50/60'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold border mb-3 ${
            isDark ? 'bg-emerald-900/40 text-emerald-300 border-emerald-700/40' : 'bg-emerald-100 text-emerald-900 border-emerald-300 shadow-sm'
          }`}>
            <Sparkles className={`w-3.5 h-3.5 ${isDark ? 'text-sky-400' : 'text-emerald-600'}`} />
            <span>{t.contactTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 bg-clip-text text-transparent">
              {t.contactSubtitle}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-sky-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Info Card */}
          <div className={`lg:col-span-5 p-6 sm:p-8 rounded-3xl border flex flex-col justify-between ${
            isDark ? 'bg-slate-900/90 border-emerald-800/40 text-slate-100 shadow-xl' : 'bg-white border-emerald-200 text-slate-900 shadow-lg shadow-emerald-500/5'
          }`}>
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <HeartHandshake className={`w-5 h-5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <span>{t.contactInfoTitle}</span>
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 ${
                    isDark ? 'bg-emerald-900/40 border-emerald-700/40 text-sky-400' : 'bg-emerald-100 border-emerald-300 text-emerald-800 font-bold'
                  }`}>
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className={`text-xs font-bold ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>{lang === 'ar' ? 'الموقع' : 'Location'}</div>
                    <div className="text-sm font-semibold">{t.locationText}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 ${
                    isDark ? 'bg-teal-900/40 border-teal-700/40 text-sky-300' : 'bg-teal-100 border-teal-300 text-teal-800 font-bold'
                  }`}>
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className={`text-xs font-bold ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>{lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}</div>
                    <a href="mailto:samahrabea06@gmail.com" className="text-sm font-semibold hover:text-sky-500 transition-colors block">
                      samahrabea06@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 ${
                    isDark ? 'bg-sky-900/40 border-sky-700/40 text-sky-300' : 'bg-sky-100 border-sky-300 text-sky-800 font-bold'
                  }`}>
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className={`text-xs font-bold ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>LinkedIn</div>
                    <a
                      href="https://linkedin.com/in/samah-rabie"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold hover:text-sky-500 transition-colors inline-flex items-center gap-1"
                    >
                      <span>linkedin.com/in/samah-rabie</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Social Links */}
            <div className={`mt-8 pt-6 border-t flex flex-col gap-3 ${isDark ? 'border-emerald-900/30' : 'border-emerald-200'}`}>
              <a
                href="https://linkedin.com/in/samah-rabie"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-sky-600 to-teal-600 text-white shadow-md hover:from-sky-500 hover:to-teal-500 flex items-center justify-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                <span>{t.btnLinkedInDirect}</span>
              </a>

              <a
                href="mailto:samahrabea06@gmail.com?subject=Inquiry%20for%20Samah%20Rabie"
                className={`w-full py-3 px-4 rounded-xl text-xs font-bold border flex items-center justify-center gap-2 ${
                  isDark ? 'border-emerald-500/40 bg-emerald-950/40 text-emerald-200 hover:bg-emerald-900/60' : 'border-emerald-300 bg-emerald-50 text-emerald-900 hover:bg-emerald-100'
                }`}
              >
                <Mail className="w-4 h-4" />
                <span>{t.btnEmailDirect}</span>
              </a>
            </div>
          </div>

          {/* Interactive Form */}
          <div className={`lg:col-span-7 p-6 sm:p-8 rounded-3xl border ${
            isDark ? 'bg-slate-900/90 border-emerald-800/40 text-slate-100 shadow-xl' : 'bg-white border-emerald-200 text-slate-900 shadow-lg shadow-emerald-500/5'
          }`}>
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-black">{t.successMsg}</h4>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>
                  {lang === 'ar'
                    ? 'يسعدني تواصلك وسأقوم بالرد فور قراءة الرسالة.'
                    : 'Thank you! I will reply to your message as soon as possible.'}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 text-white shadow-md hover:bg-emerald-500"
                >
                  {lang === 'ar' ? 'إرسال رسالة أخرى' : 'Send Another Message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold mb-1">{t.formName}</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="اسمك بالكامل"
                      className={`w-full px-4 py-2.5 rounded-xl text-xs border outline-none ${
                        isDark ? 'bg-slate-950 border-emerald-900/50 text-white focus:border-emerald-500' : 'bg-slate-50 border-emerald-300 text-slate-900 focus:border-emerald-600 focus:bg-white font-medium shadow-sm'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-1">{t.formEmail}</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="example@mail.com"
                      className={`w-full px-4 py-2.5 rounded-xl text-xs border outline-none ${
                        isDark ? 'bg-slate-950 border-emerald-900/50 text-white focus:border-emerald-500' : 'bg-slate-50 border-emerald-300 text-slate-900 focus:border-emerald-600 focus:bg-white font-medium shadow-sm'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold mb-1">{t.formPhone}</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="رقم الهاتف (اختياري)"
                      className={`w-full px-4 py-2.5 rounded-xl text-xs border outline-none ${
                        isDark ? 'bg-slate-950 border-emerald-900/50 text-white focus:border-emerald-500' : 'bg-slate-50 border-emerald-300 text-slate-900 focus:border-emerald-600 focus:bg-white font-medium shadow-sm'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-1">{t.formSubject}</label>
                    <input
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="تصميم برزنتيشن / وورد / بوستر / فيديو..."
                      className={`w-full px-4 py-2.5 rounded-xl text-xs border outline-none ${
                        isDark ? 'bg-slate-950 border-emerald-900/50 text-white focus:border-emerald-500' : 'bg-slate-50 border-emerald-300 text-slate-900 focus:border-emerald-600 focus:bg-white font-medium shadow-sm'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">{t.formMessage}</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="تفاصيل طلبك والموضوع والموعد المحدد..."
                    className={`w-full px-4 py-2.5 rounded-xl text-xs border outline-none ${
                      isDark ? 'bg-slate-950 border-emerald-900/50 text-white focus:border-emerald-500' : 'bg-slate-50 border-emerald-300 text-slate-900 focus:border-emerald-600 focus:bg-white font-medium shadow-sm'
                    }`}
                  />
                </div>

                <div className={`pt-4 border-t ${isDark ? 'border-emerald-900/30' : 'border-emerald-200'}`}>
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 text-white shadow-lg shadow-emerald-600/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.btnSendMessage}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
