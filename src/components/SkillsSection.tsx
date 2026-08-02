import React, { useState } from 'react';
import { Language, Theme } from '../types';
import { initialSkills } from '../data/portfolioData';
import { translations } from '../data/translations';
import { 
  Sparkles, 
  Presentation, 
  HeartPulse, 
  Users, 
  CheckCircle2, 
  Star 
} from 'lucide-react';

interface SkillsSectionProps {
  lang: Language;
  theme: Theme;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ lang, theme }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const t = translations[lang];
  const isDark = theme === 'dark';

  const categoryTabIcons = [Presentation, HeartPulse, Users];

  return (
    <section id="skills" className={`py-20 relative overflow-hidden ${
      isDark ? 'bg-slate-950/80' : 'bg-emerald-50/40'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-900/40 text-emerald-300 border border-emerald-700/40 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>{t.skillsTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
              {t.skillsSubtitle}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-sky-400 mx-auto rounded-full" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
          {initialSkills.map((cat, idx) => {
            const IconComponent = categoryTabIcons[idx] || Sparkles;
            const title = lang === 'ar' ? cat.titleAr : cat.titleEn;
            const isActive = activeTab === idx;

            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-600/30 scale-105'
                    : isDark
                      ? 'bg-slate-900 border border-emerald-800/40 text-slate-300 hover:border-emerald-600'
                      : 'bg-white border border-emerald-200 text-slate-700 hover:bg-emerald-50 shadow-sm'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Skill Set Progress Bars */}
        <div className="max-w-4xl mx-auto">
          <div className={`p-6 sm:p-10 rounded-3xl border shadow-xl ${
            isDark ? 'bg-slate-900/90 border-emerald-800/40' : 'bg-white border-emerald-100 shadow-emerald-500/5'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {initialSkills[activeTab].skills.map((skill, sIdx) => {
                const name = lang === 'ar' ? skill.nameAr : skill.nameEn;
                return (
                  <div key={sIdx} className="flex flex-col gap-2">
                    <div className="flex items-center justify-between text-sm font-bold">
                      <span className={`flex items-center gap-2 ${isDark ? 'text-slate-200' : 'text-slate-900 font-extrabold'}`}>
                        <CheckCircle2 className={`w-4 h-4 ${isDark ? 'text-sky-400' : 'text-emerald-600'}`} />
                        <span>{name}</span>
                      </span>
                      <span className={`text-xs font-mono font-bold ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>{skill.level}%</span>
                    </div>

                    {/* Level Bar Container */}
                    <div className={`w-full h-3 rounded-full p-0.5 border overflow-hidden ${
                      isDark ? 'bg-slate-950 border-emerald-900/30' : 'bg-emerald-100/80 border-emerald-200'
                    }`}>
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Skill Tool Badges */}
            <div className={`mt-10 pt-6 border-t flex flex-wrap items-center gap-2 ${
              isDark ? 'border-emerald-900/30' : 'border-emerald-200'
            }`}>
              <span className={`text-xs font-bold me-2 ${isDark ? 'text-emerald-400' : 'text-emerald-800'}`}>
                {lang === 'ar' ? 'أبرز المهارات الأدوات:' : 'Core Competencies:'}
              </span>
              {[
                'Microsoft PowerPoint',
                'Microsoft Word',
                'Microsoft Excel',
                'Canva Pro',
                'Graphic Design',
                'Video Editing',
                'Public Health',
                'Patient Education',
                'HR Volunteering',
                'Medical Content Writing'
              ].map((badge, bIdx) => (
                <span
                  key={bIdx}
                  className={`px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1 ${
                    isDark 
                      ? 'bg-emerald-950/60 border border-emerald-800/40 text-emerald-300' 
                      : 'bg-emerald-50 border border-emerald-300 text-emerald-900 shadow-sm'
                  }`}
                >
                  <Star className={`w-3 h-3 ${isDark ? 'text-sky-400' : 'text-sky-600'}`} />
                  <span>{badge}</span>
                </span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
