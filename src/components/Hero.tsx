import React, { useState, useRef, useEffect } from 'react';
import { Language, Theme } from '../types';
import { translations } from '../data/translations';
import { generateVCardDownload } from '../utils/vcard';
import { GOOGLE_DRIVE_FOLDER_URL } from '../data/portfolioData';
import samahAvatarImg from '../assets/images/samah_exact_portrait_1785632599272.jpg';
import { 
  Sparkles, 
  ArrowLeft, 
  ArrowRight, 
  Download, 
  Linkedin, 
  GraduationCap, 
  Presentation, 
  CheckCircle2,
  FolderOpen,
  Mail,
  X,
  Stethoscope,
  ZoomIn,
  Lock,
  Unlock,
  Upload,
  RefreshCw,
  Camera,
  ShieldCheck
} from 'lucide-react';

interface HeroProps {
  lang: Language;
  theme: Theme;
  onOpenOrderModal: (serviceId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, theme, onOpenOrderModal }) => {
  const t = translations[lang];
  const isDark = theme === 'dark';
  const isRtl = lang === 'ar';
  
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [customAvatar, setCustomAvatar] = useState<string | null>(null);
  const [isOwnerUnlocked, setIsOwnerUnlocked] = useState(false);
  const [showPinInput, setShowPinInput] = useState(false);
  const [pinValue, setPinValue] = useState('');
  const [pinError, setPinError] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('samah_custom_avatar_url');
    if (saved) {
      setCustomAvatar(saved);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomAvatar(result);
          localStorage.setItem('samah_custom_avatar_url', result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetAvatar = () => {
    setCustomAvatar(null);
    localStorage.removeItem('samah_custom_avatar_url');
  };

  const handleVerifyPin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinValue === '1234' || pinValue === '2026') {
      setIsOwnerUnlocked(true);
      setShowPinInput(false);
      setPinValue('');
      setPinError('');
    } else {
      setPinError(lang === 'ar' ? 'رمز المرور غير صحيح' : 'Incorrect passcode');
    }
  };

  const activeAvatarSrc = customAvatar || samahAvatarImg;
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Animated Emerald-Blue Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-emerald-500/20 via-teal-500/20 to-sky-400/20 blur-[130px] rounded-full pointer-events-none animate-pulse-glow" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            
            {/* Availability Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-6 border transition-all ${
              isDark 
                ? 'bg-emerald-950/80 border-emerald-700/60 text-emerald-300 shadow-sm shadow-emerald-950' 
                : 'bg-emerald-100/90 border-emerald-300 text-emerald-800'
            }`}>
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping" />
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>{t.availableBadge}</span>
            </div>

            {/* Full Name */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
              <span className={`block font-extrabold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>{t.heroGreeting}</span>
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 bg-clip-text text-transparent">
                {t.name}
              </span>
            </h1>

            {/* Professional Title Tagline */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold mb-6">
              <span className={`px-3 py-1.5 rounded-lg border font-bold ${
                isDark ? 'bg-emerald-900/60 border-emerald-700/50 text-emerald-300' : 'bg-emerald-100 border-emerald-300 text-emerald-900 shadow-sm'
              }`}>
                {lang === 'ar' ? 'امتياز تمريض بجامعة قنا' : 'Nursing Intern Qena Univ'}
              </span>
              <span className="text-sky-500 font-bold">•</span>
              <span className={`px-3 py-1.5 rounded-lg border font-bold ${
                isDark ? 'bg-teal-900/60 border-teal-700/50 text-teal-300' : 'bg-teal-100 border-teal-300 text-teal-900 shadow-sm'
              }`}>
                {lang === 'ar' ? 'مصممة بوربوينت ووورد وجرافيك' : 'PowerPoint, Word & Graphic Designer'}
              </span>
              <span className="text-sky-500 font-bold">•</span>
              <span className={`px-3 py-1.5 rounded-lg border font-bold ${
                isDark ? 'bg-sky-900/60 border-sky-700/50 text-sky-300' : 'bg-sky-100 border-sky-300 text-sky-900 shadow-sm'
              }`}>
                {lang === 'ar' ? 'مونتاج فيديو وتثقيف صحي' : 'Video Editing & Medical Content'}
              </span>
            </div>

            {/* About Summary Bio */}
            <p className={`text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal ${
              isDark ? 'text-slate-300' : 'text-slate-700 font-medium'
            }`}>
              {t.heroBio}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href={GOOGLE_DRIVE_FOLDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 text-white shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <FolderOpen className="w-4 h-4 text-sky-200" />
                <span>{t.heroCtaPortfolio}</span>
                <ArrowIcon className="w-4 h-4" />
              </a>

              <button
                onClick={() => onOpenOrderModal()}
                className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm border transition-all ${
                  isDark
                    ? 'border-emerald-700/80 bg-emerald-950/60 text-emerald-200 hover:bg-emerald-900/80 hover:border-emerald-500'
                    : 'border-emerald-300 bg-white text-emerald-800 hover:bg-emerald-50 hover:border-emerald-400 shadow-sm'
                }`}
              >
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>{t.heroCtaServices}</span>
              </button>

              <button
                onClick={generateVCardDownload}
                className={`inline-flex items-center justify-center p-3.5 rounded-2xl border transition-all ${
                  isDark
                    ? 'border-emerald-800 bg-slate-900 text-slate-300 hover:text-white hover:border-emerald-600'
                    : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-slate-900'
                }`}
                title={t.heroCtaDownloadCV}
              >
                <Download className="w-5 h-5" />
              </button>

              <a
                href="https://linkedin.com/in/samah-rabie"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3.5 rounded-2xl bg-sky-600/90 text-white hover:bg-sky-500 shadow-md shadow-sky-600/20 hover:scale-105 transition-all"
                title={t.heroCtaLinkedIn}
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="mailto:samahrabea06@gmail.com"
                className="inline-flex items-center justify-center p-3.5 rounded-2xl bg-teal-600/90 text-white hover:bg-teal-500 shadow-md shadow-teal-600/20 hover:scale-105 transition-all"
                title="samahrabea06@gmail.com"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Quick Trust Highlights */}
            <div className="mt-8 pt-6 border-t border-emerald-900/30 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium opacity-85">
              <div className="flex items-center gap-2 text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>{lang === 'ar' ? 'جامعة قنا - تقدير ممتاز' : 'Qena Univ - Excellent Honors'}</span>
              </div>
              <div className="flex items-center gap-2 text-teal-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>{lang === 'ar' ? 'بوربوينت، وورد، بوسترات وفيديوهات' : 'PPT, Word, Posters & Videos'}</span>
              </div>
              <div className="flex items-center gap-2 text-sky-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>{lang === 'ar' ? 'متطوعة YLY ورئيس لجنة الصحة العامة' : 'YLY Volunteer & Public Health Lead'}</span>
              </div>
            </div>

          </div>

          {/* Avatar & Interactive Visual Column */}
          <div className="lg:col-span-5 flex justify-center relative py-6 sm:py-8">
            
            {/* Decorative Ambient Glowing Ring */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              
              {/* Outer Glowing Frame */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-sky-400 opacity-80 blur-lg animate-pulse" />
              
              {/* Profile Main Card */}
              <div className={`relative w-full h-full rounded-3xl p-5 sm:p-6 border flex flex-col items-center justify-between text-center overflow-hidden shadow-2xl ${
                isDark 
                  ? 'bg-gradient-to-b from-slate-900 via-emerald-950/90 to-slate-950 border-emerald-600/50' 
                  : 'bg-gradient-to-b from-white via-emerald-50 to-sky-50 border-emerald-200'
              }`}>
                
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 p-8 text-emerald-500/10 pointer-events-none">
                  <Stethoscope className="w-36 h-36" />
                </div>

                {/* Top Badge */}
                <div className="w-full flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-900/70 text-emerald-300 border border-emerald-600/50">
                    {lang === 'ar' ? 'تمريض جامعة قنا' : 'Qena Nursing'}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-900/70 text-sky-300 border border-sky-600/50">
                    {lang === 'ar' ? 'تصميم رقمي شامل' : 'Digital Graphic Design'}
                  </span>
                </div>

                {/* Avatar Graphic Illustration Container (Circular Photo of Samah) */}
                <div 
                  className="relative my-2 group cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
                  onClick={() => setShowPhotoModal(true)}
                  title={lang === 'ar' ? 'انقر لتكبير الصورة الشخصية' : 'Click to enlarge portrait'}
                >
                  <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1.5 bg-gradient-to-tr from-emerald-400 via-teal-300 to-sky-400 shadow-xl relative animate-pulse">
                    <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-emerald-300/40">
                      <img
                        src={activeAvatarSrc}
                        alt="Samah Rabie - Nursing & Healthcare Professional"
                        className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      {/* Hover Overlay Icon */}
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                        <ZoomIn className="w-8 h-8 text-emerald-300 animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Quick Info */}
                <div className={`w-full z-10 pt-2 border-t ${isDark ? 'border-emerald-900/40' : 'border-emerald-200'}`}>
                  <div className={`text-xs font-bold mb-1 ${isDark ? 'text-slate-200' : 'text-slate-900 font-black'}`}>
                    {lang === 'ar' ? 'سماح ربيع محمود علي' : 'Samah Rabie Mahmoud Ali'}
                  </div>
                  <div className={`text-[11px] font-bold ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>
                    {lang === 'ar' ? 'امتياز تمريض بجامعة قنا • مصممة جرافيك • متطوعة YLY' : 'Nursing Intern • Graphic Designer • YLY Volunteer'}
                  </div>
                </div>

              </div>

              {/* Floating Stat Card 1: Graduation (Top-Right, Glowing, Bouncing, positioned outside the card top margin) */}
              <div className={`absolute -top-6 -right-3 sm:-right-8 p-2.5 sm:p-3 rounded-2xl border-2 shadow-[0_0_20px_rgba(52,211,153,0.45)] backdrop-blur-md flex items-center gap-2.5 animate-bounce z-30 transition-all hover:scale-110 ${
                isDark 
                  ? 'bg-slate-900/95 border-emerald-400/80 text-slate-100' 
                  : 'bg-white/95 border-emerald-500 text-slate-800'
              }`}>
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold shadow-[0_0_10px_rgba(52,211,153,0.6)] animate-pulse">
                  <GraduationCap className="w-4 h-4 text-emerald-300" />
                </div>
                <div>
                  <div className="text-[11px] font-extrabold text-sky-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)] leading-tight">{t.statDegree}</div>
                  <div className="text-[9px] font-semibold opacity-90 leading-tight">{t.statDegreeSub}</div>
                </div>
              </div>

              {/* Floating Stat Card 2: PowerPoint & Content Specialist (Bottom-Left, Glowing, Bouncing, positioned outside the card bottom margin) */}
              <div className={`absolute -bottom-6 -left-3 sm:-left-8 p-2.5 sm:p-3 rounded-2xl border-2 shadow-[0_0_20px_rgba(56,189,248,0.45)] backdrop-blur-md flex items-center gap-2.5 animate-bounce [animation-delay:300ms] z-30 transition-all hover:scale-110 ${
                isDark 
                  ? 'bg-slate-900/95 border-sky-400/80 text-slate-100' 
                  : 'bg-white/95 border-sky-500 text-slate-800'
              }`}>
                <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-300 flex items-center justify-center font-bold shadow-[0_0_10px_rgba(56,189,248,0.6)] animate-pulse">
                  <Presentation className="w-4 h-4 text-sky-300" />
                </div>
                <div>
                  <div className="text-[11px] font-extrabold text-emerald-300 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)] leading-tight">{t.statSpecialty}</div>
                  <div className="text-[9px] font-semibold opacity-90 leading-tight">{t.statSpecialtySub}</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Hidden File Input for Device Photo Upload (Only accessible when Owner is unlocked) */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      {/* Enlarged Photo Modal with Protected Owner Upload Access */}
      {showPhotoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative max-w-md w-full p-6 bg-slate-900 border border-emerald-500/40 rounded-3xl text-center shadow-2xl">
            <button
              onClick={() => {
                setShowPhotoModal(false);
                setShowPinInput(false);
              }}
              className="absolute top-4 end-4 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-emerald-950 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-52 h-52 mx-auto rounded-full p-2 bg-gradient-to-tr from-emerald-400 via-teal-300 to-sky-400 shadow-2xl mb-4 relative group">
              <img
                src={activeAvatarSrc}
                alt="Samah Rabie - Nursing Professional"
                className="w-full h-full object-cover rounded-full border-2 border-emerald-200/50"
                referrerPolicy="no-referrer"
              />
            </div>

            <h3 className="text-lg font-black text-slate-100 mb-1">
              {lang === 'ar' ? 'سماح ربيع محمود علي' : 'Samah Rabie Mahmoud Ali'}
            </h3>
            <p className="text-xs text-emerald-400 font-semibold mb-4">
              {lang === 'ar' ? 'امتياز تمريض بجامعة قنا & مصممة محتوى وجرافيك' : 'Qena Nursing Intern & Graphic Designer'}
            </p>

            {/* Owner Upload Section (Protected by PIN) */}
            {isOwnerUnlocked ? (
              <div className="mb-4 p-3 rounded-2xl bg-slate-800/90 border border-emerald-500/40 text-start space-y-2">
                <div className="flex items-center justify-between text-xs text-emerald-300 font-bold">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    {lang === 'ar' ? 'وضع مالك الموقع مفعل' : 'Owner Mode Active'}
                  </span>
                  <button
                    onClick={() => setIsOwnerUnlocked(false)}
                    className="text-[10px] text-slate-400 hover:text-rose-300 underline"
                  >
                    {lang === 'ar' ? 'قفل الوضع' : 'Lock Admin'}
                  </button>
                </div>
                <div className="flex gap-2 pt-1">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-1 py-2 px-3 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-1.5 transition-all shadow-md"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>{lang === 'ar' ? 'رفع صورة جديدة من جهازك' : 'Upload photo'}</span>
                  </button>
                  {customAvatar && (
                    <button
                      onClick={handleResetAvatar}
                      className="py-2 px-3 rounded-xl text-xs font-semibold bg-slate-700 hover:bg-slate-600 text-slate-200 flex items-center justify-center gap-1 transition-all"
                      title={lang === 'ar' ? 'إعادة الصورة الافتراضية' : 'Reset to default image'}
                    >
                      <RefreshCw className="w-3.5 h-3.5 text-emerald-400" />
                    </button>
                  )}
                </div>
              </div>
            ) : showPinInput ? (
              <form onSubmit={handleVerifyPin} className="mb-4 p-3.5 rounded-2xl bg-slate-800/90 border border-sky-500/40 text-start space-y-2">
                <div className="flex items-center justify-between text-xs text-sky-300 font-bold">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-sky-400" />
                    {lang === 'ar' ? 'أدخل رمز المرور الخاص بمالك الموقع' : 'Enter Owner Passcode'}
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowPinInput(false)}
                    className="text-[10px] text-slate-400 hover:text-white"
                  >
                    {lang === 'ar' ? 'إلغاء' : 'Cancel'}
                  </button>
                </div>
                <div className="flex gap-2 pt-1">
                  <input
                    type="password"
                    value={pinValue}
                    onChange={(e) => setPinValue(e.target.value)}
                    placeholder="1234"
                    className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-slate-100 focus:outline-none focus:border-emerald-400"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="px-4 py-1.5 rounded-xl text-xs font-bold bg-sky-600 hover:bg-sky-500 text-white transition-all"
                  >
                    {lang === 'ar' ? 'تأكيد' : 'Verify'}
                  </button>
                </div>
                {pinError && <p className="text-[11px] text-rose-400 font-medium">{pinError}</p>}
                <p className="text-[10px] text-slate-400">
                  {lang === 'ar' ? 'رمز المرور الافتراضي لمالك الموقع: 1234' : 'Default owner pin is: 1234'}
                </p>
              </form>
            ) : (
              <div className="mb-4 text-end">
                <button
                  onClick={() => setShowPinInput(true)}
                  className="text-[11px] text-slate-400 hover:text-emerald-400 font-medium inline-flex items-center gap-1 transition-colors"
                >
                  <Lock className="w-3 h-3" />
                  <span>{lang === 'ar' ? 'تغيير الصورة (خاص بمالك الموقع)' : 'Change photo (Owner only)'}</span>
                </button>
              </div>
            )}

            <div className="p-3 rounded-2xl bg-emerald-950/80 border border-emerald-700/50 text-xs text-emerald-200">
              {lang === 'ar'
                ? 'الصورة الشخصية الرسمية للممرضة والمصممة سماح ربيع'
                : 'Official profile portrait for Samah Rabie'}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

