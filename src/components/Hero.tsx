import React, { useState, useRef, useEffect } from 'react';
import { Language, Theme } from '../types';
import { translations } from '../data/translations';
import { generateVCardDownload } from '../utils/vcard';
import { GOOGLE_DRIVE_FOLDER_URL } from '../data/portfolioData';
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
  HeartPulse,
  Activity,
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
  const [uploadSuccessMsg, setUploadSuccessMsg] = useState('');

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
      if (!file.type.startsWith('image/')) {
        alert(lang === 'ar' ? 'الرجاء اختيار ملف صورة صحيح (PNG, JPG, JPEG, WEBP)' : 'Please select a valid image file');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomAvatar(result);
          try {
            localStorage.setItem('samah_custom_avatar_url', result);
          } catch (err) {
            console.warn('LocalStorage size limit exceeded:', err);
          }
          setUploadSuccessMsg(lang === 'ar' ? 'تم تحديث ورفع صورة سماح الحقيقية بنجاح! ✨' : 'Samah real photo uploaded successfully! ✨');
          setTimeout(() => setUploadSuccessMsg(''), 4000);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetAvatar = () => {
    setCustomAvatar(null);
    localStorage.removeItem('samah_custom_avatar_url');
    setUploadSuccessMsg(lang === 'ar' ? 'تمت إعادة الصورة الافتراضية' : 'Reset to default picture');
    setTimeout(() => setUploadSuccessMsg(''), 3000);
  };

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

                {/* Avatar Graphic Illustration Container (Nursing Emblem or Custom Photo) */}
                <div 
                  className="relative my-2 group cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
                  onClick={() => setShowPhotoModal(true)}
                  title={lang === 'ar' ? 'انقر لرفع صورتك الشخصية الحقيقية' : 'Click to view or upload your real photo'}
                >
                  <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1.5 bg-gradient-to-tr from-emerald-400 via-teal-300 to-sky-400 shadow-xl relative animate-pulse">
                    <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-emerald-300/40">
                      {customAvatar ? (
                        <img
                          src={customAvatar}
                          alt="Samah Rabie - Real Photo"
                          className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-800 via-teal-900 to-slate-950 flex flex-col items-center justify-center p-3 text-white border border-emerald-400/30 shadow-inner group-hover:scale-105 transition-transform duration-500 relative overflow-hidden">
                          {/* Animated Ambient Pulse Background */}
                          <div className="absolute inset-0 bg-emerald-500/10 animate-pulse pointer-events-none" />
                          
                          <div className="relative flex items-center justify-center mb-1">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-950/80 border-2 border-emerald-400/70 flex items-center justify-center shadow-lg shadow-emerald-950">
                              <Stethoscope className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-300 drop-shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-sky-500 border-2 border-slate-950 flex items-center justify-center shadow-md">
                              <HeartPulse className="w-4 h-4 text-white animate-pulse" />
                            </div>
                          </div>

                          <span className="text-[11px] sm:text-xs font-black tracking-wide text-emerald-200 drop-shadow text-center">
                            {lang === 'ar' ? 'تمريض جامعة قنا 🩺' : 'Qena Nursing 🩺'}
                          </span>
                        </div>
                      )}
                      
                      {/* Hover Overlay Icon */}
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                        <ZoomIn className="w-8 h-8 text-emerald-300 animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Direct Quick Upload Badge Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      fileInputRef.current?.click();
                    }}
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] shadow-lg border border-emerald-300 flex items-center gap-1.5 z-20 hover:scale-105 transition-all"
                    title={lang === 'ar' ? 'رفع صورتك الحقيقية من الجهاز' : 'Upload your real photo'}
                  >
                    <Camera className="w-3.5 h-3.5 text-emerald-200 animate-pulse" />
                    <span>{lang === 'ar' ? 'رفع صورة سماح' : 'Upload photo'}</span>
                  </button>
                </div>

                {/* Notification toast if photo updated */}
                {uploadSuccessMsg && (
                  <div className="w-full my-2 p-2 rounded-xl bg-emerald-900/90 border border-emerald-400 text-emerald-200 text-xs font-bold text-center animate-in fade-in z-20">
                    {uploadSuccessMsg}
                  </div>
                )}

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

      {/* Hidden File Input for Device Photo Upload */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      {/* Enlarged Photo Modal with Direct Upload Controls */}
      {showPhotoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative max-w-md w-full p-6 bg-slate-900 border border-emerald-500/40 rounded-3xl text-center shadow-2xl">
            <button
              onClick={() => setShowPhotoModal(false)}
              className="absolute top-4 end-4 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-emerald-950 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-56 h-56 mx-auto rounded-full p-2 bg-gradient-to-tr from-emerald-400 via-teal-300 to-sky-400 shadow-2xl mb-4 relative overflow-hidden">
              {customAvatar ? (
                <img
                  src={customAvatar}
                  alt="Samah Rabie - Nursing Professional"
                  className="w-full h-full object-cover rounded-full border-2 border-emerald-200/50"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-800 via-teal-900 to-slate-950 flex flex-col items-center justify-center p-4 text-white border-2 border-emerald-300/40 shadow-inner">
                  <div className="relative flex items-center justify-center mb-2">
                    <div className="w-20 h-20 rounded-full bg-slate-950/80 border-2 border-emerald-400/70 flex items-center justify-center shadow-xl shadow-emerald-950">
                      <Stethoscope className="w-12 h-12 text-emerald-300 drop-shadow-[0_0_15px_rgba(52,211,153,0.9)]" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-sky-500 border-2 border-slate-950 flex items-center justify-center shadow-md">
                      <HeartPulse className="w-5 h-5 text-white animate-pulse" />
                    </div>
                  </div>
                  <span className="text-xs font-black tracking-wide text-emerald-200 drop-shadow text-center">
                    {lang === 'ar' ? 'شعار التمريض والرعاية الصحية 🩺' : 'Nursing & Healthcare Symbol 🩺'}
                  </span>
                </div>
              )}
            </div>

            <h3 className="text-lg font-black text-slate-100 mb-1">
              {lang === 'ar' ? 'سماح ربيع محمود علي' : 'Samah Rabie Mahmoud Ali'}
            </h3>
            <p className="text-xs text-emerald-400 font-semibold mb-5">
              {lang === 'ar' ? 'امتياز تمريض بجامعة قنا & مصممة محتوى وجرافيك' : 'Qena Nursing Intern & Graphic Designer'}
            </p>

            {/* Direct Upload Section */}
            <div className="mb-4 p-4 rounded-2xl bg-slate-800/90 border border-emerald-500/40 text-center space-y-3">
              <div className="text-xs text-emerald-300 font-bold flex items-center justify-center gap-1.5">
                <Camera className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'ar' ? 'اختاري صورتك الحقيقية وارفعيها هنا:' : 'Upload your real portrait image:'}</span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-1 py-2.5 px-4 rounded-xl text-xs font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-950"
                >
                  <Upload className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'رفع صورة سماح الحقيقية من جهازك' : 'Upload real photo from device'}</span>
                </button>

                {customAvatar && (
                  <button
                    onClick={handleResetAvatar}
                    className="py-2.5 px-3 rounded-xl text-xs font-semibold bg-slate-700 hover:bg-slate-600 text-slate-200 flex items-center justify-center gap-1 transition-all"
                    title={lang === 'ar' ? 'إعادة الصورة الافتراضية' : 'Reset default image'}
                  >
                    <RefreshCw className="w-4 h-4 text-emerald-400" />
                  </button>
                )}
              </div>

              {uploadSuccessMsg && (
                <p className="text-xs text-emerald-300 font-bold animate-pulse">{uploadSuccessMsg}</p>
              )}
            </div>

            <div className="p-3 rounded-2xl bg-emerald-950/80 border border-emerald-700/50 text-xs text-emerald-200">
              {lang === 'ar'
                ? 'تتيح لكِ هذه الخاصية رفع صورتك الشخصية الحقيقية وسوف تحفظ تلقائياً في موقعك.'
                : 'This feature lets you upload your real photo and saves it automatically to your site.'}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

