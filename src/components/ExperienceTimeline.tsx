import React from 'react';
import { Language, Theme } from '../types';
import { initialExperiences } from '../data/portfolioData';
import { translations } from '../data/translations';
import { 
  Sparkles, 
  GraduationCap, 
  Stethoscope, 
  Users, 
  Award, 
  CheckCircle2, 
  Calendar 
} from 'lucide-react';

interface ExperienceTimelineProps {
  lang: Language;
  theme: Theme;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ lang, theme }) => {
  const t = translations[lang];
  const isDark = theme === 'dark';

  const getIcon = (type: string) => {
    switch (type) {
      case 'education': return GraduationCap;
      case 'volunteer': return Users;
      case 'work': return Stethoscope;
      default: return Award;
    }
  };

  return (
    <section id="experience" className={`py-20 relative overflow-hidden ${
      isDark ? 'bg-slate-950/70' : 'bg-emerald-50/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold border mb-3 ${
            isDark ? 'bg-emerald-900/40 text-emerald-300 border-emerald-700/40' : 'bg-emerald-100 text-emerald-900 border-emerald-300 shadow-sm'
          }`}>
            <Sparkles className={`w-3.5 h-3.5 ${isDark ? 'text-sky-400' : 'text-emerald-600'}`} />
            <span>{t.expTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 bg-clip-text text-transparent">
              {t.expSubtitle}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-sky-400 mx-auto rounded-full" />
        </div>

        {/* Timeline Items Stack */}
        <div className={`max-w-4xl mx-auto relative border-s-2 ms-4 sm:ms-32 space-y-12 ${
          isDark ? 'border-emerald-800/40' : 'border-emerald-300'
        }`}>
          {initialExperiences.map((exp) => {
            const IconComp = getIcon(exp.type);
            const role = lang === 'ar' ? exp.roleAr : exp.roleEn;
            const org = lang === 'ar' ? exp.organizationAr : exp.organizationEn;
            const period = lang === 'ar' ? exp.periodAr : exp.periodEn;
            const desc = lang === 'ar' ? exp.descAr : exp.descEn;
            const highlights = lang === 'ar' ? exp.highlightsAr : exp.highlightsEn;

            return (
              <div key={exp.id} className="relative ps-8 sm:ps-12 group">
                
                {/* Timeline Node Bullet */}
                <div className="absolute -start-[21px] top-1 w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-sky-500 text-white flex items-center justify-center font-bold shadow-lg shadow-emerald-600/30 group-hover:scale-110 transition-transform duration-300">
                  <IconComp className="w-5 h-5" />
                </div>

                {/* Card Block */}
                <div className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:scale-[1.01] ${
                  isDark
                    ? 'bg-slate-900/90 border-emerald-800/40 hover:border-emerald-500/60 shadow-xl'
                    : 'bg-white border-emerald-200 hover:border-emerald-400 shadow-lg shadow-emerald-500/10'
                }`}>
                  
                  {/* Meta Line */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-xl text-xs font-bold border flex items-center gap-1.5 ${
                      isDark ? 'bg-emerald-950/60 text-sky-300 border-emerald-700/40' : 'bg-emerald-50 text-emerald-900 border-emerald-300 shadow-sm'
                    }`}>
                      <Calendar className={`w-3.5 h-3.5 ${isDark ? 'text-sky-400' : 'text-emerald-700'}`} />
                      <span>{period}</span>
                    </span>

                    <span className={`text-xs font-extrabold ${isDark ? 'text-emerald-400' : 'text-emerald-800'}`}>
                      {org}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <h3 className={`text-xl font-black mb-2 leading-snug ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                    {role}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                    isDark ? 'text-slate-300' : 'text-slate-700 font-medium'
                  }`}>
                    {desc}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className={`space-y-2 pt-4 border-t ${isDark ? 'border-emerald-900/30' : 'border-emerald-200'}`}>
                    {highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs font-medium">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-sky-400' : 'text-emerald-600'}`} />
                        <span className={isDark ? 'text-slate-200' : 'text-slate-800 font-medium'}>{item}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
