import React from 'react';
import { Language, Theme } from '../types';
import { translations } from '../data/translations';
import { 
  Stethoscope, 
  Presentation, 
  Users, 
  Award, 
  HeartPulse, 
  BookOpen, 
  CheckCircle, 
  Sparkles
} from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
  theme: Theme;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang, theme }) => {
  const t = translations[lang];
  const isDark = theme === 'dark';

  const stats = [
    {
      value: 'Excellent',
      valueAr: 'ممتاز',
      labelAr: 'تقدير عام طوال سنوات الدراسة',
      labelEn: 'Academic Grade Throughout University',
      icon: Award
    },
    {
      value: '+50',
      valueAr: '+50',
      labelAr: 'عرض بوربوينت وبوستر طبي',
      labelEn: 'Medical Decks & Posters Designed',
      icon: Presentation
    },
    {
      value: 'YLY',
      valueAr: 'YLY',
      labelAr: 'متطوعة HR ومبنيّة للمهارات',
      labelEn: 'HR Volunteering & Youth Development',
      icon: Users
    },
    {
      value: '100%',
      valueAr: '100%',
      labelAr: 'شغف بالتوعية الصحية والرعاية',
      labelEn: 'Dedication to Public Health Awareness',
      icon: HeartPulse
    }
  ];

  const pillars = [
    {
      title: t.aboutPillar1Title,
      desc: t.aboutPillar1Desc,
      icon: Stethoscope,
      color: 'from-emerald-600 to-teal-600'
    },
    {
      title: t.aboutPillar2Title,
      desc: t.aboutPillar2Desc,
      icon: Presentation,
      color: 'from-teal-600 to-sky-600'
    },
    {
      title: t.aboutPillar3Title,
      desc: t.aboutPillar3Desc,
      icon: Users,
      color: 'from-sky-600 to-emerald-600'
    }
  ];

  return (
    <section id="about" className={`py-20 relative overflow-hidden ${
      isDark ? 'bg-slate-950/60' : 'bg-emerald-50/50'
    }`}>
      {/* Subtle Background Accent Lines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-900/40 text-emerald-300 border border-emerald-700/40 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>{t.aboutTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
              {t.aboutSubtitle}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-sky-400 mx-auto rounded-full" />
        </div>

        {/* Narrative & Bio Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Story Box */}
          <div className={`lg:col-span-7 p-6 sm:p-8 rounded-3xl border flex flex-col justify-between ${
            isDark
              ? 'bg-slate-900/80 border-emerald-800/40 text-slate-200 shadow-xl'
              : 'bg-white border-emerald-100 text-slate-700 shadow-lg shadow-emerald-500/5'
          }`}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-sky-500 text-white flex items-center justify-center font-bold shadow-md">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-slate-100' : 'text-slate-900 font-extrabold'}`}>
                    {lang === 'ar' ? 'الرؤية والرسالة المهنية' : 'Professional Mission & Vision'}
                  </h3>
                  <p className={`text-xs font-bold ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>
                    {lang === 'ar' ? 'دعم الرعاية الصحية بإبداع رقمي' : 'Empowering Healthcare with Digital Creativity'}
                  </p>
                </div>
              </div>

              <p className={`text-base sm:text-lg leading-relaxed mb-6 font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                {t.aboutP1}
              </p>

              <p className={`text-base sm:text-lg leading-relaxed mb-6 font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                {t.aboutP2}
              </p>
            </div>

            {/* University Honors Banner */}
            <div className={`p-4 rounded-2xl border flex items-center gap-4 ${
              isDark 
                ? 'bg-gradient-to-r from-emerald-900/50 via-teal-900/40 to-sky-900/50 border-emerald-700/40' 
                : 'bg-gradient-to-r from-emerald-100 via-teal-50 to-sky-100 border-emerald-300 text-slate-900 shadow-sm'
            }`}>
              <Award className={`w-8 h-8 shrink-0 ${isDark ? 'text-sky-400' : 'text-sky-600'}`} />
              <div>
                <div className={`text-sm font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {lang === 'ar'
                    ? 'بكالوريوس التمريض - جامعة قنا (تقدير ممتاز طوال سنوات الدراسة)'
                    : 'Bachelor of Nursing - Qena University (Excellent Honor Distinction)'}
                </div>
                <div className={`text-xs font-bold ${isDark ? 'text-emerald-300' : 'text-emerald-800'}`}>
                  {lang === 'ar'
                    ? 'تفوق أكاديمي ومهارات تطبيقية متميزة في التمريض الميداني والتثقيف الصحي'
                    : 'Academic distinction combined with clinical field practice & patient care.'}
                </div>
              </div>
            </div>
          </div>

          {/* Pillars Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {pillars.map((pillar, index) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-3xl border transition-all duration-300 hover:scale-[1.02] ${
                    isDark
                      ? 'bg-slate-900/70 border-purple-800/30 hover:border-purple-600/60'
                      : 'bg-white border-emerald-200 hover:border-emerald-400 shadow-md shadow-emerald-500/5'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${pillar.color} text-white flex items-center justify-center shrink-0 shadow-md`}>
                      <PillarIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className={`text-lg font-bold mb-1 ${isDark ? 'text-slate-100' : 'text-slate-900 font-black'}`}>
                        {pillar.title}
                      </h4>
                      <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-700 font-medium'}`}>
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const StatIcon = stat.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-3xl border text-center flex flex-col items-center justify-center transition-all ${
                  isDark
                    ? 'bg-slate-900/90 border-purple-800/40 hover:border-cyan-500/50'
                    : 'bg-white border-purple-100 hover:border-purple-300 shadow-md'
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-purple-900/40 text-purple-400 flex items-center justify-center mb-3">
                  <StatIcon className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                  {lang === 'ar' ? stat.valueAr : stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium opacity-80">
                  {lang === 'ar' ? stat.labelAr : stat.labelEn}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
